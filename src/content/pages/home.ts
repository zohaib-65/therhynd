import type { HomePageInput } from "@/lib/content/schema";

export default {
  metadata: {
    title: "The Rhynd in Fife | Weddings, café, gym, clay shooting and more",
    description: "Eat, stay and play at The Rhynd for weddings, events, clay shooting and fitness. Award-winning estate with café and events venue located just 15 mins from St Andrews.",
    path: "/",
    openGraph: {
      title: "The Rhynd in Fife | Weddings, café, gym, clay shooting and more",
      description: "Eat, stay and play at The Rhynd for weddings, events, clay shooting and fitness. Award-winning estate with café and events venue located just 15 mins from St Andrews.",
      image: "home-01"
    }
  },
  hero: {
    title: "THE RHYND",
    tagline: "Eat, stay, get married and play.",
    image: "home-01"
  },
  welcome: {
    heading: {
      text: "Welcome to The Rhynd"
    },
    paragraphs: [
      {
        text: "The Foster family has run Leuchars Estate for more than 100 years."
      },
      {
        text: "Having historically been a mixed farm, the last 10 years have seen a huge amount of diversification. Today, The Rhynd is the hub of all our activities and is owned and run by husband and wife team Ed and Lisa."
      },
      {
        text: "Whether you're with us for a coffee in the café, a session in the gym, some clay shooting, a wedding or a stay in one of the forest rooms, we want The Rhynd to feel like a home from home, a place of luxury to unwind and have fun."
      }
    ],
    image: "home-02"
  },
  weddingTiles: [
    {
      image: "home-04",
      cta: {
        label: "Explore weddings",
        href: "/weddings"
      },
      mobileOrder: 1
    },
    {
      image: "home-05",
      cta: {
        label: "Book a viewing",
        href: "/book-a-viewing"
      },
      mobileOrder: 3
    },
    {
      image: "home-06",
      cta: {
        label: "Download our brochure",
        href: "/download-our-brochure"
      },
      mobileOrder: 2
    }
  ],
  stay: {
    heading: {
      text: "Stay with us",
      href: "/stay-with-us"
    },
    paragraphs: [
      {
        text: "Escape to the countryside and make our home yours. From luxury forest rooms nestled in the trees, to a spacious farmhouse that sleeps nine, we have the perfect space for your next getaway. Unwind in one of the sunniest spots in Scotland, only minutes away from the coast and the home of golf."
      }
    ],
    cta: {
      label: "Find out more",
      href: "/stay-with-us"
    },
    image: "home-07"
  },
  eat: {
    heading: {
      text: "Eat with us",
      href: "/events-at-the-rhynd"
    },
    paragraphs: [
      {
        text: "Good food is part of life at The Rhynd. Led by executive chef Jack Baldwin, our café team cooks with seasonal ingredients from the farm and local suppliers. Join us for a coffee or a leisurely lunch, or make an evening of it at one of our Chef’s Table dinners or forest feasts. Hosted by Jack, these seasonal dinners bring people together around the table, celebrating produce from the estate over good food, good conversation and lots of drinks!"
      }
    ],
    ctas: [
      {
        label: "Book a table in the café",
        href: "/book-a-table"
      },
      {
        label: "Explore our events",
        href: "/events-at-the-rhynd"
      }
    ],
    image: "home-08"
  },
  sustainability: {
    heading: {
      text: "Rooted in the land",
      href: "/sustainability"
    },
    paragraphs: [
      {
        text: "The Rhynd is part of a working estate that has been in our family for more than a century. From supporting local food producers to planting trees, caring for our soil and finding new uses for old materials, we’re working to leave the land in better condition for the next generation."
      }
    ],
    cta: {
      label: "How we care for the estate",
      href: "/sustainability"
    },
    image: "home-09"
  },
  newsletter: {
    heading: "Join our mailing list"
  }
} satisfies HomePageInput;
