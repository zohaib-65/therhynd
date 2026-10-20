import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("cafe");

export const metadata = pageMetadata(page.metadata);

/** Café, at the plain /cafe (the live site's accented /café is not served by `next dev`). */
export default function CafePage() {
  return <PageSections sections={page.sections} />;
}
