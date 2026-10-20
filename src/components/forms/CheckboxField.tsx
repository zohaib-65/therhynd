"use client";

import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

import { describedBy } from "@/components/forms/field-styles";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

type CheckboxFieldProps<T extends FieldValues, TOutput> = {
  id: string;
  name: Path<T>;
  /** `control` from useForm; TOutput is the schema's parsed type. */
  control: Control<T, unknown, TOutput>;
  label: string;
  required?: boolean;
};

/**
 * A checkbox bound through React Hook Form's Controller (the shadcn checkbox
 * is a Radix button, not a native input). The field ref is forwarded so the
 * form can focus it when validation fails.
 */
export function CheckboxField<T extends FieldValues, TOutput = T>({ id, name, control, label, required }: CheckboxFieldProps<T, TOutput>) {
  return (
    <Controller<T, Path<T>, TOutput>
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          <Field orientation="horizontal" data-invalid={fieldState.invalid || undefined} className="items-start gap-3">
            <Checkbox
              id={id}
              ref={field.ref}
              name={field.name}
              checked={field.value === true}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              onBlur={field.onBlur}
              aria-required={required || undefined}
              aria-invalid={fieldState.invalid || undefined}
              aria-describedby={describedBy(id, { error: fieldState.invalid })}
              className="mt-0.5 size-4 rounded-[2px] border-ink data-checked:border-forest data-checked:bg-forest"
            />
            <FieldLabel htmlFor={id} className="text-base leading-6 font-light text-black">
              {label}
            </FieldLabel>
          </Field>
          <FieldError id={`${id}-error`} errors={fieldState.error ? [fieldState.error] : undefined} className="text-sm text-error" />
        </div>
      )}
    />
  );
}
