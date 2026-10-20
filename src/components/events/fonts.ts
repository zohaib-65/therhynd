import { Barlow_Condensed, Figtree } from "next/font/google";

/*
 * Fonts of the event pages. The live event pages (Wix Events) set headings in
 * DIN Neuzeit Grotesk Bold Condensed and text in Avenir Light, both licensed.
 * These are the closest free fonts by shape and measured text width (see
 * docs/design-system.md). next/font serves them from this site.
 */
export const eventHeadingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-barlow-condensed",
  display: "swap",
});

// Variable font: covers the light text (300) and the bold lines (600).
export const eventBodyFont = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});
