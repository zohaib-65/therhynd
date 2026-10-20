import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Wedding Venue in Fife near St Andrews | The Rhynd",
    description: "Discover The Rhynd, a family-run wedding venue in Fife near St Andrews, with exclusive-use barn and outdoor weddings, plus accommodation. Arrange a viewing.",
    path: "/weddings",
    openGraph: {
      image: "weddings-03"
    }
  },
  sections: [
    {
      type: "intro",
      heading: "Weddings at The Rhynd",
      paragraphs: [
        {
          heading: "Your bespoke, luxury wedding venue in Fife"
        },
        {
          text: "Every love story is unique, and we believe your wedding day should be too."
        },
        {
          text: "At The Rhynd, we don’t do assembly-line celebrations. As a family business rooted in the Fife countryside near St Andrews, we treat every couple like an extension of our own family. Our philosophy is simple: We help you create a day that feels like yours."
        },
        {
          text: "Whether you have your heart set on a grand celebration or a beautifully intimate day, we’re here to support you through the planning process, bringing your vision to life in one of our two venues – The Rhynd cattle court or the stretch-tented Craw’s Nest."
        }
      ],
      width: "xl",
      actions: [
        {
          label: "Download our brochure",
          href: "/download-our-brochure"
        }
      ]
    },
    {
      type: "gallery",
      label: "Wedding photos",
      canvas: {
        w: 980,
        h: 1436
      },
      items: [
        {
          image: "weddings-01",
          box: {
            x: 0,
            y: 0,
            w: 482,
            h: 322
          }
        },
        {
          image: "weddings-02",
          box: {
            x: 497,
            y: 0,
            w: 483,
            h: 322
          }
        },
        {
          image: "weddings-03",
          box: {
            x: 0,
            y: 437,
            w: 980,
            h: 553
          }
        },
        {
          image: "weddings-04",
          box: {
            x: 0,
            y: 1005,
            w: 312,
            h: 208
          }
        },
        {
          image: "weddings-05",
          box: {
            x: 327,
            y: 1005,
            w: 653,
            h: 431
          }
        },
        {
          image: "weddings-06",
          box: {
            x: 0,
            y: 1228,
            w: 312,
            h: 208
          }
        }
      ]
    },
    {
      type: "text",
      paragraphs: [
        {
          heading: "How we work: The luxury of choice"
        },
        {
          text: "We know that some couples want the total freedom of a blank-canvas wedding venue, while others would like more help with planning and running the day. That’s why we offer two exclusive-use wedding spaces here on the farm, each with its own character and approach."
        },
        {
          text: "Whichever setting you choose, you’ll have access to our on-site accommodation, including the Rhynd farmhouse and our forest rooms. Our barn weddings offer a blank-canvas option, with early access for setting up and absolutely no corkage fees. At The Craw’s Nest, we take care of the food and drinks through a set package, so you can relax and enjoy the day."
        }
      ],
      width: "lg",
      actions: [
        {
          label: "Book a Viewing",
          href: "/book-a-viewing"
        }
      ]
    },
    {
      type: "text",
      heading: {
        text: "Choose your setting"
      },
      paragraphs: [
        {
          heading: "Explore our two signature wedding spaces below to find the right setting for your day."
        }
      ],
      width: "md"
    },
    {
      type: "features",
      label: "Choose your setting",
      layout: "media-top",
      columns: 2,
      cardTone: "blush",
      imageAspect: "403/334",
      items: [
        {
          image: "weddings-07",
          title: "The Rhynd barn weddings",
          href: "/barn-weddings",
          subtitle: "*A beautifully restored blank-canvas space*",
          paragraphs: [
            {
              text: "Step inside our sympathetically converted cattle court – a rustic barn wedding venue in Fife, with exposed brick, historic wooden beams and twinkling fairy lights. It’s a space you can make your own, whether you want a grand dinner for up to 250 guests or a smaller, more intimate gathering."
            },
            {
              text: "Organise every last detail yourself, or ask our team for help with planning and running the day. With early access for setting up, absolutely no corkage fees and the freedom to choose your own suppliers, you can create a celebration that feels like yours. It’s your day, after all."
            }
          ],
          action: {
            label: "Explore Barn Weddings",
            href: "/barn-weddings"
          }
        },
        {
          image: "weddings-08",
          title: "Wild weddings at The Craw's Nest",
          href: "/wild-weddings",
          subtitle: "*Romance out in the elements*",
          paragraphs: [
            {
              text: "For couples who want to tie the knot surrounded by nature, our Wild Weddings offer something a little different. Tucked away in a remote part of the estate, The Craw’s Nest is an outdoor wedding venue in Fife for a more intimate, relaxed celebration."
            },
            {
              text: "Celebrate under a stretch tent, with locally sourced food cooked over an Argentinian grill in front of you, tables made from a fallen poplar tree and decorations from the surrounding forest. We take care of the food and drinks, leaving you to enjoy the beautiful setting and the company."
            }
          ],
          action: {
            label: "Explore Wild Weddings",
            href: "/wild-weddings"
          }
        }
      ],
      align: "center"
    },
    {
      type: "overlayCard",
      image: "weddings-09",
      heading: {
        text: "Make a weekend of it"
      },
      paragraphs: [
        {
          text: "Our wedding accommodation gives you the option to stay a little longer. The Rhynd Farmhouse sleeps up to nine people, while our four Forest Rooms each sleep two."
        },
        {
          text: "Both are available to couples celebrating in the barn or at The Craw’s Nest. Ask us about accommodation when you enquire."
        }
      ],
      cardTone: "paper",
      cardWidth: 628,
      height: 712,
      actions: [
        {
          label: "Explore wedding accomodation",
          href: "/stay-with-us"
        }
      ]
    },
    {
      type: "overlayCard",
      image: "weddings-10",
      heading: {
        text: "Let's build your dream day"
      },
      paragraphs: [
        {
          text: "No matter what kind of wedding you have in mind, we’re here to help you bring it to life. Whether you know exactly what you want or are still working it out, we’ll talk through your ideas, answer your questions and help you decide which of our two settings feels right for you."
        },
        {
          text: "Come and see us, have a look around and tell us about your plans. From your first visit to the day itself, we’ll be on hand with advice and support whenever you need it. We’d love to help you make it happen."
        }
      ],
      cardTone: "paper",
      cardWidth: 628,
      height: 768,
      actions: [
        {
          label: "Book a viewing",
          href: "/book-a-viewing"
        }
      ]
    },
    {
      type: "form",
      id: "enquire",
      form: "brochure",
      source: "Weddings",
      heading: {
        text: "Download our brochure or speak to the team!"
      },
      headingSize: "sm"
    }
  ]
} satisfies ContentPageInput;
