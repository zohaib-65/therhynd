import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("rhynd-forest-rooms");

export const metadata = pageMetadata(page.metadata);

export default function ForestRoomsPage() {
  return <PageSections sections={page.sections} />;
}
