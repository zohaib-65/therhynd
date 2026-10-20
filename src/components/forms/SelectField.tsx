"use client";

import type { UseFormRegisterReturn } from "react-hook-form";

import { FieldShell, type FieldShellProps } from "@/components/forms/FieldShell";
import { describedBy, fieldAppearance } from "@/components/forms/field-styles";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { cn } from "@/lib/utils";

type SelectFieldProps = FieldShellProps & {
  registration: UseFormRegisterReturn;
  options: readonly string[];
  /** First, empty option shown until a choice is made (e.g. "e.g. Wedding"). */
  placeholder?: string;
  /** Visible text per option, when it differs from the value. */
  optionLabels?: Record<string, string>;
};

/**
 * Native <select> (shadcn NativeSelect) registered with React Hook Form.
 * Native selects work with keyboard, screen readers and phone pickers
 * without extra code.
 */
export function SelectField({ registration, options, placeholder, optionLabels, ...shell }: SelectFieldProps) {
  return (
    <FieldShell {...shell}>
      <NativeSelect
        id={shell.id}
        className="w-full"
        selectClassName={cn(fieldAppearance({ appearance: shell.appearance }), "pr-9")}
        aria-required={shell.required || undefined}
        aria-invalid={!!shell.error || undefined}
        aria-describedby={describedBy(shell.id, { description: !!shell.description, error: !!shell.error })}
        {...registration}
      >
        <NativeSelectOption value="">{placeholder ?? "Choose…"}</NativeSelectOption>
        {options.map((option) => (
          <NativeSelectOption key={option} value={option}>
            {optionLabels?.[option] ?? option}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </FieldShell>
  );
}
