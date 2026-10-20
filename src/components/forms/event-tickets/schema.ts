import { z } from "zod";

import { optionalMessage, optionalPhone, requiredEmail, requiredName } from "@/components/forms/fields";

/** Highest number in each ticket type's Quantity list (the team confirms availability). */
export const MAX_TICKETS = 30;

/**
 * Ticket request for one event, sent after "Checkout". It does not reserve
 * or sell tickets: the team checks availability, confirms and takes payment.
 * `tickets` and `quantity` come from the ticket picker above the form.
 */
export const eventTicketsSchema = z.object({
  tickets: z.string().trim().min(1, { error: "Pick tickets to proceed to the checkout." }),
  quantity: z
    .string()
    .regex(/^\d+$/, { error: "Pick tickets to proceed to the checkout.", abort: true })
    .transform(Number)
    .refine((value) => value >= 1 && value <= MAX_TICKETS, { error: `Choose between 1 and ${MAX_TICKETS} tickets` }),
  name: requiredName("name"),
  email: requiredEmail,
  phone: optionalPhone,
  message: optionalMessage,
});

export type EventTicketsFormInput = z.input<typeof eventTicketsSchema>;
export type EventTicketsFormData = z.output<typeof eventTicketsSchema>;
