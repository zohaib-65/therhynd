import type { EventEntry } from "@/lib/events";

/**
 * Events copied from the live event pages (October 2026), oldest first.
 * Tickets are requested through the site's form; the team confirms and
 * takes payment. An event with no tickets listed is not on sale.
 */
export const events = [
  {
    slug: "burns-night-by-candlelight",
    title: "Burns Night by candlelight",
    summary: "A delicious four-course supper club hosted at The Rhynd.",
    shortDate: "Sat 25 Jan",
    location: "Tayport",
    date: "25 Jan 2025, 17:30 – 21:30",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2025-01-25T17:30:00Z",
    end: "2025-01-25T21:30:00Z",
    image: "events-at-the-rhynd-38",
    description: [
      {
        text: "A gastronomic Burns evening at the Rhynd Café, cooked by our head chef Jack Baldwin, all by candlelight."
      },
      {
        text: "Burns Night with a twist!"
      },
      {
        text: "There will be champagne on arrival with two canapés, followed by a banquet-style, four-course dinner of starter, main , pudding and petit fours with a nightcap. There will be a wide selection of wines, beers and spirits to buy on the night to accompany dinner."
      },
      {
        heading: "Example menu (subject to change)"
      },
      {
        text: "Canapés"
      },
      {
        list: [
          "Braised venison tartlet with a potato crumb",
          "East Neuk Kiln House smoked salmon roulade on a sourdough crostini",
          "Cumbrae oyster with a yuzu mignonette and dill oil"
        ]
      },
      {
        text: "Starter"
      },
      {
        list: [
          "Roast beetroot and pickled apple whipped crowdie with candied walnuts, chicory and a lemon vinaigrette"
        ]
      },
      {
        text: "Main"
      },
      {
        list: [
          "Haggis, neeps and tatties with a Drambuie cream sauce and pickled neeps"
        ]
      },
      {
        text: "Pudding"
      },
      {
        list: [
          "Tipsy Laird Scottish trifle"
        ]
      },
      {
        text: "Selection of Scottish cheese and whisky to finish"
      }
    ],
    tickets: []
  },
  {
    slug: "the-spring-larder-by-candlelight",
    title: "The spring larder by candlelight",
    summary: "A delicious five-course dinner cooked by our head chef Jack Baldwin.",
    shortDate: "Fri 18 Apr",
    location: "Tayport",
    date: "18 Apr 2025, 17:30 – 21:30",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2025-04-18T17:30:00+01:00",
    end: "2025-04-18T21:30:00+01:00",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "A gastronomic evening of farm-to-fork dining in the Rhynd Café, cooked by our head chef Jack Baldwin, all by candlelight."
      },
      {
        text: "Menu (subject to change)"
      },
      {
        text: "Canapés"
      },
      {
        text: "Brown-crab tartelette with a dulse seaweed and a cucumber gel"
      },
      {
        text: "Cumbrae oyster with a blood orange dressing and pickled samphire"
      },
      {
        text: "Wildflower spring roll with a nam jim sauce"
      },
      {
        text: "Starter"
      },
      {
        text: "Craigie wood pigeon with a beetroot fondant braised leg faggot, charred chicory, red-vein sorrel and a port reduction"
      },
      {
        text: "Mains"
      },
      {
        text: "Stuffed saddle of lamb with Denhead Farm asparagus, morel mushrooms, pommes Anna and a lamb sauce"
      },
      {
        text: "Dessert"
      },
      {
        text: "Rhubarb tart with chamomile crème pâtissière, hazelnut tuille, Tayport gin and rhubarb"
      },
      {
        text: "sorbet"
      },
      {
        text: "Coffee and petit fours to follow"
      },
      {
        text: "There will be champagne on arrival with two canapés, followed by a banquet-style, four-course dinner of starter, main , pudding and petit fours with a nightcap. There will be a wide selection of wines, beers and spirits to buy on the night to accompany dinner."
      }
    ],
    tickets: []
  },
  {
    slug: "chefs-table-dinner-2025-10-17-18-00",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the upstairs of the café, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce.",
    shortDate: "Fri 17 Oct",
    location: "Tayport",
    date: "17 Oct 2025, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2025-10-17T18:00:00+01:00",
    end: "2025-10-17T22:00:00+01:00",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "Hosted by candlelight in the upstairs of the café, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce."
      },
      {
        text: "Guests will be served canapés and champagne before dinner, and Jack will talk through each course before it is served. It's all about local produce, cooked beautifully."
      },
      {
        text: "Example menu"
      },
      {
        text: "Canapés"
      },
      {
        text: "Pig's head terrine with apricots and pistachios."
      },
      {
        text: "Courgette and ham velouté with chive oil."
      },
      {
        text: "Braised pork shoulder, apple purée and pork rind crostini."
      },
      {
        text: "Starter"
      },
      {
        text: "Carbonara of salsify and our in-house-cured guanciale."
      },
      {
        text: "Main"
      },
      {
        text: "Duo of pork: Roast pork loin and confit smoked belly served with Mum's roast potatoes, honey-glazed carrots, pork-dripping parsnips, poached sprouts and a parsnip purée. All served with a selection of bread sauce, cranberry sauce, apple sauce and gravy."
      },
      {
        text: "Pudding"
      },
      {
        text: "Pork fat chocolate ganache, whipped hazelnut praline, chocolate tuille and hokey pokey ice cream."
      },
      {
        text: "To finish"
      },
      {
        text: "Cheese board and port."
      }
    ],
    tickets: []
  },
  {
    slug: "chefs-table-dinner-2025-11-28-18-00",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the upstairs of the café, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce.",
    shortDate: "Fri 28 Nov",
    location: "Tayport",
    date: "28 Nov 2025, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2025-11-28T18:00:00Z",
    end: "2025-11-28T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "Hosted by candlelight in the upstairs of the café, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce."
      },
      {
        text: "Guests will be served canapés and champagne before dinner, and Jack will talk through each course before it is served. It's all about local produce, cooked beautifully."
      },
      {
        text: "Example menu"
      },
      {
        text: "Canapés"
      },
      {
        text: "Pig's head terrine with apricots and pistachios."
      },
      {
        text: "Courgette and ham velouté with chive oil."
      },
      {
        text: "Braised pork shoulder, apple purée and pork rind crostini."
      },
      {
        text: "Starter"
      },
      {
        text: "Carbonara of salsify and our in-house-cured guanciale."
      },
      {
        text: "Main"
      },
      {
        text: "Duo of pork: Roast pork loin and confit smoked belly served with Mum's roast potatoes, honey-glazed carrots, pork-dripping parsnips, poached sprouts and a parsnip purée. All served with a selection of bread sauce, cranberry sauce, apple sauce and gravy."
      },
      {
        text: "Pudding"
      },
      {
        text: "Pork fat chocolate ganache, whipped hazelnut praline, chocolate tuille and hokey pokey ice cream."
      },
      {
        text: "To finish"
      },
      {
        text: "Cheese board and port."
      }
    ],
    tickets: []
  },
  {
    slug: "chefs-table-dinner-2026-02-14-18-00-1",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the loft, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce.",
    shortDate: "Sat 14 Feb",
    location: "Tayport",
    date: "14 Feb 2026, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2026-02-14T18:00:00Z",
    end: "2026-02-14T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "Hosted by candlelight in the upstairs of the café, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce."
      },
      {
        text: "Guests will be served canapés and champagne before dinner, and Jack will talk through each course before it is served. It's all about local produce, cooked beautifully."
      },
      {
        text: "Example menu"
      },
      {
        text: "Canapés"
      },
      {
        text: "Pig's head terrine with apricots and pistachios."
      },
      {
        text: "Courgette and ham velouté with chive oil."
      },
      {
        text: "Braised pork shoulder, apple purée and pork rind crostini."
      },
      {
        text: "Starter"
      },
      {
        text: "Carbonara of salsify and our in-house-cured guanciale."
      },
      {
        text: "Main"
      },
      {
        text: "Duo of pork: Roast pork loin and confit smoked belly served with Mum's roast potatoes, honey-glazed carrots, pork-dripping parsnips, poached sprouts and a parsnip purée. All served with a selection of bread sauce, cranberry sauce, apple sauce and gravy."
      },
      {
        text: "Pudding"
      },
      {
        text: "Pork fat chocolate ganache, whipped hazelnut praline, chocolate tuille and hokey pokey ice cream."
      },
      {
        text: "To finish"
      },
      {
        text: "Cheese board and port."
      }
    ],
    tickets: []
  },
  {
    slug: "chefs-table-dinner-2026-03-20-18-00-1",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the loft, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce.",
    shortDate: "Fri 20 Mar",
    location: "Tayport",
    date: "20 Mar 2026, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2026-03-20T18:00:00Z",
    end: "2026-03-20T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "Hosted by candlelight in the upstairs of the café, our chef's table dinners are intimate fine-dining experiences where our head chef Jack Baldwin heroes local produce."
      },
      {
        text: "Guests will be served canapés and champagne before dinner, and Jack will talk through each course before it is served. It's all about local produce, cooked beautifully."
      },
      {
        text: "Example menu"
      },
      {
        text: "Canapés"
      },
      {
        text: "Pig's head terrine with apricots and pistachios."
      },
      {
        text: "Courgette and ham velouté with chive oil."
      },
      {
        text: "Braised pork shoulder, apple purée and pork rind crostini."
      },
      {
        text: "Starter"
      },
      {
        text: "Carbonara of salsify and our in-house-cured guanciale."
      },
      {
        text: "Main"
      },
      {
        text: "Duo of pork: Roast pork loin and confit smoked belly served with Mum's roast potatoes, honey-glazed carrots, pork-dripping parsnips, poached sprouts and a parsnip purée. All served with a selection of bread sauce, cranberry sauce, apple sauce and gravy."
      },
      {
        text: "Pudding"
      },
      {
        text: "Pork fat chocolate ganache, whipped hazelnut praline, chocolate tuille and hokey pokey ice cream."
      },
      {
        text: "To finish"
      },
      {
        text: "Cheese board and port."
      }
    ],
    tickets: []
  },
  {
    slug: "wine-safari-and-forest-feast-12",
    title: "Wine safari and forest feast",
    shortDate: "Fri 11 Sept",
    location: "Tayport",
    date: "11 Sept 2026, 15:30 – 21:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2026-09-11T15:30:00+01:00",
    end: "2026-09-11T21:00:00+01:00",
    image: "event-wine-safari-and-forest-feast-12",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: []
  },
  {
    slug: "chefs-table-dinner-2026-11-14-18-00",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the Loft, our chef’s table dinners are intimate fine-dining experiences where our executive chef Jack Baldwin heroes local food, as well as produce from the farm.",
    shortDate: "Sat 14 Nov",
    location: "Tayport",
    date: "14 Nov 2026, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2026-11-14T18:00:00Z",
    end: "2026-11-14T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "From root to leaf, the luxury leftovers"
      },
      {
        text: "UK supermarkets reject up to 4.5 million tonnes of fresh fruit and vegetables every year because they don’t meet the right standards for shape, size and appearance. A University of Edinburgh study revealed that over a third of farmed produce never gets past suppliers. The leftovers? They’re ploughed back in, used for animal feed or sent off to anaerobic digestion plants."
      },
      {
        text: "For this season of chef’s table dinners in the Rhynd’s Loft we’re shining a spotlight on the rejects. What the supermarkets don’t want, we’re going to turn into a fine-dining masterpiece that heroes our amazing local produce."
      },
      {
        text: "Head chef Jack Baldwin will take you on a culinary journey of Fife’s greatest produce via canapés and a four-course dinner. Hosted by candlelight, these chef’s table dinners are not to be missed."
      },
      {
        text: "Let’s celebrate the rejects, the ones that don’t conform. Life comes in different shapes and sizes, and we’re here to see hero them all."
      }
    ],
    tickets: [
      {
        name: "General Admission",
        price: "£95.00",
        saleEnds: "11 Nov, 20:00"
      }
    ],
    otherDates: [
      "chefs-table-dinner-2026-12-12-18-00",
      "chefs-table-dinner-2027-02-06-18-00",
      "chefs-table-dinner-2027-03-06-18-00"
    ]
  },
  {
    slug: "chefs-table-dinner-2026-12-12-18-00",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the Loft, our chef’s table dinners are intimate fine-dining experiences where our executive chef Jack Baldwin heroes local food, as well as produce from the farm.",
    shortDate: "Sat 12 Dec",
    location: "Tayport",
    date: "12 Dec 2026, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2026-12-12T18:00:00Z",
    end: "2026-12-12T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "From root to leaf, the luxury leftovers"
      },
      {
        text: "UK supermarkets reject up to 4.5 million tonnes of fresh fruit and vegetables every year because they don’t meet the right standards for shape, size and appearance. A University of Edinburgh study revealed that over a third of farmed produce never gets past suppliers. The leftovers? They’re ploughed back in, used for animal feed or sent off to anaerobic digestion plants."
      },
      {
        text: "For this season of chef’s table dinners in the Rhynd’s Loft we’re shining a spotlight on the rejects. What the supermarkets don’t want, we’re going to turn into a fine-dining masterpiece that heroes our amazing local produce."
      },
      {
        text: "Head chef Jack Baldwin will take you on a culinary journey of Fife’s greatest produce via canapés and a four-course dinner. Hosted by candlelight, these chef’s table dinners are not to be missed."
      },
      {
        text: "Let’s celebrate the rejects, the ones that don’t conform. Life comes in different shapes and sizes, and we’re here to see hero them all."
      }
    ],
    tickets: [
      {
        name: "General Admission",
        price: "£95.00",
        saleEnds: "09 Dec, 20:00"
      }
    ],
    otherDates: [
      "chefs-table-dinner-2026-11-14-18-00",
      "chefs-table-dinner-2027-02-06-18-00",
      "chefs-table-dinner-2027-03-06-18-00"
    ]
  },
  {
    slug: "chefs-table-dinner-2027-02-06-18-00",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the Loft, our chef’s table dinners are intimate fine-dining experiences where our executive chef Jack Baldwin heroes local food, as well as produce from the farm.",
    shortDate: "Sat 06 Feb",
    location: "Tayport",
    date: "06 Feb 2027, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-02-06T18:00:00Z",
    end: "2027-02-06T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "From root to leaf, the luxury leftovers"
      },
      {
        text: "UK supermarkets reject up to 4.5 million tonnes of fresh fruit and vegetables every year because they don’t meet the right standards for shape, size and appearance. A University of Edinburgh study revealed that over a third of farmed produce never gets past suppliers. The leftovers? They’re ploughed back in, used for animal feed or sent off to anaerobic digestion plants."
      },
      {
        text: "For this season of chef’s table dinners in the Rhynd’s Loft we’re shining a spotlight on the rejects. What the supermarkets don’t want, we’re going to turn into a fine-dining masterpiece that heroes our amazing local produce."
      },
      {
        text: "Head chef Jack Baldwin will take you on a culinary journey of Fife’s greatest produce via canapés and a four-course dinner. Hosted by candlelight, these chef’s table dinners are not to be missed."
      },
      {
        text: "Let’s celebrate the rejects, the ones that don’t conform. Life comes in different shapes and sizes, and we’re here to see hero them all."
      }
    ],
    tickets: [
      {
        name: "General Admission",
        price: "£95.00",
        saleEnds: "03 Feb 2027, 20:00"
      }
    ],
    otherDates: [
      "chefs-table-dinner-2026-11-14-18-00",
      "chefs-table-dinner-2026-12-12-18-00",
      "chefs-table-dinner-2027-03-06-18-00"
    ]
  },
  {
    slug: "chefs-table-dinner-2027-03-06-18-00",
    title: "Chef's table dinner",
    summary: "Hosted by candlelight in the Loft, our chef’s table dinners are intimate fine-dining experiences where our executive chef Jack Baldwin heroes local food, as well as produce from the farm.",
    shortDate: "Sat 06 Mar",
    location: "Tayport",
    date: "06 Mar 2027, 18:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-03-06T18:00:00Z",
    end: "2027-03-06T22:00:00Z",
    image: "post-burn-s-night-making-our-own-haggis-and-s-02",
    description: [
      {
        text: "From root to leaf, the luxury leftovers"
      },
      {
        text: "UK supermarkets reject up to 4.5 million tonnes of fresh fruit and vegetables every year because they don’t meet the right standards for shape, size and appearance. A University of Edinburgh study revealed that over a third of farmed produce never gets past suppliers. The leftovers? They’re ploughed back in, used for animal feed or sent off to anaerobic digestion plants."
      },
      {
        text: "For this season of chef’s table dinners in the Rhynd’s Loft we’re shining a spotlight on the rejects. What the supermarkets don’t want, we’re going to turn into a fine-dining masterpiece that heroes our amazing local produce."
      },
      {
        text: "Head chef Jack Baldwin will take you on a culinary journey of Fife’s greatest produce via canapés and a four-course dinner. Hosted by candlelight, these chef’s table dinners are not to be missed."
      },
      {
        text: "Let’s celebrate the rejects, the ones that don’t conform. Life comes in different shapes and sizes, and we’re here to see hero them all."
      }
    ],
    tickets: [
      {
        name: "General Admission",
        price: "£95.00",
        saleEnds: "03 Mar 2027, 20:00"
      }
    ],
    otherDates: [
      "chefs-table-dinner-2026-11-14-18-00",
      "chefs-table-dinner-2026-12-12-18-00",
      "chefs-table-dinner-2027-02-06-18-00"
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-13",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 21 May",
    location: "Tayport",
    date: "21 May 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-05-21T16:00:00+01:00",
    end: "2027-05-21T22:00:00+01:00",
    image: "events-at-the-rhynd-10",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-14",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 28 May",
    location: "Tayport",
    date: "28 May 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-05-28T16:00:00+01:00",
    end: "2027-05-28T22:00:00+01:00",
    image: "wild-weddings-01",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-15",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 18 Jun",
    location: "Tayport",
    date: "18 Jun 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-06-18T16:00:00+01:00",
    end: "2027-06-18T22:00:00+01:00",
    image: "events-at-the-rhynd-12",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-16",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 25 Jun",
    location: "Tayport",
    date: "25 Jun 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-06-25T16:00:00+01:00",
    end: "2027-06-25T22:00:00+01:00",
    image: "events-at-the-rhynd-13",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-17",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 09 Jul",
    location: "Tayport",
    date: "09 Jul 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-07-09T16:00:00+01:00",
    end: "2027-07-09T22:00:00+01:00",
    image: "events-at-the-rhynd-14",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-18",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 23 Jul",
    location: "Tayport",
    date: "23 Jul 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-07-23T16:00:00+01:00",
    end: "2027-07-23T22:00:00+01:00",
    image: "events-at-the-rhynd-15",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-19",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 06 Aug",
    location: "Tayport",
    date: "06 Aug 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-08-06T16:00:00+01:00",
    end: "2027-08-06T22:00:00+01:00",
    image: "events-at-the-rhynd-16",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-20",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 20 Aug",
    location: "Tayport",
    date: "20 Aug 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-08-20T16:00:00+01:00",
    end: "2027-08-20T22:00:00+01:00",
    image: "events-at-the-rhynd-17",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-21",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 10 Sept",
    location: "Tayport",
    date: "10 Sept 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-09-10T16:00:00+01:00",
    end: "2027-09-10T22:00:00+01:00",
    image: "events-at-the-rhynd-44",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  },
  {
    slug: "wine-safari-and-forest-feast-22",
    title: "Wine safari and forest feast",
    summary: "Our award-winning afternoon and evening in the Scottish countryside.",
    shortDate: "Fri 24 Sept",
    location: "Tayport",
    date: "24 Sept 2027, 16:00 – 22:00",
    address: "Tayport, Rhynd Farm, Leuchars, Tayport KY16 0DR, UK",
    start: "2027-09-24T16:00:00+01:00",
    end: "2027-09-24T22:00:00+01:00",
    image: "events-at-the-rhynd-19",
    description: [
      {
        text: "Take a Scottish culinary journey that will take you from source to supper, heroing the very best that Fife has to offer."
      },
      {
        text: "We will meet at the Rhynd Café at 4pm before walking into the woods. Over a one-kilometre walk, we’ll taste wines, ciders, gins and whiskys (depending on the dates), as well as canapés made by The Rhynd’s chef Jack Baldwin who has worked at a Michelin-starred level."
      },
      {
        text: "Dinner will be served at the chef’s table under a stretch tent, when Jack will talk through where all the ingredients have been sourced, and how he’s cooked over the open Argentinian grill. The five-course menu will hero local produce and include venison, eggs, vegetables and herbs from the farm."
      },
      {
        text: "The evening will end by the open fire with petit fours and night caps, before returning to The Rhynd between 9.30 and 10pm."
      }
    ],
    tickets: [
      {
        name: "Standard ticket",
        price: "£140.00"
      }
    ]
  }
] satisfies EventEntry[];
