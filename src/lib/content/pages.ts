import { z } from "zod";

import activities from "@/data/pages/activities";
import awards from "@/data/pages/awards";
import baconAndBrakes from "@/data/pages/bacon-and-brakes";
import barnWeddings from "@/data/pages/barn-weddings";
import bookATable from "@/data/pages/book-a-table";
import bookAViewing from "@/data/pages/book-a-viewing";
import cafe from "@/data/pages/cafe";
import downloadOurBrochure from "@/data/pages/download-our-brochure";
import events from "@/data/pages/events-at-the-rhynd";
import history from "@/data/pages/history";
import homeJson from "@/data/pages/home";
import newsJson from "@/data/pages/news";
import pricing from "@/data/pages/pricing";
import farmhouse from "@/data/pages/rhynd-farmhouse";
import fitness from "@/data/pages/rhynd-fitness";
import forestRooms from "@/data/pages/rhynd-forest-rooms";
import stayWithUs from "@/data/pages/stay-with-us";
import sustainability from "@/data/pages/sustainability";
import weddings from "@/data/pages/weddings";
import whatWeDo from "@/data/pages/what-we-do";
import wildWeddings from "@/data/pages/wild-weddings";
import { homePageSchema, pageMetadataSchema } from "@/lib/content/schema";
import { contentPageSchema, type ContentPage } from "@/lib/content/sections";

/**
 * Page content loaders. Each parses its src/data/pages/<page>.ts file against
 * the schemas in src/lib/content during the build (Server Components only), so
 * invalid content fails the build with the file and field path. The files
 * are also type-checked against the same schemas while editing.
 */

function parse<T extends z.ZodType>(schema: T, data: unknown, file: string): z.output<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid content in ${file}:\n${result.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`).join("\n")}`);
  }
  return result.data;
}

export const getHomePage = () => parse(homePageSchema, homeJson, "src/data/pages/home.ts");

/** Metadata for the News index (its cards come from src/data/blog.ts). */
export const getNewsPageMetadata = () => parse(z.object({ metadata: pageMetadataSchema }), newsJson, "src/data/pages/news.ts").metadata;

/** Content pages built from sections, keyed by their file name. */
const contentPages = {
  activities,
  awards,
  "bacon-and-brakes": baconAndBrakes,
  "barn-weddings": barnWeddings,
  "book-a-table": bookATable,
  "book-a-viewing": bookAViewing,
  cafe,
  "download-our-brochure": downloadOurBrochure,
  "events-at-the-rhynd": events,
  history,
  pricing,
  "rhynd-farmhouse": farmhouse,
  "rhynd-fitness": fitness,
  "rhynd-forest-rooms": forestRooms,
  "stay-with-us": stayWithUs,
  sustainability,
  weddings,
  "what-we-do": whatWeDo,
  "wild-weddings": wildWeddings,
} as const;

type ContentPageKey = keyof typeof contentPages;

export function getContentPage(key: ContentPageKey): ContentPage {
  return parse(contentPageSchema, contentPages[key], `src/data/pages/${key}.ts`);
}
