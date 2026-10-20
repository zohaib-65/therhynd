import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { mainNavigation } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Page not found",
};

/** Shown for any URL without a page, including pages not built yet. */
export default function NotFound() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 text-center lg:py-28">
      <h1 className="text-heading font-normal">Page not found</h1>
      <p className="mx-auto mt-6 max-w-xl text-lead">
        We couldn’t find that page. It may have moved, or it may not be part of this version of the site yet.
      </p>
      <Button asChild variant="solid" size="cta" className="mt-10">
        <Link href="/">Back to the home page</Link>
      </Button>
      <nav aria-label="Main sections" className="mt-12">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lead">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline underline-offset-4 hover:text-forest">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
