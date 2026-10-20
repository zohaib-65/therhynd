import type { MetadataRoute } from "next";

import { sitePaths } from "@/lib/routes";
import { siteUrl } from "@/lib/site";
import { getEvents } from "@/lib/events";
import { getAllPosts, pageCount } from "@/lib/news";

// Generated once at build time for the static export.
export const dynamic = "force-static";

const url = (path: string) => new URL(encodeURI(path), siteUrl).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = sitePaths.map((path) => ({ url: url(path) }));
  const listing = Array.from({ length: pageCount() - 1 }, (_, i) => ({ url: url(`/blog/page/${i + 2}`) }));
  const posts = getAllPosts().map((post) => ({ url: url(`/post/${post.slug}`), lastModified: post.updated ?? post.date }));
  const events = getEvents().map((event) => ({ url: url(`/events/${event.slug}`) }));
  return [...pages, ...listing, ...posts, ...events];
}
