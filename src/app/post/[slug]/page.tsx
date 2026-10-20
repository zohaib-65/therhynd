import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { ArticleBody } from "@/components/news/ArticleBody";
import { formatPostDate, getAllPosts, getPost } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

/** One page per article, at the live site's /post/<slug> URLs. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/post/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  // Live posts without a meta description fall back to the article's own opening text.
  const description = post.metaDescription || post.excerpt.slice(0, 160).replace(/\s+\S*$/, "") + "…";
  const base = pageMetadata({
    title: post.metaTitle || post.title,
    description,
    path: `/post/${post.slug}`,
    openGraph: { image: post.cover },
  });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.date, modifiedTime: post.updated } };
}

export default async function ArticlePage({ params }: PageProps<"/post/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <article className="px-5 py-10 lg:py-14">
      <div className="mx-auto max-w-[46.25rem]">
        <Link href="/blog" className="inline-flex items-center gap-1 text-base font-light hover:text-forest">
          <ChevronLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
          All news
        </Link>
        <header className="mt-6">
          {post.categories.length > 0 && <p className="text-xs font-normal tracking-wide text-forest uppercase">{post.categories.join(" · ")}</p>}
          <h1 className="mt-2 text-heading font-[425]">{post.title}</h1>
          <p className="mt-4 text-base font-light text-ink/80">
            {post.author && <>{post.author} · </>}
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.readingTime && <> · {post.readingTime}</>}
          </p>
        </header>
        <div className="mt-8">
          <ArticleBody blocks={post.body} />
        </div>
        {post.tags.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag} className="border border-ink/20 px-3 py-1 text-sm font-light">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
