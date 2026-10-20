import { createCn } from "cn/config";

/**
 * Class merging aware of the brand type scale in src/styles/globals.css, so that
 * e.g. `text-button` replaces a component's default `text-sm` instead of
 * being mistaken for a colour. Add new `--text-*` tokens here too.
 */
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display", "tagline", "heading", "subheading", "title", "lead", "footer", "button", "button-lg", "nav"] },
      ],
    },
  },
});
