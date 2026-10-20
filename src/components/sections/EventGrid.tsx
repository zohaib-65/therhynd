import Link from "next/link";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Button } from "@/components/ui/button";
import type { ImageAsset } from "@/lib/assets";

type EventSummary = {
  title: string;
  /** Date as listed on the live site, e.g. "Sat 14 Nov". */
  date: string;
  location: string;
  /** Tag over the image, e.g. "Multiple Dates". */
  ribbon?: string;
  image: ImageAsset;
  /** The event's page on this site (/events/<slug>). */
  href: string;
};

type EventGridProps = {
  events: EventSummary[];
  label: string;
};

/**
 * Upcoming events as cards (three per row on desktop), as listed on the live
 * events page. "Buy Tickets" opens the event's page with its ticket section.
 */
export function EventGrid({ events, label }: EventGridProps) {
  return (
    <section aria-label={label} className="px-5 py-10">
      <ul className="mx-auto grid max-w-[60rem] gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <li key={event.href} className="flex flex-col items-center text-center">
            <div className="relative aspect-square w-full max-w-[18.75rem]">
              <ResponsiveImage image={event.image} fill />
            </div>
            {event.ribbon && <p className="mt-4 border border-ink/40 px-2 py-0.5 text-xs font-light">{event.ribbon}</p>}
            <h3 className={`${event.ribbon ? "mt-2" : "mt-4"} text-[1.375rem] leading-tight font-medium`}>{event.title}</h3>
            <p className="mt-1 text-sm font-light">
              <time>{event.date}</time>
              <span aria-hidden="true"> | </span>
              <span className="sr-only">, </span>
              {event.location}
            </p>
            <Button asChild variant="solid" className="mt-4 h-9 bg-forest px-5 text-sm hover:bg-forest/85">
              <Link href={event.href}>
                Buy Tickets
                <span className="sr-only">
                  {" "}
                  for {event.title}, {event.date}
                </span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
