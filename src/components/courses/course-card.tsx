import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses";

// TODO: replace the gradient placeholder below with a real course photo
// (next/image, fill + object-cover) once it's supplied.
function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/40">
        <Icon
          className="absolute -bottom-6 -left-6 size-32 text-white/10"
          strokeWidth={0.6}
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 flex size-16 items-end justify-end bg-primary p-2 text-primary-foreground"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        >
          <Icon className="size-5" strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-heading text-xl font-bold tracking-tight">
          {course.title}
        </h3>
        <p className="flex-1 text-sm text-muted-foreground">{course.description}</p>
        <Link
          href={`/courses/${course.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-bold tracking-wide uppercase underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
        >
          Read More
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export { CourseCard };
