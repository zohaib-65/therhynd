import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ContentStack, type ContentStackProps } from "@/components/sections/ContentStack";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

type OverlayCardSectionProps = Omit<ContentStackProps, "className"> & {
  /** Full-bleed background photograph. */
  image: ImageAsset;
  /** Card width and padding, e.g. "max-w-[37.5rem]" (Eat) or "max-w-[31rem]". */
  cardClassName?: string;
  /** Card colour: cream ("Eat with us") or paper ("Who we are", "About"). */
  cardTone?: "cream" | "paper";
  /** Section padding/height, e.g. "lg:py-[8.9rem]". */
  className?: string;
};

/**
 * A centred card over a full-width photograph: "Eat with us" (home), "Who we
 * are" (café), "About" (forest rooms).
 */
export function OverlayCardSection({ image, cardClassName, cardTone = "cream", className, proseClassName, ...stack }: OverlayCardSectionProps) {
  return (
    <section className={cn("relative isolate px-3 pt-8 pb-10", className)}>
      <div className="absolute inset-0 -z-10 bg-blush">
        <ResponsiveImage image={image} fill />
      </div>
      <div
        className={cn(
          "mx-auto max-w-[37.5rem] px-6 pt-8 pb-8 sm:px-12 lg:px-[6.2rem] lg:pt-[2.1rem] lg:pb-7",
          cardTone === "cream" ? "bg-cream" : "bg-paper",
          cardClassName,
        )}
      >
        <ContentStack {...stack} proseClassName={cn("leading-[1.8]", proseClassName)} />
      </div>
    </section>
  );
}
