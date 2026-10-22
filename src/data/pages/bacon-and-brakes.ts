import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Bacon and Brakes - car and motorcycle meet | The Rhynd",
    description: "Scotland's biggest monthly car and motorcycle meet for vintage and modern vehicles. Come along to our next event - at the Rhynd Café near Leuchars, Fife.",
    path: "/bacon-and-brakes",
    openGraph: {
      image: "bacon-and-brakes-01"
    }
  },
  sections: [
    {
      type: "banner",
      image: "bacon-and-brakes-01",
      height: 400,
      video: {
        src: "/videos/bacon-and-brakes-720p.mp4",
        poster: "bacon-and-brakes-01"
      }
    },
    {
      type: "intro",
      heading: "Bacon and Brakes",
      paragraphs: [
        {
          text: "Bacon and Brakes is our monthly car and motorcycle meeting that takes place between 9am and 1pm on the first Sunday of every month from March to September."
        },
        {
          text: "We welcome all cars and ‘bikes, from all eras, whether it’s a brand-new Honda CBR600, or a works Jaguar XK120. There’s no charge for coming, and there’s no need to book. Bacon and Brakes is an old-school, friendly car and motorcycle meet and we’re not pretending to be anything grander than a bunch of people with a shared passion for all things automotive."
        }
      ],
      width: "md",
      actions: [
        {
          label: "Visit the Bacon and Brakes website",
          href: "https://www.baconandbrakes.com/"
        }
      ]
    },
    {
      type: "gallery",
      label: "Bacon and Brakes photos",
      canvas: {
        w: 980,
        h: 1804
      },
      items: [
        {
          image: "bacon-and-brakes-02",
          box: {
            x: 0,
            y: 0,
            w: 347,
            h: 231
          }
        },
        {
          image: "bacon-and-brakes-03",
          box: {
            x: 362,
            y: 0,
            w: 294,
            h: 231
          }
        },
        {
          image: "bacon-and-brakes-04",
          box: {
            x: 671,
            y: 0,
            w: 309,
            h: 205
          }
        },
        {
          image: "bacon-and-brakes-05",
          box: {
            x: 671,
            y: 220,
            w: 309,
            h: 463
          }
        },
        {
          image: "bacon-and-brakes-06",
          box: {
            x: 0,
            y: 246,
            w: 656,
            h: 437
          }
        },
        {
          image: "bacon-and-brakes-07",
          box: {
            x: 0,
            y: 698,
            w: 303,
            h: 202
          }
        },
        {
          image: "bacon-and-brakes-08",
          box: {
            x: 318,
            y: 698,
            w: 662,
            h: 438
          }
        },
        {
          image: "bacon-and-brakes-09",
          box: {
            x: 0,
            y: 915,
            w: 303,
            h: 221
          }
        },
        {
          image: "bacon-and-brakes-10",
          box: {
            x: 0,
            y: 1151,
            w: 980,
            h: 653
          }
        }
      ]
    }
  ]
} satisfies ContentPageInput;
