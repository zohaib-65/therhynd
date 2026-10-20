import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("bacon-and-brakes");

export const metadata = pageMetadata(page.metadata);

export default function BaconAndBrakesPage() {
  return <PageSections sections={page.sections} />;
}
