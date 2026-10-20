"use client";

import { LoaderCircle } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type SubmitButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "className"> & {
  pending: boolean;
  children: string;
};

/**
 * Submit button that shows progress and refuses repeat clicks while a
 * request is in flight. It stays focusable while pending (aria-disabled), so
 * keyboard focus is not lost mid-submit.
 */
export function SubmitButton({ pending, children, variant = "solid", size = "form", className }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      aria-disabled={pending || undefined}
      onClick={(event) => pending && event.preventDefault()}
      className={className}
    >
      {pending && <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />}
      {children}
    </Button>
  );
}
