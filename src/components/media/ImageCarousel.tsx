"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";

type ImageCarouselProps = {
  images: ImageAsset[];
  /** Accessible name, e.g. "The Craw's Nest photos". */
  label: string;
};

/**
 * One-photo-at-a-time slider in the 980px column (the Wild weddings
 * slideshow). Swipe or scroll on touch; previous/next buttons otherwise.
 * It never advances on its own.
 */
export function ImageCarousel({ images, label }: ImageCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    const list = track.current;
    if (!list) return;
    const target = (next + images.length) % images.length;
    list.scrollTo({ left: target * list.clientWidth, behavior: "smooth" });
    setIndex(target);
  };

  return (
    <section aria-roledescription="carousel" aria-label={label} className="px-5 py-8 lg:px-0">
      <div className="relative mx-auto max-w-content">
        <ul
          ref={track}
          onScroll={(event) => setIndex(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}
          className="flex aspect-[980/587] snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, i) => (
            <li
              key={`${image.id}-${i}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
              aria-hidden={i !== index}
              className="relative w-full shrink-0 snap-start"
            >
              <ResponsiveImage image={image} fill preload={i === 0} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute top-1/2 left-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-paper/80 text-ink hover:bg-paper"
        >
          <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={1.5} />
          <span className="sr-only">Previous photo</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-paper/80 text-ink hover:bg-paper"
        >
          <ChevronRight aria-hidden="true" className="size-6" strokeWidth={1.5} />
          <span className="sr-only">Next photo</span>
        </button>
        <p className="mt-3 text-center text-sm font-light" aria-live="polite">
          Photo {index + 1} of {images.length}
        </p>
      </div>
    </section>
  );
}
