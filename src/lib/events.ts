import { events } from "@/content/events";

/** One ticket type, as listed on the live event page. */
export type Ticket = {
  name: string;
  /** Price per ticket as shown, e.g. "£95.00". */
  price: string;
  /** When online sales close, as shown, e.g. "03 Mar 2027, 20:00". */
  saleEnds?: string;
};

/**
 * One block of "About the Event", laid out as the live page's rich text:
 * blocks are one blank line apart; the lines of a `string[]` block sit
 * directly under each other ("" is an empty line). Strings are inline
 * Markdown (**bold**, *italic*, [label](href)).
 */
export type AboutBlock = string | string[] | { image: string; alt?: string };

/** One event in src/content/events.ts. */
export type EventEntry = {
  slug: string;
  title: string;
  /** Meta description, when the live page has one. */
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
  about: AboutBlock[];
  /**
   * Characters (not counting spaces) of "About the Event" shown before
   * "Read More >", as on the live page. Omit to show it all.
   */
  preview?: number;
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

/** Inline Markdown reduced to its visible text. */
const plainText = (text: string) =>
  text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*|\*/g, "");

const visibleLength = (text: string) => plainText(text).replace(/\s/g, "").length;

/** First paragraph of "About the Event" as plain text. */
export function firstParagraph(event: EventEntry): string {
  const first = event.about.find((block) => typeof block === "string" && block.trim());
  return typeof first === "string" ? plainText(first) : event.title;
}

/**
 * The collapsed "About the Event": blocks up to `limit` visible characters
 * (spaces not counted). A line cut short ends in "…", as on the live page.
 */
export function previewBlocks(blocks: AboutBlock[], limit: number): AboutBlock[] {
  let left = limit;
  const cut = (line: string): string => {
    const length = visibleLength(line);
    if (length <= left) {
      left -= length;
      return line;
    }
    const text = plainText(line);
    let seen = 0;
    let end = 0;
    while (end < text.length && seen < left) {
      if (!/\s/.test(text[end])) seen++;
      end++;
    }
    left = 0;
    return `${text.slice(0, end)}…`;
  };
  const shown: AboutBlock[] = [];
  for (const block of blocks) {
    if (left <= 0) break;
    if (typeof block === "string") shown.push(cut(block));
    else if (Array.isArray(block)) {
      const lines: string[] = [];
      for (const line of block) {
        if (left <= 0) break;
        lines.push(cut(line));
      }
      shown.push(lines);
    } else shown.push(block);
  }
  return shown;
}
