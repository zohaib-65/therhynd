import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "PRICING | The Rhynd",
    description: "All of our up-to-date prices can be found in our brochure. To download it, please fill in the form below. Any questions, please get in touch – we're here to help!",
    path: "/copy-of-download-our-brochure"
  },
  sections: [
    {
      type: "form",
      form: "brochure",
      source: "Pricing",
      heading: {
        text: "Pricing"
      },
      headingAs: "h1",
      paragraphs: [
        {
          text: "All of our up-to-date prices can be found in our brochure. To download it, please fill in the form below. Any questions, please get in touch – we're here to help!"
        }
      ]
    }
  ]
} satisfies ContentPageInput;
