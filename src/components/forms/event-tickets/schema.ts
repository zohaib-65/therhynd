import { z } from "zod";

import { optionalMessage, optionalPhone, requiredEmail, requiredName } from "@/components/forms/fields";

/** Most tickets one request can ask for (the team confirms availability). */
export const MAX_TICKETS = 30;

/**
 * Ticket request for one event. It does not reserve or sell tickets: the
 * team checks availability, confirms and takes payment.
 */
export const eventTicketsSchema = z.object({
  ticket: z.string().trim().min(1, { error: "Choose a ticket type" }),
  quantity: z
    .string()
    .trim()
    .min(1, { error: "Enter the number of tickets", abort: true })
    .regex(/^\d+$/, { error: "Enter the number of tickets as a whole number", abort: true })
    .transform(Number)
    .refine((value) => value >= 1 && value <= MAX_TICKETS, { error: `Choose between 1 and ${MAX_TICKETS} tickets` }),
  name: requiredName("name"),
  email: requiredEmail,
  phone: optionalPhone,
  message: optionalMessage,
});

export type EventTicketsFormInput = z.input<typeof eventTicketsSchema>;
export type EventTicketsFormData = z.output<typeof eventTicketsSchema>;
