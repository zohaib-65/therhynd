import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Accommodation in Fife near Tentsmuir Beach | The Rhynd",
    description: "Stay near Tentsmuir Beach and Forest at The Rhynd in Fife, Scotland. Choose woodland cabins for two or a farmhouse sleeping nine, a short drive from St Andrews.",
    path: "/stay-with-us",
    openGraph: {
      title: "Stay at The Rhynd | Near Tentsmuir Beach & St Andrews",
      description: "Explore Tentsmuir Forest and Beach, then come back to a woodland cabin for two or our farmhouse sleeping nine. A countryside stay in Fife, near St Andrews.",
      image: "stay-with-us-01"
    }
  },
  sections: [
    {
      type: "intro",
      heading: "Come and stay with us",
      paragraphs: [
        {
          heading: "Luxury countryside accommodation in Fife, Scotland"
        },
        {
          text: "Whether you’re looking for a peaceful weekend escape, a base to explore Tentsmuir Beach and St. Andrews, or somewhere for your wedding party to stay, we’d love to welcome you to The Rhynd."
        },
        {
          text: "As a family-run business, we want our guests to feel at home. Here on the farm in Leuchars, North East Fife, you can choose between our forest rooms and the beautifully restored Rhynd farmhouse. Both offer space to unwind and enjoy the countryside, whether you’re travelling as a couple or gathering your favourite people together."
        },
        {
          text: "You’re secluded but never isolated, with Tentsmuir Forest and Tentsmuir Beach nearby and historic St. Andrews just a 15-minute drive away. If you’re looking for things to do in Fife, there’s plenty to explore from here – woodland walks, days by the sea and golf – or you can simply enjoy a little peace and quiet."
        }
      ],
      width: "lg"
    },
    {
      type: "split",
      image: "stay-with-us-01",
      imageSide: "left",
      tone: "paper",
      bordered: true,
      height: 842,
      heading: {
        text: "The Rhynd forest rooms",
        href: "/rhynd-forest-rooms"
      },
      paragraphs: [
        {
          heading: "Cozy, private cabins hidden in the trees"
        },
        {
          text: "For couples, solo travellers or wedding guests looking for a peaceful hideaway, our four Forest Rooms offer a quiet place to stay. Each woodland cabin sleeps two, with minimalist interiors designed to connect you directly with nature."
        },
        {
          text: "Just metres from Tentsmuir Forest and a five-minute stroll from The Rhynd, our luxury cabins in Fife are a base for woodland walks, visits to Tentsmuir Beach and exploring nearby St Andrews. Or do very little at all and enjoy the privacy of your own space, with the farm and café close by."
        }
      ],
      actions: [
        {
          label: "Book now",
          href: "/rhynd-forest-rooms"
        }
      ],
      actionsPosition: "before-heading"
    },
    {
      type: "split",
      image: "stay-with-us-02",
      imageSide: "right",
      tone: "paper",
      bordered: true,
      height: 822,
      heading: {
        text: "The Rhynd farmhouse",
        href: "/rhynd-farmhouse"
      },
      paragraphs: [
        {
          heading: "Space to bring your favourite people together"
        },
        {
          text: "Looking for somewhere quiet to gather family or friends? The beautifully restored Rhynd Farmhouse sits just 40 metres from The Rhynd and sleeps up to nine people, with plenty of room to spend time together."
        },
        {
          text: "Large, welcoming spaces, a fully equipped kitchen and a private garden make it a comfortable base for wedding parties, golf trips or family get-togethers. Spend a day at Tentsmuir Beach, explore the Fife coast or head into St Andrews, then come back for dinner and an evening together."
        }
      ],
      actions: [
        {
          label: "Book now",
          href: "/rhynd-farmhouse"
        }
      ],
      actionsPosition: "before-heading"
    }
  ]
} satisfies ContentPageInput;
