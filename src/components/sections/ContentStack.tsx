import type { ReactNode } from "react";

import { Prose } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Heading, Paragraph } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

export type ActionsPosition = "before-heading" | "after-heading" | "end";

export type ContentStackProps = {
  heading?: Heading;
  headingAs?: "h1" | "h2" | "h3";
  headingSize?: "lg" | "md" | "sm" | "xs";
  paragraphs?: Paragraph[];
  actions?: ReactNode;
  /** Where the buttons sit: above the heading, between heading and copy, or last. */
  actionsPosition?: ActionsPosition;
  align?: "left" | "center";
  className?: string;
  proseClassName?: string;
};

/** The repeated "title, copy, buttons" column used inside most sections. */
export function ContentStack({
  heading,
  headingAs = "h2",
  headingSize = "lg",
  paragraphs,
  actions,
  actionsPosition = "end",
  align = "center",
  className,
  proseClassName,
}: ContentStackProps) {
  const actionRow = actions ? (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center" : "items-center lg:items-start",
        actionsPosition === "before-heading" ? "mb-8 lg:mb-12" : actionsPosition === "after-heading" ? "mt-5" : "mt-8 lg:mt-12",
      )}
    >
      {actions}
    </div>
  ) : null;
  return (
    <div className={cn(align === "center" ? "text-center" : "text-center lg:text-left", className)}>
      {actionsPosition === "before-heading" && actionRow}
      {heading && <SectionHeading heading={heading} as={headingAs} size={headingSize} />}
      {actionsPosition === "after-heading" && actionRow}
      {paragraphs && paragraphs.length > 0 && <Prose paragraphs={paragraphs} className={cn(heading && "mt-6 lg:mt-8", proseClassName)} />}
      {actionsPosition === "end" && actionRow}
    </div>
  );
}
