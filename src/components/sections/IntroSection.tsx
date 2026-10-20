import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Prose } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { ImageAsset } from "@/lib/assets";
import type { Heading, Paragraph } from "@/lib/content/schema";

type IntroSectionProps = {
  heading: Heading;
  paragraphs: Paragraph[];
  image: ImageAsset;
};

/**
 * Welcome card: text on white beside a portrait image, set on a blush band.
 * Desktop columns follow the live 889/431px split; on phones the text sits
 * above a full-width image.
 */
export function IntroSection({ heading, paragraphs, image }: IntroSectionProps) {
  return (
    <section className="bg-blush py-[3.75rem] lg:px-[3.75rem]">
      <div className="grid bg-paper lg:min-h-[38.5rem] lg:grid-cols-[889fr_431fr]">
        <div className="flex min-w-0 flex-col justify-center px-5 py-10 text-center lg:py-16 lg:pr-12 lg:pl-[19.5%] lg:text-left">
          <SectionHeading heading={heading} />
          <Prose paragraphs={paragraphs} className="mx-auto mt-6 max-w-[34rem] lg:mx-0 lg:mt-[3.6rem]" />
        </div>
        <div className="relative aspect-[320/275] bg-blush md:aspect-[16/10] lg:aspect-auto">
          <ResponsiveImage image={image} fill />
        </div>
      </div>
    </section>
  );
}
