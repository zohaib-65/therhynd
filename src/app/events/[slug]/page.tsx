import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EventAbout } from "@/components/events/EventAbout";
import { EventMap } from "@/components/events/EventMap";
import { EventTickets, OnSale } from "@/components/events/EventTickets";
import { eventBodyFont, eventHeadingFont } from "@/components/events/fonts";
import { ShareEvent } from "@/components/events/ShareEvent";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { getImage } from "@/lib/assets";
import { eventDay, firstParagraph, getEvent, getEvents } from "@/lib/events";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

/** One page per event, at the live site's /events/<slug> URLs, laid out like the live event page. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const event = getEvent((await params).slug);
  if (!event) return {};
  return pageMetadata({
    title: `${event.title} | The Rhynd`,
    description: event.summary ?? firstParagraph(event),
    path: `/events/${event.slug}`,
    openGraph: { image: event.image },
  });
}

/** Section headings: 30px desktop, 24px on phones (the live mobile 20px at 390/320 scale). */
const sectionHeading = "font-event-heading text-2xl leading-8 md:text-[1.875rem] md:leading-[2.4375rem]";
const pillButton =
  "inline-flex items-center justify-center rounded-full border border-ink font-sans text-[1.1875rem] font-normal hover:bg-ink/5 h-[3.2rem] w-full md:h-12 md:w-40 md:text-base";

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const event = getEvent((await params).slug);
  if (!event) notFound();
  const image = getImage(event.image);
  const others = (event.otherDates ?? []).map((slug) => getEvent(slug)).filter((other) => other !== undefined);
  const url = new URL(`/events/${event.slug}`, siteUrl).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary ?? firstParagraph(event),
    startDate: event.start,
    endDate: event.end,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: event.location, address: event.address },
    image: new URL(image.src, siteUrl).href,
    url,
    ...(event.tickets.length
      ? { offers: event.tickets.map((t) => ({ "@type": "Offer", name: t.name, price: t.price.replace(/[^\d.]/g, ""), priceCurrency: "GBP", url })) }
      : {}),
  };

  return (
    <article className={cn(eventHeadingFont.variable, eventBodyFont.variable, "pb-12 font-event-body font-light text-ink md:pb-[2.8125rem]")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <header className="md:mx-auto md:mt-5 md:grid md:max-w-[71.625rem] md:grid-cols-2 md:items-center md:px-5">
        <div className="relative aspect-video w-full md:aspect-square">
          <ResponsiveImage image={image} fill preload />
        </div>
        <div className="flex flex-col items-center px-6 pt-6 text-center md:px-10 md:pt-0">
          <h1 className="order-1 font-event-heading text-[2.125rem] leading-[1.3] md:order-2 md:mt-1 md:text-[3.75rem] md:leading-[1.2] md:tracking-[-0.01em]">{event.title}</h1>
          <p className="order-2 font-event-heading text-[1.0625rem] leading-[1.4] md:order-1 md:text-2xl md:leading-[1.875rem]">
            <time dateTime={event.start}>{event.shortDate}</time>
            <span aria-hidden="true" className="mx-1.5 md:mx-2.5">
              |
            </span>
            <span className="sr-only">, </span>
            {event.location}
          </p>
          <div className="order-3 mt-[1.6875rem] w-full md:mt-[2.625rem] md:w-auto">
            <OnSale
              day={eventDay(event)}
              tickets={event.tickets}
              fallback={
                <>
                  <p className="text-[1.0625rem] md:text-base">Tickets are not on sale</p>
                  <Link href="/events-at-the-rhynd" className={cn(pillButton, "mt-4")}>
                    See other events
                  </Link>
                </>
              }
            >
              <a href="#tickets" className={pillButton}>
                Buy Tickets
              </a>
            </OnSale>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[52.6875rem] px-6 text-[1.0625rem] leading-6 md:px-0 md:text-base">
        <section aria-labelledby="time-location" className="mt-11 text-center md:mt-[3.75rem]">
          <h2 id="time-location" className={sectionHeading}>
            Time &amp; Location
          </h2>
          <p className="mt-5 md:mt-[0.9375rem] md:leading-5">
            <time dateTime={event.start}>{event.date}</time>
          </p>
          <p className="md:leading-5">{event.address}</p>
          {others.length > 0 && (
            <>
              <p className="mt-3 md:mt-6 md:leading-5">Other dates</p>
              <ul className="mt-1.5 flex flex-col gap-[0.4375rem] md:flex-row md:justify-center md:gap-1.5">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/events/${other.slug}`}
                      className="block border border-ink/30 px-[0.8125rem] font-sans text-[0.9375rem] leading-[1.75rem] font-light hover:border-ink md:text-xs md:leading-[1.375rem]"
                    >
                      {other.shortDate}, {other.date.split(", ")[1].split(" –")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {others.length > 0 && <hr className="mt-10 hidden border-ink/30 md:block" />}

        <section aria-labelledby="about-event" className={cn("mt-11", others.length ? "md:mt-16" : "md:mt-[3.75rem]")}>
          <h2 id="about-event" className={cn(sectionHeading, "text-center")}>
            About the Event
          </h2>
          <div className="mt-[1.375rem] leading-[1.6rem] md:mt-[1.0625rem] md:leading-6">
            <EventAbout blocks={event.about} preview={event.preview} />
          </div>
        </section>

        <OnSale day={eventDay(event)} tickets={event.tickets}>
          <section id="tickets" aria-labelledby="tickets-heading" className="mt-11">
            <h2 id="tickets-heading" className={cn(sectionHeading, "mb-5 text-center md:mb-4")}>
              Tickets
            </h2>
            <EventTickets title={event.title} date={event.date} tickets={event.tickets} />
          </section>
        </OnSale>
      </div>

      <div className="mt-11 md:mt-20">
        <EventMap />
      </div>

      <section aria-labelledby="share-event" className="mt-11 text-center md:mt-16">
        <h2 id="share-event" className={sectionHeading}>
          Share This Event
        </h2>
        <div className="mt-[1.4rem] md:mt-[1.625rem]">
          <ShareEvent url={url} />
        </div>
      </section>
    </article>
  );
}
