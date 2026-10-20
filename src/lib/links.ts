type ResolvedLink =
  | { kind: "internal"; href: string }
  | { kind: "document"; href: string }
  | { kind: "external"; href: string };

/**
 * Classify a content link: site paths, PDFs in public/documents, and
 * everything else (mailto:, tel:, other websites, the live-only
 * www.therhynd.com gift card page) as external.
 */
export function resolveLink(href: string): ResolvedLink {
  if (href.startsWith("/documents/")) return { kind: "document", href };
  if (href.startsWith("/") && !href.startsWith("//")) return { kind: "internal", href };
  return { kind: "external", href };
}
