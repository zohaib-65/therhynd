import type { NavItem } from "@/data/navigation";

/** True when `href` is the page being viewed (trailing slashes ignored). */
export function isCurrentPath(pathname: string, href: string): boolean {
  const normalise = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);
  return normalise(pathname) === normalise(href);
}

/** True when the item's page, or one of its sub-pages, is being viewed. */
export function isCurrentSection(pathname: string, item: NavItem): boolean {
  return (item.href !== undefined && isCurrentPath(pathname, item.href)) || (item.children ?? []).some((child) => isCurrentPath(pathname, child.href));
}
