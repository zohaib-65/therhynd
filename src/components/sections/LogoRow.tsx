import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import type { ImageAsset } from "@/lib/assets";

type LogoRowProps = {
  /** Line above the logos, e.g. "As featured in:". */
  label: string;
  logos: ImageAsset[];
};

/** Press logos in a row ("As featured in:" on Events). */
export function LogoRow({ label, logos }: LogoRowProps) {
  return (
    <section className="px-5 pb-8 text-center">
      <p className="text-lead font-light">{label}</p>
      <ul className="mx-auto mt-6 flex max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <li key={logo.id} className="relative h-16 w-44 lg:h-[6.4rem] lg:w-60">
            <ResponsiveImage image={logo} fill className="object-contain" />
          </li>
        ))}
      </ul>
    </section>
  );
}
