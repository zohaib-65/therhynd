import type { VideoSource } from "@/components/media/Banner";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  video: VideoSource;
  /** Accessible name for the player. */
  title: string;
  className?: string;
};

/**
 * Inline video with the browser's own controls (keyboard accessible, nothing
 * autoplays). Loads only metadata until played. The source video has no
 * captions or audio description available.
 */
export function VideoPlayer({ video, title, className }: VideoPlayerProps) {
  return (
    <section className={cn("px-5 py-6", className)}>
      <video
        className="mx-auto aspect-video w-full max-w-[30rem] bg-ink object-cover"
        controls
        preload="none"
        playsInline
        poster={video.poster.src}
        aria-label={title}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </section>
  );
}
