import { site } from "@/lib/site";

/**
 * Map of the venue below the tickets, where the live event pages show a
 * Google map (979×314 on desktop, full width 16:9 on phones). OpenStreetMap
 * is used instead: it needs no API key and sets no cookies, while the live
 * Google map only loads after cookie consent.
 */
export function EventMap() {
  const { lat, lng } = site.address.geo;
  const bbox = [lng - 0.021, lat - 0.0037, lng + 0.021, lat + 0.0037].map((n) => n.toFixed(5)).join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  return (
    <div className="mx-auto aspect-video w-full md:aspect-auto md:h-[19.625rem] md:max-w-content">
      <iframe
        src={src}
        title="Map of Rhynd Farm, Leuchars, Tayport KY16 0DR"
        loading="lazy"
        className="size-full border-0"
      />
    </div>
  );
}
