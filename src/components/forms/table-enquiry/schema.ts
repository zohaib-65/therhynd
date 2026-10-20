import { z } from "zod";

import { futureDate } from "@/components/forms/dates";
import { optionalMessage, optionalPhone, requiredChoice, requiredEmail, requiredName } from "@/components/forms/fields";

/** Party sizes offered online by the live booking widget (1–10). */
export const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as const;

/** Time slots offered by the live booking widget. */
export const TABLE_TIMES = ["09:00", "09:30", "10:00", "10:30", "11:00", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"] as const;

/**
 * Table enquiry (Book a table). Party size and times are the options the
 * live widget offers; larger groups are asked to email, as on the live page.
 * The date must be today or later (Europe/London). This is a request only:
 * the café confirms availability.
 */
export const tableEnquirySchema = z.object({
  partySize: requiredChoice(PARTY_SIZES, "Choose the number of guests").transform(Number),
  date: futureDate("a date"),
  time: requiredChoice(TABLE_TIMES, "Choose a time"),
  name: requiredName("name"),
  email: requiredEmail,
  phone: optionalPhone,
  message: optionalMessage,
});

export type TableEnquiryFormInput = z.input<typeof tableEnquirySchema>;
export type TableEnquiryFormData = z.output<typeof tableEnquirySchema>;

export const tableEnquiryDefaults: TableEnquiryFormInput = {
  partySize: "",
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};
