"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useId } from "react";
import { useForm, useWatch } from "react-hook-form";

import { FormStatus } from "@/components/forms/FormStatus";
import { SelectField } from "@/components/forms/SelectField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { site } from "@/lib/site";
import { eventTicketsSchema, MAX_TICKETS, type EventTicketsFormData, type EventTicketsFormInput } from "@/components/forms/event-tickets/schema";
import { LIMITS } from "@/components/forms/fields";
import { enquiryMessages } from "@/components/forms/status-messages";
import { useFormSubmission } from "@/components/forms/use-form-submission";
import { useVenueToday } from "@/components/forms/use-venue-today";
import type { Ticket } from "@/lib/events";

type EventTicketsProps = {
  title: string;
  /** Date and time as shown, sent with the request. */
  date: string;
  /** Start date (YYYY-MM-DD); from that day on, tickets are not on sale. */
  day: string;
  tickets: Ticket[];
};

const pounds = (price: string) => Number(price.replace(/[^\d.]/g, ""));

/**
 * The event's Tickets section: ticket types and prices with a ticket request
 * form. It does not sell or reserve tickets; the team confirms and takes
 * payment. Past events, and events without tickets, show "Tickets are not
 * on sale" as on the live site.
 */
export function EventTickets({ title, date, day, tickets }: EventTicketsProps) {
  const today = useVenueToday();
  const onSale = tickets.length > 0 && (!today || today < day);

  if (!onSale) {
    return (
      <div className="text-center">
        <p className="text-lead font-light">Tickets are not on sale</p>
        <Link href="/events-at-the-rhynd" className="mt-4 inline-block text-base underline underline-offset-4 hover:text-forest">
          See other events
        </Link>
      </div>
    );
  }
  return <TicketRequest title={title} date={date} tickets={tickets} />;
}

function TicketRequest({ title, date, tickets }: Omit<EventTicketsProps, "day">) {
  const id = useId();
  const methods = useForm<EventTicketsFormInput, unknown, EventTicketsFormData>({
    resolver: zodResolver(eventTicketsSchema),
    defaultValues: { ticket: tickets.length === 1 ? tickets[0].name : "", quantity: "1", name: "", email: "", phone: "", message: "" },
    mode: "onTouched",
  });
  const { register, control, formState } = methods;
  const [ticketName, quantity] = useWatch({ control, name: ["ticket", "quantity"] });
  const chosen = tickets.find((ticket) => ticket.name === ticketName);
  const count = /^\d+$/.test(quantity ?? "") ? Number(quantity) : 0;
  const total = chosen && count >= 1 && count <= MAX_TICKETS ? `£${(pounds(chosen.price) * count).toFixed(2)}` : "–";

  const { status, result, onSubmit, isSubmitting } = useFormSubmission("eventTickets", methods, {
    toPayload: (data) => ({ _subject: `Ticket request: ${title}, ${date}`, event: title, eventDate: date, price: chosen?.price, ...data }),
  });

  return (
    <div>
      <table className="w-full text-left text-base font-light">
        <thead className="sr-only sm:not-sr-only">
          <tr className="border-b border-ink/20 text-sm">
            <th scope="col" className="py-2 font-normal">Ticket type</th>
            <th scope="col" className="py-2 font-normal">Sale ends</th>
            <th scope="col" className="py-2 text-right font-normal">Price</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.name} className="border-b border-ink/20">
              <th scope="row" className="py-3 pr-4 text-lead font-normal">{ticket.name}</th>
              <td className="py-3 pr-4">{ticket.saleEnds ?? "–"}</td>
              <td className="py-3 text-right font-normal">{ticket.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={onSubmit} noValidate aria-label={`Ticket request for ${title}`} className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {tickets.length > 1 ? (
          <SelectField id={`${id}-ticket`} label="Ticket type" required appearance="boxed" options={tickets.map((t) => t.name)} registration={register("ticket")} error={formState.errors.ticket} />
        ) : (
          <input type="hidden" {...register("ticket")} />
        )}
        <TextField id={`${id}-quantity`} label="Number of tickets" type="number" required appearance="boxed" autoComplete="off" inputMode="numeric" min={1} max={MAX_TICKETS} step={1} registration={register("quantity")} error={formState.errors.quantity} />
        <p className="self-end pb-2 text-base font-light sm:text-right" aria-live="polite">
          Total <span className="ml-2 text-lead font-normal">{total}</span>
        </p>
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
        <p className="text-sm font-light sm:col-span-2">
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
