import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "BOOK A TABLE | The Rhynd",
    description: "Reserve a Table. For bookings over 10 people, please email cafe@therhynd.com.",
    path: "/book-a-table"
  },
  sections: [
    {
      type: "form",
      form: "tableEnquiry",
      heading: {
        text: "Reserve a Table"
      },
      headingAs: "h1",
      paragraphs: [
        {
          text: "For bookings over 10 people, please email [cafe@therhynd.com](mailto:cafe@therhynd.com)."
        }
      ]
    }
  ]
} satisfies ContentPageInput;
