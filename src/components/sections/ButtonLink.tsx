import type { VariantProps } from "class-variance-authority";

import { SmartLink } from "@/components/sections/SmartLink";
import { Button, type buttonVariants } from "@/components/ui/button";
import type { Link as LinkContent } from "@/lib/content/schema";

type ButtonLinkProps = {
  link: LinkContent;
  size?: Extract<VariantProps<typeof buttonVariants>["size"], "cta" | "tile">;
  className?: string;
};

/**
 * A link styled as the site's square dark call-to-action button. Works for
 * site pages, documents, email and external sites (see SmartLink).
 */
export function ButtonLink({ link, size = "cta", className }: ButtonLinkProps) {
  return (
    <Button asChild variant="solid" size={size} className={className}>
      <SmartLink href={link.href}>{link.label}</SmartLink>
    </Button>
  );
}
