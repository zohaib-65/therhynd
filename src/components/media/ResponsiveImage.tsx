import Image from "next/image";

import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  image: ImageAsset;
  /**
   * `fill` covers the nearest positioned ancestor, cropping like the live
   * site's "fill" images; otherwise the image keeps its intrinsic ratio.
   */
  fill?: boolean;
  /** Load in the document head. Use only for the above-the-fold hero. */
  preload?: boolean;
  /** Load immediately without preloading (e.g. the header logo). Default: lazy. */
  eager?: boolean;
  /** Override the manifest alt text, e.g. "" when the image is decorative here. */
  alt?: string;
  className?: string;
};

/**
 * A local image (one WebP file, src/data/images.ts) rendered through
 * next/image. `fill` images cover their sized container; others scale to the
 * container width with their own aspect ratio, so the browser reserves space
 * before the file loads. Images lazy-load unless `preload` or `eager` is set.
 */
export function ResponsiveImage({ image, fill = false, preload = false, eager = false, alt, className }: ResponsiveImageProps) {
  const text = alt ?? image.alt;
  const common = {
    src: image.src,
    preload,
    ...(eager && !preload ? { loading: "eager" as const } : {}),
    className: cn(fill && "object-cover", className),
    style: { objectPosition: image.objectPosition },
  };
  return fill ? <Image {...common} alt={text} fill /> : <Image {...common} alt={text} width={image.width} height={image.height} />;
}
