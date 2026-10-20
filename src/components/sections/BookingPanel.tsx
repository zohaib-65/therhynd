import { ExternalLink } from "lucide-react";

import { Prose } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import type { Paragraph } from "@/lib/content/schema";

type BookingPanelProps = {
  id?: string;
  heading?: string;
  paragraphs?: Paragraph[];
  /** The provider's own booking page (Bookalet, TeamUp). */
  href: string;
  label: string;
  /** Provider name, shown so visitors know where they are going. */
  provider: string;
};

/**
 * Stands in for a third-party booking widget. Availability, prices and
 * payment stay with the provider: this panel links to its booking page
 * rather than simulating it.
 */
export function BookingPanel({ id, heading, paragraphs, href, label, provider }: BookingPanelProps) {
  return (
    <section id={id} className="scroll-mt-header-mobile px-5 py-10 desktop:scroll-mt-header">
      <div className="mx-auto max-w-content border border-ink/20 bg-cream px-5 py-10 text-center lg:px-16">
        {heading && <SectionHeading heading={{ text: heading }} size="sm" />}
        {paragraphs && <Prose paragraphs={paragraphs} className="mx-auto mt-4 max-w-[40rem]" />}
        <Button asChild variant="solid" size="cta" className="mt-8">
          <a href={href} target="_blank" rel="noopener">
            {label}
            <ExternalLink aria-hidden="true" className="size-5" strokeWidth={1.5} />
            <span className="sr-only"> (opens {provider} in a new tab)</span>
          </a>
        </Button>
        <p className="mt-4 text-sm font-light">Bookings are handled by {provider}.</p>
      </div>
    </section>
  );
}
