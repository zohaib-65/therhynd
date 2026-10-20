"use client";

import type { ReactNode } from "react";
import type { FieldError as RHFFieldError } from "react-hook-form";

import { labelAppearance, type FieldAppearance } from "@/components/forms/field-styles";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  description?: string;
  error?: RHFFieldError;
  appearance?: FieldAppearance;
  className?: string;
};

/**
 * Label, help text and error message around one control. Required fields
 * show the live site's trailing asterisk (hidden from screen readers, which
 * get `aria-required` on the control instead).
 */
export function FieldShell({ id, label, required, description, error, appearance, className, children }: FieldShellProps & { children: ReactNode }) {
  return (
    <Field data-invalid={!!error || undefined} className={cn("gap-1", className)}>
      <FieldLabel htmlFor={id} className={labelAppearance({ appearance })}>
        {label}
        {required && (
          <span aria-hidden="true" className="-ml-1">
            *
          </span>
        )}
      </FieldLabel>
      {children}
      {description && (
        <FieldDescription id={`${id}-description`} className="text-sm">
          {description}
        </FieldDescription>
      )}
      <FieldError id={`${id}-error`} errors={error ? [error] : undefined} className="text-sm text-error" />
    </Field>
  );
}
