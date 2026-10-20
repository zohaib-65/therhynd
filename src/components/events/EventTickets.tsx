"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

import { eventTicketsSchema, MAX_TICKETS, type EventTicketsFormData, type EventTicketsFormInput } from "@/components/forms/event-tickets/schema";
import { LIMITS } from "@/components/forms/fields";
import { FormStatus } from "@/components/forms/FormStatus";
import { enquiryMessages } from "@/components/forms/status-messages";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { useFormSubmission } from "@/components/forms/use-form-submission";
import { useVenueToday } from "@/components/forms/use-venue-today";
import type { Ticket } from "@/lib/events";
import { site } from "@/lib/site";

/**
 * Renders `children` while tickets are on sale (tickets listed and the event
 * day not yet reached at the venue), `fallback` otherwise. The date is
 * checked in the browser, so a page built earlier still turns off sales.
 */
export function OnSale({ day, tickets, children, fallback = null }: { day: string; tickets: Ticket[]; children: ReactNode; fallback?: ReactNode }) {
  const today = useVenueToday();
  const onSale = tickets.length > 0 && (!today || today < day);
  return onSale ? children : fallback;
}

type EventTicketsProps = {
  title: string;
  /** Date and time as shown, sent with the request. */
  date: string;
  tickets: Ticket[];
};

const pounds = (price: string) => Number(price.replace(/[^\d.]/g, ""));
const money = (value: number) => `£${value.toFixed(2)}`;
const QUANTITIES = Array.from({ length: MAX_TICKETS + 1 }, (_, n) => n);

/**
 * The Tickets section as on the live page: ticket type, price and quantity,
 * the total, and "Checkout". Checkout opens a ticket request form instead of
 * a payment page: nothing is sold or reserved, the team confirms and takes
 * payment.
 */
export function EventTickets({ title, date, tickets }: EventTicketsProps) {
  const id = useId();
  const [quantities, setQuantities] = useState(() => tickets.map(() => 0));
  const [pickError, setPickError] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const count = quantities.reduce((sum, n) => sum + n, 0);
  const total = tickets.reduce((sum, ticket, i) => sum + pounds(ticket.price) * quantities[i], 0);
  const selection = tickets
    .map((ticket, i) => (quantities[i] ? `${quantities[i]} × ${ticket.name} (${ticket.price} each)` : ""))
    .filter(Boolean)
    .join(", ");

  const methods = useForm<EventTicketsFormInput, unknown, EventTicketsFormData>({
    resolver: zodResolver(eventTicketsSchema),
    defaultValues: { tickets: "", quantity: "0", name: "", email: "", phone: "", message: "" },
    mode: "onTouched",
  });
  const { register, setValue, formState } = methods;
  useEffect(() => {
    setValue("tickets", selection);
    setValue("quantity", String(count));
  }, [selection, count, setValue]);

  const { status, result, onSubmit, isSubmitting } = useFormSubmission("eventTickets", methods, {
    toPayload: (data) => ({ _subject: `Ticket request: ${title}, ${date}`, event: title, eventDate: date, total: money(total), ...data }),
  });

  const choose = (index: number, value: number) => {
    setQuantities((current) => current.map((n, i) => (i === index ? value : n)));
    if (value > 0) setPickError(false);
  };

  const onCheckout = () => {
    if (count === 0) {
      setPickError(true);
      return;
    }
    setPickError(false);
    setCheckout(true);
    // Focus the ticket summary (not the first field, so leaving it does not
    // flag an error that shifts the form under the pointer).
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      formRef.current?.querySelector<HTMLElement>("[data-summary]")?.focus({ preventScroll: true });
    });
  };

  return (
    <div>
      <ul className="-mx-6 border-y border-ink/30 px-6 md:mx-0 md:px-0">
        {tickets.map((ticket, index) => (
          <li
            key={ticket.name}
            role="group"
            aria-labelledby={`${id}-ticket-${index}`}
            className="grid gap-y-5 py-[1.375rem] text-center md:grid-cols-[45.3%_1px_1fr_6.25rem] md:gap-y-0 md:py-[1.5625rem] md:text-left [&+li]:border-t [&+li]:border-ink/30"
          >
            <div className="md:pr-8">
              <p className="text-[1.0625rem] leading-6 md:text-sm md:leading-5">Ticket type</p>
              <h3 id={`${id}-ticket-${index}`} className="font-event-heading text-2xl leading-[2.125rem] md:mt-[3px] md:text-xl md:leading-5">
                {ticket.name}
              </h3>
              {ticket.saleEnds && (
                <>
                  <p className="mt-3 text-[1.0625rem] leading-6 md:text-sm md:leading-5">Sale ends</p>
                  <p className="text-[1.0625rem] leading-6 md:text-sm md:leading-5">{ticket.saleEnds}</p>
                </>
              )}
            </div>
            <div aria-hidden="true" className="hidden bg-ink/30 md:block" />
            <div className="md:pl-8">
              <p className="text-[1.0625rem] leading-6 md:text-sm md:leading-5">Price</p>
              <p className="font-event-heading text-2xl leading-[2.125rem] md:mt-[3px] md:text-xl md:leading-5">{ticket.price}</p>
            </div>
            <div>
              <label htmlFor={`${id}-quantity-${index}`} className="block text-[1.0625rem] leading-6 md:text-sm md:leading-5">
                Quantity
              </label>
              <div className="relative mt-2 text-ink/80">
                <select
                  id={`${id}-quantity-${index}`}
                  value={quantities[index]}
                  onChange={(event) => choose(index, Number(event.target.value))}
                  className="h-[3.2rem] w-full cursor-pointer appearance-none rounded-none border border-ink/60 bg-transparent pr-12 pl-[1.0625rem] text-[1.1875rem] leading-6 md:h-[2.625rem] md:text-base"
                >
                  {QUANTITIES.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-[1.0625rem] size-6 -translate-y-1/2"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.2546728,8.18171329 L18.9617796,8.88882007 L12.5952867,15.2537133 L12.5978964,15.2558012 L11.8907896,15.962908 L11.8882867,15.9607133 L11.8874628,15.9617796 L11.180356,15.2546728 L11.1812867,15.2527133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 L18.2546728,8.18171329 Z"
                  />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {pickError && (
        <p role="alert" className="mt-6 flex items-center gap-2 bg-[#fceaea] px-[0.8125rem] py-[0.9375rem] font-[Helvetica,Arial,sans-serif] text-sm text-black">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 text-[#df3131]" fill="none" stroke="currentColor">
            <circle cx="8" cy="8" r="7.5" />
            <path d="M8 4v5M8 11v1" strokeLinecap="round" />
          </svg>
          Pick tickets to proceed to the checkout.
        </p>
      )}

      <div className="mt-6 md:mt-5 md:ml-auto md:w-[21.0625rem]">
        <p className="flex justify-between text-[1.6875rem] leading-6 md:text-[1.375rem] md:leading-5" aria-live="polite">
          <span>Total</span>
          <span>{money(total)}</span>
        </p>
        <button
          type="button"
          onClick={onCheckout}
          aria-expanded={checkout}
          aria-controls={`${id}-request`}
          className="mt-6 h-[3.2rem] w-full rounded-full border border-ink font-sans text-[1.1875rem] font-normal hover:bg-ink/5 md:mt-5 md:h-12 md:text-base"
        >
          Checkout
        </button>
      </div>

      <form
        ref={formRef}
        id={`${id}-request`}
        hidden={!checkout}
        onSubmit={onSubmit}
        noValidate
        aria-label={`Ticket request for ${title}`}
        className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2"
      >
        <p data-summary tabIndex={-1} className="text-base outline-none sm:col-span-2" aria-live="polite">
          <span className="font-event-heading text-xl">Your tickets:</span> {selection || "none picked"} · Total {money(total)}
        </p>
        <input type="hidden" {...register("tickets")} />
        <input type="hidden" {...register("quantity")} />
        <TextField id={`${id}-name`} label="Name" required appearance="boxed" autoComplete="name" maxLength={LIMITS.name} registration={register("name")} error={formState.errors.name} />
        <TextField id={`${id}-email`} label="Email" type="email" required appearance="boxed" autoComplete="email" maxLength={LIMITS.email} registration={register("email")} error={formState.errors.email} />
        <TextField id={`${id}-phone`} label="Phone" type="tel" appearance="boxed" autoComplete="tel" inputMode="tel" maxLength={LIMITS.phone} registration={register("phone")} error={formState.errors.phone} />
        <TextareaField
          id={`${id}-message`}
          label="Dietary requirements or questions"
          appearance="boxed"
          rows={3}
          maxLength={LIMITS.message}
          registration={register("message")}
          error={formState.errors.message}
          className="sm:col-span-2"
        />
        {(formState.errors.tickets || formState.errors.quantity) && (
          <p role="alert" className="text-sm text-error sm:col-span-2">
            {formState.errors.tickets?.message ?? formState.errors.quantity?.message}
          </p>
        )}
        <p className="text-sm sm:col-span-2">
          This is a ticket request: no payment is taken here. The team will confirm availability and arrange payment with you.
        </p>
        <div className="flex justify-center sm:col-span-2">
          <SubmitButton pending={isSubmitting} variant="outline-pill" size="form" className="min-w-48">
            Request tickets
          </SubmitButton>
        </div>
        <FormStatus
          className="sm:col-span-2"
          status={status}
          detail={result?.status === "error" ? result.message : undefined}
          messages={enquiryMessages({
            noun: "ticket request",
            email: site.emails.cafe,
            success: `Thank you. Your ticket request for ${title} (${date}) has been received and is awaiting confirmation. The team will contact you to confirm and arrange payment; no tickets are reserved until they do.`,
            result,
          })}
        />
      </form>
    </div>
  );
}
