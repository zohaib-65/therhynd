/**
 * The Rhynd's details: name, address, phone, emails, social links and
 * documents. Header, footer, forms and metadata read them from here, so
 * change contact details here, not in components.
 */

export const site = {
  name: "The Rhynd",
  /** The site's own address, used for canonical links, the sitemap and share
   * links. NEXT_PUBLIC_SITE_URL overrides it (e.g. for a preview domain). */
  url: "https://www.therhynd.com",
  locale: "en_GB",
  address: {
    lines: ["Rhynd Farm, Leuchars,", "Fife, KY16 0DR,", "Scotland"],
    street: "Rhynd Farm",
    locality: "Leuchars",
    region: "Fife",
    postalCode: "KY16 0DR",
    country: "Scotland",
    /** Map position of Rhynd Farm (event page map). */
    geo: { lat: 56.4041583, lng: -2.8665048 },
  },
  phone: {
    display: "07340 530775",
    href: "tel:+447340530775",
    note: "(during office hours)",
  },
  email: {
    address: "weddings@therhynd.com",
    // The footer link pre-fills this subject line.
    href: "mailto:weddings@therhynd.com?subject=Saying%20hello%20from%20the%20Rhynd%20website!",
  },
  /** Other addresses, by purpose. */
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
