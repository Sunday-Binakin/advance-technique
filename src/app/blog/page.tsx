import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { getSortedPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog & News — Advanced Technique Driving School",
  description: "Driving tips, licensing guidance, and news from Advanced Technique Driving School.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Blog &amp; News
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl">
        Latest Articles
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Driving tips, licensing guidance, and news from Advanced Technique
        Driving School.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getSortedPosts().map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
