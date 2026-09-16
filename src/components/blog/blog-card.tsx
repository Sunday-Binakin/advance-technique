import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// TODO: replace the gradient placeholder below with a real article photo
// (next/image, fill + object-cover) once it's supplied.
function BlogCard({ post }: { post: BlogPost }) {
  const Icon = post.icon;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/40">
        <Icon
          className="absolute -right-6 -bottom-6 size-32 text-white/10"
          strokeWidth={0.6}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="size-3.5" aria-hidden="true" />
            By {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold tracking-tight">{post.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-bold tracking-wide uppercase underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
        >
          Read More
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export { BlogCard, formatDate };
