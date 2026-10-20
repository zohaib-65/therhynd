import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("barn-weddings");

export const metadata = pageMetadata(page.metadata);

export default function BarnWeddingsPage() {
  return <PageSections sections={page.sections} />;
}
