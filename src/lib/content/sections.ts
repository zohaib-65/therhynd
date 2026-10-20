import { z } from "zod";

import { headingSchema, imageIdSchema, linkSchema, pageMetadataSchema, paragraphSchema } from "@/lib/content/schema";

/**
 * Section types for content pages (src/content/pages/<page>.ts → `sections`).
 * Each type maps to one component in src/components/sections/PageSections.tsx.
 * Images are manifest ids; links are site paths, PDFs in /documents,
 * mailto:, tel: or other websites.
 */

const paragraphs = z.array(paragraphSchema);
const actions = z.array(linkSchema);
const width = z.enum(["sm", "md", "lg", "xl"]);
const tone = z.enum(["paper", "cream", "stone"]);
const headingSize = z.enum(["lg", "md", "sm", "xs"]);
const actionsPosition = z.enum(["before-heading", "after-heading", "end"]);
const box = z.object({ x: z.number(), y: z.number(), w: z.number().positive(), h: z.number().positive() });
const video = z.object({ src: z.string().startsWith("/videos/"), poster: imageIdSchema });

export const sectionSchema = z.discriminatedUnion("type", [
  /** Page title (h1) and introduction. */
  z.object({
    type: z.literal("intro"),
    heading: z.string().min(1),
    paragraphs: paragraphs.default([]),
    actions: actions.optional(),
    actionsPosition: actionsPosition.optional(),
    width: width.optional(),
  }),
  /** Centred heading, copy and buttons. */
  z.object({
    type: z.literal("text"),
    heading: headingSchema.optional(),
    headingSize: headingSize.optional(),
    paragraphs: paragraphs.optional(),
    actions: actions.optional(),
    width: width.optional(),
  }),
  /** Heading and copy over a full-width photograph. */
  z.object({
    type: z.literal("imageBand"),
    image: imageIdSchema,
    heading: z.string().min(1),
    paragraphs: paragraphs.default([]),
  }),
  /** Wide photograph or silent video without text. */
  z.object({
    type: z.literal("banner"),
    image: imageIdSchema,
    video: video.optional(),
    width: z.enum(["full", "content"]).default("full"),
    /** Desktop height in px (phones use a shorter crop). */
    height: z.number().positive(),
  }),
  /** Half photograph, half text panel. */
  z.object({
    type: z.literal("split"),
    image: imageIdSchema,
    imageSide: z.enum(["left", "right"]),
    tone: tone.optional(),
    bordered: z.boolean().optional(),
    heading: headingSchema.optional(),
    headingSize: headingSize.optional(),
    paragraphs: paragraphs.optional(),
    actions: actions.optional(),
    actionsPosition: actionsPosition.optional(),
    /** Desktop minimum height in px. */
    height: z.number().positive().optional(),
  }),
  /** Card over a full-width photograph. */
  z.object({
    type: z.literal("overlayCard"),
    image: imageIdSchema,
    heading: headingSchema,
    paragraphs: paragraphs.optional(),
    actions: actions.optional(),
    cardTone: z.enum(["cream", "paper"]).optional(),
    /** Card width in px on desktop. */
    cardWidth: z.number().positive().optional(),
    /** Desktop section height in px. */
    height: z.number().positive().optional(),
  }),
  /** Grid of image cards. */
  z.object({
    type: z.literal("features"),
    label: z.string().optional(),
    layout: z.enum(["media-left", "media-top"]),
    columns: z.union([z.literal(2), z.literal(4)]).optional(),
    panel: z.boolean().optional(),
    imageAspect: z.string().regex(/^\d+\/\d+$/).optional(),
    cardTone: z.enum(["paper", "blush"]).optional(),
    /** `center`: centred copy at the lead size with an underlined title (Weddings "Choose your setting"). */
    align: z.enum(["start", "center"]).optional(),
    items: z
      .array(
        z.object({
          image: imageIdSchema,
          title: z.string().min(1),
          subtitle: z.string().optional(),
          paragraphs: paragraphs.optional(),
          href: z.string().optional(),
          action: linkSchema.optional(),
        }),
      )
      .min(1),
  }),
  /** Photo collage reproducing the live layout, with a lightbox. */
  z.object({
    type: z.literal("gallery"),
    label: z.string().min(1),
    canvas: z.object({ w: z.number().positive(), h: z.number().positive() }),
    items: z.array(z.object({ image: imageIdSchema, box })).min(1),
  }),
  /** One-photo-at-a-time slider. */
  z.object({ type: z.literal("carousel"), label: z.string().min(1), images: z.array(imageIdSchema).min(1) }),
  /** Label column + bullet lists ("Useful information"). */
  z.object({
    type: z.literal("infoTable"),
    heading: z.string().min(1),
    /** `panel` (Wild weddings): blush panel, small text. `plain` (Barn weddings): no panel, lead-size text. */
    variant: z.enum(["panel", "plain"]).optional(),
    rows: z
      .array(
        z
          .object({ label: z.string().min(1), items: z.array(z.string().min(1)).min(1).optional(), paragraphs: paragraphs.optional() })
          .refine((row) => row.items || row.paragraphs, { error: "A row needs items or paragraphs" }),
      )
      .min(1),
    action: linkSchema.optional(),
  }),
  /** Press logos. */
  z.object({ type: z.literal("logos"), label: z.string().min(1), logos: z.array(imageIdSchema).min(1) }),
  /** Inline video with controls. */
  z.object({ type: z.literal("video"), title: z.string().min(1), video }),
  /** Upcoming events with links to their ticket pages. */
  z.object({
    type: z.literal("events"),
    label: z.string().min(1),
    events: z
      .array(
        z.object({
          title: z.string().min(1),
          date: z.string().min(1),
          location: z.string().min(1),
          ribbon: z.string().optional(),
          image: imageIdSchema,
          /** The event's page on this site, /events/<slug>. */
          href: z.string().regex(/^\/events\/[a-z0-9-]+$/),
        }),
      )
      .min(1),
  }),
  /** Guest quotes. */
  z.object({
    type: z.literal("testimonials"),
    label: z.string().min(1),
    heading: z.string().optional(),
    photoSide: z.enum(["left", "right"]).optional(),
    items: z.array(z.object({ quote: z.string().min(1), name: z.string().min(1), image: imageIdSchema })).min(1),
  }),
  /** An enquiry form with optional heading and notes. */
  z.object({
    type: z.literal("form"),
    id: z.string().optional(),
    form: z.enum(["brochure", "viewing", "weddingEnquiry", "tableEnquiry"]),
    /** Sent with brochure requests so the team knows which page was used. */
    source: z.enum(["Download our brochure", "Pricing", "Weddings", "Barn weddings"]).optional(),
    heading: headingSchema.optional(),
    headingAs: z.enum(["h1", "h2"]).optional(),
    headingSize: headingSize.optional(),
    paragraphs: paragraphs.optional(),
    /** Copy shown under the form. */
    note: paragraphs.optional(),
    /** Buttons under the form. */
    actions: actions.optional(),
  }),
  /** Selected articles as News cards ("You might also like"). */
  z.object({
    type: z.literal("relatedPosts"),
    slugs: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(1),
  }),
  /** Link to a third-party booking page in place of its widget. */
  z.object({
    type: z.literal("booking"),
    id: z.string().optional(),
    heading: z.string().optional(),
    paragraphs: paragraphs.optional(),
    href: z.url(),
    label: z.string().min(1),
    provider: z.string().min(1),
  }),
]);

export const contentPageSchema = z.object({
  metadata: pageMetadataSchema,
  sections: z.array(sectionSchema).min(1),
});

export type Section = z.infer<typeof sectionSchema>;
export type ContentPage = z.infer<typeof contentPageSchema>;
/** Shape of a src/content/pages/<page>.ts file (before defaults are applied). */
export type ContentPageInput = z.input<typeof contentPageSchema>;
