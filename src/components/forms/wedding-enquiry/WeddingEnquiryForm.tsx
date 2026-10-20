"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { CheckboxField } from "@/components/forms/CheckboxField";
import { FormStatus } from "@/components/forms/FormStatus";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { LIMITS } from "@/components/forms/fields";
import { enquiryMessages } from "@/components/forms/status-messages";
import { useFormSubmission } from "@/components/forms/use-form-submission";
import {
  weddingEnquiryDefaults,
  weddingEnquirySchema,
  type WeddingEnquiryFormData,
  type WeddingEnquiryFormInput,
} from "@/components/forms/wedding-enquiry/schema";

/** Wild weddings (The Craw's Nest) "Get in touch with our team" form. */
export function WeddingEnquiryForm() {
  const id = useId();
  const methods = useForm<WeddingEnquiryFormInput, unknown, WeddingEnquiryFormData>({
    resolver: zodResolver(weddingEnquirySchema),
    defaultValues: weddingEnquiryDefaults,
    mode: "onTouched",
  });
  const { register, control, formState } = methods;
  const { status, result, onSubmit, isSubmitting } = useFormSubmission("weddingEnquiry", methods, {
    toPayload: (data) => ({ _subject: "Wild wedding enquiry (The Craw's Nest)", ...data }),
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Wild wedding enquiry" className="grid gap-x-6 gap-y-5 md:grid-cols-2">
      <TextField id={`${id}-name`} label="Name" required appearance="boxed" autoComplete="given-name" placeholder="e.g John" maxLength={LIMITS.name} registration={register("firstName")} error={formState.errors.firstName} />
      <TextField id={`${id}-surname`} label="Surname" required appearance="boxed" autoComplete="family-name" placeholder="e.g Smith" maxLength={LIMITS.name} registration={register("surname")} error={formState.errors.surname} />
      <TextField id={`${id}-email`} label="Email" type="email" required appearance="boxed" autoComplete="email" placeholder="e.g. john@smith.com" maxLength={LIMITS.email} registration={register("email")} error={formState.errors.email} />
      <TextField id={`${id}-phone`} label="Contact Number" type="tel" required appearance="boxed" autoComplete="tel" inputMode="tel" placeholder="e.g. 012345678" maxLength={LIMITS.phone} registration={register("phone")} error={formState.errors.phone} />
      <TextField
        id={`${id}-dates`}
        label="Preferred Date(s)"
        appearance="boxed"
        autoComplete="off"
        placeholder="e.g. July Next year"
        maxLength={LIMITS.shortText}
        registration={register("preferredDates")}
        error={formState.errors.preferredDates}
      />
      <TextField
        id={`${id}-guests`}
        label="Number of guests"
        type="number"
        required
        appearance="boxed"
        autoComplete="off"
        inputMode="numeric"
        min={1}
        step={1}
        placeholder="e.g. 100"
        registration={register("guests")}
        error={formState.errors.guests}
      />
      <TextareaField id={`${id}-message`} label="Message" appearance="boxed" rows={4} maxLength={LIMITS.message} registration={register("message")} error={formState.errors.message} className="md:col-span-2" />
      <div className="md:col-span-2">
        <CheckboxField id={`${id}-marketing`} name="marketing" control={control} label="I would like to receive updates from The Rhynd on news, offers and events." />
      </div>
      <div className="flex justify-center md:col-span-2">
        <SubmitButton pending={isSubmitting} variant="solid" size="form" className="min-w-36">
          Send
        </SubmitButton>
      </div>
      <FormStatus
        className="md:col-span-2"
        status={status}
        detail={result?.status === "error" ? result.message : undefined}
        messages={enquiryMessages({ noun: "enquiry", success: "Thank you. Your enquiry has been sent to the team.", result })}
      />
    </form>
  );
}
