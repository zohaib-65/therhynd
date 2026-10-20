"use client";

import { useRef, useState, type CSSProperties } from "react";

import { Lightbox } from "@/components/media/Lightbox";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";

type GalleryItem = {
  image: ImageAsset;
  /** Position in the live desktop collage, in px relative to the gallery. */
  box: { x: number; y: number; w: number; h: number };
};

type ImageGalleryProps = {
  items: GalleryItem[];
  /** Size of the live desktop collage the boxes refer to. */
  canvas: { w: number; h: number };
  /** Accessible name, e.g. "Farmhouse photos". */
  label: string;
};

/**
 * Photo collage with a lightbox. From 768px the tiles sit exactly where the
 * live gallery puts them (positions scale with the column width); on phones
 * they flow into two columns at their own proportions. Every tile is a button
 * that opens the photo full screen.
 */
export function ImageGallery({ items, canvas, label }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const pct = (value: number, total: number) => `${(value / total) * 100}%`;

  return (
    <section aria-label={label} className="px-5 py-8 lg:px-0">
      <ul
        className="mx-auto max-w-(--canvas-w) columns-2 gap-2 md:relative md:aspect-(--canvas) md:columns-auto"
        style={{ "--canvas": `${canvas.w} / ${canvas.h}`, "--canvas-w": `${canvas.w / 16}rem` } as CSSProperties}
      >
        {items.map((item, index) => (
          <li
            key={`${item.image.id}-${index}`}
            className="relative mb-2 aspect-(--ratio) break-inside-avoid md:absolute md:mb-0 md:aspect-auto md:h-(--h) md:w-(--w) md:top-(--t) md:left-(--l)"
            style={
              {
                "--ratio": `${item.box.w} / ${item.box.h}`,
                "--l": pct(item.box.x, canvas.w),
                "--t": pct(item.box.y, canvas.h),
                "--w": pct(item.box.w, canvas.w),
                "--h": pct(item.box.h, canvas.h),
              } as CSSProperties
            }
          >
            <button
              type="button"
              onClick={(event) => {
                opener.current = event.currentTarget;
                setOpenIndex(index);
              }}
              className="group relative block size-full overflow-hidden focus-visible:outline-offset-2"
            >
              <span className="sr-only">
                Open photo {index + 1} of {items.length}
                {item.image.alt ? `: ${item.image.alt}` : ""}
              </span>
              <ResponsiveImage
                image={item.image}
                fill
                alt=""
                className="transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={items.map((item) => item.image)} index={openIndex} onIndexChange={setOpenIndex} label={label} returnFocusRef={opener} />
    </section>
  );
}
