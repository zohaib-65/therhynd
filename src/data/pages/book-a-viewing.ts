import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Book a Wedding Viewing in Fife | The Rhynd",
    description: "Come and explore The Rhynd’s barn wedding venue in Fife, near St Andrews. See the spaces, ask your questions and talk through your plans. Request a viewing.",
    path: "/book-a-viewing"
  },
  sections: [
    {
      type: "form",
      form: "viewing",
      heading: {
        text: "Book a viewing"
      },
      headingAs: "h1",
      note: [
        {
          text: "\\*If you would like to arrange to view The Craw’s Nest, please contact us via [events@therhynd.com](mailto:events@therhynd.com?subject=I%27m%20interested%20in%20The%20Craw%27s%20Nest!)."
        }
      ]
    }
  ]
} satisfies ContentPageInput;
