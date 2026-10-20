import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("download-our-brochure");

export const metadata = pageMetadata(page.metadata);

export default function DownloadOurBrochurePage() {
  return <PageSections sections={page.sections} />;
}
