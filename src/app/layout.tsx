import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/data/site";
import { metadataBase } from "@/lib/seo";
import "@/styles/globals.css";

/*
 * Jost stands in for Brandon Grotesque, the licensed font on the live site
 * (see docs/design-system.md). next/font downloads it at build time and
 * serves it from this site, so no request goes to Google at runtime.
 */
const jost = Jost({
  subsets: ["latin"],
  // Variable font: lets headings use 425 to approach the live site's weight.
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fcfcfc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={jost.variable} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only z-50 bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
