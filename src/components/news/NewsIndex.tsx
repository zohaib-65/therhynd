import Link from "next/link";

import { NewsCard } from "@/components/news/NewsCard";
import { pageCount, type Post } from "@/lib/news";
import { cn } from "@/lib/utils";

const pageHref = (page: number) => (page === 1 ? "/blog" : `/blog/page/${page}`);

/** News listing: a grid of article cards and page links (/blog, /blog/page/2, …). */
export function NewsIndex({ posts, page }: { posts: Post[]; page: number }) {
  const pages = pageCount();
  return (
    <section className="px-5 py-12 lg:py-14">
      <h1 className="sr-only">News{page > 1 ? `, page ${page}` : ""}</h1>
      <ul className="mx-auto grid max-w-[58.5rem] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <NewsCard post={post} priority={page === 1 && index < 3} />
          </li>
        ))}
      </ul>
      {pages > 1 && (
        <nav aria-label="News pages" className="mt-12">
          <ul className="flex justify-center gap-2">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <li key={n}>
                <Link
                  href={pageHref(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={cn("grid size-10 place-items-center border border-ink/20 text-base", n === page ? "bg-ink text-paper" : "hover:bg-cream")}
                >
                  <span className="sr-only">Page </span>
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}
