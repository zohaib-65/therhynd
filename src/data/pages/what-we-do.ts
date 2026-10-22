import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "WHAT WE DO | The Rhynd",
    description: "From weddings, to locally sourced food, from fitness to clay shooting.",
    path: "/what-we-do"
  },
  sections: [
    {
      type: "intro",
      heading: "What we do",
      paragraphs: [
        {
          text: "From weddings, to locally sourced food, from fitness to clay shooting."
        },
        {
          text: "The Rhynd, meaning point or peninsular in Gaelic, is over 200 years old. Discover everything the estate has to offer from award-winning weddings to fitness, clay shooting and farm-to-fork dining."
        }
      ],
      width: "lg"
    },
    {
      type: "features",
      label: "What we do",
      layout: "media-left",
      columns: 2,
      items: [
        {
          image: "what-we-do-01",
          title: "Weddings",
          href: "/weddings",
          paragraphs: [
            {
              text: "The Rhynd is the perfect place to tie the knot for parties of all sizes up to 250 people."
            }
          ]
        },
        {
          image: "what-we-do-02",
          title: "Café",
          href: "/cafe",
          paragraphs: [
            {
              text: "We hero local produce, with everything cooked on site by our star chef Jack Baldwin."
            }
          ]
        },
        {
          image: "what-we-do-03",
          title: "Stay at the Rhynd",
          href: "/stay-with-us",
          paragraphs: [
            {
              text: "Our beautifully restored farmhouse sleeps up to nine people for stays of two nights or more."
            }
          ]
        },
        {
          image: "what-we-do-04",
          title: "Events",
          href: "/events-at-the-rhynd",
          paragraphs: [
            {
              text: "We host various events throughout the year that include wine safaris, supper clubs and even baby showers."
            }
          ]
        },
        {
          image: "what-we-do-05",
          title: "Fitness",
          href: "/rhynd-fitness",
          paragraphs: [
            {
              text: "Our award-winning strength and conditioning gym hosts indoor and outdoor classes throughout the year."
            }
          ]
        },
        {
          image: "what-we-do-06",
          title: "Clay shooting",
          href: "/activities",
          paragraphs: [
            {
              text: "Rated in the top 10 per cent of attractions worldwide on Tripadvisor, we offer lessons and bookings for large groups."
            }
          ]
        },
        {
          image: "what-we-do-07",
          title: "Archery and axe throwing",
          href: "/activities",
          paragraphs: [
            {
              text: "Year-round archery and axe throwing lessons for complete beginners and experienced shots."
            }
          ]
        },
        {
          image: "what-we-do-08",
          title: "Car shows",
          href: "/bacon-and-brakes",
          paragraphs: [
            {
              text: "Our monthly car meet, Bacon and Brakes, attracts 1000s of people and vehicles from all eras."
            }
          ]
        },
        {
          image: "what-we-do-09",
          title: "Farm",
          href: "/sustainability",
          paragraphs: [
            {
              text: "At the heart of the estate is the arable farm that grows wheat, barley, oil seed rape, oats and more."
            }
          ]
        },
        {
          image: "what-we-do-10",
          title: "Forestry",
          href: "/sustainability",
          paragraphs: [
            {
              text: "Blessed with ancient woodlands, we are in the process of reviving them, as well as planting more trees."
            }
          ]
        }
      ]
    }
  ]
} satisfies ContentPageInput;
