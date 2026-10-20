import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { InlineText } from "@/components/sections/InlineText";
import { getImage } from "@/lib/assets";
import type { PostBlock } from "@/lib/news";

/**
 * Renders an article body (an article's `body` in src/content/blog.ts): paragraphs,
 * subheadings, lists, quotes, rules and images with optional captions.
 * Strings are inline Markdown; an unknown image id fails the build.
 */
export function ArticleBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6 text-lead font-light wrap-break-word">
      {blocks.map((block, i) => {
        if ("heading" in block) {
          return (
            <h2 key={i} className="pt-4 text-title font-normal">
              <InlineText text={block.heading} />
            </h2>
          );
        }
        if ("list" in block) {
          const Tag = block.ordered ? "ol" : "ul";
          return (
            <Tag key={i} className={block.ordered ? "list-decimal space-y-2 pl-6" : "list-disc space-y-2 pl-6"}>
              {block.list.map((item, j) => (
                <li key={j}>
                  <InlineText text={item} />
                </li>
              ))}
            </Tag>
          );
        }
        if ("quote" in block) {
          return (
            <blockquote key={i} className="space-y-4 border-l-2 border-forest pl-5">
              {block.quote.split("\n\n").map((paragraph, j) => (
                <p key={j}>
                  <InlineText text={paragraph} />
                </p>
              ))}
            </blockquote>
          );
        }
        if ("rule" in block) return <hr key={i} className="border-ink/20" />;
        if ("image" in block) {
          const image = getImage(block.image);
          return (
            <figure key={i} className="my-8">
              <ResponsiveImage image={image} alt={block.alt ?? image.alt} className="h-auto w-full" />
              {block.caption && (
                <figcaption className="mt-3 text-center text-base text-ink/75">
                  <InlineText text={block.caption} />
                </figcaption>
              )}
            </figure>
          );
        }
        return (
          <p key={i}>
            <InlineText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
