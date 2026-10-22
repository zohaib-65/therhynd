"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { CheckboxField } from "@/components/forms/CheckboxField";
import { SelectField } from "@/components/forms/SelectField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { brochureDefaults, brochureSchema, EVENT_TYPES, type BrochureFormData, type BrochureFormInput } from "@/components/forms/brochure/schema";
import { LIMITS } from "@/components/forms/fields";
import { enquiryMessages } from "@/components/forms/status-messages";
import { useFormSubmission } from "@/components/forms/use-form-submission";

type BrochureFormProps = {
  /** Which page the request came from, sent with the request. */
  source: "Download our brochure" | "Pricing" | "Weddings" | "Barn weddings";
};

/** Brochure request form (Download our brochure, Pricing). */
export function BrochureForm({ source }: BrochureFormProps) {
  const id = useId();
  const methods = useForm<BrochureFormInput, unknown, BrochureFormData>({
    resolver: zodResolver(brochureSchema),
    defaultValues: brochureDefaults,
    mode: "onTouched",
  });
  const { register, control, formState } = methods;
  const { onSubmit, isSubmitting } = useFormSubmission("brochure", methods, {
    toPayload: (data) => ({ _subject: `Brochure request (${source} page)`, page: source, ...data }),
    messages: enquiryMessages({ noun: "request", success: "Thank you. Your brochure request has been sent to The Rhynd." }),
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Brochure request" className="grid gap-x-6 gap-y-5 md:grid-cols-2">
      <TextField id={`${id}-first-name`} label="First name" required appearance="boxed" autoComplete="given-name" placeholder="e.g John" maxLength={LIMITS.name} registration={register("firstName")} error={formState.errors.firstName} />
      <TextField id={`${id}-surname`} label="Surname" required appearance="boxed" autoComplete="family-name" placeholder="e.g Smith" maxLength={LIMITS.name} registration={register("surname")} error={formState.errors.surname} />
      <TextField id={`${id}-email`} label="Email" type="email" required appearance="boxed" autoComplete="email" placeholder="e.g. john@smith.com" maxLength={LIMITS.email} registration={register("email")} error={formState.errors.email} />
      <SelectField id={`${id}-event-type`} label="Event Type" required appearance="boxed" options={EVENT_TYPES} placeholder="e.g. Wedding" registration={register("eventType")} error={formState.errors.eventType} />
      <TextField id={`${id}-phone`} label="Contact Number" type="tel" required appearance="boxed" autoComplete="tel" inputMode="tel" placeholder="e.g. 012345678" maxLength={LIMITS.phone} registration={register("phone")} error={formState.errors.phone} />
      <TextareaField
        id={`${id}-message`}
        label="Anything else you’d like us to know?"
        appearance="boxed"
        rows={4}
        placeholder="E.g. preferred dates, season and number of guests"
        maxLength={LIMITS.message}
        registration={register("message")}
        error={formState.errors.message}
        className="md:col-span-2"
      />
      <div className="md:col-span-2">
        <CheckboxField id={`${id}-marketing`} name="marketing" control={control} label="I would like to receive updates from The Rhynd on news, offers and events." />
      </div>
      <div className="flex justify-center md:col-span-2">
        <SubmitButton pending={isSubmitting} variant="solid" size="form" className="min-w-36">
          Submit
        </SubmitButton>
      </div>
    </form>
  );
}
