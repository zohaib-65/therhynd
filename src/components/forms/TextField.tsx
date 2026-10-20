"use client";

import type { ComponentProps } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { FieldShell, type FieldShellProps } from "@/components/forms/FieldShell";
import { describedBy, fieldAppearance } from "@/components/forms/field-styles";
import { Input } from "@/components/ui/input";

type TextFieldProps = FieldShellProps & {
  /** Result of React Hook Form's `register(name)`. */
  registration: UseFormRegisterReturn;
  type?: "text" | "email" | "tel" | "date" | "number";
  autoComplete: string;
  inputMode?: ComponentProps<"input">["inputMode"];
  maxLength?: number;
  placeholder?: string;
  min?: string | number;
  max?: string | number;
  step?: number;
};

/** Single-line input registered with React Hook Form. */
export function TextField({ registration, type = "text", autoComplete, inputMode, maxLength, placeholder, min, max, step, ...shell }: TextFieldProps) {
  return (
    <FieldShell {...shell}>
      <Input
        id={shell.id}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        aria-required={shell.required || undefined}
        aria-invalid={!!shell.error || undefined}
        aria-describedby={describedBy(shell.id, { description: !!shell.description, error: !!shell.error })}
        className={fieldAppearance({ appearance: shell.appearance })}
        {...registration}
      />
    </FieldShell>
  );
}
