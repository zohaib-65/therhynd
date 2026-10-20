import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("pricing");

export const metadata = pageMetadata(page.metadata);

/** Pricing. The path keeps the live site's original URL. */
export default function PricingPage() {
  return <PageSections sections={page.sections} />;
}
