import { z } from "zod";

/**
 * Field rules shared by every form. Each rule trims input first; optional
 * fields turn a blank value into `undefined` so it is left out of the
 * payload. "Required" checks abort, so a blank field reports one message.
 * Limits are documented in docs/forms-and-validation.md.
 */

export const LIMITS = {
  name: 100,
  email: 254, // RFC 5321 maximum address length
  phone: 30,
  message: 2000,
  shortText: 200,
} as const;

/** Letters from any script, combining marks, spaces, apostrophes, hyphens and full stops. */
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}'’. -]*$/u;

/** Digits with optional leading +, spaces, brackets, dots and hyphens. */
const PHONE_PATTERN = /^\+?[\d\s().-]+$/;

const blankToUndefined = (value: string) => (value === "" ? undefined : value);

function isPhoneNumber(value: string): boolean {
  const digits = value.replace(/\D/g, "").length;
  // E.164 allows at most 15 digits; 7 covers short national numbers.
  return PHONE_PATTERN.test(value) && digits >= 7 && digits <= 15;
}

const nameBase = (label: string) =>
  z
    .string()
    .trim()
    .max(LIMITS.name, { error: `Keep your ${label} under ${LIMITS.name} characters` });

export const requiredName = (label: string) =>
  nameBase(label)
    .min(1, { error: `Enter your ${label}`, abort: true })
    .regex(NAME_PATTERN, { error: `Use letters, spaces, apostrophes or hyphens in your ${label}` });

export const optionalName = (label: string) =>
  nameBase(label)
    .refine((value) => value === "" || NAME_PATTERN.test(value), {
      error: `Use letters, spaces, apostrophes or hyphens in your ${label}`,
    })
    .transform(blankToUndefined);

export const requiredEmail = z
  .string()
  .trim()
  .min(1, { error: "Enter your email address", abort: true })
  .max(LIMITS.email, { error: "Enter a shorter email address", abort: true })
  .pipe(z.email({ error: "Enter an email address like name@example.com" }));

export const optionalPhone = z
  .string()
  .trim()
  .max(LIMITS.phone, { error: "Enter a shorter phone number" })
  .refine((value) => value === "" || isPhoneNumber(value), {
    error: "Enter a phone number using digits, spaces and an optional +",
  })
  .transform(blankToUndefined);

export const requiredPhone = z
  .string()
  .trim()
  .min(1, { error: "Enter your phone number", abort: true })
  .max(LIMITS.phone, { error: "Enter a shorter phone number", abort: true })
  .refine(isPhoneNumber, { error: "Enter a phone number using digits, spaces and an optional +" });

/** Short optional free text, e.g. "When are you looking to get married?". */
export const optionalShortText = (label: string) =>
  z
    .string()
    .trim()
    .max(LIMITS.shortText, { error: `Keep ${label} under ${LIMITS.shortText} characters` })
    .transform(blankToUndefined);

/** A required choice from a fixed list of options (select fields). */
export const requiredChoice = <const T extends readonly [string, ...string[]]>(options: T, message: string) =>
  z.string().refine((value): value is T[number] => (options as readonly string[]).includes(value), { error: message });

/** An optional marketing opt-in: never pre-ticked, never required. */
export const optionalConsent = z.boolean();

export const optionalMessage = z
  .string()
  .trim()
  .max(LIMITS.message, { error: `Keep your message under ${LIMITS.message} characters` })
  .transform(blankToUndefined);

/** An explicit opt-in checkbox: must be ticked, and is never pre-ticked. */
export const requiredConsent = (message: string) => z.boolean().refine((value) => value, { error: message });
