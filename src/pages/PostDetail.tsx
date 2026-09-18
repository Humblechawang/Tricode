import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PortraitFrame from "../components/PortraitFrame";
import { posts } from "../data/portfolioData";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((entry) => entry.id === id);

  if (!post) {
    return (
      <PageTransition>
        <section className="px-6 pb-24 pt-32">
          <div className="mx-auto max-w-content">
            <p className="text-sm text-text-muted">Post not found</p>
            <Link to="/post" className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
              <ArrowLeft size={15} /> Back to posts
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <article className="px-6 pb-24 pt-28">
        <div className="mx-auto max-w-content">
          <Link to="/post" className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text">
            <ArrowLeft size={15} /> Back to posts
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="mx-auto w-full max-w-md">
              <PortraitFrame
                person={{
                  id: post.id,
                  name: post.title,
                  role: post.category,
                  shortBio: post.excerpt,
                  longBio: post.excerpt,
                  initials: post.category.slice(0, 2).toUpperCase(),
                  photo: post.cover,
                  photoPosition: post.coverPosition ?? "center 18%",
                  frame: "panel",
                  skills: [post.category],
                  links: {},
                }}
                aspectClass="aspect-[4/5]"
              />
            </div>

            <div className="max-w-2xl">
              <div className="meta-label flex items-center gap-3">
                <span>{post.category}</span>
                <span className="text-text-muted">•</span>
                <span className="text-text-muted">{post.date}</span>
              </div>

              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text md:text-6xl">
                {post.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-text-muted">{post.excerpt}</p>

              <div className="mt-8 border-y border-border py-5 text-sm leading-7 text-text-muted">
                {post.note}
              </div>

              <div className="mt-8 space-y-6 text-[17px] leading-8 text-text-muted">
                {post.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
