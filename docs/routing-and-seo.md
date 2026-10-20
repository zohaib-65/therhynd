# Routing and SEO

## Route inventory

Source of truth: `sitePaths` in `src/lib/routes.ts` (the sitemap reads it). Paths keep the
live URLs, including the pricing page's original slug and the accented café
URL.

| Path | Page | Content file | Status |
|---|---|---|---|
| `/` | Home | `src/content/pages/home.ts` | built |
| `/what-we-do` | What we do | `what-we-do.ts` | built |
| `/wild-weddings` | Wild weddings (The Craw's Nest) | `wild-weddings.ts` | built |
| `/download-our-brochure` | Download our brochure | `download-our-brochure.ts` | built |
| `/copy-of-download-our-brochure` | Pricing | `pricing.ts` | built |
| `/book-a-viewing` | Book a viewing | `book-a-viewing.ts` | built |
| `/events-at-the-rhynd` | Events | `events-at-the-rhynd.ts` | built |
| `/stay-with-us` | Stay with us | `stay-with-us.ts` | built |
| `/rhynd-farmhouse` | Rhynd Farmhouse | `rhynd-farmhouse.ts` | built |
| `/rhynd-forest-rooms` | Rhynd Forest Rooms | `rhynd-forest-rooms.ts` | built |
| `/cafe` | Café | `cafe.ts` | built |
| `/book-a-table` | Book a table | `book-a-table.ts` | built |
| `/rhynd-fitness` | Rhynd Fitness | `rhynd-fitness.ts` | built |
| `/activities` | Activities | `activities.ts` | built |
| `/bacon-and-brakes` | Bacon and Brakes | `bacon-and-brakes.ts` | built |
| `/sustainability` | Sustainability | `sustainability.ts` | built |
| `/blog` | News, page 1 | `news.ts` + `src/content/blog.ts` | built |
| `/blog/page/2`, `/blog/page/3` | News, pages 2–3 | generated | built |
| `/post/<slug>` | 28 articles | `src/content/blog.ts` | built |
| `/weddings` | Weddings | `weddings.ts` | built |
| `/barn-weddings` | Barn weddings | `barn-weddings.ts` | built |
| `/awards` | Awards | `awards.ts` | built |
| `/history` | History | `history.ts` | built |

Every inventory route is built (21 pages plus `/blog/page/2`–`3` and 28
articles, and 21 event pages = 72 sitemap URLs). A crawl from `/` reaches
every one and finds no internal link to a missing page (testing.md, "Link
check").

| Path | Page | Content file | Status |
|---|---|---|---|
| `/events/<slug>` | 21 event pages (every event linked from the site, past and upcoming) | `src/content/events.ts` | built |

Found on the live site but **not part of the agreed inventory**: `/experiences`
(mobile menu only), `/experience-details`, `/gift-card`, `/online-ordering`,
`/reservations`, `/book-online`, `/google-ads`, other `/events/<slug>` pages
not linked from the site, and blog category pages. The two "Buy now" links
to the gift card page go to the live site (see "Live-only links" below).

## Dynamic routes

| Route | Params | Notes |
|---|---|---|
| `src/app/blog/page/[page]` | `generateStaticParams` → 2…n | `dynamicParams = false`; 12 posts per page (`POSTS_PER_PAGE` in `src/lib/news.ts`) |
| `src/app/post/[slug]` | `generateStaticParams` → every article in `src/content/blog.ts` | `dynamicParams = false`; unknown slugs are 404 |
| `src/app/events/[slug]` | `generateStaticParams` → every event in `src/content/events.ts` | `dynamicParams = false`; unknown slugs are 404; each page has schema.org `Event` data |

Both build to static HTML; nothing renders at request time.

## The café URL

The café page is `/cafe` (`src/app/cafe`, exported as `out/cafe.html`). The live
site used the accented `/café`, but `next dev` (Turbopack and webpack, Next
16.4.2) returns 404 for a route folder with an accent, so a single plain
`/cafe` page is used everywhere: it works in dev, in the static export and on
any host. There is no second `/café` page.

To keep the old inbound link working after launch, add a 301 from `/café`
(requests arrive as `/caf%C3%A9`) to `/cafe` at the host; a static export
cannot define redirects (see deployment.md).

## Live-only links

Content links to pages on this site with local paths (`/cafe`) and to PDFs
with `/documents/…`. Pages that run on the live platform and are not rebuilt
(`/gift-card`) are written as full
`https://www.therhynd.com/…` URLs.

`src/lib/links.ts` classifies a link: a path is internal, `/documents/…` is a PDF, anything else
(`mailto:`, `tel:`, other websites) is external. `SmartLink` renders internal paths with `next/link`, PDFs in a new tab with a
"(PDF, opens in a new tab)" hint, everything else as a normal link.

## Navigation

Edit `src/lib/navigation.ts` (both menus and the footer read it):

```ts
{ label: "Stay", href: "/stay-with-us", children: [
  { label: "Rhynd Farmhouse", href: "/rhynd-farmhouse" },
  { label: "Rhynd Forest Rooms", href: "/rhynd-forest-rooms" },
] },
```

Labels display in capitals via CSS; write them in normal case.

## Metadata

`src/lib/seo.ts` → `pageMetadata(meta)`:

- `<title>` and description: the live values, used verbatim (`title.absolute`).
- Pages with **no live meta description** (What we do, Download our brochure,
  Pricing, Book a table) use their own intro text.
- Articles: live meta description, or the article's own opening text
  (truncated at 160 characters) when the live post has none; `og:type`
  `article` with published/modified times.
- Canonical and `og:url`: `NEXT_PUBLIC_SITE_URL` + path.
- Open Graph title/description: the live `og:*` values where they differ from
  the page title/description (e.g. Stay, Forest Rooms).
- `og:image`: none of the live pages declare one; each page uses a photo from
  its own content (recorded in its `openGraph.image`), and each article uses
  its cover (the same WebP file the page shows).

## Sitemap and robots

- `src/app/sitemap.ts`: the 21 paths in `src/lib/routes.ts`, the 21 event pages, News pages 2–3 and
  all 28 articles (with `lastModified`).
- `src/app/robots.ts`: disallow all unless `NEXT_PUBLIC_ALLOW_INDEXING=true`.
- Both are generated at build time (`dynamic = "force-static"`).
