import type { ReactNode } from "react";

import { InlineText } from "@/components/sections/InlineText";
import { Prose } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Paragraph } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

/** A row: a label with either bullet points or paragraphs. */
type InfoRow = {
  label: string;
  items?: string[];
  paragraphs?: Paragraph[];
};

type InfoTableProps = {
  heading: string;
  rows: InfoRow[];
  action?: ReactNode;
  /** `panel`: blush panel, small text (Wild weddings). `plain`: no panel, lead-size text (Barn weddings). */
  variant?: "panel" | "plain";
};

/**
 * "Useful information" (Wild weddings) and "The details" (Barn weddings): a
 * label column beside bullet lists or paragraphs. Stacks on phones. Marked
 * up as a description list.
 */
export function InfoTable({ heading, rows, action, variant = "panel" }: InfoTableProps) {
  const plain = variant === "plain";
  const textSize = plain ? "text-lead" : "text-base";
  return (
    <section className="px-5 py-10 lg:px-10">
      <div className={cn("mx-auto", plain ? "max-w-[57.5rem] lg:py-4" : "max-w-[85rem] bg-blush/80 px-5 py-10 lg:px-[13.6rem] lg:py-14")}>
        <SectionHeading heading={{ text: heading }} size="lg" />
        <dl className={cn("mt-8 text-lead font-light lg:mt-10", plain ? "space-y-10 lg:space-y-14" : "space-y-8")}>
          {rows.map((row) => (
            <div key={row.label} className={cn("grid gap-2", plain ? "md:grid-cols-[minmax(0,17.75rem)_minmax(0,31.25rem)]" : "md:grid-cols-[minmax(0,14.5rem)_minmax(0,31rem)] md:gap-10")}>
              <dt className={cn("font-normal", plain ? "text-[1.1875rem]" : "text-base")}>{row.label}</dt>
              <dd>
                {row.items && (
                  <ul className={cn("list-disc space-y-1 pl-5", textSize)}>
                    {row.items.map((item) => (
                      <li key={item}>
                        <InlineText text={item} />
                      </li>
                    ))}
                  </ul>
                )}
                {row.paragraphs && <Prose paragraphs={row.paragraphs} className={textSize} />}
              </dd>
            </div>
          ))}
        </dl>
        {action && <div className="mt-10 flex justify-center">{action}</div>}
      </div>
    </section>
  );
}
