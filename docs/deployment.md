# Deployment

## Build output

```bash
npm ci
npm run check        # lint, typecheck, build
```

`next build` writes a static site to **`out/`** (≈113 MB): one HTML file per
route (`index.html`, `what-we-do.html`, `cafe.html`, `post/<slug>.html`, …),
`404.html`, `_next/` assets, `images/` (≈63 MB), `videos/` (25 MB),
`documents/`, `sitemap.xml`, `robots.txt`, icons. Nothing needs a Node
server. The largest single file is the 22 MB café film (under Cloudflare
Pages' 25 MB per-file limit).

Preview the exact output locally:

```bash
npm run build && npm run preview     # http://localhost:3000
```

`serve` maps `/weddings` to `weddings.html` and serves `404.html` with status
404, the same as the hosts below.

## Environment

Set these in the host's build environment (see setup.md); they are inlined at
build time:

- `NEXT_PUBLIC_ALLOW_INDEXING=true` on production only.
- Node 24 (`NODE_VERSION=24` on Netlify/Cloudflare).

## Vercel

1. Import the repository; framework preset **Next.js** (detected).
2. Build command `npm run build` (default). Vercel recognises
   `output: "export"` and serves `out/` as static files.
3. Add the environment variables for Production (and Preview without
   `NEXT_PUBLIC_ALLOW_INDEXING`).

## Netlify

`Site settings → Build & deploy`, or a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "24"
```

Netlify serves `404.html` for unknown paths and resolves `/weddings` to
`weddings.html` ("pretty URLs", on by default). If Netlify's Next.js runtime
is auto-enabled, keep `publish = "out"`; the site needs no runtime.

## Cloudflare Pages

- Framework preset: **None** (or "Next.js (Static HTML Export)").
- Build command: `npm run build`; output directory: `out`.
- Environment variable `NODE_VERSION=24` plus the variables above.

Pages strips `.html` (serving `weddings.html` at `/weddings`) and serves
`404.html` for missing paths.

## URL notes

- Routes have no trailing slash (`trailingSlash` is off), matching the live
  site.
- The café route is `/cafe`. The live site's `/café` is not rebuilt (see
  routing-and-seo.md → The café URL), so add a 301 from `/café` (arrives as
  `/caf%C3%A9`) to `/cafe` at the host.
- No other redirects are configured. If the old Wix site had other inbound URLs,
  add host redirects (Netlify `_redirects`, Vercel `vercel.json`, Cloudflare
  `_redirects`); static export cannot define them in `next.config.ts`.

## Launch checklist

1. `npm run check` green (all routes are built).
2. Backend connected in `src/lib/forms/submit.ts` and one real submission
   tested per form (until then forms say sending isn’t connected).
3. `url` in `src/data/site.ts` is the production address, and
   `NEXT_PUBLIC_ALLOW_INDEXING=true` is set on production only.
4. Domain pointed at the host; HTTPS active.
5. Check `/robots.txt` allows crawling and `/sitemap.xml` lists every route.
6. Submit the sitemap in Google Search Console.
