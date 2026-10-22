import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Stay at The Rhynd Farmhouse | Farm stay in Fife",
    description: "A beautiful renovated farmhouse that sleeps nine people just five minutes from the beach and 15 minutes from St Andrews. The perfect place for a relaxing country stay in Fife, Scotland.",
    path: "/rhynd-farmhouse",
    openGraph: {
      image: "rhynd-farmhouse-01"
    }
  },
  sections: [
    {
      type: "banner",
      image: "rhynd-farmhouse-01",
      width: "content",
      height: 500
    },
    {
      type: "intro",
      heading: "Stay at The Rhynd farmhouse",
      paragraphs: [
        {
          heading: "Countryside accommodation in North East Fife, near St Andrews"
        },
        {
          text: "Looking for a secluded, quiet place to stay with family or friends? The beautifully restored Rhynd Farmhouse sleeps up to nine people, with large, welcoming spaces, a fully equipped kitchen and a private garden. Just 40 metres from The Rhynd, it’s a comfortable base for a wedding weekend, a golf trip or a few days away together. We also have our four [Rhynd forest rooms](/rhynd-forest-rooms), each sleeping two, if you’d prefer a woodland hideaway or need more accommodation for your guests."
        },
        {
          text: "With Tentsmuir Beach nearby and St. Andrews just a 15-minute drive away, you can enjoy the peace of the countryside without being far from places to explore. Head out for the day, then come back to cook dinner, catch up and make yourself at home."
        }
      ],
      width: "md"
    },
    {
      type: "booking",
      id: "availability",
      heading: "Availability and booking",
      href: "https://widgets.bookalet.co.uk/c30470fe-2334-4890-a6a0-6d3cf997727f_VQsLqI3H/54171",
      label: "Check availability and book",
      provider: "Bookalet"
    },
    {
      type: "text",
      heading: {
        text: "Make the most of your stay"
      },
      paragraphs: [
        {
          heading: "Head out to explore Fife, or stay in and let us take care of dinner"
        }
      ],
      width: "md"
    },
    {
      type: "features",
      label: "Make the most of your stay",
      layout: "media-top",
      columns: 2,
      cardTone: "blush",
      imageAspect: "403/334",
      items: [
        {
          image: "rhynd-farmhouse-02",
          title: "Explore Fife, from forest to coast",
          subtitle: "*Woodland walks, beach days and St. Andrews*",
          paragraphs: [
            {
              text: "There’s plenty to discover from here, whether you fancy a walk through Tentsmuir Forest, a day on Tentsmuir Beach or a wander around St Andrews. Pack a picnic, follow the coast or find somewhere for lunch along the way."
            },
            {
              text: "Explore Fife’s towns and villages, visit local cafés or make time for a round of golf. Our farmhouse accommodation in Fife gives you room to stay together and a comfortable place to return to after a day out exploring the area."
            }
          ],
          action: {
            label: "Ask the team",
            href: "mailto:events@therhynd.com?subject=Local%20recommendations%20for%20our%20stay"
          }
        },
        {
          image: "rhynd-farmhouse-03",
          title: "A night in, with dinner taken care of",
          subtitle: "*Local ingredients, freshly prepared by our executive chef*",
          paragraphs: [
            {
              text: "Fancy a private dinner during your stay? Ask us about an evening with our executive chef Jack Baldwin, previously sous chef at the Michelin-starred Peat Inn. Gather everyone around the table for a meal without having to cook it yourself."
            },
            {
              text: "Jack makes everything from scratch using local ingredients, bringing the flavours of Fife to your evening at the farmhouse. Tell us what you have in mind and we’ll talk through availability, menu options and costs for a dinner during your stay."
            }
          ],
          action: {
            label: "Private dining",
            href: "mailto:events@therhynd.com?subject=Private%20dinner%20enquiry%20%E2%80%93%20Rhynd%20Farmhouse"
          }
        }
      ]
    },
    {
      type: "gallery",
      label: "Farmhouse photos",
      canvas: {
        w: 980,
        h: 5564
      },
      items: [
        {
          image: "rhynd-farmhouse-04",
          box: {
            x: 0,
            y: 0,
            w: 360,
            h: 240
          }
        },
        {
          image: "rhynd-farmhouse-05",
          box: {
            x: 375,
            y: 0,
            w: 160,
            h: 240
          }
        },
        {
          image: "rhynd-farmhouse-06",
          box: {
            x: 550,
            y: 0,
            w: 430,
            h: 286
          }
        },
        {
          image: "rhynd-farmhouse-07",
          box: {
            x: 0,
            y: 255,
            w: 535,
            h: 357
          }
        },
        {
          image: "rhynd-farmhouse-08",
          box: {
            x: 550,
            y: 301,
            w: 208,
            h: 311
          }
        },
        {
          image: "rhynd-farmhouse-09",
          box: {
            x: 773,
            y: 301,
            w: 207,
            h: 311
          }
        },
        {
          image: "rhynd-farmhouse-10",
          box: {
            x: 0,
            y: 627,
            w: 303,
            h: 202
          }
        },
        {
          image: "rhynd-farmhouse-11",
          box: {
            x: 318,
            y: 627,
            w: 662,
            h: 441
          }
        },
        {
          image: "rhynd-farmhouse-12",
          box: {
            x: 0,
            y: 844,
            w: 303,
            h: 454
          }
        },
        {
          image: "rhynd-farmhouse-13",
          box: {
            x: 318,
            y: 1083,
            w: 324,
            h: 215
          }
        },
        {
          image: "rhynd-farmhouse-14",
          box: {
            x: 657,
            y: 1083,
            w: 323,
            h: 215
          }
        },
        {
          image: "rhynd-farmhouse-15",
          box: {
            x: 0,
            y: 1313,
            w: 980,
            h: 655
          }
        },
        {
          image: "rhynd-farmhouse-16",
          box: {
            x: 0,
            y: 1983,
            w: 481,
            h: 322
          }
        },
        {
          image: "rhynd-farmhouse-17",
          box: {
            x: 496,
            y: 1983,
            w: 484,
            h: 322
          }
        },
        {
          image: "rhynd-farmhouse-18",
          box: {
            x: 0,
            y: 2320,
            w: 587,
            h: 391
          }
        },
        {
          image: "rhynd-farmhouse-19",
          box: {
            x: 602,
            y: 2320,
            w: 378,
            h: 568
          }
        },
        {
          image: "rhynd-farmhouse-20",
          box: {
            x: 0,
            y: 2726,
            w: 286,
            h: 429
          }
        },
        {
          image: "rhynd-farmhouse-21",
          box: {
            x: 301,
            y: 2726,
            w: 286,
            h: 429
          }
        },
        {
          image: "rhynd-farmhouse-22",
          box: {
            x: 602,
            y: 2903,
            w: 378,
            h: 252
          }
        },
        {
          image: "rhynd-farmhouse-23",
          box: {
            x: 0,
            y: 3170,
            w: 414,
            h: 276
          }
        },
        {
          image: "rhynd-farmhouse-24",
          box: {
            x: 429,
            y: 3170,
            w: 551,
            h: 363
          }
        },
        {
          image: "rhynd-farmhouse-25",
          box: {
            x: 0,
            y: 3461,
            w: 414,
            h: 276
          }
        },
        {
          image: "rhynd-farmhouse-26",
          box: {
            x: 429,
            y: 3548,
            w: 288,
            h: 189
          }
        },
        {
          image: "rhynd-farmhouse-27",
          box: {
            x: 732,
            y: 3548,
            w: 248,
            h: 189
          }
        },
        {
          image: "rhynd-farmhouse-28",
          box: {
            x: 0,
            y: 3752,
            w: 632,
            h: 449
          }
        },
        {
          image: "rhynd-farmhouse-29",
          box: {
            x: 647,
            y: 3752,
            w: 333,
            h: 500
          }
        },
        {
          image: "rhynd-farmhouse-30",
          box: {
            x: 0,
            y: 4216,
            w: 410,
            h: 273
          }
        },
        {
          image: "rhynd-farmhouse-31",
          box: {
            x: 425,
            y: 4216,
            w: 207,
            h: 273
          }
        },
        {
          image: "rhynd-farmhouse-32",
          box: {
            x: 647,
            y: 4267,
            w: 333,
            h: 222
          }
        },
        {
          image: "rhynd-farmhouse-33",
          box: {
            x: 0,
            y: 4504,
            w: 339,
            h: 250
          }
        },
        {
          image: "rhynd-farmhouse-34",
          box: {
            x: 354,
            y: 4504,
            w: 167,
            h: 250
          }
        },
        {
          image: "rhynd-farmhouse-35",
          box: {
            x: 536,
            y: 4504,
            w: 444,
            h: 294
          }
        },
        {
          image: "rhynd-farmhouse-36",
          box: {
            x: 0,
            y: 4769,
            w: 521,
            h: 348
          }
        },
        {
          image: "rhynd-farmhouse-37",
          box: {
            x: 536,
            y: 4813,
            w: 444,
            h: 304
          }
        },
        {
          image: "rhynd-farmhouse-38",
          box: {
            x: 0,
            y: 5131,
            w: 310,
            h: 207
          }
        },
        {
          image: "rhynd-farmhouse-39",
          box: {
            x: 325,
            y: 5131,
            w: 655,
            h: 433
          }
        },
        {
          image: "rhynd-farmhouse-40",
          box: {
            x: 0,
            y: 5353,
            w: 310,
            h: 211
          }
        }
      ]
    },
    {
      type: "text",
      paragraphs: [
        {
          heading: "Staying for a wedding?"
        },
        {
          text: "The farmhouse is just a short walk from the barn and is also available to couples celebrating at The Craw’s Nest. With space for up to nine people, it’s somewhere to gather a few of your closest family or friends before and after the day."
        },
        {
          text: "If you need more accommodation, our four [Rhynd forest rooms](/rhynd-forest-rooms) each sleep two and offer a quieter space tucked away in the trees."
        }
      ],
      width: "lg",
      actions: [
        {
          label: "Explore our weddings",
          href: "/weddings"
        }
      ]
    }
  ]
} satisfies ContentPageInput;
