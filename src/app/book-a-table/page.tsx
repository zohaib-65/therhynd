import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("book-a-table");

export const metadata = pageMetadata(page.metadata);

export default function BookATablePage() {
  return <PageSections sections={page.sections} />;
}
