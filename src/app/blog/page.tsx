import { NewsIndex } from "@/components/news/NewsIndex";
import { getNewsPageMetadata } from "@/lib/content/pages";
import { getPostsPage } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(getNewsPageMetadata());

export default function NewsPage() {
  return <NewsIndex posts={getPostsPage(1)} page={1} />;
}
