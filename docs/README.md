# The Rhynd website: documentation

A static rebuild of the public website at https://www.therhynd.com (The Rhynd,
Leuchars, Fife). Content, images and layout were extracted from the live site
in October 2026 and are served from this repository; no page loads anything
from the old site at runtime.

**Current status:** every route in the inventory is built: Home, the 16-page
batch, Weddings, Barn weddings, Awards, History, and News with 28 articles
(51 URLs). Every header, dropdown, mobile-menu and footer link has been
click-tested on the static build. Awaiting review. See
[progress.md](progress.md).

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16.4 (App Router), static export to `out/` |
| Language | TypeScript 5.9, `strict` |
| Styling | Tailwind CSS 4.3 with brand tokens in `src/styles/globals.css` |
| UI primitives | shadcn/ui 4.22 (Radix), restyled to the brand |
| Icons | lucide-react 1.59 |
| Forms | React Hook Form 7.90 + Zod 4.6 via @hookform/resolvers 5.9 |
| Form delivery | Formspree-compatible adapter, seven forms (endpoints not yet configured) |
| Content | Typed `.ts` content files (pages, articles, events, images) validated with Zod |
| Images | One local WebP file per photo; `next/image` unoptimized |
| Checks | Lint, typecheck, build; Playwright browser checks (see testing.md) |

## Documents

| File | What it covers |
|---|---|
| [setup.md](setup.md) | Requirements, install, environment variables, commands |
| [architecture.md](architecture.md) | Folders, content flow, Server/Client boundaries, key decisions |
| [design-system.md](design-system.md) | Fonts, colours, type scale, spacing, breakpoints, shadcn customisation |
| [components.md](components.md) | Custom components, props and usage |
| [forms-and-validation.md](forms-and-validation.md) | Each form's fields and rules, submission states, provider setup |
| [content-and-assets.md](content-and-assets.md) | Page content files, image list, articles, adding/replacing images |
| [routing-and-seo.md](routing-and-seo.md) | Route inventory, metadata, canonical URLs, sitemap, robots |
| [deployment.md](deployment.md) | Build/export, Vercel / Netlify / Cloudflare Pages, launch steps |
| [testing.md](testing.md) | Checks performed, results, limitations, manual review steps |
| [progress.md](progress.md) | Done, in progress, pending, source gaps |

## Common tasks

- Add a page: [content-and-assets.md → Adding a page](content-and-assets.md#adding-a-page)
- Change navigation: [routing-and-seo.md → Navigation](routing-and-seo.md#navigation)
- Replace an image: [content-and-assets.md → Replacing an image](content-and-assets.md#replacing-an-image)
- Add an article: [content-and-assets.md → Articles](content-and-assets.md#articles)
- Add or change a form field: [forms-and-validation.md → Changing a field](forms-and-validation.md#adding-or-changing-a-field)
- Connect a form endpoint: [forms-and-validation.md → Provider](forms-and-validation.md#provider-configuration)
- Update design tokens: [design-system.md → Changing tokens](design-system.md#changing-tokens)
