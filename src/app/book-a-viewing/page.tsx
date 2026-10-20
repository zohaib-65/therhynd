import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("book-a-viewing");

export const metadata = pageMetadata(page.metadata);

export default function BookAViewingPage() {
  return <PageSections sections={page.sections} />;
}
