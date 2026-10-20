import { PageSections } from "@/components/sections/PageSections";
import { getContentPage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = getContentPage("what-we-do");

export const metadata = pageMetadata(page.metadata);

export default function WhatWeDoPage() {
  return <PageSections sections={page.sections} />;
}
