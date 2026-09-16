import {
  Award,
  Banknote,
  Car,
  Check,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Regular, intensive, or weekend-only lessons that fit your life.",
  },
  {
    icon: Banknote,
    title: "Affordable Fees",
    description: "Transparent pricing with no hidden costs, on every course.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Instructors",
    description: "Learn from experienced, DVLA-registered driving instructors.",
  },
  {
    icon: Award,
    title: "High Pass Rate",
    description: "Training built around passing your road test the first time.",
  },
];

const highlights = [
  { icon: Award, title: "25+ Years", label: "of Excellence" },
  { icon: ShieldCheck, title: "DVLA Registered", label: "Certified Training" },
  { icon: Users, title: "Certified Instructors", label: "Experienced Team" },
];

// TODO: replace the gradient placeholder below with a real photo
// (next/image, fill + object-cover) once it's supplied.
function WhyChooseUs() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden bg-neutral-900 px-4 py-16 text-white sm:px-6 lg:px-12 lg:py-24">
          <Car
            className="absolute top-1/2 -left-20 size-[26rem] -translate-y-1/2 text-white/5"
            strokeWidth={0.4}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-xl">
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <ShieldCheck className="size-5" aria-hidden="true" />
              Why Choose Us
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight font-bold uppercase tracking-tight sm:text-4xl">
              Get Behind the Wheel and Take the Lead
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="relative rounded-xl bg-card p-5 pt-7 text-card-foreground"
                  >
                    <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-base font-bold">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-800 to-secondary/40 lg:min-h-0">
          <Check
            className="absolute -right-10 -bottom-10 size-72 text-white/10"
            strokeWidth={0.5}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 px-4 py-6"
              >
                <Icon className="size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-heading text-lg leading-tight font-bold">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
