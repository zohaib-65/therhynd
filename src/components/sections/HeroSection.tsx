import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  /** Large tracked display line, e.g. "THE RHYND". */
  title: string;
  /** The page's h1. */
  tagline: string;
  image: ImageAsset;
  /**
   * Classes for the image frame. The frame fills the hero by default; the home
   * page extends it upwards on desktop to match the live crop, where the top
   * of the photo sits behind the header.
   */
  mediaClassName?: string;
};

/**
 * Full-width photographic hero with white text: a display title at the top
 * and the h1 tagline near the bottom. 454px tall on desktop, a portrait crop
 * on phones.
 */
export function HeroSection({ title, tagline, image, mediaClassName }: HeroSectionProps) {
  return (
    <section className="relative isolate h-[min(131vw,35rem)] overflow-hidden bg-ink lg:h-[28.375rem]">
      <div className={cn("absolute inset-0 -z-10", mediaClassName)}>
        <ResponsiveImage image={image} fill preload />
      </div>
      <div className="mx-auto flex h-full max-w-content flex-col items-center justify-between px-4 pt-6 pb-12 text-center text-paper lg:pt-[2.125rem] lg:pb-[4.75rem]">
        <p className="max-w-[5.5em] text-display font-normal uppercase md:max-w-none">{title}</p>
        <h1 className="max-w-[9em] text-tagline font-normal md:max-w-none">{tagline}</h1>
      </div>
    </section>
  );
}
