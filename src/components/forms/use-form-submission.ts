"use client";

import { useRef, useState, type BaseSyntheticEvent, type ReactNode } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { submitForm } from "@/lib/forms/submit";
import type { FormKey, SubmissionPayload } from "@/lib/forms/types";

/** Toast texts for one form (see `enquiryMessages`). */
export type FormMessages = {
  /** Shown while sending, e.g. "Sending your request…". */
  sending: string;
  success: ReactNode;
  notConnected: ReactNode;
  error: ReactNode;
};

type Options<TOutput> = {
  /** Turn validated values into the payload that is sent. */
  toPayload: (values: TOutput) => SubmissionPayload;
  messages: FormMessages;
};

/**
 * Connects a React Hook Form instance to `submitForm`, with a loader and
 * toasts:
 *  - validates with the form's Zod resolver before anything is sent (invalid
 *    fields are flagged in place; no toast)
 *  - while sending: the submit button spins and a "Sending…" toast shows
 *  - then that toast turns into success, "not connected" or error
 *  - ignores repeat submits while sending
 *  - clears the form only after a confirmed success
 *  - puts field errors from the backend back on the matching fields
 */
export function useFormSubmission<TInput extends FieldValues, TOutput>(
  form: FormKey,
  methods: UseFormReturn<TInput, unknown, TOutput>,
  { toPayload, messages }: Options<TOutput>,
) {
  const [isSubmitting, setSubmitting] = useState(false);
  const inFlight = useRef(false);

  const submit = async (values: TOutput) => {
    if (inFlight.current) return;
    inFlight.current = true;
    setSubmitting(true);
    const id = toast.loading(messages.sending);
    try {
      const outcome = await submitForm(form, toPayload(values));
      if (outcome.status === "success") {
        methods.reset();
        toast.success(messages.success, { id });
      } else if (outcome.status === "not-connected") {
        toast.warning(messages.notConnected, { id, duration: 12000 });
      } else {
        if (outcome.fieldErrors) {
          const known = Object.keys(methods.getValues());
          let focused = false;
          for (const [field, message] of Object.entries(outcome.fieldErrors)) {
            if (!known.includes(field)) continue;
            methods.setError(field as Path<TInput>, { type: "server", message }, { shouldFocus: !focused });
            focused = true;
          }
        }
        toast.error(messages.error, { id, description: outcome.message, duration: 12000 });
      }
    } catch {
      toast.error(messages.error, { id, duration: 12000 });
    } finally {
      inFlight.current = false;
      setSubmitting(false);
    }
  };

  // Validation runs first; `submit` only sees data that passed the schema.
  const onSubmit = (event?: BaseSyntheticEvent) => methods.handleSubmit(submit)(event);

  return { onSubmit, isSubmitting };
}
