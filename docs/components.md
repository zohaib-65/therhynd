# Components

shadcn/ui primitives in `src/components/ui/` (button, input, textarea, label,
checkbox, field, separator, sheet, dialog, native-select) are generated code
restyled through the design tokens; see design-system.md. Everything below is
custom.

## How content pages are composed

Content pages (`src/data/pages/<page>.ts` → `sections`) are rendered by
`src/components/sections/PageSections.tsx`, a Server Component that maps each
section `type` to one component and resolves image ids from `src/data/images.ts`.
Section types and their fields are defined (and validated) in
`src/lib/content/sections.ts`. Home keeps a hand-composed page (`src/app/page.tsx`).

| Section `type` | Component | Used on |
|---|---|---|
| `intro` | `TextSection` with an `h1` | every content page |
| `text` | `TextSection` | Wild weddings, Forest Rooms, Farmhouse, Fitness, vouchers, Our story |
| `banner` | `Banner` (image, optional silent video) | Sustainability, Bacon and Brakes, Farmhouse, Forest Rooms |
| `imageBand` | `ImageBand` | Events ("Plates plant pines") |
| `split` | `SplitSection` + `ContentStack` | Stay, Sustainability, Forest Rooms, Events |
| `overlayCard` | `OverlayCardSection` | Café ("Who we are"), Forest Rooms ("About"), Weddings |
| `features` | `FeatureGrid` | What we do, Farmhouse, Fitness (services, team), Weddings (`align: "center"`), Awards |
| `gallery` | `ImageGallery` + `Lightbox` | most pages |
| `carousel` | `ImageCarousel` | Wild weddings |
| `infoTable` | `InfoTable` | Wild weddings ("Useful information", `panel`), Barn weddings ("The details", `plain`) |
| `logos` | `LogoRow` | Events ("As featured in") |
| `video` | `VideoPlayer` | Café, Events |
| `events` | `EventGrid` | `events` (`title`, `date`, `location`, `ribbon`, `image`, `href`), `label` | "Buy Tickets" opens the event's page on this site. |
| `testimonials` | `TestimonialCarousel` | Events (`photoSide: "left"`), Barn weddings (`photoSide: "right"`, 12 quotes) |
| `form` | one of the enquiry forms | Brochure, Pricing, Book a viewing, Book a table, Café, Wild weddings, Weddings, Barn weddings |
| `relatedPosts` | `NewsCard` grid (`slugs` must exist in `src/data/blog.ts`) | Barn weddings |
| `booking` | `BookingPanel` | Farmhouse, Forest Rooms (Bookalet), Fitness (TeamUp) |

## Layout (`src/components/layout/`)

- **`SiteHeader`** (server): sticky header; desktop = logo + 980px nav band;
  phones/touch = centred logo + menu button.
- **`DesktopNavigation`** (client): the live menu since 20 Oct 2026: Home,
  Weddings, Events, Stay, Café, Things to do, More, with rules between items
  and cream behind the current section (parent included when a sub-page is
  open). Dropdowns open on hover and keyboard focus; Escape closes and returns
  focus to the item; ArrowDown reopens and focuses the first sub-page;
  `aria-current="page"`. "Things to do" and "More" have no page: they are
  buttons that open their list.
- **`MobileNavigation`** (client): full-screen cream sheet (Radix Dialog) with
  chevron toggles for sub-pages; "Things to do" and "More" open their list
  when tapped.
- **`SiteFooter`** (server): contact form, address/socials/terms PDF, links.

## Sections (`src/components/sections/`)

| Component | Key props | Notes |
|---|---|---|
| `ContentStack` | `heading`, `headingAs`, `headingSize` (`lg` 56 / `md` 45 / `sm` 38 / `xs` 22), `paragraphs`, `actions`, `actionsPosition` (`before-heading` / `after-heading` / `end`), `align`, `proseClassName` | The repeated "title, copy, buttons" column. |
| `TextSection` | ContentStack props + `width` (`sm`–`xl`, copy measure), `tone`, `id` | Heading spans the 980px column; only the copy is narrowed. |
| `SplitSection` | `image`, `imageSide`, `tone`, `bordered`, `style`, `panelClassName`, children | Layout only: half photo, half panel. `bordered` draws the live site's 1px ink frame. |
| `OverlayCardSection` | ContentStack props + `image`, `cardTone`, `cardClassName` | Card over a full-bleed photo. |
| `FeatureGrid` | `items` (`image`, `title`, `subtitle`, `paragraphs`, `href`, `action`), `layout` (`media-left` / `media-top`), `columns` (2/4), `panel`, `imageAspect` ("286/335"), `cardTone`, `align` (`start` / `center`: centred lead-size copy, underlined title) | Image cards. |
| `InfoTable` | `heading`, `rows` (`label`, `items` or `paragraphs`), `action`, `variant` (`panel`: blush panel, small text; `plain`: no panel, lead-size text) | Description list; stacks on phones. |
| `ImageBand` | `image`, `heading`, `paragraphs` | White text over a photo, with a 40% ink layer for contrast. |
| `LogoRow` | `label`, `logos` | Press logos. |
| `EventGrid` | `events` (`title`, `date`, `location`, `ribbon`, `image`, `ticketUrl`), `label` | "Buy Tickets" opens the live ticket page in a new tab. |
| `TestimonialCarousel` (client) | `testimonials` (`quote`, `name`, `image`), `label`, `heading`, `photoSide` (`left` / `right`) | Prev/next + dots (dots wrap on phones), no autoplay. `right`: card overlaps the photo, arrows at the section edges from 1280px. |
| `BookingPanel` | `heading`, `paragraphs`, `href`, `label`, `provider`, `id` | Link to a provider's booking page in place of its widget. |
| `SectionHeading` | `heading` (`text`, `href`, `light`), `as`, `size` | Underlined link when `href`; medium weight unless `light`. |
| `Prose` | `paragraphs` (rich blocks) | Paragraphs, subheadings, lists, quotes; inline Markdown. |
| `InlineText` | `text` | Inline Markdown (bold, italic, links) → React; links via `SmartLink`. |
| `SmartLink` | `href`, anchor props | next/link for site pages, new tab for PDFs, plain link otherwise. |
| `ButtonLink` | `link`, `size` (`cta` / `tile`) | Square dark button for any destination. |
| `HeroSection`, `IntroSection`, `ImageTiles`, `CardSection` | see Home | Home page sections. |

Example (inside a page or a new section type):

```tsx
<SplitSection image={getImage("sustainability-02")} imageSide="left" tone="paper" bordered>
  <ContentStack heading={{ text: "Home grown and locally sourced", light: true }} headingSize="sm"
    paragraphs={[{ text: "We are firm believers…" }]} className="mx-auto max-w-[31rem]"
    proseClassName="mx-auto max-w-[24.5rem]" />
</SplitSection>
```

## Media (`src/components/media/`)

| Component | Notes |
|---|---|
| `ResponsiveImage` | `image`, `fill`, `preload`, `eager`, `alt`, `className`. `next/image` (unoptimized) with the file's dimensions and focal point: `fill` covers its sized container, otherwise it scales to the container width. Lazy unless `preload` / `eager`. |
| `ImageGallery` (client) | `items` (`image`, `box`), `canvas` (`w`, `h`), `label`. From 768px each tile sits at its live collage position (percentages of the canvas; the canvas keeps its live width, e.g. 568px on Forest Rooms); two columns on phones. Tiles are buttons labelled "Open photo n of N: alt". |
| `Lightbox` (client) | Full-screen viewer (Radix Dialog): focus trapped, Escape/close button, arrow keys and buttons, counter; focus returns to the tile that opened it. |
| `ImageCarousel` (client) | One photo at a time, scroll-snap, prev/next, "Photo n of N"; no autoplay. |
| `Banner` | Wide photo; optional muted looping video hidden from assistive tech and not shown with `prefers-reduced-motion`. |
| `VideoPlayer` | Native controls, `preload="none"`, poster from `src/data/images.ts`; no captions are available for the source film. |

## Forms

Shared field components in `src/components/forms/`: `TextField` (text, email,
tel, date, number), `TextareaField`, `SelectField` (shadcn NativeSelect,
registered with RHF), `CheckboxField` (Controller), `FieldShell`,
`SubmitButton` (spinner while sending); results are sonner toasts (`src/components/ui/sonner.tsx`); appearances `underline`, `outlined`, `boxed`.

Site forms in `src/components/forms/`: `contact/`, `newsletter/`, `brochure/`,
`viewing/`, `wedding-enquiry/`, `table-enquiry/` (schema + component each),
plus `fields.ts`, `dates.ts`, `use-form-submission.ts`, `use-venue-today.ts`,
`status-messages.tsx`. See forms-and-validation.md.

## Events (`src/components/events/`, `src/app/events/[slug]`)

| Component | Notes |
|---|---|
| Event page | Laid out like the live event page (measured at 1440 and on iPhone 13): square photo beside date · venue, title and "Buy Tickets" (photo 16:9 on top on phones, title before the date); Time & Location with "Other dates" boxes and a rule below them; About the Event; Tickets; map; "Share This Event" icons. Past events show "Tickets are not on sale" and "See other events" instead of the button and have no Tickets section. |
| `EventAbout` / `ReadMore` | "About the Event" blocks with the live spacing; with `preview`, collapsed after that many characters with "Read More >" / "Read Less >". |
| `EventTickets` (client) | `title`, `date`, `tickets`. Ticket type (and sale end), price, Quantity 0–30, Total, "Checkout". Checkout with no tickets shows "Pick tickets to proceed to the checkout."; otherwise it opens the ticket request form (no payment). `OnSale` switches header button and section off from the event day. |
| `EventMap` | OpenStreetMap embed (979×314 desktop, 16:9 phones) where the live page shows a Google map; no key, no cookies; needs WebGL in the browser. |
| `ShareEvent` | Facebook, X and LinkedIn share links with the live icons. |

## News (`src/components/news/`)

| Component | Notes |
|---|---|
| `NewsIndex` | Grid of `NewsCard`s plus page links (`/blog`, `/blog/page/2`, …); visually hidden `h1`. |
| `NewsCard` | Cover, category, title (the card's single link), excerpt, date, reading time. |
| `ArticleBody` | `blocks` | Article body blocks → React: paragraphs, subheadings, lists, quotes, rules, images with captions (`figure`/`figcaption`). Long URLs wrap. |

Data: `src/lib/news.ts` (`getAllPosts`, `getPost`, `getPostsPage`, `pageCount`,
`formatPostDate`).
