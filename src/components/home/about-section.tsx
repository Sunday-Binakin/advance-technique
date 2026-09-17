import Link from "next/link";
import {
  Car,
  CheckCircle2,
  GraduationCap,
  Play,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Road Test Preparation",
  "Defensive Driving Techniques",
  "Parallel Parking & Maneuvering",
  "Certified & Experienced Instructors",
  "Personalized Training Programs",
  "Proven Success Rate",
];

// TODO: replace the two gradient placeholders below with real photography
// (next/image, fill + object-cover) once it's supplied.
function AboutSection() {
  return (
    <section id="about" className="mx-auto grid w-full max-w-6xl scroll-mt-24 grid-cols-1 items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute -inset-6 -z-10 hidden rounded-[2.5rem] bg-border/70 sm:block"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
        />

        <div className="relative aspect-[4/5] w-[80%] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50">
          <Users
            className="absolute -top-4 -left-4 size-40 text-white/20"
            strokeWidth={0.6}
            aria-hidden="true"
          />
        </div>

        <div className="absolute right-0 bottom-0 aspect-[4/5] w-[55%] overflow-hidden rounded-2xl border-4 border-background bg-gradient-to-br from-neutral-900 via-neutral-900 to-secondary/50 shadow-lg">
          <Car
            className="absolute -right-3 -bottom-3 size-24 text-white/20"
            strokeWidth={0.6}
            aria-hidden="true"
          />
        </div>

        <div className="absolute top-1 right-2 w-24 -rotate-6 text-center leading-tight sm:right-8 sm:-rotate-12">
          <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">25+</p>
          <p className="font-mono text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
            Years of Excellence
          </p>
        </div>
      </div>

      <div>
        <p className="flex items-center gap-2 text-sm font-semibold text-primary">
          <GraduationCap className="size-5" aria-hidden="true" />
          About Us
        </p>
        <h2 className="mt-3 font-heading text-3xl leading-tight font-bold uppercase tracking-tight sm:text-4xl">
          Master the Road with Confidence &amp; Expertise
        </h2>
        <p className="mt-4 text-muted-foreground">
          At <span className="font-semibold text-foreground">Advanced Technique Driving School</span>,
          we&apos;re a trusted driving school with over 25 years of experience
          training responsible, confident drivers. Our professional instruction
          ensures every learner develops the skills to pass their DVLA road
          test and drive safely for life.
        </p>

        <div className="mt-8 flex items-start gap-6">
          <div
            aria-hidden="true"
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Play className="size-6 fill-current" />
          </div>

          <ul className="grid flex-1 grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-medium">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Button size="lg" className="mt-8" nativeButton={false} render={<Link href="/about" />}>
          Learn More
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}

export { AboutSection };
