import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("history");

export const metadata = pageMetadata(page.metadata);

export default function HistoryPage() {
  return <PageSections sections={page.sections} />;
}
