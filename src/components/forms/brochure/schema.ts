import { z } from "zod";

import { optionalConsent, optionalMessage, requiredChoice, requiredEmail, requiredName, requiredPhone } from "@/components/forms/fields";

/** Event types offered by the live brochure form (Sonas widget). */
export const EVENT_TYPES = ["Twilight Wedding", "Wedding"] as const;

/**
 * Brochure request (Download our brochure, Pricing). Fields and required
 * status follow the live form: first name, surname, email, event type and
 * contact number are required. The live marketing checkbox is marked
 * required; here it is optional, because marketing consent cannot be a
 * condition of the request.
 */
export const brochureSchema = z.object({
  firstName: requiredName("first name"),
  surname: requiredName("surname"),
  email: requiredEmail,
  eventType: requiredChoice(EVENT_TYPES, "Choose an event type"),
  phone: requiredPhone,
  message: optionalMessage,
  marketing: optionalConsent,
});

export type BrochureFormInput = z.input<typeof brochureSchema>;
export type BrochureFormData = z.output<typeof brochureSchema>;

export const brochureDefaults: BrochureFormInput = {
  firstName: "",
  surname: "",
  email: "",
  eventType: "",
  phone: "",
  message: "",
  marketing: false,
};
