import { z } from "zod";

import { futureDate } from "@/components/forms/dates";
import { optionalConsent, optionalMessage, optionalShortText, requiredChoice, requiredEmail, requiredName, requiredPhone } from "@/components/forms/fields";

/** "How did you hear about The Rhynd?" options, verbatim from the live form. */
export const HEARD_ABOUT_OPTIONS = [
  "Been a Guest at the Venue",
  "Bridebook",
  "Lives Locally",
  "Other",
  "Returning Client",
  "Social Media",
  "Web Search",
  "Word of Mouth",
] as const;

/**
 * Viewing request (Book a viewing). The live form picks an appointment from
 * live availability; this site cannot see availability, so it asks for a
 * preferred date (today or later, Europe/London) and the team confirms.
 */
export const viewingSchema = z.object({
  firstName: requiredName("first name"),
  surname: requiredName("surname"),
  email: requiredEmail,
  phone: requiredPhone,
  weddingTimeframe: optionalShortText("this answer"),
  preferredDate: futureDate("a preferred viewing date"),
  heardAbout: requiredChoice(HEARD_ABOUT_OPTIONS, "Tell us how you heard about The Rhynd"),
  message: optionalMessage,
  marketing: optionalConsent,
});

export type ViewingFormInput = z.input<typeof viewingSchema>;
export type ViewingFormData = z.output<typeof viewingSchema>;

export const viewingDefaults: ViewingFormInput = {
  firstName: "",
  surname: "",
  email: "",
  phone: "",
  weddingTimeframe: "",
  preferredDate: "",
  heardAbout: "",
  message: "",
  marketing: false,
};
