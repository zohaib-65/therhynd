import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("stay-with-us");

export const metadata = pageMetadata(page.metadata);

export default function StayWithUsPage() {
  return <PageSections sections={page.sections} />;
}
