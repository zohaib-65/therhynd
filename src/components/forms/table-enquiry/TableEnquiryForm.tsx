"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

import { FormStatus } from "@/components/forms/FormStatus";
import { SelectField } from "@/components/forms/SelectField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { site } from "@/data/site";
import { LIMITS } from "@/components/forms/fields";
import { enquiryMessages } from "@/components/forms/status-messages";
import {
  PARTY_SIZES,
  TABLE_TIMES,
  tableEnquiryDefaults,
  tableEnquirySchema,
  type TableEnquiryFormData,
  type TableEnquiryFormInput,
} from "@/components/forms/table-enquiry/schema";
import { useFormSubmission } from "@/components/forms/use-form-submission";
import { useVenueToday } from "@/components/forms/use-venue-today";

const partyLabels = Object.fromEntries(PARTY_SIZES.map((size) => [size, size === "1" ? "1 guest" : `${size} guests`]));

/**
 * Book a table: a table request for the café. It does not check availability
 * or make a booking; the café confirms.
 */
export function TableEnquiryForm() {
  const id = useId();
  const today = useVenueToday();
  const methods = useForm<TableEnquiryFormInput, unknown, TableEnquiryFormData>({
    resolver: zodResolver(tableEnquirySchema),
    defaultValues: tableEnquiryDefaults,
    mode: "onTouched",
  });
  const { register, formState } = methods;
  const { status, result, onSubmit, isSubmitting } = useFormSubmission("tableEnquiry", methods, {
    toPayload: (data) => ({ _subject: "Table request for the café", ...data }),
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Table request" className="grid gap-x-6 gap-y-5 md:grid-cols-3">
      <SelectField
        id={`${id}-party`}
        label="Party size"
        required
        appearance="boxed"
        options={PARTY_SIZES}
        optionLabels={partyLabels}
        registration={register("partySize")}
        error={formState.errors.partySize}
      />
      <TextField id={`${id}-date`} label="Date" type="date" required appearance="boxed" autoComplete="off" min={today} registration={register("date")} error={formState.errors.date} />
      <SelectField id={`${id}-time`} label="Time" required appearance="boxed" options={TABLE_TIMES} registration={register("time")} error={formState.errors.time} />
      <TextField id={`${id}-name`} label="Name" required appearance="boxed" autoComplete="name" maxLength={LIMITS.name} registration={register("name")} error={formState.errors.name} />
      <TextField id={`${id}-email`} label="Email" type="email" required appearance="boxed" autoComplete="email" maxLength={LIMITS.email} registration={register("email")} error={formState.errors.email} />
      <TextField id={`${id}-phone`} label="Phone" type="tel" appearance="boxed" autoComplete="tel" inputMode="tel" maxLength={LIMITS.phone} registration={register("phone")} error={formState.errors.phone} />
      <TextareaField id={`${id}-message`} label="Message" appearance="boxed" rows={3} maxLength={LIMITS.message} registration={register("message")} error={formState.errors.message} className="md:col-span-3" />
      <div className="flex justify-center md:col-span-3">
        <SubmitButton pending={isSubmitting} variant="solid" size="form" className="min-w-36">
          Send table request
        </SubmitButton>
      </div>
      <FormStatus
        className="md:col-span-3"
        status={status}
        detail={result?.status === "error" ? result.message : undefined}
        messages={enquiryMessages({
          noun: "table request",
          email: site.emails.cafe,
          phone: false,
          success: "Thank you. Your table request has been received and is awaiting confirmation from the café. It is not a confirmed booking until they confirm it.",
          result,
        })}
      />
    </form>
  );
}
