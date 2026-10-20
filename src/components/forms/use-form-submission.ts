"use client";

import { useRef, useState, type BaseSyntheticEvent } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import { submitForm } from "@/lib/forms/submit";
import type { FormKey, FormStatus, SubmissionPayload, SubmissionResult } from "@/lib/forms/types";

type Options<TOutput> = {
  /** Turn validated values into the payload sent to the provider. */
  toPayload: (values: TOutput) => SubmissionPayload;
};

/**
 * Connects a React Hook Form instance to `submitForm`.
 *  - validates with the form's Zod resolver before anything is sent
 *  - ignores repeat submits while a request is in flight
 *  - keeps the entered values unless the provider confirmed success
 *  - copies provider field errors back onto the matching fields
 */
export function useFormSubmission<TInput extends FieldValues, TOutput>(
  form: FormKey,
  methods: UseFormReturn<TInput, unknown, TOutput>,
  { toPayload }: Options<TOutput>,
) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const inFlight = useRef(false);

  const submit = async (values: TOutput) => {
    if (inFlight.current) return;
    inFlight.current = true;
    setStatus("submitting");
    setResult(null);
    try {
      const outcome = await submitForm(form, toPayload(values));
      if (outcome.status === "success") {
        methods.reset();
      } else if (outcome.status === "error" && outcome.fieldErrors) {
        const known = Object.keys(methods.getValues());
        let focused = false;
        for (const [field, message] of Object.entries(outcome.fieldErrors)) {
          if (!known.includes(field)) continue;
          methods.setError(field as Path<TInput>, { type: "server", message }, { shouldFocus: !focused });
          focused = true;
        }
      }
      setResult(outcome);
      setStatus(outcome.status);
    } finally {
      inFlight.current = false;
    }
  };

  // Validation runs first; `submit` only sees data that passed the schema.
  const onSubmit = (event?: BaseSyntheticEvent) => methods.handleSubmit(submit)(event);

  return { status, result, onSubmit, isSubmitting: status === "submitting" };
}
