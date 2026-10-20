"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { FormStatus } from "@/components/forms/FormStatus";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { site } from "@/lib/site";
import { contactDefaults, contactSchema, type ContactFormData, type ContactFormInput } from "@/components/forms/contact/schema";
import { LIMITS } from "@/components/forms/fields";
import { useFormSubmission } from "@/components/forms/use-form-submission";

/**
 * Footer contact form ("Ask away!"). Two columns on desktop as on the live
 * footer, one column on phones. Labels and required status are the live ones.
 */
export function ContactForm() {
  const id = useId();
  const methods = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaults,
    mode: "onTouched",
  });
  const { register, formState } = methods;
  const { status, result, onSubmit, isSubmitting } = useFormSubmission("contact", methods, {
    toPayload: (data) => ({ _subject: "Message from the website contact form", ...data }),
  });

  const alternative = (
    <>
      email{" "}
      <a href={site.email.href} className="underline">
        {site.email.address}
      </a>{" "}
      or call{" "}
      <a href={site.phone.href} className="underline">
        {site.phone.display}
      </a>{" "}
      {site.phone.note}
    </>
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact us" className="grid gap-x-3 gap-y-3 sm:grid-cols-2 desktop:grid-cols-2">
      <TextField
        id={`${id}-name`}
        label="Name"
        appearance="outlined"
        autoComplete="name"
        maxLength={LIMITS.name}
        registration={register("name")}
        error={formState.errors.name}
      />
      <TextField
        id={`${id}-email`}
        label="Email"
        type="email"
        required
        appearance="outlined"
        autoComplete="email"
        maxLength={LIMITS.email}
        registration={register("email")}
        error={formState.errors.email}
      />
      <TextField
        id={`${id}-phone`}
        label="Phone Number"
        type="tel"
        appearance="outlined"
        autoComplete="tel"
        inputMode="tel"
        maxLength={LIMITS.phone}
        registration={register("phone")}
        error={formState.errors.phone}
      />
      <TextareaField
        id={`${id}-message`}
        label="Ask away!"
        appearance="outlined"
        rows={1}
        maxLength={LIMITS.message}
        registration={register("message")}
        error={formState.errors.message}
      />
      <div className="flex justify-center sm:col-span-2">
        <SubmitButton pending={isSubmitting} variant="slate" className="h-10 min-w-28 text-sm">
          Send
        </SubmitButton>
      </div>
      <FormStatus
        className="sm:col-span-2"
        status={status}
        detail={result?.status === "error" ? result.message : undefined}
        messages={{
          success: "Thank you. Your message has been sent.",
          notConfigured: <>Online sending isn’t connected yet, so your message has not been sent. Please {alternative}.</>,
          error:
            result?.status === "error" && result.reason === "network" ? (
              <>Your message couldn’t be sent. Check your connection and try again, or {alternative}.</>
            ) : (
              <>Your message couldn’t be sent. Please check the form and try again, or {alternative}.</>
            ),
        }}
      />
    </form>
  );
}
