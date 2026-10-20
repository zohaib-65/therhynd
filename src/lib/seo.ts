import type { Metadata } from "next";

import { site, siteUrl } from "@/lib/site";
import { getImage } from "@/lib/assets";
import type { PageMetadata } from "@/lib/content/schema";

/**
 * Next.js Metadata for a page from its extracted metadata. The title and
 * description are used exactly as extracted; Open Graph falls back to them.
 * The canonical URL is built from NEXT_PUBLIC_SITE_URL (see src/lib/site.ts).
 */
export function pageMetadata(meta: PageMetadata): Metadata {
  const ogImage = meta.openGraph?.image ? getImage(meta.openGraph.image) : null;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: meta.path,
      title: meta.openGraph?.title ?? meta.title,
      description: meta.openGraph?.description ?? meta.description,
      ...(ogImage ? { images: [{ url: ogImage.src, alt: ogImage.alt }] } : {}),
    },
  };
}

export const metadataBase = new URL(siteUrl);
