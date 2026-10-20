import type { CSSProperties, ReactNode } from "react";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { InlineText } from "@/components/sections/InlineText";
import { Prose } from "@/components/sections/Prose";
import { SmartLink } from "@/components/sections/SmartLink";
import type { ImageAsset } from "@/lib/assets";
import type { Paragraph } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

type FeatureItem = {
  image: ImageAsset;
  title: string;
  /** Small line under the title (e.g. a coach's role). */
  subtitle?: string;
  paragraphs?: Paragraph[];
  /** Makes the title a link. */
  href?: string;
  /** Button(s) at the bottom of the card. */
  action?: ReactNode;
};

type FeatureGridProps = {
  items: FeatureItem[];
  /**
   * `media-left`: square photo beside the text on a blush card (What we do).
   * `media-top`: photo above a caption card (Fitness services and team,
   * Farmhouse "Make the most of your stay").
   */
  layout: "media-left" | "media-top";
  /** Columns from desktop up. */
  columns?: 2 | 4;
  /** Blush backing panel behind the whole grid. */
  panel?: boolean;
  /** Image aspect ratio for `media-top` as "width/height", e.g. "286/335". */
  imageAspect?: string;
  /** Card background for `media-top` cards. */
  cardTone?: "paper" | "blush";
  /** `center`: centred copy at the lead size and an underlined title (`media-top` only). */
  align?: "start" | "center";
  label?: string;
  className?: string;
};

const columnClass = { 2: "md:grid-cols-2", 4: "sm:grid-cols-2 lg:grid-cols-4" } as const;

/** A grid of image cards. */
export function FeatureGrid({ items, layout, columns = 2, panel = false, imageAspect = "1/1", cardTone = "paper", align = "start", label, className }: FeatureGridProps) {
  const centered = layout === "media-top" && align === "center";
  return (
    <section aria-label={label} className={cn("px-5 py-8 lg:px-0", className)}>
      <ul
        className={cn(
          "mx-auto grid gap-6",
          columnClass[columns],
          layout === "media-left" ? "max-w-[83.5rem] lg:gap-x-[5.75rem] lg:gap-y-[4.2rem] lg:px-[3.25rem]" : columns === 2 ? "max-w-[54rem] lg:gap-x-[3.6rem]" : "max-w-[85rem]",
          panel && "bg-blush/80 p-5 lg:px-[3.125rem] lg:py-12",
        )}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className={cn(
              layout === "media-left" ? "grid grid-cols-1 content-start bg-blush sm:grid-cols-[minmax(0,344fr)_minmax(0,304fr)] lg:pb-[4.375rem]" : "flex flex-col",
              layout === "media-top" && (cardTone === "blush" ? "bg-blush/80" : "bg-paper"),
            )}
          >
            <div
              className={cn("relative", layout === "media-left" ? "aspect-square" : "aspect-(--ratio)")}
              style={{ "--ratio": imageAspect.replace("/", " / ") } as CSSProperties}
            >
              <ResponsiveImage image={item.image} fill />
            </div>
            <div className={cn("flex flex-1 flex-col", layout === "media-left" ? "px-5 py-6 lg:pt-9 lg:pr-6 lg:pl-4" : centered ? "px-5 pt-5 pb-10 text-center lg:px-8" : "px-4 py-4")}>
              <h3 className={cn("font-normal", layout === "media-left" ? "text-[1.25rem]" : centered ? "text-lead" : "text-[1.0625rem]")}>
                {item.href ? (
                  <SmartLink href={item.href} className={cn("underline-offset-4 hover:text-forest", centered ? "underline" : "hover:underline")}>
                    {item.title}
                  </SmartLink>
                ) : (
                  item.title
                )}
              </h3>
              {item.subtitle && (
                <p className={cn("font-light", centered ? "mt-7 text-lead" : "mt-1 text-base")}>
                  <InlineText text={item.subtitle} />
                </p>
              )}
              {item.paragraphs && <Prose paragraphs={item.paragraphs} className={centered ? "mt-6 lg:text-[1.1875rem]" : "mt-3 text-base"} />}
              {item.action && <div className={cn("mt-auto flex justify-center", centered ? "pt-10" : "pt-6")}>{item.action}</div>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
