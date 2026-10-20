import { InlineText } from "@/components/sections/InlineText";
import type { Paragraph } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

type ProseProps = {
  paragraphs: Paragraph[];
  className?: string;
};

/**
 * Body copy blocks at the lead size (paragraphs, subheadings, lists, quotes),
 * one blank line apart. Text alignment is inherited from the parent.
 */
export function Prose({ paragraphs, className }: ProseProps) {
  return (
    <div className={cn("space-y-[1.45em] text-lead font-light", className)}>
      {paragraphs.map((block, index) => {
        if ("heading" in block) {
          return (
            <h3 key={index} className="font-normal">
              <InlineText text={block.heading} />
            </h3>
          );
        }
        if ("list" in block) {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5 text-left marker:text-ink">
              {block.list.map((item) => (
                <li key={item}>
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if ("quote" in block) {
          return (
            <figure key={index}>
              <blockquote className="italic">
                <InlineText text={block.quote} />
              </blockquote>
              {block.cite && <figcaption className="mt-[1.45em] not-italic">{block.cite}</figcaption>}
            </figure>
          );
        }
        return (
          <p key={index}>
            <InlineText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
