# Progress

Last updated: 20 October 2026.

## Status

| Work | Status |
|---|---|
| Extraction (21 pages, 28 posts, header/footer, widgets, events) | done |
| Phase 1: setup, tokens, header/footer, Home, contact + mailing-list forms | done |
| 16-page batch (below) incl. News and 28 articles | **done, awaiting review** |
| `/weddings`, `/barn-weddings`, `/awards`, `/history` | **done, awaiting review** |
| Link check: every header, dropdown, mobile and footer link click-tested; no internal link leads to a missing page | **done** (testing.md) |
| Final SEO/accessibility/performance pass, e2e tests in repo | not started |

## 16-page batch

| Route | Implementation | Content / image gaps | Desktop / mobile checked | Integration still needed |
|---|---|---|---|---|
| `/what-we-do` | complete | no live meta description (intro text used); card links added to the matching pages | yes / yes | — |
| `/wild-weddings` | complete | — | yes / yes | backend (wedding enquiry form) |
| `/download-our-brochure` | complete | brochure PDF not public (sent by the live widget) | yes / yes | backend (brochure form); brochure delivery |
| `/copy-of-download-our-brochure` | complete | as above; no price table exists on the live page | yes / yes | backend (brochure form) |
| `/book-a-viewing` | complete | live availability picker replaced by a preferred date | yes / yes | backend (viewing form) |
| `/events-at-the-rhynd` | complete | dates shown as listed (no year); "Buy Tickets" opens our own event pages | yes / yes | backend (event tickets form) |
| `/stay-with-us` | complete | — | yes / yes | — |
| `/rhynd-farmhouse` | complete | live Bookalet calendar replaced by a link | yes / yes | Bookalet (link verified) |
| `/rhynd-forest-rooms` | complete | as above | yes / yes | Bookalet (link verified) |
| `/cafe` | complete | — | yes / yes | backend (table form) |
| `/book-a-table` | complete | widget's contact step not captured; fields assumed | yes / yes | backend (table form) |
| `/rhynd-fitness` | complete | TeamUp timetable replaced by a link | yes / yes | TeamUp (link verified) |
| `/activities` | complete | — | yes / yes | — |
| `/bacon-and-brakes` | complete | — | yes / yes | — |
| `/sustainability` | complete | — | yes / yes | — |
| `/blog` (+ `/blog/page/2`–`3`, 28 `/post/<slug>`) | complete | 16 posts have no categories; 77 newsletter links corrected (content-and-assets.md) | yes / yes | — |

## Last four pages

| Route | Implementation | Content / image gaps | Desktop / mobile checked | Integration still needed |
|---|---|---|---|---|
| `/weddings` | complete | "Explore Wild Weddings" has no link on the live page; linked to `/wild-weddings` | yes / yes | backend (brochure form) |
| `/barn-weddings` | complete | two live testimonials repeat names used elsewhere ("Joanna and Sean", "Jayne and Drew"), kept as published | yes / yes | backend (brochure form) |
| `/awards` | complete | live typo "luck enough" kept | yes / yes | — |
| `/history` | complete | — | yes / yes | — |

## Source gaps and decisions

| Item | Handling |
|---|---|
| Brandon Grotesque (licensed) | Jost; swap if a licence is provided |
| Sonas Events forms (brochure, pricing, viewing, wild weddings) | Rebuilt as native forms with the live fields; marketing opt-in optional (live widget requires it) |
| Brochure PDF | Not publicly accessible; the request is sent to the team |
| Bookalet calendars (Farmhouse, Forest Rooms), TeamUp (Fitness) | Booking panels linking to the verified provider pages; no simulated availability |
| Wix table widget (Book a table, Café) | Table request form with the live party sizes (1–10) and times; "over 10 people, email" note kept |
| Gift card "Buy now" | Opens an email to cafe@therhynd.com, subject "Rhynd vouchers" (22 Oct 2026, on request: no links to the old site). Change the address in `src/data/pages/cafe.ts` and `events-at-the-rhynd.ts` |
| Data folder (22 Oct 2026, on request) | All data in `src/data/` (pages, articles, events, images list, site details, menus); `src/lib/` holds code only; two article links that showed the old site's address now read "our blog" |
| Event detail pages | The 21 events linked from the site are rebuilt at `/events/<slug>`, laid out like the live page (fonts substituted, see design-system.md). Checkout opens a ticket request form (no payment; the team confirms). Not copied: the Wix ticket service fee line, the "Membership Offer" box on past events (Wix memberships), the Google map (OpenStreetMap instead, no cookies) |
| Header (live site changed 20 Oct 2026) | Rebuilt to the new menu: Home, Weddings, Events, Stay, Café, Things to do, More. The live mobile menu also links "Things to do" to a new `/things-to-do` page and adds `/experiences`; neither page is part of this rebuild, so "Things to do" opens its list instead |
| Favicon | `/favicon.ico` (16/32/48px) added beside the 192px icon and Apple touch icon, all from the live logo |
| Live typos kept verbatim | "we couldn't recommends" (Café), "Explore wedding accomodation" (Wild weddings), "souring all our food" (Sustainability), unmatched quote mark in Margaux's testimonial |
| "How we care for the estate" (Home) has no live link | Linked to `/sustainability` |
| Pages with no meta description (What we do, Brochure, Pricing, Book a table) | First intro sentence / page text used |
| No `og:image` on any live page | A photo from each page's own content; articles use their cover |
| Alt text | Written for all 427 images the site uses |
| Article links (Mailchimp tracking, dead clay-lessons page, Wix auto-links) | Rewritten or unlinked (77 changes, summarised in content-and-assets.md) |
| Duplicate photos | Some photos appear twice (e.g. Fitness gallery); kept as on the live site |
| Café/Events film | 22 MB 480p local copy; no captions available |
| Mobile-only "Experiences" link, gift card, online ordering, reservations, book online pages | Not built; awaiting decision |
| Clean-up (20 Oct 2026, on request) | One WebP per photo (was 7 sizes); page content, image list and articles moved to `.ts` (articles were Markdown); unit tests and Vitest removed; code moved under `src/` (`features/` merged into `components/`, `config/` into `lib/`); unused images, code and content fields removed; image script, `sharp`, `reference/`, `src/data/source/` and `.cache/` deleted |

## Repository notes

- `public/images` ≈ 63 MB (389 WebP files, one per photo, all used),
  `public/videos` 25 MB, `public/documents` 2 MB. Consider Git LFS before
  committing.
- The image script was removed on request; new or replaced photos are
  prepared by hand (content-and-assets.md).

## Next

1. Connect the backend in `src/lib/forms/submit.ts` (one function) and test
   one real submission per form.
2. Add the Playwright checks (routes, link check, interactions) as
   `npm run test:e2e`; screen-reader pass.
3. Decide on the live-only pages (gift card, experiences, online ordering).
