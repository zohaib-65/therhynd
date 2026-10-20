import Link from "next/link";
import { cva } from "class-variance-authority";

import type { Heading } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

/**
 * Heading sizes used on the live site:
 *  - lg: 56px section and page titles ("Stay with us", "What we do")
 *  - md: 45px card/form titles ("Our story", "Join our mailing list")
 *  - sm: 38px split-panel titles ("Home grown and locally sourced")
 *  - xs: 22px widget titles ("Reserve a Table")
 * Medium weight by default (the live site's synthetic bold); `heading.light`
 * switches to the thin weight.
 */
const headingVariants = cva("text-ink", {
  variants: {
    size: {
      lg: "text-heading",
      md: "text-subheading",
      sm: "text-title",
      xs: "text-[1.375rem] leading-snug",
    },
    light: {
      true: "font-light",
      false: "font-[425]",
    },
  },
  defaultVariants: { size: "lg", light: false },
});

type SectionHeadingProps = {
  heading: Heading;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "md" | "sm" | "xs";
  className?: string;
};

/**
 * A section or page title. With `heading.href` it is an underlined link, as
 * several headings are on the live site. Line breaks in the text are kept.
 */
export function SectionHeading({ heading, as: Tag = "h2", size = "lg", className }: SectionHeadingProps) {
  return (
    <Tag className={cn(headingVariants({ size, light: heading.light ?? false }), "whitespace-pre-line", className)}>
      {heading.href ? (
        <Link href={heading.href} className="underline decoration-[0.035em] underline-offset-[0.12em] hover:text-forest">
          {heading.text}
        </Link>
      ) : (
        heading.text
      )}
    </Tag>
  );
}
