import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Info, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Hands-on practical training with every lesson",
  "Defensive driving built into the curriculum from day one",
];

// TODO: replace the gradient placeholder below with a real instructor photo
// (next/image, fill + object-cover) once it's supplied.
function GetToKnowMore() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
      <div>
        <p className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Info className="size-5" aria-hidden="true" />
          Get to Know More
        </p>
        <h2 className="mt-3 font-heading text-3xl leading-tight font-bold uppercase tracking-tight sm:text-4xl">
          We&apos;re Very Experienced, With 25+ Years Behind the Wheel
        </h2>
        <p className="mt-4 text-muted-foreground">
          Driving defensively means controlling your speed, looking ahead,
          and staying prepared for the unexpected. Our instructors train you
          to stay alert, distraction-free, and ready for the actions of
          other drivers on the road.
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm font-medium">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <Button size="lg" className="mt-8" nativeButton={false} render={<Link href="/courses" />}>
          Start Courses
          <ArrowRight />
        </Button>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/40">
          <GraduationCap
            className="absolute -right-6 -bottom-6 size-56 text-white/10"
            strokeWidth={0.6}
            aria-hidden="true"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-2 left-2 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg sm:size-16"
        >
          <Play className="size-6 fill-current" />
        </div>
      </div>
    </section>
  );
}

export { GetToKnowMore };
