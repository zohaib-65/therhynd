/**
 * Header and footer navigation, as published on therhynd.com (20 Oct 2026).
 * Paths keep the original URLs (café is plain "/cafe": the live site's accented
 * "/café" is not served by `next dev`) and the pricing page's original
 * "copy-of-download-our-brochure" slug.
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
    // On the live desktop menu this label is not a link (the mobile menu links
    // it to a new /things-to-do page, which is not part of this rebuild).
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

/** True when the item's page, or one of its sub-pages, is being viewed. */
export function isCurrentSection(pathname: string, item: NavItem): boolean {
  return (item.href !== undefined && isCurrentPath(pathname, item.href)) || (item.children ?? []).some((child) => isCurrentPath(pathname, child.href));
}
