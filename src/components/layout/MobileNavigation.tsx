"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { NavItem } from "@/data/navigation";
import { isCurrentPath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  items: NavItem[];
};

const itemClass = "py-2 text-[1.75rem] leading-tight font-light text-forest uppercase aria-[current=page]:text-ink/60";

/**
 * Menu button and full-screen cream menu (shadcn Sheet on Radix Dialog), as
 * on the live mobile site: large green capitals, a chevron beside each item
 * that has sub-pages. Group labels without a page ("Things to do", "More")
 * open their list when tapped. The dialog traps focus, closes with Escape or
 * the close button, and closes after choosing a page.
 */
export function MobileNavigation({ items }: MobileNavigationProps) {
  const pathname = usePathname();
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="grid size-11 place-items-center text-forest">
        <Menu aria-hidden="true" className="size-9" strokeWidth={1.5} />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent
        side="top"
        aria-describedby={undefined}
        className="h-dvh gap-0 overflow-y-auto border-0 bg-cream px-6 pt-16 pb-12 shadow-none [&>[data-slot=sheet-close]]:top-5 [&>[data-slot=sheet-close]]:right-4 [&>[data-slot=sheet-close]]:size-11 [&>[data-slot=sheet-close]_svg]:size-7 [&>[data-slot=sheet-close]_svg]:stroke-[1.25]"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Main">
          <ul className="mx-auto flex max-w-sm flex-col items-center gap-1">
            {items.map((item, index) => {
              const submenuId = `${baseId}-${index}`;
              const isExpanded = expanded === item.label;
              const toggle = () => setExpanded(isExpanded ? null : item.label);
              const chevron = (
                <ChevronDown aria-hidden="true" className={cn("size-6 transition-transform", isExpanded && "rotate-180")} strokeWidth={1.5} />
              );
              return (
                <li key={item.label} className="w-full text-center">
                  <div className="relative flex items-center justify-center">
                    {item.href ? (
                      <>
                        {item.children && (
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={submenuId}
                            onClick={toggle}
                            className="absolute left-0 grid size-11 place-items-center text-ink"
                          >
                            {chevron}
                            <span className="sr-only">{`${item.label} pages`}</span>
                          </button>
                        )}
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                            className={itemClass}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </>
                    ) : (
                      <button type="button" aria-expanded={isExpanded} aria-controls={submenuId} onClick={toggle} className={itemClass}>
                        <span className="absolute top-1/2 left-0 grid size-11 -translate-y-1/2 place-items-center text-ink">{chevron}</span>
                        {item.label}
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul id={submenuId} hidden={!isExpanded} className="pb-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose asChild>
                            <Link
                              href={child.href}
                              aria-current={isCurrentPath(pathname, child.href) ? "page" : undefined}
                              className="inline-block py-1.5 text-lg font-light text-forest uppercase aria-[current=page]:text-ink/60"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
