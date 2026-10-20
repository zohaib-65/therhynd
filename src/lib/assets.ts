import { images } from "@/content/images";

/** One entry in src/content/images.ts. */
export type ImageEntry = {
  src: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
};

export type ImageAsset = Required<ImageEntry> & { id: string };

const entries: Record<string, ImageEntry> = images;

/**
 * Resolve an image id (from page content, articles or site config) to its
 * file, size and alt text. Throws during the build for an unknown id, so a
 * missing image never ships silently.
 */
export function getImage(id: string): ImageAsset {
  const entry = entries[id];
  if (!entry) throw new Error(`Unknown image id "${id}" (not in src/content/images.ts)`);
  return { id, objectPosition: "center", ...entry };
}
