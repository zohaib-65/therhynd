import { z } from "zod";

import { optionalMessage, optionalName, optionalPhone, requiredEmail } from "@/components/forms/fields";

/**
 * Footer contact form. Fields and required status match the live footer:
 * Name, Email (required), Phone Number, "Ask away!".
 */
export const contactSchema = z.object({
  name: optionalName("name"),
  email: requiredEmail,
  phone: optionalPhone,
  message: optionalMessage,
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormData = z.output<typeof contactSchema>;

export const contactDefaults: ContactFormInput = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
