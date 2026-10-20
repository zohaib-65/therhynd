import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "AWARDS | The Rhynd",
    description: "We have been luck enough to win numerous awards over the years, and this is solely down to the team we have working at The Rhynd.",
    path: "/awards"
  },
  sections: [
    {
      type: "intro",
      heading: "Awards",
      paragraphs: [
        {
          text: "We have been luck enough to win numerous awards over the years, and this is solely down to the team we have working at The Rhynd. Whether it's the fact that, since 2016, the clay shooting ground has been in Tripadvisor's top 10 per cent of attractions worldwide, or our Diversification of the Year award at the British Farming Awards, it's a very welcome seal of approval of what we are trying to do."
        }
      ],
      width: "xl"
    },
    {
      type: "features",
      label: "Awards",
      layout: "media-top",
      columns: 4,
      panel: true,
      imageAspect: "306/270",
      items: [
        {
          image: "awards-01",
          title: "Forest feasts",
          subtitle: "Finalist for Best Eating Experience at the 2026 Scottish Thistle Awards"
        },
        {
          image: "awards-02",
          title: "Rhynd Café",
          subtitle: "Finalist in the 2024 Scottish Business Awards"
        },
        {
          image: "awards-03",
          title: "Event space",
          subtitle: "Top five wedding venues for photos in 2023 by *The Courier*"
        },
        {
          image: "awards-04",
          title: "The farm",
          subtitle: "2021 Courier Business Awards finalist"
        },
        {
          image: "awards-05",
          title: "Rhynd Fitness",
          subtitle: "2020 Fife Sport Recognition Awards"
        },
        {
          image: "awards-06",
          title: "Clay shooting centre",
          subtitle: "Top 10% of attractions worldwide on Tripadvisor"
        },
        {
          image: "awards-07",
          title: "The Rhynd",
          subtitle: "Diversification of the Year at the British Farming Awards"
        }
      ]
    }
  ]
} satisfies ContentPageInput;
