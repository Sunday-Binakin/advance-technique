import { User, Users } from "lucide-react";
import { instructors } from "@/lib/instructors";

const gradients = [
  "from-neutral-800 via-neutral-800 to-primary/40",
  "from-neutral-800 via-neutral-800 to-secondary/40",
  "from-neutral-800 via-neutral-800 to-primary/30",
];

// TODO: swap the gradient placeholder photos below for real staff portraits
// (next/image, fill + object-cover) once the backend/CMS supplies them.
function InstructorsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
        <Users className="size-5" aria-hidden="true" />
        Our Best Instructors
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Meet Our Qualified Instructors
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {instructors.map((instructor, i) => (
          <div key={instructor.name} className="flex flex-col items-center gap-3">
            <div
              className={`relative size-40 overflow-hidden rounded-full bg-gradient-to-br ${gradients[i % gradients.length]}`}
            >
              <User
                className="absolute -bottom-4 left-1/2 size-28 -translate-x-1/2 text-white/10"
                strokeWidth={0.6}
                aria-hidden="true"
              />
            </div>
            <h3 className="font-heading text-lg font-bold">{instructor.name}</h3>
            <p className="text-sm font-medium text-primary">{instructor.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { InstructorsSection };
