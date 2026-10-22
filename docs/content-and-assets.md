# Content and assets

## Folders

All of the site's data is in one folder, `src/data/`. The site reads only
these files (and `public/`); nothing is fetched from another website.

| Path | Contents | Edit by hand? |
|---|---|---|
| `src/data/pages/home.ts` | Home content (its own schema, `homePageSchema`) | yes |
| `src/data/pages/<page>.ts` | Content pages: `metadata` + ordered `sections` (schema in `src/lib/content/sections.ts`) | yes |
| `src/data/pages/news.ts` | News index metadata | yes |
| `src/data/blog.ts` | 28 articles in one array (details + body blocks) | yes |
| `src/data/images.ts` | Every image the site uses: id, file, size, alt text, focal point | yes |
| `src/data/events.ts` | 21 events (see "Events") | yes |
| `src/data/site.ts` | Name, site address (`url`), postal address, map position, phone, emails, social links, terms PDF | yes |
| `src/data/navigation.ts` | Header menu (with dropdowns) and footer links | yes |
| `public/images/` | One WebP file per photo (389 files, ≈63 MB) | yes (see "Adding or replacing an image") |
| `public/videos/` | `rhynd-cafe-film-480p.mp4` (22 MB, Café/Events), `bacon-and-brakes-720p.mp4` (3.7 MB) | yes |
| `public/documents/` | Event space T&Cs, café menu, café wine list, Forest Rooms T&Cs (PDFs from the live site) | yes |

Every file in `public/` is used by the site (checked on 20 October 2026
against everything the build references; see testing.md).

## Content page files

```ts
import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: { title: "SUSTAINABILITY | The Rhynd", description: "…", path: "/sustainability",
              openGraph: { image: "sustainability-01" } },
  sections: [
    { type: "banner", image: "sustainability-01", height: 463 },
    { type: "intro", heading: "Sustainability", paragraphs: [{ text: "…" }], width: "lg" },
    { type: "split", image: "sustainability-02", imageSide: "left", tone: "paper", bordered: true,
      heading: { text: "Home grown and locally sourced", light: true }, paragraphs: [{ text: "…" }] },
  ],
} satisfies ContentPageInput;
```

- Reorder, add or remove sections freely. `satisfies` makes the editor and
  `npm run typecheck` flag a wrong field or value as you type; the build
  also validates every field (and image id) and fails with the file and path.
- Text blocks: `{ "text": "…" }`, `{ "heading": "…" }` (short bold line),
  `{ "list": ["…"] }`, `{ "quote": "…", "cite": "…" }`. Strings are inline
  Markdown: `**bold**`, `*italic*`, `[label](href)`. Escape a literal `*` as
  `\\*` (as in the Book a viewing note).
- Links: site paths (`/cafe`, `/rhynd-forest-rooms#availability`), PDFs
  (`/documents/cafe-menu.pdf`, open in a new tab), `mailto:`, `tel:` or other
  websites. Pages that only exist on the live platform (event tickets, gift
  card) are full `https://www.therhynd.com/…` URLs.
- Wording is verbatim from the live site, including live typos (e.g. "we
  couldn't recommends", "Explore wedding accomodation", "souring all our
  food").

### Adding a page

1. Write `src/data/pages/<page>.ts` using the section types above.
2. Import it in `src/lib/content/pages.ts` (add to `contentPages`).
3. Create `src/app/<route>/page.tsx` (copy any content route, change the key).
4. Add its images (see below) and the path to `sitePaths` in
   `src/lib/routes.ts` (the sitemap reads it); run `npm run check`.

## Articles

All articles are in one file, `src/data/blog.ts`: an array typed with
`satisfies PostInput[]` (the editor flags mistakes), validated in
`src/lib/news.ts` at build time. One entry:

```ts
{
  title: "Top five barn wedding venues in Fife",
  slug: "top-five-barn-wedding-venues-in-fife",
  date: "2026-10-08T11:47:48.225Z",
  updated: "2026-10-08T11:47:48.225Z",
  author: "Alice",
  categories: [],
  tags: ["barn weddings", "Weddings", "wild weddings"],
  readingTime: "2 min read",
  excerpt: "…",
  metaTitle: "…",
  metaDescription: "…",
  cover: "post-top-five-barn-wedding-venues-in-fife-01", // image id: card + share image
  body: [
    { text: "A paragraph with **bold**, *italic* and [a link](/weddings)." },
    { heading: "A subheading" },
    { list: ["First point", "Second point"] },              // ordered: true for 1, 2, 3
    { image: "post-supper-clubs-at-the-rhynd-with-three-tam-01", caption: "Caption under the photo." },
    { quote: "A quotation." },
  ],
},
```

Body blocks: `text`, `heading`, `list` (`ordered` optional), `quote`,
`rule: true` (a divider) and `image` (an id from `src/data/images.ts`;
optional `alt` to override the image's own alt text, optional `caption`).
Strings are inline Markdown. An unknown image id fails the build.

Links: the live articles were Mailchimp newsletters. On 20 October 2026
every external link was resolved and rewritten (77 changes): tracking links
replaced by their destination (local paths for pages on this site);
"Please book a slot" links that ended at the clay centre's removed lessons
page (404) now go to https://www.scottishclayshootingcentre.co.uk/; four
links Wix had auto-generated from ordinary words (`flesh.book`, `day.read`,
`oscars.you`) or a broken URL (`blog.DECEMBER`) were removed, keeping the
text; one tracking link with a malformed target now points to
`/sustainability`, the page it named.

To add an article: paste a new entry into the array in `src/data/blog.ts`,
add its images (below) and set `cover`; rebuild. The News index, pagination, `/post/<slug>`
and the sitemap pick it up automatically.

Known gap: 16 of 28 posts have empty `categories` (the live posts showed none
on their pages).

## Events

`src/data/events.ts` lists the 21 events linked from the site (copied from
the live event pages, October 2026): `slug`, `title`, `summary` (optional),
`shortDate`, `location`, `date` and `address` as shown, `start`/`end`
(ISO with offset), `image` (id), `about`, `preview` (optional), `tickets`
(`name`, `price`, `saleEnds`; empty = not on sale) and `otherDates` (slugs).

`about` mirrors the live rich text: each entry is one block, blocks are one
blank line apart; a string is a paragraph, a `string[]` is lines directly
under each other (`""` = empty line, e.g. a menu: `["Canapés", "· Braised
venison tartlet…"]`), `{ image }` is a photo. Strings are inline Markdown.
`preview` is the number of characters (spaces not counted) shown before
"Read More >", taken from the live page (397 Burns Night, 237 spring larder,
344 past chef's tables, 758 upcoming chef's tables); omit it to show
everything. The text of all 21 events was re-read from the live pages on
20 October 2026 and matches word for word. Each becomes `/events/<slug>`. To add an event, add an
entry and link to `/events/<slug>` (e.g. from the Events page grid).

## Image list

`src/data/images.ts` has one entry per image id:

```ts
"cafe-05": { src: "/images/cafe/cafe-05.webp", width: 1280, height: 1600,
             alt: "Cheeseburger with lettuce in a glossy bun, served with a pot of chips" },
```

- `src` is the one file every screen size loads.
- `width`/`height` are that file's pixels; they give the aspect ratio so the
  browser reserves space before the image loads.
- `objectPosition` (optional, default `"center"`) is the crop focal point,
  e.g. `"50% 30%"`.
- Several ids may share one file (the same photo on two pages).

Alt text was written for all 427 images by looking at each photo and
describing only what is visible (most live images had camera filenames or
nothing as alt).

## Adding or replacing an image

1. Save the photo as WebP (quality about 80) at
   `public/images/<dir>/<name>.webp`: 1280px wide for most images, 1920px
   for large or full-width photos. For example with ImageMagick:
   `magick photo.jpg -resize "1280x>" -quality 80 public/images/cafe/cafe-30.webp`.
2. Add an entry to `src/data/images.ts` with `src`, the file's `width` and
   `height`, and `alt`; use its id in page content or articles.
3. To replace a photo, overwrite the file and update `width`, `height` and
   `alt`. Then `npm run build`.

Images crop with `object-fit: cover`, so any aspect ratio works. Gallery
tiles keep their live positions; a very different aspect ratio crops more.
