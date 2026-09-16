import type { Metadata } from "next";
import { CourseCard } from "@/components/courses/course-card";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses — Advanced Technique Driving School",
  description: "Browse our driving courses and find the schedule that fits you.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Courses
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl">
        Find Your Course
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Every course covers the same DVLA-ready fundamentals — pick the
        schedule that fits your life.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
