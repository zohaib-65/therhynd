"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextField } from "@/components/forms/TextField";
import { contactDefaults, contactSchema, type ContactFormData, type ContactFormInput } from "@/components/forms/contact/schema";
import { LIMITS } from "@/components/forms/fields";
import { enquiryMessages } from "@/components/forms/status-messages";
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
  const { onSubmit, isSubmitting } = useFormSubmission("contact", methods, {
    toPayload: (data) => ({ _subject: "Message from the website contact form", ...data }),
    messages: enquiryMessages({ noun: "message", success: "Thank you. Your message has been sent." }),
  });

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
      {/* One line, as on the live footer: long text scrolls sideways, the box never grows. */}
      <TextField
        id={`${id}-message`}
        label="Ask away!"
        appearance="outlined"
        autoComplete="off"
        maxLength={LIMITS.message}
        registration={register("message")}
        error={formState.errors.message}
      />
      <div className="flex justify-center sm:col-span-2">
        <SubmitButton pending={isSubmitting} variant="slate" className="h-10 min-w-28 text-sm">
          Send
        </SubmitButton>
      </div>
    </form>
  );
}
