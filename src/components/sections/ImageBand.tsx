import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Prose } from "@/components/sections/Prose";
import type { ImageAsset } from "@/lib/assets";
import type { Paragraph } from "@/lib/content/schema";

type ImageBandProps = {
  image: ImageAsset;
  heading: string;
  paragraphs: Paragraph[];
};

/**
 * White heading and copy over a full-width photograph ("Plates plant pines"
 * on Events). A translucent ink layer keeps the text readable over any part
 * of the photo (not on the live site, which relies on a dark image).
 */
export function ImageBand({ image, heading, paragraphs }: ImageBandProps) {
  return (
    <section className="relative isolate px-5 py-10 text-center text-paper lg:py-6">
      <div className="absolute inset-0 -z-10 bg-ink">
        <ResponsiveImage image={image} fill preload />
        <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
      </div>
      <h2 className="text-heading font-light">{heading}</h2>
      <Prose paragraphs={paragraphs} className="mx-auto mt-4 max-w-[40rem] text-base" />
    </section>
  );
}
