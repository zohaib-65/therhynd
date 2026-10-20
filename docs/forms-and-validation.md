# Forms and validation

## How a form is built

Each form has three parts:

1. **Schema** (`src/components/forms/<form>/schema.ts`): a Zod object built from the
   shared rules in `src/components/forms/fields.ts` and `src/components/forms/dates.ts`,
   with `z.input`/`z.output` types and explicit default values. Input and
   output differ because rules trim text, turn blank optional fields into
   `undefined`, and convert numbers (party size, guests) from strings.
2. **Component** (`src/components/forms/<form>/<Form>.tsx`, client):
   `useForm<Input, unknown, Output>({ resolver: zodResolver(schema), defaultValues, mode: "onTouched" })`.
   Native inputs and selects use `register`; the Radix checkbox uses
   `Controller`. IDs are prefixed with `useId()`, so several forms on one page
   never share an id.
3. **Submission** (`useFormSubmission(formKey, methods, { toPayload })`): runs
   only after the schema passes and calls `submitForm` (`src/lib/forms/submit.ts`).

React Hook Form focuses the first invalid field. Errors show under each field
(`role="alert"`); the control gets `aria-invalid` and `aria-describedby`.
"Required" checks abort, so a blank field shows one message, not two. Forms
use `noValidate`.

## Shared rules

`src/components/forms/fields.ts`:

| Rule | Behaviour |
|---|---|
| `requiredName(label)` | Trim; required; max 100; letters in any script, combining marks, spaces, `'`, `’`, `-`, `.`; must start with a letter |
| `optionalName(label)` | Same pattern when filled; blank → `undefined` |
| `requiredEmail` | Trim; required; max 254; `z.email()` |
| `requiredPhone` / `optionalPhone` | Trim; digits with optional leading `+`, spaces, brackets, dots, hyphens; 7–15 digits; max 30 characters |
| `optionalShortText(label)` | Trim; max 200; blank → `undefined` |
| `optionalMessage` / `requiredMessage` | Trim (whitespace-only = blank); max 2,000 |
| `requiredChoice(options, msg)` | Value must be one of the listed options |
| `requiredConsent(msg)` | Must be ticked; never pre-ticked (mailing list) |
| `optionalConsent` | Marketing opt-in; never pre-ticked, never required |

`src/components/forms/dates.ts`:

| Rule | Behaviour |
|---|---|
| `todayAtVenue()` | Today's date in `Europe/London` as `YYYY-MM-DD` (correct around midnight and BST changes) |
| `isCalendarDate(v)` | Real date only (`2026-02-30` rejected) |
| `futureDate(label)` | Required, real date, today or later at the venue; compared as strings so no timezone conversion moves the day |

Date inputs get `min` = today at the venue in the browser
(`useVenueToday`, no hydration mismatch); the schema re-checks on submit.

## Forms

### Mailing list (Home): `NewsletterForm` → `newsletter`

First name\*, Last name\*, Phone, Email\*, consent checkbox\* (starts
unticked). Live differences: live checkbox starts ticked; live phone has a
country picker.

### Contact (footer): `ContactForm` → `contact`

Name, Email\*, Phone Number, "Ask away!" (one-row textarea).

### Brochure request (Download our brochure, Pricing): `BrochureForm` → `brochure`

Fields as on the live Sonas widget (captured without submitting):

| Field | Label | Required | Rule |
|---|---|---|---|
| `firstName` | First name | yes | `requiredName` |
| `surname` | Surname | yes | `requiredName` |
| `email` | Email | yes | `requiredEmail` |
| `eventType` | Event Type ("Twilight Wedding", "Wedding") | yes | `requiredChoice` |
| `phone` | Contact Number | yes | `requiredPhone` |
| `message` | Anything else you’d like us to know? | no | `optionalMessage` |
| `marketing` | I would like to receive updates from The Rhynd on news, offers and events. | no | `optionalConsent` |

The page (Download our brochure / Pricing) is sent with the request. The live
widget marks the marketing box as required; here it is optional because
marketing consent cannot be a condition of the request. The brochure PDF
itself is not public (the live site sends it after the form), so success says
the request has been sent, not that a download follows.

### Viewing request (Book a viewing): `ViewingForm` → `viewingEnquiry`

| Field | Label | Required | Rule |
|---|---|---|---|
| `firstName`, `surname`, `email`, `phone` | First name, Surname, Email, Contact Number | yes | as above |
| `weddingTimeframe` | When are you looking to get married? | no | `optionalShortText` |
| `preferredDate` | Preferred viewing date | yes | `futureDate` |
| `heardAbout` | How did you hear about The Rhynd? (8 options, verbatim) | yes | `requiredChoice` |
| `message` | Anything else you’d like us to know? | no | `optionalMessage` |
| `marketing` | updates checkbox | no | `optionalConsent` |

The live form picks an "Appointment Date" from live availability. This site
cannot see availability, so it asks for a preferred date and says the team
will confirm. Success: "Your viewing request has been received and is
awaiting confirmation from the team. No appointment is booked until they
confirm it."

### Wild weddings enquiry: `WeddingEnquiryForm` → `weddingEnquiry`

Name\*, Surname\*, Email\*, Contact Number\*, Preferred Date(s) (free text),
Number of guests\* (whole number ≥ 1, sent as a number), Message, updates
checkbox. No maximum is enforced: the page states The Craw’s Nest caters for
up to 50, but the form is a general enquiry.

### Table request (Book a table, Café): `TableEnquiryForm` → `tableEnquiry`

| Field | Label | Required | Rule |
|---|---|---|---|
| `partySize` | Party size (1 guest … 10 guests, as the live widget) | yes | `requiredChoice` → number |
| `date` | Date | yes | `futureDate` |
| `time` | Time (09:00–15:30 slots from the live widget, no 11:30) | yes | `requiredChoice` |
| `name` | Name | yes | `requiredName` |
| `email` | Email | yes | `requiredEmail` |
| `phone` | Phone | no | `optionalPhone` |
| `message` | Message | no | `optionalMessage` |

The page repeats the live note "For bookings over 10 people, please email
cafe@therhynd.com." The live widget asks for contact details on a later step
that was not opened during extraction; name/email/phone/message are this
build's assumption. Opening days are shown as content, not enforced. Success:
"Your table request has been received and is awaiting confirmation from the
café. It is not a confirmed booking until they confirm it."

### Ticket request (event pages): `EventTickets` → `eventTickets`

| Field | Label | Required | Rule |
|---|---|---|---|
| `ticket` | Ticket type (a select when an event has several; fixed when it has one) | yes | non-empty |
| `quantity` | Number of tickets (1–30) | yes | whole number → number |
| `name` | Name | yes | `requiredName` |
| `email` | Email | yes | `requiredEmail` |
| `phone` | Phone | no | `optionalPhone` |
| `message` | Dietary requirements or questions | no | `optionalMessage` |

Also sent: event title, date and ticket price. The live checkout offered up to
the seats left (26 and 22 when checked); this form allows 1–30 and the team
confirms availability. A running total (price × quantity) is shown; the live
"ticket service fee" was the old platform's charge and is not added. No
payment is taken: the success message says the request "has been received
and is awaiting confirmation … no tickets are reserved until they do". From
the event's start date (and for events with no tickets listed) the section
shows "Tickets are not on sale" with "See other events", as on the live site.
Fallback email when sending is unavailable: cafe@therhynd.com (the address
the Events page gives for ticket questions).

## Submission states

| State | When | What the visitor sees |
|---|---|---|
| Ready | initial | the form |
| Invalid input | schema fails | inline errors, focus on the first; nothing sent |
| Submitting | in flight | "Sending…"; submit `aria-disabled`; repeat clicks/Enter ignored |
| Accepted | 2xx **and** `{ "ok": true }` | form-specific success message; form resets |
| Failure | 4xx/5xx, network, or 2xx without `ok: true` | error with email (and phone) alternative; values kept; provider field errors mapped to fields |
| Not configured | no endpoint | "Online sending isn’t connected yet, so your … has not been sent" + alternative (`cafe@therhynd.com` for tables, otherwise `weddings@therhynd.com` and the phone number) |

## Provider configuration

`src/lib/forms/formspree.ts` implements Formspree's JSON contract. One environment
variable per form (all public, inlined at build):

| Variable | Form |
|---|---|
| `NEXT_PUBLIC_FORM_CONTACT_ENDPOINT` | footer contact |
| `NEXT_PUBLIC_FORM_NEWSLETTER_ENDPOINT` | mailing list |
| `NEXT_PUBLIC_FORM_BROCHURE_ENDPOINT` | brochure (Download our brochure and Pricing) |
| `NEXT_PUBLIC_FORM_VIEWING_ENQUIRY_ENDPOINT` | Book a viewing |
| `NEXT_PUBLIC_FORM_WEDDING_ENQUIRY_ENDPOINT` | Wild weddings |
| `NEXT_PUBLIC_FORM_TABLE_ENQUIRY_ENDPOINT` | Book a table and Café |
| `NEXT_PUBLIC_FORM_EVENT_TICKETS_ENDPOINT` | Ticket requests on event pages |

Example: `NEXT_PUBLIC_FORM_VIEWING_ENQUIRY_ENDPOINT=https://formspree.io/f/abcdwxyz`,
then rebuild. Several variables may point at the same Formspree form; the
`_subject` field tells the requests apart.

To use another provider, write a `SubmissionAdapter` (`src/lib/forms/types.ts`)
and pass it as the default in `src/lib/forms/submit.ts`.

**Validation boundary.** Client-side rules can be bypassed; the receiving
service must enforce its own validation and spam protection. Submitted data
is never logged by this code.

## Adding or changing a field

Example: add "Number of guests" to the brochure form.

1. Schema: add `guests` with the same rule as `guestCount` in
   `wedding-enquiry/schema.ts`, and `guests: ""` in the defaults.
2. Component: `<TextField id={`${id}-guests`} label="Number of guests" type="number" inputMode="numeric" appearance="boxed" autoComplete="off" registration={register("guests")} error={formState.errors.guests} />`
3. Run `npm run check`, then submit the form empty and filled in the browser.
