import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "DOWNLOAD OUR BROCHURE | The Rhynd",
    description: "Download our brochure",
    path: "/download-our-brochure"
  },
  sections: [
    {
      type: "form",
      form: "brochure",
      source: "Download our brochure",
      heading: {
        text: "Download our brochure"
      },
      headingAs: "h1"
    }
  ]
} satisfies ContentPageInput;
