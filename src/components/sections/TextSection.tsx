import { ContentStack, type ContentStackProps } from "@/components/sections/ContentStack";
import { cn } from "@/lib/utils";

const widths = {
  sm: "max-w-[36rem]", // ~564px (Activities intro)
  md: "max-w-[40rem]", // ~630px (vouchers, Bacon and Brakes)
  lg: "max-w-[48rem]", // ~770px (Stay intro, Sustainability intro)
  xl: "max-w-[53rem]", // ~850px (Wild weddings intro, Fitness intro)
} as const;

type TextSectionProps = Omit<ContentStackProps, "className"> & {
  /** Measure of the copy column. */
  width?: keyof typeof widths;
  className?: string;
};

/**
 * A centred band of copy: page introductions (with `headingAs="h1"`),
 * "Staying for a wedding?" blocks, voucher bands and similar.
 */
export function TextSection({ width = "lg", className, ...stack }: TextSectionProps) {
  return (
    <section className={cn("bg-paper px-5 py-12 lg:py-16", className)}>
      <ContentStack {...stack} className="mx-auto max-w-content" proseClassName={cn("mx-auto", widths[width], stack.proseClassName)} />
    </section>
  );
}
