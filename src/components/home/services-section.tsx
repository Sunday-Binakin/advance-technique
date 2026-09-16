import { Wrench } from "lucide-react";
import { CourseCard } from "@/components/courses/course-card";
import { courses } from "@/lib/courses";

const dotGridStyle = {
  backgroundImage: "radial-gradient(var(--color-border) 1.5px, transparent 1.5px)",
  backgroundSize: "24px 24px",
};

function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-muted/60 py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0" style={dotGridStyle} />

      <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
          <Wrench className="size-5" aria-hidden="true" />
          Our Services
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          We Provide All These Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServicesSection };
