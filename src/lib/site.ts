/**
 * Site-wide facts shown in the header, footer and metadata.
 * Every value here was extracted from https://www.therhynd.com (footer and
 * head tags, Oct 2026). Change contact details here, not in components.
 */

const DEFAULT_SITE_URL = "https://www.therhynd.com";

/**
 * Canonical origin for metadata, sitemap and robots. Set NEXT_PUBLIC_SITE_URL
 * per deployment (e.g. a preview domain); defaults to the estate's domain.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

export const site = {
  name: "The Rhynd",
  locale: "en_GB",
  address: {
    lines: ["Rhynd Farm, Leuchars,", "Fife, KY16 0DR,", "Scotland"],
    street: "Rhynd Farm",
    locality: "Leuchars",
    region: "Fife",
    postalCode: "KY16 0DR",
    country: "Scotland",
    /** Map position of Rhynd Farm, from the live event pages' location. */
    geo: { lat: 56.4041583, lng: -2.8665048 },
  },
  phone: {
    display: "07340 530775",
    href: "tel:+447340530775",
    note: "(during office hours)",
  },
  email: {
    address: "weddings@therhynd.com",
    // The live footer link pre-fills this subject line.
    href: "mailto:weddings@therhynd.com?subject=Saying%20hello%20from%20the%20Rhynd%20website!",
  },
  /** Other addresses published on the live site, by purpose. */
  emails: {
    cafe: "cafe@therhynd.com",
    events: "events@therhynd.com",
    fitness: "fitness@therhynd.com",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/TheRhynd", icon: "site-social-facebook" },
    { label: "Instagram", href: "https://www.instagram.com/therhynd", icon: "site-social-instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@therhynd", icon: "site-social-tiktok" },
  ],
  documents: {
    eventSpaceTerms: {
      label: "Event space Ts & Cs",
      href: "/documents/event-space-terms-and-conditions.pdf",
    },
  },
} as const;
