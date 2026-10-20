"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";

import { isCurrentPath, type NavItem } from "@/lib/navigation";

type DesktopNavigationProps = {
  items: NavItem[];
  className?: string;
};

/**
 * Horizontal navigation between two grey rules. Items with children open a
 * dropdown on hover and when keyboard focus enters the item, so Tab moves
 * from the parent link into its sub-pages. Escape closes it and returns
 * focus to the parent link (it stays closed until focus leaves the item);
 * ArrowDown reopens it. Parent labels stay real links, as on the live site.
 */
export function DesktopNavigation({ items, className }: DesktopNavigationProps) {
  const pathname = usePathname();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Item closed with Escape: focus returning to its parent link must not reopen
  // it. A ref, because the focus event fires before React re-renders.
  const dismissed = useRef<number | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close any open dropdown after navigating.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenIndex(null);
  }

  const closeOnBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setOpenIndex(null);
    dismissed.current = null;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>, index: number) => {
    const item = event.currentTarget;
    if (event.key === "Escape") {
      setOpenIndex(null);
      dismissed.current = index;
      item.querySelector<HTMLAnchorElement>(":scope > a")?.focus();
    } else if (event.key === "ArrowDown" && items[index].children) {
      event.preventDefault();
      dismissed.current = null;
      // Render the submenu now so its first link can take focus.
      flushSync(() => setOpenIndex(index));
      item.querySelector<HTMLAnchorElement>(":scope ul a")?.focus();
    }
  };

  return (
    <nav aria-label="Main" className={className}>
      <ul className="flex h-[3.25rem] items-stretch justify-between border-y-2 border-rule px-1.5">
        {items.map((item, index) => {
          const open = openIndex === index;
          const submenuId = `${baseId}-submenu-${index}`;
          return (
            <li
              key={item.href}
              className="relative flex"
              onMouseEnter={() => {
                dismissed.current = null;
                if (item.children) setOpenIndex(index);
              }}
              onMouseLeave={() => setOpenIndex(null)}
              onFocus={() => setOpenIndex(item.children && dismissed.current !== index ? index : null)}
              onBlur={closeOnBlur}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <Link
                href={item.href}
                aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                aria-controls={item.children ? submenuId : undefined}
                aria-expanded={item.children ? open : undefined}
                className="flex items-center px-2.5 text-nav font-medium tracking-normal whitespace-nowrap text-ink uppercase hover:text-forest"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul
                  id={submenuId}
                  hidden={!open}
                  className="absolute top-full left-1/2 z-50 min-w-full -translate-x-1/2 bg-paper px-2.5 py-1.5 text-center shadow-[0_6px_12px_-8px_rgb(0_0_0/0.25)]"
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={isCurrentPath(pathname, child.href) ? "page" : undefined}
                        className="block px-2.5 py-[0.5625rem] text-nav leading-3 font-medium whitespace-nowrap text-ink uppercase hover:text-forest"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
