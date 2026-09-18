import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { posts } from "../data/portfolioData";

const categories = ["All", "Updates", "Design", "Engineering", "Culture"];

export default function Post() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const categoryMatch = activeCategory === "All" || post.category === activeCategory;
      const searchMatch =
        !query ||
        [post.title, post.category, post.excerpt].some((value) =>
          value.toLowerCase().includes(query),
        );

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <PageTransition>
      <main className="viewport-page min-w-0 w-full bg-bg px-5 pb-8 pt-24 sm:px-6 md:pt-20">
        <div className="mx-auto min-w-0 w-full max-w-[1200px]">
          <header className="max-w-2xl">
            <p className="meta-label">Posts</p>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
              Insights, updates, and news from our team.
            </h1>
          </header>

          <div className="mt-6 flex min-w-0 w-full flex-row items-center gap-3 border-y border-border py-3 lg:justify-between">
            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto" aria-label="Filter posts by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-[14px] border px-4 py-2 text-sm transition-colors ${
                    activeCategory === category
                      ? "border-text bg-text text-bg"
                      : "border-border bg-bg text-text-muted hover:border-text hover:text-text"
                  }`}
                >
                  {category === "All" ? category : `#${category}`}
                </button>
              ))}
            </div>

            <label className="flex w-[180px] shrink-0 items-center gap-2 border-b border-border pb-1 text-sm text-text-muted lg:w-[220px]">
              <Search size={16} aria-hidden="true" />
              <span className="sr-only">Search posts</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search posts"
                className="min-w-0 flex-1 bg-transparent text-text outline-none placeholder:text-text-muted"
              />
            </label>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-8 border-t border-border py-8 text-sm text-text-muted">
              No posts match your search.
            </p>
          )}

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 border-b border-border px-1 py-2.5 text-sm text-text-muted disabled:cursor-not-allowed disabled:opacity-70"
            >
              Load more posts
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

type PostCardProps = {
  post: (typeof posts)[number];
};

function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex min-w-0 flex-col border-t border-border">
      <Link to={`/post/${post.id}`} className="group flex h-full min-w-0 flex-col">
        <div className="viewport-image aspect-video bg-bg">
          <img
            src={post.cover}
            alt=""
            className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ objectPosition: post.coverPosition ?? "center" }}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex flex-1 flex-col py-4">
          <span className="meta-label">
            #{post.category}
          </span>
          <h2 className="line-clamp-two mt-2 min-h-[3.5rem] font-display text-xl font-semibold leading-7 tracking-tight text-text">
            {post.title}
          </h2>
          <time className="mt-2 text-sm text-text-muted" dateTime={post.date}>
            {post.date}
          </time>
          <p className="line-clamp-two mt-2 text-sm leading-5 text-text-muted">{post.excerpt}</p>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-text transition-colors group-hover:text-text-muted">
            Read story <ArrowRight size={15} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
