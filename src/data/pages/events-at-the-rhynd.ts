import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Events at The Rhynd - near St Andrews, Fife | Buy tickets",
    description: "Browse our calendar and book tickets for events at The Rhynd, Fife. We hold wine safaris, forest feasts and supper clubs throughout the year that hero local produce.",
    path: "/events-at-the-rhynd",
    openGraph: {
      image: "events-at-the-rhynd-01"
    }
  },
  sections: [
    {
      type: "imageBand",
      image: "events-at-the-rhynd-01",
      heading: "Plates plant pines",
      paragraphs: [
        {
          text: "New for 2026, for every plate of food we serve at our forest feasts, we will plant another tree. With seven courses at each forest feast, and 24 attendees, we will be on course to plant 1800 trees in autumn this year!"
        }
      ]
    },
    {
      type: "intro",
      heading: "Rhynd events",
      width: "lg",
      paragraphs: [
        {
          heading: "Outdoor dining experiences"
        },
        {
          text: "We specialise in farm-to-fork experiences using our own produce. We may be able to accommodate some dietary requirements, but this isn’t always possible. We kindly ask that you consider this before booking, and if you have any questions, our team is always happy to help."
        },
        {
          text: "Do please book well in advance as our wine safaris, forest feasts and supper clubs tend to sell out. If you miss out, please email [cafe@therhynd.com](mailto:cafe@therhynd.com?subject=Please%20can%20I%20be%20put%20on%20the%20list%20for%20the%20wine%20safari%20and%20supper%20club%20dates%3F) and ask to be put on the list."
        },
        {
          text: "Fancy a private wine safari or supper club? Just get in touch and we can curate a special night just for you."
        },
        {
          quote: "\"One of the best food experiences I have ever had in Scotland.\"",
          cite: "Glasgow Gannets"
        }
      ]
    },
    {
      type: "logos",
      label: "As featured in:",
      logos: [
        "events-at-the-rhynd-03",
        "events-at-the-rhynd-02",
        "events-at-the-rhynd-04"
      ]
    },
    {
      type: "video",
      title: "Film of The Rhynd café and events",
      video: {
        src: "/videos/rhynd-cafe-film-480p.mp4",
        poster: "events-at-the-rhynd-05"
      }
    },
    {
      type: "events",
      label: "Upcoming events",
      events: [
        {
          title: "Chef's table dinner",
          date: "Sat 14 Nov",
          location: "Tayport",
          ribbon: "Multiple Dates",
          image: "events-at-the-rhynd-06",
          href: "/events/chefs-table-dinner-2026-11-14-18-00"
        },
        {
          title: "Chef's table dinner",
          date: "Sat 12 Dec",
          location: "Tayport",
          ribbon: "Multiple Dates",
          image: "events-at-the-rhynd-06",
          href: "/events/chefs-table-dinner-2026-12-12-18-00"
        },
        {
          title: "Chef's table dinner",
          date: "Sat 06 Feb",
          location: "Tayport",
          ribbon: "Multiple Dates",
          image: "events-at-the-rhynd-06",
          href: "/events/chefs-table-dinner-2027-02-06-18-00"
        },
        {
          title: "Chef's table dinner",
          date: "Sat 06 Mar",
          location: "Tayport",
          ribbon: "Multiple Dates",
          image: "events-at-the-rhynd-06",
          href: "/events/chefs-table-dinner-2027-03-06-18-00"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 21 May",
          location: "Tayport",
          image: "events-at-the-rhynd-10",
          href: "/events/wine-safari-and-forest-feast-13"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 28 May",
          location: "Tayport",
          image: "events-at-the-rhynd-11",
          href: "/events/wine-safari-and-forest-feast-14"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 18 Jun",
          location: "Tayport",
          image: "events-at-the-rhynd-12",
          href: "/events/wine-safari-and-forest-feast-15"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 25 Jun",
          location: "Tayport",
          image: "events-at-the-rhynd-13",
          href: "/events/wine-safari-and-forest-feast-16"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 09 Jul",
          location: "Tayport",
          image: "events-at-the-rhynd-14",
          href: "/events/wine-safari-and-forest-feast-17"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 23 Jul",
          location: "Tayport",
          image: "events-at-the-rhynd-15",
          href: "/events/wine-safari-and-forest-feast-18"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 06 Aug",
          location: "Tayport",
          image: "events-at-the-rhynd-16",
          href: "/events/wine-safari-and-forest-feast-19"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 20 Aug",
          location: "Tayport",
          image: "events-at-the-rhynd-17",
          href: "/events/wine-safari-and-forest-feast-20"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 10 Sept",
          location: "Tayport",
          image: "events-at-the-rhynd-18",
          href: "/events/wine-safari-and-forest-feast-21"
        },
        {
          title: "Wine safari and forest feast",
          date: "Fri 24 Sept",
          location: "Tayport",
          image: "events-at-the-rhynd-19",
          href: "/events/wine-safari-and-forest-feast-22"
        }
      ]
    },
    {
      type: "split",
      image: "events-at-the-rhynd-20",
      imageSide: "right",
      tone: "stone",
      height: 297,
      heading: {
        text: "How about a wild wedding at\nThe Craw's Nest?"
      },
      headingSize: "sm",
      actions: [
        {
          label: "Find out more",
          href: "/wild-weddings"
        }
      ]
    },
    {
      type: "testimonials",
      label: "What guests say",
      items: [
        {
          quote: "\"A faultless event with outstandingly delicious food with what seemed like a million candles!\"",
          name: "Will",
          image: "events-at-the-rhynd-21"
        },
        {
          quote: "\"An amazing experience and the chef was involved from start to finish. I'd highly recommend.\"",
          name: "Duncan",
          image: "events-at-the-rhynd-testimonial-02"
        },
        {
          quote: "The food was unbelievable and the atmosphere magical. Great hosts, top chef and an amazing night. We will be back!\"",
          name: "Margaux",
          image: "events-at-the-rhynd-testimonial-03"
        },
        {
          quote: "\"A totally unique event with every detail meticulously planned. Dinner in a safari tent, cooked before our eyes. Thoroughly recommend.\"",
          name: "Lisa",
          image: "events-at-the-rhynd-testimonial-04"
        }
      ]
    },
    {
      type: "gallery",
      label: "Events photos",
      canvas: {
        w: 980,
        h: 6977
      },
      items: [
        {
          image: "events-at-the-rhynd-22",
          box: {
            x: 0,
            y: 0,
            w: 554,
            h: 313
          }
        },
        {
          image: "events-at-the-rhynd-23",
          box: {
            x: 564,
            y: 0,
            w: 416,
            h: 313
          }
        },
        {
          image: "events-at-the-rhynd-24",
          box: {
            x: 0,
            y: 323,
            w: 980,
            h: 654
          }
        },
        {
          image: "events-at-the-rhynd-25",
          box: {
            x: 0,
            y: 987,
            w: 475,
            h: 634
          }
        },
        {
          image: "events-at-the-rhynd-26",
          box: {
            x: 485,
            y: 987,
            w: 495,
            h: 634
          }
        },
        {
          image: "events-at-the-rhynd-27",
          box: {
            x: 0,
            y: 1631,
            w: 446,
            h: 669
          }
        },
        {
          image: "events-at-the-rhynd-28",
          box: {
            x: 456,
            y: 1631,
            w: 524,
            h: 350
          }
        },
        {
          image: "events-at-the-rhynd-29",
          box: {
            x: 456,
            y: 1991,
            w: 232,
            h: 309
          }
        },
        {
          image: "events-at-the-rhynd-30",
          box: {
            x: 698,
            y: 1991,
            w: 282,
            h: 309
          }
        },
        {
          image: "events-at-the-rhynd-31",
          box: {
            x: 0,
            y: 2310,
            w: 149,
            h: 225
          }
        },
        {
          image: "events-at-the-rhynd-32",
          box: {
            x: 159,
            y: 2310,
            w: 337,
            h: 225
          }
        },
        {
          image: "events-at-the-rhynd-33",
          box: {
            x: 506,
            y: 2310,
            w: 474,
            h: 710
          }
        },
        {
          image: "events-at-the-rhynd-34",
          box: {
            x: 0,
            y: 2545,
            w: 496,
            h: 475
          }
        },
        {
          image: "events-at-the-rhynd-35",
          box: {
            x: 0,
            y: 3030,
            w: 292,
            h: 438
          }
        },
        {
          image: "events-at-the-rhynd-36",
          box: {
            x: 302,
            y: 3030,
            w: 292,
            h: 438
          }
        },
        {
          image: "events-at-the-rhynd-37",
          box: {
            x: 604,
            y: 3030,
            w: 376,
            h: 583
          }
        },
        {
          image: "events-at-the-rhynd-38",
          box: {
            x: 0,
            y: 3478,
            w: 594,
            h: 396
          }
        },
        {
          image: "events-at-the-rhynd-39",
          box: {
            x: 604,
            y: 3623,
            w: 376,
            h: 251
          }
        },
        {
          image: "events-at-the-rhynd-40",
          box: {
            x: 0,
            y: 3884,
            w: 272,
            h: 408
          }
        },
        {
          image: "events-at-the-rhynd-41",
          box: {
            x: 282,
            y: 3884,
            w: 326,
            h: 408
          }
        },
        {
          image: "events-at-the-rhynd-42",
          box: {
            x: 618,
            y: 3884,
            w: 362,
            h: 362
          }
        },
        {
          image: "events-at-the-rhynd-43",
          box: {
            x: 618,
            y: 4256,
            w: 362,
            h: 452
          }
        },
        {
          image: "events-at-the-rhynd-44",
          box: {
            x: 0,
            y: 4302,
            w: 608,
            h: 406
          }
        },
        {
          image: "events-at-the-rhynd-45",
          box: {
            x: 0,
            y: 4718,
            w: 577,
            h: 722
          }
        },
        {
          image: "events-at-the-rhynd-46",
          box: {
            x: 587,
            y: 4718,
            w: 393,
            h: 221
          }
        },
        {
          image: "events-at-the-rhynd-47",
          box: {
            x: 587,
            y: 4949,
            w: 393,
            h: 491
          }
        },
        {
          image: "events-at-the-rhynd-48",
          box: {
            x: 0,
            y: 5450,
            w: 430,
            h: 430
          }
        },
        {
          image: "events-at-the-rhynd-49",
          box: {
            x: 440,
            y: 5450,
            w: 540,
            h: 540
          }
        },
        {
          image: "events-at-the-rhynd-50",
          box: {
            x: 0,
            y: 5890,
            w: 430,
            h: 287
          }
        },
        {
          image: "events-at-the-rhynd-51",
          box: {
            x: 440,
            y: 6000,
            w: 265,
            h: 177
          }
        },
        {
          image: "events-at-the-rhynd-52",
          box: {
            x: 715,
            y: 6000,
            w: 265,
            h: 177
          }
        },
        {
          image: "events-at-the-rhynd-53",
          box: {
            x: 0,
            y: 6186,
            w: 299,
            h: 375
          }
        },
        {
          image: "events-at-the-rhynd-54",
          box: {
            x: 309,
            y: 6186,
            w: 300,
            h: 375
          }
        },
        {
          image: "events-at-the-rhynd-55",
          box: {
            x: 619,
            y: 6186,
            w: 361,
            h: 541
          }
        },
        {
          image: "events-at-the-rhynd-56",
          box: {
            x: 0,
            y: 6571,
            w: 609,
            h: 406
          }
        },
        {
          image: "events-at-the-rhynd-57",
          box: {
            x: 619,
            y: 6737,
            w: 361,
            h: 240
          }
        }
      ]
    },
    {
      type: "text",
      heading: {
        text: "Rhynd vouchers"
      },
      paragraphs: [
        {
          text: "Our vouchers can be used against our supper clubs, wine safaris and forest feasts, and in the café."
        }
      ],
      width: "md",
      actions: [
        {
          label: "Buy now",
          href: "mailto:cafe@therhynd.com?subject=Rhynd%20vouchers"
        }
      ]
    }
  ]
} satisfies ContentPageInput;
