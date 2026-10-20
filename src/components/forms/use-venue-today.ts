"use client";

import { useSyncExternalStore } from "react";

import { todayAtVenue } from "@/components/forms/dates";

const subscribe = () => () => {};

/**
 * Today's date at the venue ("YYYY-MM-DD") for a date input's `min`.
 * Undefined during the static build, set in the browser without a
 * hydration mismatch. Validation re-checks the date on submit.
 */
export function useVenueToday(): string | undefined {
  return useSyncExternalStore(subscribe, todayAtVenue, () => undefined);
}
