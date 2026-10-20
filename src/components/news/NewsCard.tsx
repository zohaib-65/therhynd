import Link from "next/link";

import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { getImage } from "@/lib/assets";
import { formatPostDate, type Post } from "@/lib/news";

/**
 * Article card for the News index: cover photo, category, title, excerpt,
 * date and reading time. The whole card is one link to the article.
 */
export function NewsCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col border border-ink/15 bg-paper">
      <div className="relative aspect-square">
        <ResponsiveImage image={getImage(post.cover)} alt="" fill eager={priority} />
      </div>
      <div className="flex flex-1 flex-col px-6 py-6">
        {post.categories[0] && <p className="text-xs font-normal tracking-wide text-forest uppercase">{post.categories[0]}</p>}
        <h2 className="mt-2 text-[1.375rem] leading-snug font-normal">
          <Link href={`/post/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-forest">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-base font-light">{post.excerpt}</p>
        <p className="mt-auto pt-5 text-sm font-light text-ink/80">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          {post.readingTime && <> · {post.readingTime}</>}
        </p>
      </div>
    </article>
  );
}
