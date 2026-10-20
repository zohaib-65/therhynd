import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "The Rhynd Café | Scottish & seasonal food near St Andrews",
    description: "We specialise in locally sourced food that's cooked on site. Our menu changes with the seasons, and is cooked by our head chef Jack Baldwin. Open Fri-Sun, near St Andrews, Fife.",
    path: "/cafe",
    openGraph: {
      image: "cafe-02"
    }
  },
  sections: [
    {
      type: "intro",
      heading: "The Rhynd Café",
      paragraphs: [
        {
          text: "Open Friday to Sunday, 9am to 5pm, The Rhynd Café was launched in 2017. We've always believed that the less food travels, the better it tastes, so that's why we love our local suppliers, whether that's Barnett's Bakery, Henderson's Butchers or the farm itself."
        },
        {
          text: "Our head chef is Jack Baldwin, who was the head chef at the Haar and sous chef at the Michelin-starred Peat Inn before joining us in July 2024."
        },
        {
          text: "[View our menu here.](/documents/cafe-menu.pdf)"
        },
        {
          text: "[View our wine list here.](/documents/cafe-wine-list.pdf)"
        },
        {
          text: "*Please be aware that we change our menu on a weekly basis to make the most of seasonal produce.*"
        }
      ],
      width: "xl"
    },
    {
      type: "video",
      title: "Film of The Rhynd café",
      video: {
        src: "/videos/rhynd-cafe-film-480p.mp4",
        poster: "cafe-01"
      }
    },
    {
      type: "overlayCard",
      image: "cafe-02",
      heading: {
        text: "Who we are"
      },
      cardTone: "paper",
      cardWidth: 494,
      height: 802,
      paragraphs: [
        {
          quote: "\"The team at The Rhynd are passionate champions of sustainability, living by a clear and simple philosophy: the less distance food travels, the better. Driven by Scotland’s world-class standards of food production, every corner of the estate reflects a deep respect for the land. Visitors can see their hand-reared Tamworth pigs thriving in a natural environment, learn about their fresh orchard apples pressed on-site, and step into bustling polytunnels overflowing with crisp, home-grown vegetables.\"",
          cite: "Serenity Scotland"
        }
      ]
    },
    {
      type: "gallery",
      label: "Café photos",
      canvas: {
        w: 980,
        h: 942
      },
      items: [
        {
          image: "cafe-03",
          box: {
            x: 0,
            y: 0,
            w: 980,
            h: 301
          }
        },
        {
          image: "cafe-04",
          box: {
            x: 0,
            y: 321,
            w: 576,
            h: 301
          }
        },
        {
          image: "cafe-05",
          box: {
            x: 596,
            y: 321,
            w: 384,
            h: 301
          }
        },
        {
          image: "cafe-06",
          box: {
            x: 0,
            y: 641,
            w: 384,
            h: 301
          }
        },
        {
          image: "cafe-07",
          box: {
            x: 404,
            y: 641,
            w: 576,
            h: 301
          }
        }
      ]
    },
    {
      type: "form",
      id: "reserve",
      form: "tableEnquiry",
      heading: {
        text: "Reserve a Table"
      },
      headingSize: "xs",
      paragraphs: [
        {
          text: "For bookings over 10 people, please email [cafe@therhynd.com](mailto:cafe@therhynd.com)."
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
          href: "https://www.therhynd.com/gift-card"
        }
      ]
    },
    {
      type: "gallery",
      label: "Café photos",
      canvas: {
        w: 980,
        h: 2262
      },
      items: [
        {
          image: "cafe-08",
          box: {
            x: 0,
            y: 0,
            w: 606,
            h: 909
          }
        },
        {
          image: "cafe-09",
          box: {
            x: 621,
            y: 0,
            w: 359,
            h: 358
          }
        },
        {
          image: "cafe-10",
          box: {
            x: 621,
            y: 373,
            w: 359,
            h: 536
          }
        },
        {
          image: "cafe-11",
          box: {
            x: 0,
            y: 924,
            w: 571,
            h: 321
          }
        },
        {
          image: "cafe-12",
          box: {
            x: 586,
            y: 924,
            w: 190,
            h: 237
          }
        },
        {
          image: "cafe-13",
          box: {
            x: 791,
            y: 924,
            w: 189,
            h: 237
          }
        },
        {
          image: "cafe-14",
          box: {
            x: 586,
            y: 1176,
            w: 394,
            h: 393
          }
        },
        {
          image: "cafe-15",
          box: {
            x: 0,
            y: 1260,
            w: 309,
            h: 309
          }
        },
        {
          image: "cafe-16",
          box: {
            x: 324,
            y: 1260,
            w: 247,
            h: 309
          }
        },
        {
          image: "cafe-17",
          box: {
            x: 0,
            y: 1584,
            w: 452,
            h: 678
          }
        },
        {
          image: "cafe-18",
          box: {
            x: 467,
            y: 1584,
            w: 249,
            h: 374
          }
        },
        {
          image: "cafe-19",
          box: {
            x: 731,
            y: 1584,
            w: 249,
            h: 374
          }
        },
        {
          image: "cafe-20",
          box: {
            x: 467,
            y: 1973,
            w: 513,
            h: 289
          }
        }
      ]
    },
    {
      type: "text",
      heading: {
        text: "Our story"
      },
      headingSize: "md",
      width: "md",
      paragraphs: [
        {
          quote: "\"For anyone seeking an intimate, immersive glimpse into the heart of Scottish agriculture, artisan food production, and sustainable living, we couldn't recommends a visit to The Rhynd enough.\""
        },
        {
          text: "The Rhynd's owner, Ed Foster, has always had a passion for motoring and motorsport and that's why the café walls are adorned with racing memorabilia. As one customer put it, \"it looks like someone has just put their garage up on the wall\". We couldn't argue... With The Rhynd's monthly car meet Bacon and Brakes attracting over 500 cars each time, the café is becoming a Mecca for all motoring fans."
        },
        {
          text: "At the heart of it, though, is an amazing team that heroes locally sourced food, cooked on site. Head chef Jack is constantly incorporating seasonal produce and that's why we have such an ever-changing menu."
        },
        {
          text: "While the café is only open Friday to Sunday, it also hosts weddings, baby showers and birthdays during the week. Interested in renting the space? Then get in touch below."
        }
      ]
    }
  ]
} satisfies ContentPageInput;
