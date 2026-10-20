/**
 * Header and footer navigation, as published on therhynd.com (Oct 2026).
 * Paths keep the original URLs (café is plain "/cafe": the live site's accented
 * "/café" is not served by `next dev`) and the pricing page's original
 * "copy-of-download-our-brochure" slug.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
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
  { label: "Fitness", href: "/rhynd-fitness" },
  { label: "Activities", href: "/activities" },
  { label: "Bacon and Brakes", href: "/bacon-and-brakes" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News", href: "/blog" },
];

/**
 * Footer page links. "Stay" points to the farmhouse page because that is
 * where the live footer links (the header's Stay goes to /stay-with-us).
 */
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

/** True when `href` is the page being viewed (trailing slashes ignored). */
export function isCurrentPath(pathname: string, href: string): boolean {
  const normalise = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);
  return normalise(pathname) === normalise(href);
}
