import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, getCourseBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: `${course.title} — Advanced Technique Driving School`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const Icon = course.icon;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All courses
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {course.duration}
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            {course.title}
          </h1>
        </div>
      </div>

      <p className="mt-6 text-lg text-muted-foreground">{course.tagline}</p>
      <p className="mt-4 text-muted-foreground">{course.description}</p>

      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {course.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm font-medium">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-6">
        <div>
          <p className="text-sm text-muted-foreground">Course fee</p>
          <p className="font-heading text-2xl font-bold">{course.price}</p>
        </div>
        <Button size="lg" className="ml-auto" nativeButton={false} render={<Link href="/apply" />}>
          Apply for This Course
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
