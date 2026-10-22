import type { ReactNode } from "react";

import type { FormStatusMessages } from "@/components/forms/FormStatus";
import { site } from "@/data/site";
import type { SubmissionResult } from "@/lib/forms/types";

type Options = {
  /** What was sent, e.g. "request", "enquiry". */
  noun: string;
  success: ReactNode;
  /** Email address offered when online sending is unavailable. */
  email?: string;
  /** Also offer the phone number. */
  phone?: boolean;
  result: SubmissionResult | null;
};

/** Status messages for enquiry forms, with an email/phone fallback. */
export function enquiryMessages({ noun, success, email = site.email.address, phone = true, result }: Options): FormStatusMessages {
  const alternative = (
    <>
      email{" "}
      <a href={`mailto:${email}`} className="underline">
        {email}
      </a>
      {phone && (
        <>
          {" "}
          or call{" "}
          <a href={site.phone.href} className="underline">
            {site.phone.display}
          </a>{" "}
          {site.phone.note}
        </>
      )}
    </>
  );
  return {
    success,
    notConfigured: (
      <>
        Online sending isn’t connected yet, so your {noun} has not been sent. Please {alternative}.
      </>
    ),
    error:
      result?.status === "error" && result.reason === "network" ? (
        <>
          Your {noun} couldn’t be sent. Check your connection and try again, or {alternative}.
        </>
      ) : (
        <>
          Your {noun} couldn’t be sent. Please check the form and try again, or {alternative}.
        </>
      ),
  };
}
