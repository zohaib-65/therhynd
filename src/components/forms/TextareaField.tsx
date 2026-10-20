"use client";

import type { UseFormRegisterReturn } from "react-hook-form";

import { FieldShell, type FieldShellProps } from "@/components/forms/FieldShell";
import { describedBy, fieldAppearance } from "@/components/forms/field-styles";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TextareaFieldProps = FieldShellProps & {
  registration: UseFormRegisterReturn;
  maxLength?: number;
  /** Initial height in rows; the box grows with its content. */
  rows?: number;
  placeholder?: string;
};

/** Multi-line input registered with React Hook Form. */
export function TextareaField({ registration, maxLength, rows = 3, placeholder, ...shell }: TextareaFieldProps) {
  return (
    <FieldShell {...shell}>
      <Textarea
        id={shell.id}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-required={shell.required || undefined}
        aria-invalid={!!shell.error || undefined}
        aria-describedby={describedBy(shell.id, { description: !!shell.description, error: !!shell.error })}
        className={cn(fieldAppearance({ appearance: shell.appearance }), "min-h-0 py-1", shell.appearance === "boxed" && "min-h-24 py-2")}
        {...registration}
      />
    </FieldShell>
  );
}
