import Link from "next/link";
import {
  ClipboardCheck,
  Headset,
  Route,
  Send,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Select Your Plan",
    description:
      "Before starting any course, choose the plan that matches your schedule and goals.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "Have questions? Our support team is always ready to help you get started.",
    icon: Headset,
  },
  {
    number: "03",
    title: "Apply Online",
    description:
      "Ready to begin? Complete our online application in minutes.",
    icon: Send,
    href: "/apply",
  },
  {
    number: "04",
    title: "Start Your Training",
    description:
      "Once enrolled, begin lessons with your assigned certified instructor.",
    icon: GraduationCap,
  },
];

// TODO: replace the gradient placeholder below with a real photo
// (next/image, fill + object-cover) once it's supplied.
function WorkProcess() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-900 py-16 text-white sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-primary/30">
        <Route
          className="absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 text-white/5"
          strokeWidth={0.4}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
          <Route className="size-5" aria-hidden="true" />
          Our Work Process
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Start the Driving Learning Process
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </>
            );

            const cardClassName =
              "rounded-xl bg-card p-6 transition-shadow" +
              (step.href ? " hover:shadow-lg" : "");

            return step.href ? (
              <Link key={step.number} href={step.href} className={cardClassName}>
                {content}
              </Link>
            ) : (
              <div key={step.number} className={cardClassName}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { WorkProcess };
