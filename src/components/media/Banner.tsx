import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

export type VideoSource = {
  /** Local MP4 path under /videos. */
  src: string;
  /** Still shown before playback and to visitors who prefer reduced motion. */
  poster: ImageAsset;
};

type BannerProps = {
  image: ImageAsset;
  /** Optional muted, looping background video over the image. */
  video?: VideoSource;
  /** `full` runs edge to edge; `content` sits in the 980px column. */
  width?: "full" | "content";
  /** Height classes, e.g. "h-[18rem] lg:h-[28.9rem]". */
  className?: string;
  preload?: boolean;
};

/**
 * A wide photograph (or silent background video) without text: the top of
 * Sustainability, Bacon and Brakes, Farmhouse and Forest Rooms. The video is
 * decorative (no sound, no information), so it is hidden from assistive
 * technology and not shown when reduced motion is requested.
 */
export function Banner({ image, video, width = "full", className, preload = true }: BannerProps) {
  return (
    <section className={cn(width === "content" && "px-5 lg:px-0")}>
      <div className={cn("relative overflow-hidden bg-blush", width === "content" && "mx-auto max-w-content", className)}>
        <ResponsiveImage image={image} fill preload={preload} />
        {video && (
          <video
            className="absolute inset-0 size-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            poster={video.poster.src}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
}
