import { MessageSquareQuote, Quote, User } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

const dotGridStyle = {
  backgroundImage: "radial-gradient(var(--color-border) 1.5px, transparent 1.5px)",
  backgroundSize: "24px 24px",
};

const avatarGradients = [
  "from-neutral-800 via-neutral-800 to-primary/40",
  "from-neutral-800 via-neutral-800 to-secondary/40",
  "from-neutral-800 via-neutral-800 to-primary/30",
];

// TODO: swap the gradient placeholder avatars below for real student photos
// once they're available.
function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0" style={dotGridStyle} />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-primary">
          <MessageSquareQuote className="size-5" aria-hidden="true" />
          Testimonials
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          What Our Students Are Saying
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Quote className="size-8 text-primary" aria-hidden="true" />
              <p className="text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white/40 ${avatarGradients[i % avatarGradients.length]}`}
                >
                  <User className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TestimonialsSection };
