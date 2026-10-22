# Setup

## Requirements

- Node.js 24 (developed on 24.20.0). `@types/node` is pinned to 24 to match.
- npm 11 (the repository has a `package-lock.json`; use npm, not yarn/pnpm).
- Network access at build time for `next/font` (downloads Jost from Google
  Fonts once per build and self-hosts it).

## Install

```bash
npm install
```

npm 11 may print `install-scripts` warnings for `unrs-resolver`; the project
builds and lints without approving them.

## Environment variables

Copy `.env.example` to `.env.local` for development. All variables are
`NEXT_PUBLIC_*`: they are baked into the static output at build time and are
visible to visitors, so never put secrets in them.

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_ALLOW_INDEXING` | unset (= disallow) | `true` on the production build only; anything else makes robots.txt disallow all |

Changing a variable requires a rebuild. The site's address (canonical URLs,
Open Graph, sitemap) is `url` in `src/data/site.ts`, not a variable. Forms
need no variables: see
forms-and-validation.md → Connecting the backend.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Development server at http://localhost:3000 |
| `npm run build` | Production build and static export to `out/` |
| `npm run preview` | Serve `out/` locally (http://localhost:3000) after a build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules, React Compiler hook rules) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check` | lint + typecheck + build, in that order |

`npm run start` is intentionally absent: a static export has no Node server.

## First run checklist

1. `npm install`
2. `npm run dev` and open http://localhost:3000.
