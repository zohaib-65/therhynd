import { z } from "zod";

import { optionalPhone, requiredConsent, requiredEmail, requiredName } from "@/components/forms/fields";

/**
 * Mailing-list signup on the home page. Fields and required status match
 * the live form: First name, Last name, Email (required), Phone (optional),
 * plus the subscribe checkbox. The live checkbox starts ticked; here it
 * starts unticked and must be ticked, so consent is explicit.
 */
export const newsletterSchema = z.object({
  firstName: requiredName("first name"),
  lastName: requiredName("last name"),
  phone: optionalPhone,
  email: requiredEmail,
  consent: requiredConsent("Tick the box to confirm you want to join the mailing list"),
});

export type NewsletterFormInput = z.input<typeof newsletterSchema>;
export type NewsletterFormData = z.output<typeof newsletterSchema>;

export const newsletterDefaults: NewsletterFormInput = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  consent: false,
};
