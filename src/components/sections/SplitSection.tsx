import type { CSSProperties, ReactNode } from "react";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

const tones = {
  paper: "bg-paper",
  cream: "bg-cream",
  stone: "bg-stone",
} as const;

type SplitTone = keyof typeof tones;

type SplitSectionProps = {
  image: ImageAsset;
  /** Which half holds the photograph on desktop; phones follow source order. */
  imageSide: "left" | "right";
  tone?: SplitTone;
  /** Thin ink rule around the halves, as on the Stay and Sustainability pages. */
  bordered?: boolean;
  /** Desktop height, e.g. "lg:min-h-[40.5rem]". */
  className?: string;
  /** Classes for the text panel (padding, alignment). */
  panelClassName?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Half photograph, half text panel. The photo runs to the viewport edge and
 * crops to fill its half.
 */
export function SplitSection({ image, imageSide, tone = "cream", bordered = false, className, panelClassName, style, children }: SplitSectionProps) {
  const media = (
    <div className="relative aspect-[16/10] bg-blush lg:aspect-auto">
      <ResponsiveImage image={image} fill />
    </div>
  );
  return (
    <section style={style} className={cn("grid lg:grid-cols-2", bordered ? "gap-px border-y border-ink bg-ink" : tones[tone], className)}>
      {imageSide === "left" && media}
      <div className={cn("flex min-w-0 flex-col justify-center px-5 py-10 lg:py-16", tones[tone], panelClassName)}>{children}</div>
      {imageSide === "right" && media}
    </section>
  );
}
