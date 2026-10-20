import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ButtonLink } from "@/components/sections/ButtonLink";
import type { ImageAsset } from "@/lib/assets";
import type { Link } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

type ImageTile = {
  image: ImageAsset;
  cta: Link;
  /** Position when stacked on phones (1-based). */
  mobileOrder?: number;
};

type ImageTilesProps = {
  tiles: ImageTile[];
  /** Accessible name for the group, e.g. "Weddings". */
  label: string;
};

const mobileOrderClass: Record<number, string> = { 1: "order-1", 2: "order-2", 3: "order-3", 4: "order-4" };

/**
 * Edge-to-edge row of photographs, each with a call-to-action button near the
 * bottom. Three columns from tablet up (506px tall on desktop); stacked on
 * phones, where the live site changes the order.
 */
export function ImageTiles({ tiles, label }: ImageTilesProps) {
  return (
    <section aria-label={label} className="bg-paper">
      <ul className="flex flex-col md:grid md:grid-cols-3">
        {tiles.map((tile) => (
          <li
            key={tile.cta.href}
            className={cn(
              "relative flex aspect-[320/250] items-end justify-center pb-6 md:order-none md:aspect-auto md:h-[clamp(20rem,35vw,31.625rem)] md:pb-[2.75rem]",
              tile.mobileOrder && mobileOrderClass[tile.mobileOrder],
            )}
          >
            <ResponsiveImage image={tile.image} fill />
            <ButtonLink link={tile.cta} size="tile" className="relative" />
          </li>
        ))}
      </ul>
    </section>
  );
}
