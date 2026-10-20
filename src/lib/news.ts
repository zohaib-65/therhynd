import { z } from "zod";

import { posts } from "@/content/blog";

/**
 * News articles: all in src/content/blog.ts. Each is validated at build time, so a
 * malformed article fails the build with its slug and field.
 */

const POSTS_PER_PAGE = 12;

/** Article body: blocks in order. Strings are inline Markdown (bold, italic, links). */
const blockSchema = z.union([
  z.strictObject({ text: z.string().min(1) }),
  z.strictObject({ heading: z.string().min(1) }),
  z.strictObject({ list: z.array(z.string().min(1)).min(1), ordered: z.boolean().optional() }),
  z.strictObject({ quote: z.string().min(1) }),
  z.strictObject({ rule: z.literal(true) }),
  /** An image id from src/content/images.ts; `alt` overrides its alt text; `caption` shows under it. */
  z.strictObject({ image: z.string().min(1), alt: z.string().optional(), caption: z.string().optional() }),
]);

const postSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  date: z.iso.datetime(),
  updated: z.iso.datetime().optional(),
  author: z.string().optional(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  readingTime: z.string().optional(),
  excerpt: z.string().default(""),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  /** Image id of the card / share image. */
  cover: z.string().min(1),
  body: z.array(blockSchema).min(1),
});

/** Shape of one article in src/content/blog.ts. */
export type PostInput = z.input<typeof postSchema>;
export type Post = z.output<typeof postSchema>;
export type PostBlock = z.output<typeof blockSchema>;

let cache: Post[] | null = null;

/** All articles, newest first. */
export function getAllPosts(): Post[] {
  if (cache) return cache;
  cache = posts
    .map((data, index) => {
      const parsed = postSchema.safeParse(data);
      if (!parsed.success) {
        const name = (data as { slug?: string }).slug ?? `#${index}`;
        throw new Error(`Invalid article "${name}" in src/content/blog.ts:\n${parsed.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`).join("\n")}`);
      }
      return parsed.data;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
  const slugs = new Set(cache.map((post) => post.slug));
  if (slugs.size !== cache.length) throw new Error("Two articles in src/content/blog.ts share a slug");
  return cache;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function pageCount(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / POSTS_PER_PAGE));
}

/** Articles for listing page `page` (1-based). */
export function getPostsPage(page: number): Post[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return getAllPosts().slice(start, start + POSTS_PER_PAGE);
}

/** Publication date as shown on cards and articles, e.g. "15 Oct 2026" (UK time). */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/London" }).format(new Date(iso));
}
