import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";

// TODO: replace the gradient placeholder below with a real photo
// (next/image, fill + object-cover) once it's supplied.
function ContactHero() {
  return (
    <section className="relative isolate flex h-96 items-end overflow-hidden bg-neutral-900 text-white sm:h-112">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/40">
        <Users
          className="absolute -right-10 -bottom-10 size-72 text-white/10"
          strokeWidth={0.5}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <nav aria-label="Breadcrumb" className="mt-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/80 transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-4 text-white/60" aria-hidden="true" />
          <span className="font-medium text-primary">Contact Us</span>
        </nav>
      </div>
    </section>
  );
}

export { ContactHero };
