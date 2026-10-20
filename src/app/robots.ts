import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Allow crawling only when NEXT_PUBLIC_ALLOW_INDEXING is "true", so preview
 * deployments are not indexed by accident. Set it on the production build.
 */
export default function robots(): MetadataRoute.Robots {
  const allow = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return {
    rules: allow ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
