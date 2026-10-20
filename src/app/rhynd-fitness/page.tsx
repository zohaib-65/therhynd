import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("rhynd-fitness");

export const metadata = pageMetadata(page.metadata);

export default function FitnessPage() {
  return <PageSections sections={page.sections} />;
}
