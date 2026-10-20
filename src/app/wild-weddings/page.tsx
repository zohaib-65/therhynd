import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("wild-weddings");

export const metadata = pageMetadata(page.metadata);

export default function WildWeddingsPage() {
  return <PageSections sections={page.sections} />;
}
