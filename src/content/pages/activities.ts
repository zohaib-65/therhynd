import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "Activites at The Rhynd, Fife | Clay shooting and more",
    description: "Clay shooting, archery and axe throwing for beginners and experts, and for single lessons or large group bookings. Located just 15 mins from Dundee and St Andrews.",
    path: "/activities",
    openGraph: {
      image: "activities-05"
    }
  },
  sections: [
    {
      type: "intro",
      heading: "Activities at The Rhynd",
      paragraphs: [
        {
          text: "We have award-winning facilities at The Rhynd that include clay shooting, archery and axe throwing. Whether you want an individual clay lesson, or a stag or hen party activity, we have you covered!"
        }
      ],
      width: "sm",
      actions: [
        {
          label: "Visit the clay shooting website",
          href: "https://www.scottishclayshootingcentre.co.uk/"
        }
      ]
    },
    {
      type: "gallery",
      label: "Activities photos",
      canvas: {
        w: 980,
        h: 1987
      },
      items: [
        {
          image: "activities-01",
          box: {
            x: 0,
            y: 0,
            w: 260,
            h: 173
          }
        },
        {
          image: "activities-02",
          box: {
            x: 275,
            y: 0,
            w: 260,
            h: 173
          }
        },
        {
          image: "activities-03",
          box: {
            x: 550,
            y: 0,
            w: 196,
            h: 292
          }
        },
        {
          image: "activities-04",
          box: {
            x: 761,
            y: 0,
            w: 219,
            h: 292
          }
        },
        {
          image: "activities-05",
          box: {
            x: 0,
            y: 188,
            w: 535,
            h: 404
          }
        },
        {
          image: "activities-06",
          box: {
            x: 550,
            y: 307,
            w: 430,
            h: 285
          }
        },
        {
          image: "activities-07",
          box: {
            x: 0,
            y: 707,
            w: 459,
            h: 306
          }
        },
        {
          image: "activities-08",
          box: {
            x: 474,
            y: 707,
            w: 506,
            h: 378
          }
        },
        {
          image: "activities-09",
          box: {
            x: 0,
            y: 1028,
            w: 250,
            h: 290
          }
        },
        {
          image: "activities-10",
          box: {
            x: 265,
            y: 1028,
            w: 194,
            h: 290
          }
        },
        {
          image: "activities-11",
          box: {
            x: 474,
            y: 1100,
            w: 164,
            h: 218
          }
        },
        {
          image: "activities-12",
          box: {
            x: 653,
            y: 1100,
            w: 327,
            h: 218
          }
        },
        {
          image: "activities-13",
          box: {
            x: 0,
            y: 1334,
            w: 980,
            h: 653
          }
        }
      ]
    }
  ]
} satisfies ContentPageInput;
