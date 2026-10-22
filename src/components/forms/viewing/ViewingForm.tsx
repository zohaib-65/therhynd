"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { CheckboxField } from "@/components/forms/CheckboxField";
import { SelectField } from "@/components/forms/SelectField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { LIMITS } from "@/components/forms/fields";
import { enquiryMessages } from "@/components/forms/status-messages";
import { useFormSubmission } from "@/components/forms/use-form-submission";
import { useVenueToday } from "@/components/forms/use-venue-today";
import { HEARD_ABOUT_OPTIONS, viewingDefaults, viewingSchema, type ViewingFormData, type ViewingFormInput } from "@/components/forms/viewing/schema";

/** Book a viewing: a request for a viewing appointment, confirmed by the team. */
export function ViewingForm() {
  const id = useId();
  const today = useVenueToday();
  const methods = useForm<ViewingFormInput, unknown, ViewingFormData>({
    resolver: zodResolver(viewingSchema),
    defaultValues: viewingDefaults,
    mode: "onTouched",
  });
  const { register, control, formState } = methods;
  const { onSubmit, isSubmitting } = useFormSubmission("viewingEnquiry", methods, {
    toPayload: (data) => ({ _subject: "Viewing request from the website", ...data }),
    messages: enquiryMessages({
      noun: "viewing request",
      success: "Thank you. Your viewing request has been received and is awaiting confirmation from the team. No appointment is booked until they confirm it.",
    }),
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Viewing request" className="grid gap-x-6 gap-y-5 md:grid-cols-2">
      <TextField id={`${id}-first-name`} label="First name" required appearance="boxed" autoComplete="given-name" placeholder="e.g John" maxLength={LIMITS.name} registration={register("firstName")} error={formState.errors.firstName} />
      <TextField id={`${id}-surname`} label="Surname" required appearance="boxed" autoComplete="family-name" placeholder="e.g Smith" maxLength={LIMITS.name} registration={register("surname")} error={formState.errors.surname} />
      <TextField id={`${id}-email`} label="Email" type="email" required appearance="boxed" autoComplete="email" placeholder="e.g. john@smith.com" maxLength={LIMITS.email} registration={register("email")} error={formState.errors.email} />
      <TextField id={`${id}-phone`} label="Contact Number" type="tel" required appearance="boxed" autoComplete="tel" inputMode="tel" placeholder="e.g. 012345678" maxLength={LIMITS.phone} registration={register("phone")} error={formState.errors.phone} />
      <TextField
        id={`${id}-timeframe`}
        label="When are you looking to get married?"
        appearance="boxed"
        autoComplete="off"
        placeholder="e.g. July Next year"
        maxLength={LIMITS.shortText}
        registration={register("weddingTimeframe")}
        error={formState.errors.weddingTimeframe}
      />
      <TextField
        id={`${id}-date`}
        label="Preferred viewing date"
        type="date"
        required
        appearance="boxed"
        autoComplete="off"
        min={today}
        description="The team will confirm an appointment with you."
        registration={register("preferredDate")}
        error={formState.errors.preferredDate}
      />
      <SelectField
        id={`${id}-heard`}
        label="How did you hear about The Rhynd?"
        required
        appearance="boxed"
        options={HEARD_ABOUT_OPTIONS}
        registration={register("heardAbout")}
        error={formState.errors.heardAbout}
        className="md:col-span-2"
      />
      <TextareaField
        id={`${id}-message`}
        label="Anything else you’d like us to know?"
        appearance="boxed"
        rows={4}
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
