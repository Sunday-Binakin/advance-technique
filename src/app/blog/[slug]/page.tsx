import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { formatDate } from "@/components/blog/blog-card";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-posts";
import type { BlogPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Advanced Technique Driving School`,
    description: post.excerpt,
  };
}

// TODO: swap the gradient placeholder thumbnail below for a real article
// photo (next/image, fill + object-cover) once it's supplied.
function RelatedArticleItem({ post }: { post: BlogPost }) {
  const Icon = post.icon;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-muted"
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/40">
        <Icon className="absolute -right-2 -bottom-2 size-10 text-white/10" strokeWidth={0.6} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-bold leading-snug group-hover:text-primary">{post.title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const Icon = post.icon;
  const related = getRelatedPosts(slug);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All articles
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
        {related.length > 0 && (
          <aside className="order-2 lg:order-1">
            <h2 className="font-heading text-lg font-bold tracking-tight uppercase">
              Related Articles
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {related.map((relatedPost) => (
                <RelatedArticleItem key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </aside>
        )}

        <article className="order-1 min-w-0 lg:order-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/40">
            <Icon
              className="absolute -right-8 -bottom-8 size-48 text-white/10"
              strokeWidth={0.6}
              aria-hidden="true"
            />
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden="true" />
              By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
