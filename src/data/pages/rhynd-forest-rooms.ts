import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Luxury Cabins in Fife near Tentsmuir | Rhynd Forest Rooms",
    description: "Stay in the Rhynd Forest Rooms: private woodland cabins for two in Fife, near Tentsmuir Forest, Tentsmuir Beach and St Andrews. Check availability and prices.",
    path: "/rhynd-forest-rooms",
    openGraph: {
      title: "Rhynd Forest Rooms | A Luxury Hotel in the Woods",
      description: "Four private woodland cabins in Fife, each sleeping two and at least 60 metres apart. Explore Tentsmuir Forest and Beach, or simply enjoy the peace and quiet.",
      image: "rhynd-forest-rooms-01"
    }
  },
  sections: [
    {
      type: "banner",
      image: "rhynd-forest-rooms-01",
      width: "content",
      height: 492
    },
    {
      type: "intro",
      heading: "Stay in the Rhynd forest rooms",
      paragraphs: [
        {
          heading: "Luxury woodland cabins near St. Andrews in Fife"
        },
        {
          text: "Looking for a quiet retreat to escape the world? The Rhynd forest rooms are for you. Our four Konga cabins sit in the Fife countryside, with space for two in each and interiors designed to connect you directly with nature."
        },
        {
          text: "They aren’t just cabins, though. The design brief to architect Mette Fredskild was to build a ‘luxury hotel in the woods’. This is exactly what she’s done, and they’re even more amazing in the flesh."
        }
      ],
      width: "md",
      actions: [
        {
          label: "Book now",
          href: "#availability"
        }
      ],
      actionsPosition: "after-heading"
    },
    {
      type: "gallery",
      label: "Forest room photos",
      canvas: {
        w: 568,
        h: 1171
      },
      items: [
        {
          image: "rhynd-forest-rooms-02",
          box: {
            x: 0,
            y: 0,
            w: 304,
            h: 170
          }
        },
        {
          image: "rhynd-forest-rooms-03",
          box: {
            x: 314,
            y: 0,
            w: 254,
            h: 170
          }
        },
        {
          image: "rhynd-forest-rooms-04",
          box: {
            x: 0,
            y: 180,
            w: 568,
            h: 377
          }
        },
        {
          image: "rhynd-forest-rooms-05",
          box: {
            x: 0,
            y: 567,
            w: 568,
            h: 378
          }
        },
        {
          image: "rhynd-forest-rooms-06",
          box: {
            x: 0,
            y: 955,
            w: 385,
            h: 216
          }
        },
        {
          image: "rhynd-forest-rooms-07",
          box: {
            x: 395,
            y: 955,
            w: 173,
            h: 216
          }
        }
      ]
    },
    {
      type: "booking",
      id: "availability",
      heading: "Availability and booking",
      href: "https://widgets.bookalet.co.uk/129c2c27-1948-45ce-9707-a53e86996fa4_VO9DMezJ",
      label: "Check availability and book",
      provider: "Bookalet"
    },
    {
      type: "overlayCard",
      image: "rhynd-forest-rooms-08",
      heading: {
        text: "About"
      },
      paragraphs: [
        {
          heading: "Meet the forest rooms"
        },
        {
          text: "Our first four forest rooms are called Owl, Curlew, Red Squirrel and Goose – a nod to the wildlife around us and the countryside you’ve come to enjoy."
        },
        {
          text: "Each sleeps two, whether you’re visiting as a couple, travelling on your own or staying for a wedding at The Rhynd."
        },
        {
          heading: "A little space to yourself"
        },
        {
          text: "We believe that when you stay in the countryside, you want peace and quiet. That’s why our forest rooms are at least 60 metres apart, giving you room to enjoy your surroundings and a little privacy."
        },
        {
          text: "Start the morning with a coffee, take a walk through the forest or spend a quiet evening beside the fire pit."
        },
        {
          text: "Whether you’re here for a weekend together or a few days on your own, there’s no need to do very much at all."
        }
      ],
      actions: [
        {
          label: "Book now",
          href: "#availability"
        }
      ],
      cardTone: "paper",
      cardWidth: 566,
      height: 920
    },
    {
      type: "text",
      paragraphs: [
        {
          heading: "Tentsmuir Forest and Beach on your doorstep"
        },
        {
          text: "Just metres from the 4000-acre Tentsmuir Forest and under two miles from Tentsmuir Beach, our luxury cabins are a perfect base for exploring the local area."
        },
        {
          text: "Head out for a woodland walk, spend time on the beach or visit St. Andrews, just a 15-minute drive away. There’s plenty to see nearby, but there’s no need to fill every hour."
        },
        {
          heading: "Breakfast and dinner taken care of"
        },
        {
          text: "Our executive chef Jack Baldwin, previously sous chef at the Michelin-starred Peat Inn, prepares everything from scratch using ingredients from the farm and local suppliers. The venison comes from the estate, while vegetables are grown in our own polytunnel."
        },
        {
          text: "Order a breakfast hamper – which includes eggs from the farm, bacon and sausages from the local butcher, bread from the local baker, plus much more – for a quiet morning in your forest room or choose dinner to enjoy during your stay. The specials at the moment include venison ragù with pappardelle and Parmesan, or a vegetarian tagine with couscous and flatbread. Proper food, without having to head out for the evening."
        },
        {
          text: "You can add breakfast and dinner when you book and leave the preparation to us."
        }
      ],
      width: "lg",
      actions: [
        {
          label: "Enquire",
          href: "mailto:weddings@therhynd.com?subject=I%27m%20interested%20in%20food%20for%20the%20forest%20rooms"
        }
      ]
    },
    {
      type: "split",
      image: "rhynd-forest-rooms-09",
      imageSide: "right",
      tone: "paper",
      height: 681,
      paragraphs: [
        {
          heading: "A cabin with some thought behind it"
        },
        {
          text: "The idea for our forest rooms came partly from a cabin stay Ed and Lisa had on the west coast. The view was lovely, but there was nowhere to put anything. Washing up while sitting on the bed soon lost its appeal."
        },
        {
          text: "We wanted something a little more practical here. Built by Konga, the forest rooms have a kitchen, space to store your luggage and room to enjoy your stay without constantly moving things out of the way."
        },
        {
          text: "The windows are different sizes and set at different heights, giving you changing views whether you’re standing, sitting or lying down. Add fresh cotton sheets, a proper-sized fridge, a fully equipped kitchen and the ability to order ready-made meals from the café, and you have the comforts you want with the countryside right outside."
        }
      ],
      actions: [
        {
          label: "Book now",
          href: "#availability"
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
          text: "The forest rooms are a short five-minute walk from The Rhynd and are available to couples and guests celebrating at the Rhynd or Craw’s Nest."
        },
        {
          text: "If you’re bringing a larger group, our farmhouse sleeps up to nine people and offers more space to stay together."
        }
      ],
      width: "xl",
      actions: [
        {
          label: "Explore weddings",
          href: "/weddings"
        }
      ]
    },
    {
      type: "text",
      paragraphs: [
        {
          heading: "Have a question before you book?"
        },
        {
          text: "Tell us your preferred dates and what you’d like to know. We’re happy to help you plan your stay."
        },
        {
          text: "[The Rhynd Forest Rooms Terms and Conditions.](/documents/forest-rooms-terms-and-conditions.pdf)"
        }
      ],
      width: "xl",
      actions: [
        {
          label: "Email the team",
          href: "mailto:weddings@therhynd.com?subject=I%27d%20like%20to%20know%20more%20about%20the%20forest%20rooms!"
        }
      ]
    },
    {
      type: "gallery",
      label: "Forest room photos",
      canvas: {
        w: 980,
        h: 1771
      },
      items: [
        {
          image: "rhynd-forest-rooms-10",
          box: {
            x: 0,
            y: 0,
            w: 295,
            h: 197
          }
        },
        {
          image: "rhynd-forest-rooms-11",
          box: {
            x: 310,
            y: 0,
            w: 328,
            h: 409
          }
        },
        {
          image: "rhynd-forest-rooms-12",
          box: {
            x: 653,
            y: 0,
            w: 327,
            h: 409
          }
        },
        {
          image: "rhynd-forest-rooms-13",
          box: {
            x: 0,
            y: 212,
            w: 295,
            h: 197
          }
        },
        {
          image: "rhynd-forest-rooms-14",
          box: {
            x: 0,
            y: 424,
            w: 482,
            h: 604
          }
        },
        {
          image: "rhynd-forest-rooms-15",
          box: {
            x: 497,
            y: 424,
            w: 483,
            h: 604
          }
        },
        {
          image: "rhynd-forest-rooms-16",
          box: {
            x: 0,
            y: 1043,
            w: 296,
            h: 371
          }
        },
        {
          image: "rhynd-forest-rooms-17",
          box: {
            x: 311,
            y: 1043,
            w: 297,
            h: 371
          }
        },
        {
          image: "rhynd-forest-rooms-18",
          box: {
            x: 623,
            y: 1043,
            w: 357,
            h: 267
          }
        },
        {
          image: "rhynd-forest-rooms-19",
          box: {
            x: 623,
            y: 1325,
            w: 357,
            h: 446
          }
        },
        {
          image: "rhynd-forest-rooms-20",
          box: {
            x: 0,
            y: 1429,
            w: 608,
            h: 342
          }
        }
      ]
    }
  ]
} satisfies ContentPageInput;
