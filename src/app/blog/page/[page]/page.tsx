import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NewsIndex } from "@/components/news/NewsIndex";
import { getNewsPageMetadata } from "@/lib/content/pages";
import { getPostsPage, pageCount } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

/** Listing pages 2…n, as /blog/page/2 on the live site. Page 1 is /blog. */
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: pageCount() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: PageProps<"/blog/page/[page]">): Promise<Metadata> {
  const { page } = await params;
  const meta = getNewsPageMetadata();
  return pageMetadata({ ...meta, title: `${meta.title} | Page ${page}`, path: `/blog/page/${page}` });
}

export default async function NewsListingPage({ params }: PageProps<"/blog/page/[page]">) {
  const page = Number((await params).page);
  if (!Number.isInteger(page) || page < 2 || page > pageCount()) notFound();
  return <NewsIndex posts={getPostsPage(page)} page={page} />;
}
