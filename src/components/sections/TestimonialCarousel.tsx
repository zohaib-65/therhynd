"use client";

import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  image: ImageAsset;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  label: string;
  /** Visible heading above the slides, e.g. "What our couples say". */
  heading?: string;
  /**
   * `left` (Events): photo left, quote card beside it, controls below.
   * `right` (Barn weddings): quote card overlapping a photo on the right,
   * left-aligned heading, arrows at the section edges on desktop.
   */
  photoSide?: "left" | "right";
};

/**
 * Guest quotes, one at a time, beside an arch-topped photo.
 * Previous/next buttons and dots; no autoplay.
 */
export function TestimonialCarousel({ testimonials, label, heading, photoSide = "left" }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const go = (step: number) => setIndex((index + step + testimonials.length) % testimonials.length);
  const right = photoSide === "right";
  const Prev = right ? MoveLeft : ChevronLeft;
  const Next = right ? MoveRight : ChevronRight;
  const arrowClass = cn("grid size-11 place-items-center rounded-full hover:bg-paper/60", right && "text-forest xl:absolute xl:top-1/2 xl:w-14");

  return (
    <section aria-roledescription="carousel" aria-label={label} className={cn("relative bg-blush/80 px-5 py-12", right ? "lg:pt-12 lg:pb-10" : "lg:py-[4.5rem]")}>
      {heading && (
        <h2 className={cn("mb-10 text-subheading font-[425]", right ? "mx-auto max-w-[57.5rem] text-center md:text-left lg:mb-24" : "text-center")}>{heading}</h2>
      )}
      <div
        className={cn(
          "relative mx-auto flex flex-col items-center gap-8 md:gap-0",
          right ? "max-w-[57.5rem] md:flex-row-reverse md:items-end" : "max-w-[54rem] md:flex-row",
        )}
      >
        <div className="relative aspect-[394/552] w-56 shrink-0 overflow-hidden rounded-t-full md:w-[24.6rem]">
          <ResponsiveImage key={current.image.id} image={current.image} fill />
        </div>
        <figure
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${testimonials.length}`}
          aria-live="polite"
          className={cn(
            "bg-paper px-8 py-10 text-center md:text-left",
            right ? "relative z-10 md:-mr-[4.75rem] md:mb-8 md:w-[34.8rem] md:px-10" : "md:-ml-6 md:w-[30rem]",
          )}
        >
          <blockquote className="text-[1.375rem] leading-snug font-light lg:text-[1.625rem]">{current.quote}</blockquote>
          <figcaption className={cn("mt-6 text-lead font-light", right && "md:before:mb-6 md:before:block md:before:h-px md:before:w-7 md:before:bg-ink/50")}>
            {current.name}
          </figcaption>
        </figure>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(-1)} className={cn(arrowClass, right && "xl:left-5")}>
          <Prev aria-hidden="true" className="size-6" strokeWidth={1.5} />
          <span className="sr-only">Previous quote</span>
        </button>
        <ol className="flex min-w-0 flex-wrap justify-center gap-x-2">
          {testimonials.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-current={i === index}
                className="grid size-6 place-items-center"
              >
                <span className={`block size-2 rounded-full ${i === index ? "bg-ink" : "bg-ink/30"}`} />
                <span className="sr-only">Quote {i + 1}</span>
              </button>
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => go(1)} className={cn(arrowClass, right && "xl:right-5")}>
          <Next aria-hidden="true" className="size-6" strokeWidth={1.5} />
          <span className="sr-only">Next quote</span>
        </button>
      </div>
    </section>
  );
}
