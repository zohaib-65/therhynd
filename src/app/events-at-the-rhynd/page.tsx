import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("events-at-the-rhynd");

export const metadata = pageMetadata(page.metadata);

export default function EventsPage() {
  return <PageSections sections={page.sections} />;
}
