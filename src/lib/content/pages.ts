import { z } from "zod";

import activities from "@/content/pages/activities";
import awards from "@/content/pages/awards";
import baconAndBrakes from "@/content/pages/bacon-and-brakes";
import barnWeddings from "@/content/pages/barn-weddings";
import bookATable from "@/content/pages/book-a-table";
import bookAViewing from "@/content/pages/book-a-viewing";
import cafe from "@/content/pages/cafe";
import downloadOurBrochure from "@/content/pages/download-our-brochure";
import events from "@/content/pages/events-at-the-rhynd";
import history from "@/content/pages/history";
import homeJson from "@/content/pages/home";
import newsJson from "@/content/pages/news";
import pricing from "@/content/pages/pricing";
import farmhouse from "@/content/pages/rhynd-farmhouse";
import fitness from "@/content/pages/rhynd-fitness";
import forestRooms from "@/content/pages/rhynd-forest-rooms";
import stayWithUs from "@/content/pages/stay-with-us";
import sustainability from "@/content/pages/sustainability";
import weddings from "@/content/pages/weddings";
import whatWeDo from "@/content/pages/what-we-do";
import wildWeddings from "@/content/pages/wild-weddings";
import { homePageSchema, pageMetadataSchema } from "@/lib/content/schema";
import { contentPageSchema, type ContentPage } from "@/lib/content/sections";

/**
 * Page content loaders. Each parses its src/content/pages/<page>.ts file against
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

export const getHomePage = () => parse(homePageSchema, homeJson, "src/content/pages/home.ts");

/** Metadata for the News index (its cards come from src/content/blog.ts). */
export const getNewsPageMetadata = () => parse(z.object({ metadata: pageMetadataSchema }), newsJson, "src/content/pages/news.ts").metadata;

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
  return parse(contentPageSchema, contentPages[key], `src/content/pages/${key}.ts`);
}
