import { events } from "@/content/events";
import type { Paragraph } from "@/lib/content/schema";

/** One ticket type, as listed on the live event page. */
export type Ticket = {
  name: string;
  /** Price per ticket as shown, e.g. "£95.00". */
  price: string;
  /** When online sales close, as shown, e.g. "03 Mar 2027, 20:00". */
  saleEnds?: string;
};

/** One event in src/content/events.ts. */
export type EventEntry = {
  slug: string;
  title: string;
  /** One-line summary under the title (also the meta description), when the live page has one. */
  summary?: string;
  /** e.g. "Sat 06 Mar" */
  shortDate: string;
  /** Short venue name, e.g. "Tayport". */
  location: string;
  /** Date and time range as shown, e.g. "06 Mar 2027, 18:00 – 22:00". */
  date: string;
  address: string;
  /** ISO date-times with offset (used for "is it past?" and structured data). */
  start: string;
  end: string;
  /** Image id from src/content/images.ts. */
  image: string;
  description: Paragraph[];
  /** Empty when tickets are not on sale. */
  tickets: Ticket[];
  /** Other dates of the same event (slugs), shown as links. */
  otherDates?: string[];
};

export function getEvents(): EventEntry[] {
  return events;
}

export function getEvent(slug: string): EventEntry | undefined {
  return events.find((event) => event.slug === slug);
}

/** Calendar date (YYYY-MM-DD) of the event's start, as written in `start`. */
export const eventDay = (event: EventEntry) => event.start.slice(0, 10);
