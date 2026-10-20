import { ReadMore } from "@/components/events/ReadMore";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { InlineText } from "@/components/sections/InlineText";
import { getImage } from "@/lib/assets";
import { previewBlocks, type AboutBlock } from "@/lib/events";

/**
 * "About the Event" body, laid out like the live rich text: blocks one blank
 * line apart, grouped lines directly under each other. With `preview`, it
 * opens collapsed after that many characters with "Read More >".
 */
export function EventAbout({ blocks, preview }: { blocks: AboutBlock[]; preview?: number }) {
  const full = <AboutBlocks blocks={blocks} />;
  if (preview === undefined) return full;
  return <ReadMore collapsed={<AboutBlocks blocks={previewBlocks(blocks, preview)} />} full={full} />;
}

function AboutBlocks({ blocks }: { blocks: AboutBlock[] }) {
  return (
    <div className="space-y-[1lh] [&_strong]:font-semibold">
      {blocks.map((block, index) => {
        if (typeof block === "string") {
          return (
            <p key={index}>
              <InlineText text={block} />
            </p>
          );
        }
        if (Array.isArray(block)) {
          return (
            <div key={index}>
              {block.map((line, lineIndex) =>
                line ? (
                  <p key={lineIndex}>
                    <InlineText text={line} />
                  </p>
                ) : (
                  <p key={lineIndex} aria-hidden="true" className="h-[1lh]" />
                ),
              )}
            </div>
          );
        }
        const image = getImage(block.image);
        return (
          <figure key={index}>
            <ResponsiveImage image={image} alt={block.alt ?? image.alt} className="h-auto w-full" />
          </figure>
        );
      })}
    </div>
  );
}
