/**
 * Header and footer menus. Paths are the site's routes (the pricing page lives
 * at "copy-of-download-our-brochure").
 */

export type NavLink = {
  label: string;
  href: string;
};

/** A header item: a page link, a group label (no `href`), or a link with sub-pages. */
export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "What we do", href: "/what-we-do" },
      { label: "Awards", href: "/awards" },
      { label: "History", href: "/history" },
    ],
  },
  {
    label: "Weddings",
    href: "/weddings",
    children: [
      { label: "Barn weddings", href: "/barn-weddings" },
      { label: "Wild weddings", href: "/wild-weddings" },
      { label: "Download our brochure", href: "/download-our-brochure" },
      { label: "Pricing", href: "/copy-of-download-our-brochure" },
      { label: "Book a viewing", href: "/book-a-viewing" },
    ],
  },
  { label: "Events", href: "/events-at-the-rhynd" },
  {
    label: "Stay",
    href: "/stay-with-us",
    children: [
      { label: "Rhynd Farmhouse", href: "/rhynd-farmhouse" },
      { label: "Rhynd Forest Rooms", href: "/rhynd-forest-rooms" },
    ],
  },
  {
    label: "Café",
    href: "/cafe",
    children: [{ label: "Book a table", href: "/book-a-table" }],
  },
  {
    // A group label, not a page: it opens its list.
    label: "Things to do",
    children: [
      { label: "Fitness", href: "/rhynd-fitness" },
      { label: "Activities", href: "/activities" },
      { label: "Bacon and Brakes", href: "/bacon-and-brakes" },
    ],
  },
  {
    label: "More",
    children: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "News", href: "/blog" },
    ],
  },
];

/** Footer page links ("Stay" goes to the farmhouse page; the header's Stay goes to /stay-with-us). */
export const footerNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Weddings", href: "/weddings" },
  { label: "Events", href: "/events-at-the-rhynd" },
  { label: "Stay", href: "/rhynd-farmhouse" },
  { label: "Café", href: "/cafe" },
  { label: "Fitness", href: "/rhynd-fitness" },
  { label: "Activities", href: "/activities" },
  { label: "Bacon and Brakes", href: "/bacon-and-brakes" },
];
