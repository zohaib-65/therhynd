"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { KeyboardEvent, RefObject } from "react";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ImageAsset } from "@/lib/assets";

type LightboxProps = {
  images: ImageAsset[];
  /** Index of the photo shown; null when closed. */
  index: number | null;
  onIndexChange: (index: number | null) => void;
  label: string;
  /** Element that opened the viewer; focus returns to it on close. */
  returnFocusRef?: RefObject<HTMLElement | null>;
};

/**
 * Full-screen photo viewer (shadcn Dialog on Radix): focus is trapped while
 * open and returns to the thumbnail on close; Escape or the close button
 * closes it; arrow keys and the buttons move between photos.
 */
export function Lightbox({ images, index, onIndexChange, label, returnFocusRef }: LightboxProps) {
  const open = index !== null;
  const image = open ? images[index] : null;
  const go = (step: number) => {
    if (index === null) return;
    onIndexChange((index + step + images.length) % images.length);
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onIndexChange(null)}>
      <DialogContent
        onKeyDown={onKeyDown}
        onCloseAutoFocus={(event) => {
          // Radix returns focus only to a DialogTrigger; the gallery opens the viewer itself.
          if (!returnFocusRef?.current) return;
          event.preventDefault();
          returnFocusRef.current.focus();
        }}
        className="flex h-dvh w-screen max-w-none flex-col gap-0 rounded-none bg-ink/95 p-0 text-paper ring-0 sm:max-w-none [&>[data-slot=dialog-close]]:top-4 [&>[data-slot=dialog-close]]:right-4 [&>[data-slot=dialog-close]]:size-11 [&>[data-slot=dialog-close]]:text-paper [&>[data-slot=dialog-close]]:hover:bg-paper/10 [&>[data-slot=dialog-close]_svg]:size-7"
      >
        <DialogTitle className="sr-only">
          {label}: photo {index !== null ? index + 1 : 0} of {images.length}
        </DialogTitle>
        <DialogDescription className="sr-only">{image?.alt || "Photo"}</DialogDescription>
        <div className="relative m-4 mt-16 mb-4 flex-1 sm:mx-20">
          {image && <ResponsiveImage key={image.id} image={image} fill eager className="object-contain" />}
        </div>
        <div className="flex items-center justify-center gap-6 pb-6">
          <button type="button" onClick={() => go(-1)} className="grid size-11 place-items-center rounded-full hover:bg-paper/10">
            <ChevronLeft aria-hidden="true" className="size-7" strokeWidth={1.5} />
            <span className="sr-only">Previous photo</span>
          </button>
          <p className="min-w-16 text-center text-sm" aria-live="polite">
            {index !== null ? index + 1 : 0} / {images.length}
          </p>
          <button type="button" onClick={() => go(1)} className="grid size-11 place-items-center rounded-full hover:bg-paper/10">
            <ChevronRight aria-hidden="true" className="size-7" strokeWidth={1.5} />
            <span className="sr-only">Next photo</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
