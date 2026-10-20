import type { FormKey } from "@/lib/forms/types";

/**
 * Public form endpoints, read at build time. Each value is a full Formspree
 * endpoint URL such as https://formspree.io/f/abcdwxyz (a public ID, not a
 * secret). Leave a variable unset and that form shows a "sending is not
 * available" message instead of pretending to send. See .env.example and
 * docs/forms-and-validation.md.
 *
 * Each variable is referenced literally so Next.js can inline it into the
 * static export.
 */
export const formEndpoints: Record<FormKey, string | undefined> = {
  contact: process.env.NEXT_PUBLIC_FORM_CONTACT_ENDPOINT || undefined,
  newsletter: process.env.NEXT_PUBLIC_FORM_NEWSLETTER_ENDPOINT || undefined,
  brochure: process.env.NEXT_PUBLIC_FORM_BROCHURE_ENDPOINT || undefined,
  viewingEnquiry: process.env.NEXT_PUBLIC_FORM_VIEWING_ENQUIRY_ENDPOINT || undefined,
  weddingEnquiry: process.env.NEXT_PUBLIC_FORM_WEDDING_ENQUIRY_ENDPOINT || undefined,
  tableEnquiry: process.env.NEXT_PUBLIC_FORM_TABLE_ENQUIRY_ENDPOINT || undefined,
  eventTickets: process.env.NEXT_PUBLIC_FORM_EVENT_TICKETS_ENDPOINT || undefined,
};
