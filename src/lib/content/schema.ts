import { z } from "zod";

/**
 * Shapes for the editable page content in src/content/pages/*.ts.
 * Content is validated when the site builds, so a typo in a JSON file fails
 * the build with a clear message instead of rendering a broken page.
 * Image fields hold ids from src/content/images.ts.
 */

export const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

/**
 * A heading; `href` makes it a link, as several headings are on the live
 * site. `light` uses the thin weight (most live headings are medium).
 */
export const headingSchema = z.object({
  text: z.string().min(1),
  href: z.string().min(1).optional(),
  light: z.boolean().optional(),
});

/**
 * One block of body copy. Strings are inline Markdown (**bold**, *italic*,
 * [label](href)); hrefs are site paths ("/cafe"), PDFs ("/documents/…"),
 * mailto:, tel: or other websites (see src/lib/links.ts).
 *  - { text }: paragraph
 *  - { heading }: short bold subheading inside a text column
 *  - { list }: bulleted list
 *  - { quote, cite? }: quotation
 */
export const paragraphSchema = z.union([
  z.object({ text: z.string().min(1) }).strict(),
  z.object({ heading: z.string().min(1) }).strict(),
  z.object({ list: z.array(z.string().min(1)).min(1) }).strict(),
  z.object({ quote: z.string().min(1), cite: z.string().min(1).optional() }).strict(),
]);

export const imageIdSchema = z.string().min(1);

export const pageMetadataSchema = z.object({
  /** <title>, exactly as extracted from the live page */
  title: z.string().min(1),
  /** meta description, exactly as extracted */
  description: z.string().min(1),
  /** route path on this site, used for the canonical URL */
  path: z.string().startsWith("/"),
  openGraph: z
    .object({
      title: z.string().min(1).optional(),
      description: z.string().min(1).optional(),
      /** manifest id of the share image; omitted when the live page has none */
      image: imageIdSchema.optional(),
    })
    .optional(),
});

export const homePageSchema = z.object({
  metadata: pageMetadataSchema,
  hero: z.object({
    title: z.string().min(1),
    tagline: z.string().min(1),
    image: imageIdSchema,
  }),
  welcome: z.object({
    heading: headingSchema,
    paragraphs: z.array(paragraphSchema).min(1),
    image: imageIdSchema,
  }),
  weddingTiles: z
    .array(
      z.object({
        image: imageIdSchema,
        cta: linkSchema,
        /** stacking position on phones; the live mobile site reorders the tiles */
        mobileOrder: z.number().int().min(1),
      }),
    )
    .min(1),
  stay: z.object({
    heading: headingSchema,
    paragraphs: z.array(paragraphSchema).min(1),
    cta: linkSchema,
    image: imageIdSchema,
  }),
  eat: z.object({
    heading: headingSchema,
    paragraphs: z.array(paragraphSchema).min(1),
    ctas: z.array(linkSchema).min(1),
    image: imageIdSchema,
  }),
  sustainability: z.object({
    heading: headingSchema,
    paragraphs: z.array(paragraphSchema).min(1),
    cta: linkSchema,
    image: imageIdSchema,
  }),
  newsletter: z.object({
    heading: z.string().min(1),
  }),
});

export type Link = z.infer<typeof linkSchema>;
export type Heading = z.infer<typeof headingSchema>;
export type Paragraph = z.infer<typeof paragraphSchema>;
export type PageMetadata = z.infer<typeof pageMetadataSchema>;
/** Shape of src/content/pages/home.ts. */
export type HomePageInput = z.input<typeof homePageSchema>;
/** Shape of src/content/pages/news.ts. */
export type NewsPageInput = { metadata: z.input<typeof pageMetadataSchema> };
