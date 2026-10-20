# Design system

All values were measured from the rendered live site (Chrome, October 2026)
with computed styles and pixel sampling. Tokens live in `src/styles/globals.css`.

## Fonts

| Use | Live site | This build |
|---|---|---|
| Everything | Brandon Grotesque Light (`brandon-grot-w01-light`), headings rendered with synthetic bold | **Jost** (variable, Google Fonts, self-hosted by `next/font`) |
| Footer document button | Avenir Light | Jost |

**Approximation.** Brandon Grotesque is a licensed font, so its files were not
copied. Jost was chosen after rendering eight Google fonts against the live
text: closest texture, x-height and two-storey "a". Jost runs about 5% wider,
compensated with letter-spacing (−0.01em body, −0.02em headings): the live
line "The Foster family has run Leuchars Estate for more than 100 years." is
523px; Jost renders it at 531px. Headings use weight 425 to approach the
synthetic bold. If a Brandon Grotesque web licence is supplied (e.g. Adobe
Fonts), replace the `Jost` import in `src/app/layout.tsx` and remove the
letter-spacing compensation.

## Colours

| Token | Hex | Measured on |
|---|---|---|
| `ink` | `#312F2E` | body text, headings, solid buttons |
| `paper` | `#FCFCFC` | page and header background |
| `blush` | `#F5EDE5` | band behind the welcome card |
| `cream` | `#F0ECDF` | split-section panels, Eat card, mobile menu |
| `stone` | `#D9D3BF` | footer |
| `forest` | `#266445` | mobile menu text and icon, Subscribe outline, focus ring |
| `slate` | `#373B4D` | footer form borders, Send button |
| `charcoal` | `#282626` | footer "Event space Ts & Cs" button |
| `rule` | `#CACACA` | 2px rules above and below the desktop nav |
| `error` | `#A4231A` | validation text (not on the live site; 7:1 contrast on paper) |

Use them as Tailwind colours: `bg-cream`, `text-forest`, `border-slate`.

## Type scale

Fluid between a 390px phone and the 1440px desktop measurement:

| Utility | Desktop (live) | Phone | Used for |
|---|---|---|---|
| `text-display` | 96px, tracking 0.15em | 42px | "THE RHYND" |
| `text-tagline` | 54px | 40px | hero h1 |
| `text-heading` | 56px | 36px | section headings |
| `text-subheading` | 45px | 30px | form card titles, "Our story" |
| `text-title` | 38px | 28px | split-panel titles (Stay, Sustainability) |
| `text-lead` | 20px | 17px (22px in split/overlay sections) | body copy |
| `text-footer` | 17px | 15px | footer |
| `text-button` | 20px, tracking 0.1em | 22px | CTA buttons |
| `text-button-lg` | 25px | 22px | image-tile buttons |
| `text-nav` | 11px | n/a | desktop navigation |

On phones the live site renders a 320px layout scaled up, so its mobile text
is relatively larger; Home split/overlay copy and buttons were scaled to
match.

Headings use weight 425 (the live site's synthetic bold on Brandon Light) by
default; content can mark a heading `"light": true` where the live page uses
the thin weight (Sustainability panels, "Plates plant pines", "Want to know
more?"). `SectionHeading` sizes: `lg` 56px, `md` 45px, `sm` 38px, `xs` 22px.

## Spacing and layout

- Content column: `max-w-content` = 980px (live site grid).
- Header: 155px desktop (`h-header`), 120px phone (`h-header-mobile`); sticky.
- Desktop nav band: 48px between 2px `rule` lines, logo 116px.
- Hero: 454px desktop, `min(131vw, 560px)` below that.
- Welcome card: 60px blush band, columns 889fr/431fr, min-height 616px.
- Wedding tiles: 3 columns from 768px, 506px tall at 1440.
- Split sections: 50/50, 649px (Stay) and 518px (Rooted) tall on desktop.
- Section gaps: 40–42px of `paper`.

## Breakpoints

Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280) plus:

| Variant | Meaning |
|---|---|
| `desktop:` | ≥1024px and `pointer: fine` (mouse/trackpad): desktop header and dropdown nav |
| `desktop-wide:` | ≥1280px and `pointer: fine`: logo hangs left of the 980px nav as on the live site |

The live site shows its desktop layout at 768px with horizontal scrolling; this
build reflows instead (deliberate difference).

## shadcn/ui customisation

- Installed primitives: button, input, textarea, label, checkbox, field,
  separator, sheet, dialog, native-select (preset "nova", Radix base).
  `native-select` gained a `selectClassName` prop to style the `<select>`.
  When adding components that depend on `button`, answer "no" to the
  overwrite prompt to keep the brand variants.
- `:root` maps shadcn's semantic variables to brand tokens; `--radius` is 0
  because the live site's controls are square. There is no dark theme; the
  `dark:` variant is bound to a `.dark` class that is never set, so OS dark
  mode does not restyle controls.
- `src/components/ui/button.tsx` gains brand variants (`solid`, `outline-pill`,
  `slate`, `charcoal`) and sizes (`cta`, `tile`, `form`).
- All shadcn files import `cn` from `@/lib/utils`. After adding a component
  with `npx shadcn add <name>`, change its `import { cn } from "cn"` to
  `"@/lib/utils"`.

## Icons

lucide-react, named imports, `strokeWidth` 1.5 for large icons, `aria-hidden`
on decorative icons with a visible or `sr-only` text label beside them.
Lucide no longer ships brand logos, so the footer social icons are the live
site's own icon images (local copies in `public/images/site/`).

## Focus and states

- Global `:focus-visible`: 2px `forest` outline, 3px offset. shadcn inputs and
  buttons use their ring in `forest` instead.
- Hover: links turn `forest`; solid buttons lighten to 85%.

## Changing tokens

Edit the value in the `@theme` block of `src/styles/globals.css`, e.g.

```css
--color-cream: #f0ecdf;   /* change here; every bg-cream/text-cream updates */
--text-heading: clamp(2.25rem, 1.786rem + 1.905vw, 3.5rem);
```

If you add a new `--text-*` size, also add its name to the `font-size` list in
`src/lib/utils.ts`.
