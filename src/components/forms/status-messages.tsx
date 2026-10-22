import type { ReactNode } from "react";

import type { FormMessages } from "@/components/forms/use-form-submission";
import { site } from "@/data/site";

type Options = {
  /** What is sent, e.g. "request", "enquiry", "message". */
  noun: string;
  success: ReactNode;
  /** Email address offered when sending is not possible. */
  email?: string;
  /** Also offer the phone number. */
  phone?: boolean;
};

/** Toast texts for a form, with an email/phone fallback when sending fails. */
export function enquiryMessages({ noun, success, email = site.email.address, phone = true }: Options): FormMessages {
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
    sending: `Sending your ${noun}…`,
    success,
    notConnected: (
      <>
        Online sending isn’t connected yet, so your {noun} has not been sent. Please {alternative}.
      </>
    ),
    error: (
      <>
        Your {noun} couldn’t be sent. Please try again, or {alternative}.
      </>
    ),
  };
}
