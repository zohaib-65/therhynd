import { z } from "zod";

/**
 * Venue dates are calendar dates in Europe/London. They are handled as
 * "YYYY-MM-DD" strings from <input type="date"> and compared as strings, so
 * no timezone conversion can move the chosen day.
 */
const VENUE_TIME_ZONE = "Europe/London";

/** Today's date at the venue as "YYYY-MM-DD". */
export function todayAtVenue(now: Date = new Date()): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone: VENUE_TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** True for a real calendar date written as YYYY-MM-DD (rejects 2026-02-30). */
function isCalendarDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const [year, month, day] = match.slice(1).map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

/** A required date that is today or later at the venue (checked when validation runs). */
export const futureDate = (label: string) =>
  z
    .string()
    .trim()
    .min(1, { error: `Choose ${label}`, abort: true })
    .refine(isCalendarDate, { error: "Enter a real date", abort: true })
    .refine((value) => value >= todayAtVenue(), { error: "Choose today or a later date" });
