import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { mainNavigation } from "@/lib/navigation";
import { site } from "@/lib/site";
import { getImage } from "@/lib/assets";

/**
 * Sticky site header. Desktop (wide screen + mouse): logo beside the
 * 980px navigation band, 155px tall as on the live site. Otherwise: centred
 * logo with the menu button on the right.
 */
export function SiteHeader() {
  const logo = getImage("site-logo");
  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className="relative flex h-header-mobile items-center justify-center px-4 desktop:grid desktop:h-header desktop:grid-cols-[auto_minmax(0,1fr)] desktop:items-start desktop:gap-6 desktop:px-6 desktop-wide:grid-cols-[1fr_minmax(0,61.25rem)_1fr] desktop-wide:gap-0 desktop-wide:px-0">
        <Link href="/" className="block size-[5.75rem] desktop:mt-2 desktop:size-[7.25rem] desktop:justify-self-end">
          <ResponsiveImage image={logo} alt={`${site.name} home`} eager className="size-full" />
        </Link>
        <DesktopNavigation items={mainNavigation} className="hidden desktop:mt-[2.5625rem] desktop:block" />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 desktop:hidden">
          <MobileNavigation items={mainNavigation} />
        </div>
      </div>
    </header>
  );
}
