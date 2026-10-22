import Link from "next/link";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { footerNavigation } from "@/data/navigation";
import { site } from "@/data/site";
import { ContactForm } from "@/components/forms/contact/ContactForm";
import { getImage } from "@/lib/assets";

/**
 * Stone footer in three equal columns, as on the live site: contact form,
 * address and contact details, page links. Stacks into one centred column
 * on smaller screens.
 */
export function SiteFooter() {
  const terms = site.documents.eventSpaceTerms;
  return (
    <footer className="bg-stone text-footer text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-12 lg:grid-cols-3 lg:gap-0 lg:px-0 lg:pt-[3.1rem] lg:pb-[6.5rem]">
        <div className="mx-auto w-full max-w-sm lg:max-w-[14.5rem]">
          <ContactForm />
        </div>

        <div className="flex flex-col items-center text-center">
          <address className="not-italic">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">
              Tel:{" "}
              <a href={site.phone.href} className="hover:underline">
                {site.phone.display}
              </a>
            </span>
            <span className="block">{site.phone.note}</span>
            <span className="block">
              Email:{" "}
              <a href={site.email.href} className="underline hover:text-forest">
                {site.email.address}
              </a>
            </span>
          </address>
          <ul className="mt-5 flex items-center gap-7" aria-label="Social media">
            {site.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="block size-[1.875rem] hover:opacity-70">
                  <ResponsiveImage image={getImage(social.icon)} alt={`${social.label} (opens in a new tab)`} className="size-full" />
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="charcoal" className="mt-5 h-10 px-3.5 text-[0.9375rem] tracking-[0.05em]">
            <a href={terms.href} target="_blank" rel="noopener">
              {terms.label}
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </Button>
        </div>

        <nav aria-label="Footer" className="text-center lg:pt-[1.1rem]">
          <ul>
            {footerNavigation.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="underline underline-offset-2 hover:text-forest">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
