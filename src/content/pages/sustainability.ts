import type { ContentPageInput } from "@/lib/content/sections";

export default {
  metadata: {
    title: "SUSTAINABILITY | The Rhynd",
    description: "Our mission at The Rhynd is to leave the estate and the environment around us in a better condition than we found it.",
    path: "/sustainability",
    openGraph: {
      image: "sustainability-01"
    }
  },
  sections: [
    {
      type: "banner",
      image: "sustainability-01",
      height: 463
    },
    {
      type: "intro",
      heading: "Sustainability",
      paragraphs: [
        {
          text: "Sustainability is the word on everyone’s lips at the moment, but what are we actually doing about it?"
        },
        {
          text: "Our mission at The Rhynd is to leave the estate and the environment around us in a better condition than we found it."
        },
        {
          text: "Our carbon footprint is always at the front of our minds. Every day, we take steps to improve it, and we are measuring our progress."
        },
        {
          text: "We have listed some of our endeavours, and tried to provide a glimpse into the future. If you have any questions, please don’t hesitate to get in touch."
        }
      ],
      width: "lg"
    },
    {
      type: "split",
      image: "sustainability-02",
      imageSide: "left",
      tone: "paper",
      bordered: true,
      height: 608,
      heading: {
        text: "Home grown and locally sourced",
        light: true
      },
      paragraphs: [
        {
          text: "We are firm believers that the less food travels the better. Scotland has world-beating standards of food production, and we also avoid the hefty carbon footprint of, say, a pineapple crossing the globe! That’s why we hand-rear our own Tamworth pigs, press our own apples, and will soon be growing our own vegetables in our new polytunnel."
        },
        {
          text: "For anything else, we rely on a local baker and a butcher who specialises in Scottish meat."
        }
      ]
    },
    {
      type: "split",
      image: "sustainability-03",
      imageSide: "right",
      tone: "paper",
      bordered: true,
      height: 634,
      heading: {
        text: "Trees, hedges and woodlands",
        light: true
      },
      paragraphs: [
        {
          text: "We plant hundreds of trees every year, as well as hundreds of meters of hedgerows. Over the past few years we’ve seen encouraging signs, including a large increase in wild grey partridge — a key indicator of the land’s health."
        },
        {
          text: "We care for St Michaels Wood, and other woodlands and are about to embark on a 20-year regeneration programme to replace ageing trees."
        }
      ]
    },
    {
      type: "split",
      image: "sustainability-04",
      imageSide: "left",
      tone: "paper",
      bordered: true,
      height: 758,
      heading: {
        text: "Net carbon reduction",
        light: true
      },
      paragraphs: [
        {
          text: "We are proud to say that our overall net emissions from land use are negative. Our annual carbon audit, conducted by Scottish Agronomy, shows that we are removing 66,737kg (66 tonnes) of carbon from the atmosphere every year."
        },
        {
          text: "This is thanks to our work on forestry and our focus on good yields, and takes into account the several thousand tonnes of wheat, barley and oats we harvest for Quaker Oats, alcohol production and animal feed. This compares really well with the average figure of 4.3 tonnes of carbon emitted for every hectare of farmland, according to [www.gov.scot](http://www.gov.scot/)."
        },
        {
          text: "Our work on the farm does not stop, though, and we are constantly looking at ways to improve our carbon footprint."
        }
      ]
    },
    {
      type: "split",
      image: "sustainability-05",
      imageSide: "right",
      tone: "paper",
      bordered: true,
      height: 832,
      heading: {
        text: "Sustainable power",
        light: true
      },
      paragraphs: [
        {
          text: "Our offices, stables and main house are all heated by a biomass boiler powered by our own sustainably felled timber from Craigie Farm. Instead of heating a large, uninsulated shed, we use infrared heaters in the gym. We are currently exploring solar panels to not only power the gym, clay ground, café and event space, but also feed power back into the grid."
        },
        {
          text: "Every year we are moving more of our clay traps from battery to mains electricity, which will soon benefit from solar power. We also recycle our cartridges and paper regularly."
        },
        {
          text: "While the heating in the event space does currently rely on kerosene, we spent many months insulating the roof to minimise heat loss, ensuring the space runs as efficiently as possible."
        }
      ]
    },
    {
      type: "split",
      image: "sustainability-06",
      imageSide: "left",
      tone: "paper",
      bordered: true,
      height: 634,
      heading: {
        text: "Make, reuse and mend",
        light: true
      },
      paragraphs: [
        {
          text: "Alongside souring all our food as locally as possible, we also make our own menus and even sourced the flooring in the event space from a reclamation yard."
        },
        {
          text: "We live by a ‘make do and mend’ philosophy, with an on-site maintenance team that repairs rather than replaces. The same goes for the cars on the estate – we do not lease vehicles and we don’t replace them when we don’t need to."
        }
      ]
    },
    {
      type: "split",
      image: "sustainability-07",
      imageSide: "right",
      tone: "paper",
      bordered: true,
      height: 634,
      heading: {
        text: "Working with the soil",
        light: true
      },
      paragraphs: [
        {
          text: "Soil is incredibly important to us. As an arable farm, we focus on wheat, barley, oats and oil seed rape, while we also lease land for potatoes, carrots, peas and fruit in order to support the soil’s nutrient profile via crop rotation."
        },
        {
          text: "We test a quarter of the farm’s soil every year to understand exactly what it needs — and what it doesn’t."
        }
      ]
    }
  ]
} satisfies ContentPageInput;
