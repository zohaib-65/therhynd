"use client";

import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import type { ReactNode } from "react";

import type { FormStatus as Status } from "@/lib/forms/types";
import { cn } from "@/lib/utils";

export type FormStatusMessages = {
  success: ReactNode;
  notConfigured: ReactNode;
  error: ReactNode;
};

type FormStatusProps = {
  status: Status;
  messages: FormStatusMessages;
  /** Extra detail from the provider for a rejected submission. */
  detail?: string;
  className?: string;
};

/**
 * Live region announcing the outcome of a submission. It is always in the
 * DOM (empty when idle) so screen readers pick up each change.
 */
export function FormStatus({ status, messages, detail, className }: FormStatusProps) {
  const content =
    status === "submitting" ? (
      <>
        <LoaderCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 animate-spin" />
        <span>Sending…</span>
      </>
    ) : status === "success" ? (
      <>
        <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>{messages.success}</span>
      </>
    ) : status === "not-configured" ? (
      <>
        <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>{messages.notConfigured}</span>
      </>
    ) : status === "error" ? (
      <>
        <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>
          {messages.error}
          {detail && <> ({detail})</>}
        </span>
      </>
    ) : null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "text-sm leading-snug",
        content && "flex items-start gap-2",
        status === "success" && "text-forest",
        (status === "error" || status === "not-configured") && "text-error",
        className,
      )}
    >
      {content}
    </div>
  );
}
