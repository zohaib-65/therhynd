# Testing

Latest run: 20 October 2026, after moving the articles to `.ts` files and
removing the unit tests (on request). Every check below was re-run on that
build. macOS, Node 24.20.0,
headless Chrome driven by Playwright scripts (kept outside the repository).
No live form was submitted; every request in the tests was
intercepted in the browser.

## Commands

| Command | Result |
|---|---|
| `npm run lint` | pass, 0 errors, 0 warnings |
| `npm run typecheck` | pass |
| `npm run build` | pass, 78 static outputs: 21 page routes, 21 `/events/<slug>`, `/blog/page/2`–`3`, 28 `/post/<slug>`, not-found, sitemap, robots, icons |
| `npm run check` | pass (all of the above in sequence) |

## Unit tests

The Vitest unit tests (form rules, UK dates, Formspree adapter; 41 tests, all
passing on their last run) were removed from the repository on request,
together with Vitest. Form rules are still exercised by the browser checks
below; `npm run check` is now lint, typecheck and build.

## Browser checks on `npm run dev`

Run in Chrome against a freshly started dev server (20 Oct 2026, after the
new header, event pages and favicon). A running dev server must be restarted
after folders move, and after `@theme` tokens change in `globals.css` (it
kept serving the old theme until restarted). The test browser runs with
software WebGL (`--use-angle=swiftshader`) like a normal desktop browser,
because the OpenStreetMap embed needs WebGL; the gallery suite runs without
it (software rendering slows the lightbox's closing animation past the
test's 300ms wait).

- **Crawl**: all 72 sitemap URLs plus every internal link found on them,
  desktop 1440 and iPhone 13 (144 page loads): every page 200 with one `h1`;
  no same-origin request with status 400 or above, no failed requests, no
  console or page errors. All 382 linked files (images, video posters, PDFs)
  exist.
- **Dev server terminal**: 1,438 requests answered 200; the one 404 is the
  deliberate `/no-such-page` test of the not-found page.
- **Header and links**: 53 clicks land on the right page or open the right
  list: every header item, every dropdown item (including "Things to do" and
  "More", which open their lists), the logo, the footer links and every
  mobile menu item and sub-item; 72 pages crawled, 89 anchors, 72 sitemap
  URLs; no console errors. Live vs local screenshots at 1440 (home, a
  sub-page, two open dropdowns) and on iPhone 13 match; item widths at 1280
  are within 1px of the live ones.
- **Suites**: interactions 30/30, 51/51, 58/58; events 66/66 (below); no
  overflow on 72 URLs at 360/768/1024.
- **Favicon**: `/favicon.ico` (16/32/48px) returns 200 and every page links
  it with the 192px icon and the Apple touch icon.
- **Forms, loaders and toasts** (22 Oct 2026, 86 checks, desktop and
  iPhone 13): all seven forms (footer contact, mailing list, brochure,
  viewing, wild weddings, table, event tickets): an empty submit flags the
  fields and shows no toast; a valid submit spins the button and shows a
  "Sending your …" toast, which turns into the "isn’t connected yet" toast;
  the button is ready again, the values are kept, no console errors; no
  network request is made by any form.
- **Browser extensions** (22 Oct 2026): extensions such as ColorZilla add
  attributes to `<body>` (`cz-shortcut-listen`) before React loads, which
  React reported as a hydration mismatch. `<html>` and `<body>` now carry
  `suppressHydrationWarning` (it ignores attribute differences on those two
  elements only). Simulating the extension on 5 pages × desktop/iPhone: 10
  hydration errors without it, none with it.

## Browser checks on the built `out/`

**Every route** (144 checks: all 72 sitemap URLs × desktop
1440 and iPhone 13): status 200 on direct load, a single `h1`, no horizontal overflow, no
broken images, nothing loaded from `static.wixstatic.com` or other Wix
hosts, no raw Markdown or Wix URLs in the visible text, no console errors.

**Overflow sweep**: all 72 URLs at 360, 768 and 1024px. None overflow.

**Files and unused code**:
- Images: each of the 389 WebP files in `public/images` is referenced by the
  build and every referenced file exists (including `og:image` tags); pages
  load one file per photo (no `srcset`). Both videos and all 4 PDFs are
  linked.
- No `static.wixstatic.com` URL anywhere in `src/data/`, the code or `out/`.
- `npx knip` (unused files, exports, dependencies): nothing, apart from one
  false positive: `@tailwindcss/turbopack` (the CSS loader named in
  `next.config.ts`).

**Link check** (crawl from `/` with real clicks):
- Crawl: 72 pages reached, 76 internal link targets, all 200 and none the
  not-found page; 89 in-page anchors exist on their target page; the 4 PDFs
  are served as `application/pdf`; all 72 sitemap URLs load. No link to a
  live `/events/` page remains.
- Desktop header: 11 top items, 10 dropdown items (Home › What we do, Awards,
  History; Weddings › Barn weddings, Wild weddings, Download our brochure,
  Pricing, Book a viewing; Stay › Rhynd Farmhouse, Rhynd Forest Rooms;
  Café › Book a table) and the logo, each clicked and landing on the right
  page and `h1`.
- Footer: 8 page links clicked from a deep page; phone, email, social links
  and the T&Cs PDF checked as links.
- Mobile menu (iPhone 13): all 21 items and sub-items tapped; each lands on
  the right page and the menu closes.
- External links: every one responds below 400 except Facebook (the page
  link and the event "Share" links), which returns 400 to scripted requests;
  the page opens normally ("The Rhynd | Facebook") in a real Chrome window.
- Console errors: none.

**Event pages** (66 checks, desktop and iPhone 13): all 14 Events
"Buy Tickets" links are local and open the event page; an upcoming event
shows title, date and time, address, one local WebP photo, ticket type,
price and sale end; "Buy Tickets" scrolls to Tickets; the request form stays
hidden until Checkout; Checkout with 0 tickets shows "Pick tickets to proceed
to the checkout."; Quantity offers 0–30; picking 3 makes the Total £285.00
and clears the message; Checkout opens the form showing "3 × General
Admission (£95.00 each)" and moves focus to that summary; an empty request
flags name and email and sends nothing; a valid request with no endpoint says
it was not sent (no fake success); About is collapsed at "Life comes in…",
Read More shows everything and Read Less collapses it; the map and three
labelled share icons are present; "Other dates" lists and opens the 3 sibling
dates; a past event shows "Tickets are not on sale" in the header and no
Tickets section, is collapsed after its first menu item and expands to the
full menu, and "See other events" returns to the Events page; article links
to events stay on this site; no page errors.

The event layout was compared with the live pages (wine safari 13, chef's
table 14 Nov, Burns Night) side by side at 1440 and on iPhone 13, and every
event's "About" text and "Read More" cut point was checked against the live
page.

**New pages** (58 checks, desktop and iPhone 13): Barn weddings testimonials
(12 distinct quotes via Next, wrap-around both ways, dot selects slide, dots
fit the screen, local photos); related posts link to real articles; brochure
forms on Weddings and Barn weddings mark the required fields on an empty
submit, focus First name and send nothing; Weddings "Explore Wild Weddings"
reaches `/wild-weddings`; galleries on History, Weddings and Barn weddings
open the lightbox with a loaded photo and close on Escape; Awards shows 7
loaded award photos.

**Café URL**: `/cafe` returns the café page on the static export and on
`next dev` (a fresh Turbopack and a webpack dev server both returned 404 for
the accented `/café` folder, which is why it is not used); menu navigation
lands on `/cafe`; refresh works.

**Interactions** (51 checks, all pass):
- Farmhouse gallery: 37 tiles; keyboard opens the lightbox on the right
  photo; ArrowRight/Previous change photo; the photo is a local WebP; Escape
  closes and focus returns to the tile.
- Forest Rooms: "Book now" jumps to `#availability`; T&Cs link is the local
  PDF and is served as `application/pdf`; the narrow gallery keeps its 568px
  live width.
- Bookalet booking link opens the provider in a new tab; "Private dining" is a
  mailto to events@.
- Wild weddings: carousel Next shows "Photo 2 of 4"; empty submit gives five
  errors (one each) and focuses Name; fractional guests rejected;
  "not connected" message.
- Book a viewing: date `min` equals today at the venue; past date rejected;
  8 "heard about" options; Craw's Nest note with events@.
- Book a table: party sizes 1–10 and 13 time slots as on the live widget;
  "not connected" message offers cafe@therhynd.com.
- Pricing: event types match the live form; marketing box starts unticked.
- Café: menu PDF local and served; vouchers "Buy now" opens an email to
  cafe@therhynd.com.
- Events: 14 "Buy Tickets" links to this site's event pages, each 200; testimonial Next
  changes the quote.
- Navigation: Stay dropdown → Forest Rooms (client navigation); Café link →
  `/cafe`; refresh.
- News: 12 cards on pages 1 and 2; a card opens its article; article images
  are local.
- No runtime errors.

**Phase 1 regression** (30 checks, all pass): header dropdowns (hover, focus,
Escape, ArrowDown), skip link, mobile menu, mailing-list and footer form
validation and "not connected" states, 404 page, no duplicate ids.

**Submissions with endpoints configured** (October 2026, before the
Formspree adapter was removed; separate build with dummy URLs, requests
intercepted):
- Viewing: posts trimmed data with the date exactly as entered; success says
  "received and is awaiting confirmation … No appointment is booked until
  they confirm it"; form resets.
- Table: a provider 500 shows the failure and keeps values; then success
  posts `partySize` as a number and says it is awaiting confirmation.
- Brochure (Pricing): posts `page: "Pricing"` and the opt-in; success message.
- Wild weddings: posts `guests` as a number; success message.
- Phase 1 (mailing list, contact): double-submit sends one request; HTML 200
  not treated as success; provider field errors mapped (14 checks).

## Visual comparison

Each batch page was compared with the live site side by side at 1440px
(full page) and checked on iPhone 13. Fixed during review: heading weights
(light vs medium per live page), panel and intro text widths, What we do card
proportions, narrow gallery width, "Useful information" heading size, overlay
card padding, event card label position.

Remaining, known differences:
- Font: Jost stands in for Brandon Grotesque (line breaks differ slightly).
- Third-party widgets are replaced: Sonas forms by native enquiry forms;
  Bookalet calendars and the TeamUp timetable by booking panels linking to
  the provider; the Wix table widget by a table request form.
- Events "Plates plant pines" has a 40% ink layer over the photo for text
  contrast; the live site has none.
- News cards show a full date ("8 Oct 2026") instead of the live relative
  dates ("4 days ago"); News page 1 has a visually hidden `h1`.
- Phone layouts reflow (the live site serves a scaled 320px layout).
- Header has no "Log In" and no Wix chat/consent widgets.

No similarity percentage is claimed.

Fixed during the 20 October review:
- 9 articles printed their captioned photos as raw Markdown with Wix URLs
  (`ArticleBody` now renders 27 figures with captions).
- Long URLs (Suppliers we love) and 12 testimonial dots (Barn weddings)
  overflowed on phones.
- Weddings "Choose your setting" cards (centred lead-size copy), overlay
  card width (628px, measured), form heading size; Barn weddings "The
  details" (no panel, lead-size text) and testimonial layout (card left,
  photo right); History line break under "More recent times".

The live-site screenshots used for comparison (since deleted) showed Wix
Pro Gallery collages before the gallery finished its layout, so their bottom
photos looked about 100px shorter. The live DOM, checked again on
20 October, matches the sizes used here.

## Known limitations

- No screen-reader session (VoiceOver/NVDA) has been run; checks are DOM/ARIA
  based plus keyboard paths.
- The Playwright scripts are not yet in the repository (planned as
  `npm run test:e2e`).
- The café film has no captions (none exist on the live site).

## Manual review steps

1. `npm run build && npm run preview`, open http://localhost:3000.
2. Visit each route in the inventory (routing-and-seo.md) and resize from
   320px to 1920px.
3. Open a gallery photo, use the arrow keys, press Escape.
4. Submit each form empty, then valid: without endpoints you must see "isn’t
   connected yet", never a success message.
5. Open `/cafe` directly and refresh.
