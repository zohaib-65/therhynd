"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";

import { isCurrentPath, isCurrentSection, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type DesktopNavigationProps = {
  items: NavItem[];
  className?: string;
};

/**
 * Horizontal navigation as on the live site (Oct 2026): 20px capitals sharing
 * the 980px band, a 1px rule between items, cream behind the current section
 * and the hovered item. Items with children open a dropdown on hover and when
 * keyboard focus enters the item, so Tab moves into its sub-pages. Escape
 * closes it and returns focus to the item; ArrowDown reopens it. Group labels
 * without a page ("Things to do", "More") are buttons that toggle their list.
 */
export function DesktopNavigation({ items, className }: DesktopNavigationProps) {
  const pathname = usePathname();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Item closed with Escape: focus returning to its trigger must not reopen
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
      item.querySelector<HTMLElement>(":scope > :is(a, button)")?.focus();
    } else if (event.key === "ArrowDown" && items[index].children) {
      event.preventDefault();
      dismissed.current = null;
      // Render the submenu now so its first link can take focus.
      flushSync(() => setOpenIndex(index));
      item.querySelector<HTMLAnchorElement>(":scope ul a")?.focus();
    }
  };

  const trigger = "flex w-full items-center justify-center px-2 text-xl leading-[3.25rem] font-light whitespace-nowrap text-ink uppercase";

  return (
    <nav aria-label="Main" className={className}>
      <ul className="flex h-[3.25rem]">
        {items.map((item, index) => {
          const open = openIndex === index;
          const submenuId = `${baseId}-submenu-${index}`;
          // Cream behind the current section, and behind a hovered or open page
          // link (as live, group labels without a page are not highlighted).
          const highlighted = isCurrentSection(pathname, item) || (open && item.href !== undefined);
          return (
            <li
              key={item.label}
              className="relative flex grow [&+li]:border-l [&+li]:border-ink"
              onMouseEnter={() => {
                dismissed.current = null;
                if (item.children) setOpenIndex(index);
              }}
              onMouseLeave={() => setOpenIndex(null)}
              onFocus={() => setOpenIndex(item.children && dismissed.current !== index ? index : null)}
              onBlur={closeOnBlur}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                  aria-controls={item.children ? submenuId : undefined}
                  aria-expanded={item.children ? open : undefined}
                  className={cn(trigger, "hover:bg-cream", highlighted && "bg-cream")}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  aria-controls={submenuId}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className={cn(trigger, highlighted && "bg-cream")}
                >
                  {item.label}
                </button>
              )}
              {item.children && (
                // The top padding bridges the 7px gap below the item, so the
                // pointer can reach the list without closing it.
                <div id={submenuId} hidden={!open} className="absolute top-full left-1/2 z-50 min-w-full -translate-x-1/2 pt-[0.4375rem]">
                  <ul className="bg-paper text-center">
                    {item.children.map((child) => (
                      <li key={child.href} className="[&+li]:border-t [&+li]:border-ink">
                        <Link
                          href={child.href}
                          aria-current={isCurrentPath(pathname, child.href) ? "page" : undefined}
                          className="block px-4 text-xl leading-[2.1875rem] font-light whitespace-nowrap text-ink uppercase hover:bg-cream aria-[current=page]:bg-cream"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
