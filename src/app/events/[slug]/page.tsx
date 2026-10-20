import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Prose } from "@/components/sections/Prose";
import { Button } from "@/components/ui/button";
import { siteUrl } from "@/lib/site";
import { EventTickets } from "@/components/events/EventTickets";
import { getImage } from "@/lib/assets";
import { eventDay, getEvent, getEvents } from "@/lib/events";
import { pageMetadata } from "@/lib/seo";

/** One page per event, at the live site's /events/<slug> URLs. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

const firstText = (event: NonNullable<ReturnType<typeof getEvent>>) =>
  event.description.map((block) => ("text" in block ? block.text : "")).find(Boolean) ?? event.title;

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const event = getEvent((await params).slug);
  if (!event) return {};
  return pageMetadata({
    title: `${event.title} | The Rhynd`,
    description: event.summary ?? firstText(event),
    path: `/events/${event.slug}`,
    openGraph: { image: event.image },
  });
}

const sectionHeading = "text-title font-[425]";

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
    description: event.summary ?? firstText(event),
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
    <article className="px-5 pt-8 pb-14 lg:pt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <header className="mx-auto grid max-w-[70rem] items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-square w-full md:max-w-[35.25rem]">
          <ResponsiveImage image={image} fill preload />
        </div>
        <div className="text-center">
          <p className="text-lead font-light">
            <time dateTime={event.start}>{event.shortDate}</time>
            <span aria-hidden="true"> | </span>
            <span className="sr-only">, </span>
            {event.location}
          </p>
          <h1 className="mt-3 text-heading font-[425]">{event.title}</h1>
          {event.tickets.length ? (
            <Button asChild variant="outline-pill" size="form" className="mt-6 min-w-40">
              <a href="#tickets">Buy Tickets</a>
            </Button>
          ) : (
            <>
              <p className="mt-6 text-base font-light">Tickets are not on sale</p>
              <Button asChild variant="outline-pill" size="form" className="mt-3 min-w-40">
                <Link href="/events-at-the-rhynd">See other events</Link>
              </Button>
            </>
          )}
        </div>
      </header>

      <div className="mx-auto mt-14 max-w-[42rem]">
        <section aria-labelledby="time-location" className="text-center">
          <h2 id="time-location" className={sectionHeading}>
            Time &amp; Location
          </h2>
          <p className="mt-4 text-lead font-light">
            <time dateTime={event.start}>{event.date}</time>
          </p>
          <p className="mt-1 text-lead font-light">{event.address}</p>
          {others.length > 0 && (
            <>
              <h3 className="mt-6 text-base font-normal">Other dates</h3>
              <ul className="mt-3 flex flex-wrap justify-center gap-2">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link href={`/events/${other.slug}`} className="block border border-ink/30 px-3 py-1.5 text-sm font-light hover:border-forest hover:text-forest">
                      {other.shortDate}, {other.date.split(", ")[1].split(" –")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        <hr className="my-12 border-ink/20" />

        <section aria-labelledby="about-event">
          <h2 id="about-event" className={`${sectionHeading} text-center`}>
            About the Event
          </h2>
          <Prose paragraphs={event.description} className="mt-6 text-base" />
        </section>

        <section id="tickets" aria-labelledby="tickets-heading" className="mt-14 scroll-mt-28">
          <h2 id="tickets-heading" className={`${sectionHeading} mb-6 text-center`}>
            Tickets
          </h2>
          <EventTickets title={event.title} date={event.date} day={eventDay(event)} tickets={event.tickets} />
        </section>

        <section aria-labelledby="share-event" className="mt-14 text-center">
          <h2 id="share-event" className="text-lead font-[425]">
            Share This Event
          </h2>
          <ul className="mt-3 flex justify-center gap-6 text-base font-light">
            {[
              { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
              { label: "X", href: `https://x.com/intent/post?url=${encodeURIComponent(url)}` },
              { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
            ].map((share) => (
              <li key={share.label}>
                <a href={share.href} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-forest">
                  {share.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
