import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { getSortedPosts } from "@/lib/blog-posts";

function BlogSection() {
  const latestPosts = getSortedPosts().slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
        <Newspaper className="size-5" aria-hidden="true" />
        Blog &amp; News
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Our Latest News &amp; Articles
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <Button size="lg" className="mt-10" nativeButton={false} render={<Link href="/blog" />}>
        View All Articles
        <ArrowRight />
      </Button>
    </section>
  );
}

export { BlogSection };
