"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { CheckboxField } from "@/components/forms/CheckboxField";
import { FormStatus } from "@/components/forms/FormStatus";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextField } from "@/components/forms/TextField";
import { site } from "@/lib/site";
import { LIMITS } from "@/components/forms/fields";
import { newsletterDefaults, newsletterSchema, type NewsletterFormData, type NewsletterFormInput } from "@/components/forms/newsletter/schema";
import { useFormSubmission } from "@/components/forms/use-form-submission";

/**
 * Mailing-list signup (home page). Layout follows the live form: three full
 * rows, then email beside the rounded Subscribe button, then the opt-in box.
 */
export function NewsletterForm() {
  const id = useId();
  const methods = useForm<NewsletterFormInput, unknown, NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: newsletterDefaults,
    mode: "onTouched",
  });
  const { register, control, formState } = methods;
  const { status, result, onSubmit, isSubmitting } = useFormSubmission("newsletter", methods, {
    toPayload: (data) => ({ _subject: "Mailing list sign-up from the website", ...data }),
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-3 gap-y-4 md:grid-cols-[2fr_1fr]">
      <TextField
        id={`${id}-first-name`}
        label="First name"
        required
        autoComplete="given-name"
        maxLength={LIMITS.name}
        registration={register("firstName")}
        error={formState.errors.firstName}
        className="md:col-span-2"
      />
      <TextField
        id={`${id}-last-name`}
        label="Last name"
        required
        autoComplete="family-name"
        maxLength={LIMITS.name}
        registration={register("lastName")}
        error={formState.errors.lastName}
        className="md:col-span-2"
      />
      <TextField
        id={`${id}-phone`}
        label="Phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        maxLength={LIMITS.phone}
        registration={register("phone")}
        error={formState.errors.phone}
        className="md:col-span-2"
      />
      <TextField
        id={`${id}-email`}
        label="Email"
        type="email"
        required
        autoComplete="email"
        maxLength={LIMITS.email}
        registration={register("email")}
        error={formState.errors.email}
      />
      <div className="md:self-end md:pb-[1px]">
        <SubmitButton pending={isSubmitting} variant="outline-pill" className="h-[2.6875rem] w-full text-base">
          Subscribe
        </SubmitButton>
      </div>
      <div className="md:col-span-2">
        <CheckboxField id={`${id}-consent`} name="consent" control={control} label="I want to subscribe to your mailing list." required />
      </div>
      <FormStatus
        className="md:col-span-2"
        status={status}
        detail={result?.status === "error" ? result.message : undefined}
        messages={{
          success: "Thank you. Your details have been sent to The Rhynd.",
          notConfigured: (
            <>
              Online sign-up isn’t connected yet, so your details have not been sent. To join the mailing list, email{" "}
              <a href={site.email.href} className="underline">
                {site.email.address}
              </a>
              .
            </>
          ),
          error:
            result?.status === "error" && result.reason === "network"
              ? "Your details couldn’t be sent. Check your connection and try again."
              : "Your details couldn’t be sent. Please check the form and try again.",
        }}
      />
    </form>
  );
}
