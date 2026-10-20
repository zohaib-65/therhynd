import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { resolveLink } from "@/lib/links";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * A link from content: next/link for pages on this site, a plain link for
 * documents (new tab), email, phone and other websites. Extra props (class,
 * data attributes from Button asChild) are passed through.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const link = resolveLink(href);
  if (link.kind === "internal") {
    return (
      <Link href={link.href} {...rest}>
        {children}
      </Link>
    );
  }
  if (link.kind === "document") {
    return (
      <a href={link.href} target="_blank" rel="noopener" {...rest}>
        {children}
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </a>
    );
  }
  return (
    <a href={link.href} {...rest}>
      {children}
    </a>
  );
}
