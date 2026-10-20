import { z } from "zod";

import { optionalConsent, optionalMessage, optionalShortText, requiredEmail, requiredName, requiredPhone } from "@/components/forms/fields";

/** Whole number of guests, at least 1; no maximum is imposed by the form. */
const guestCount = z
  .string()
  .trim()
  .min(1, { error: "Enter the number of guests", abort: true })
  .regex(/^\d+$/, { error: "Enter the number of guests as a whole number", abort: true })
  .transform(Number)
  .refine((value) => value >= 1, { error: "Enter at least 1 guest" });

/**
 * Wild weddings "Get in touch" form. Fields and required status follow the
 * live form (name, surname, email, contact number and number of guests are
 * required).
 */
export const weddingEnquirySchema = z.object({
  firstName: requiredName("name"),
  surname: requiredName("surname"),
  email: requiredEmail,
  phone: requiredPhone,
  preferredDates: optionalShortText("your preferred dates"),
  guests: guestCount,
  message: optionalMessage,
  marketing: optionalConsent,
});

export type WeddingEnquiryFormInput = z.input<typeof weddingEnquirySchema>;
export type WeddingEnquiryFormData = z.output<typeof weddingEnquirySchema>;

export const weddingEnquiryDefaults: WeddingEnquiryFormInput = {
  firstName: "",
  surname: "",
  email: "",
  phone: "",
  preferredDates: "",
  guests: "",
  message: "",
  marketing: false,
};
