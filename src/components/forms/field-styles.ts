import { cva } from "class-variance-authority";

/**
 * The two input styles used on the live site:
 *  - `underline`: mailing-list form, a single bottom rule on white
 *  - `outlined`: footer contact form, a 2px slate box on the stone footer
 *  - `boxed`: enquiry forms (the live Sonas widgets): a thin grey box on white
 */
export const fieldAppearance = cva("", {
  variants: {
    appearance: {
      underline:
        "h-9 rounded-none border-0 border-b border-black bg-transparent px-0 text-base shadow-none focus-visible:border-b-2 focus-visible:border-forest focus-visible:ring-0 aria-invalid:border-b-2 aria-invalid:ring-0",
      outlined:
        "rounded-none border-2 border-slate bg-paper px-2 text-base text-ink shadow-none focus-visible:border-forest focus-visible:ring-0 aria-invalid:ring-0",
      boxed:
        "h-10 rounded-[3px] border border-ink/30 bg-white px-3 text-base text-ink shadow-none placeholder:text-ink/45 focus-visible:border-forest focus-visible:ring-2 focus-visible:ring-forest/30 aria-invalid:border-error aria-invalid:ring-0",
    },
  },
  defaultVariants: { appearance: "underline" },
});

export const labelAppearance = cva("text-base leading-5 font-light", {
  variants: {
    appearance: {
      underline: "text-black",
      outlined: "text-slate",
      boxed: "text-sm text-ink",
    },
  },
  defaultVariants: { appearance: "underline" },
});

export type FieldAppearance = "underline" | "outlined" | "boxed";

/** ids for the description and error that a control references via aria-describedby. */
export function describedBy(id: string, { description, error }: { description?: boolean; error?: boolean }) {
  return [description && `${id}-description`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
}
