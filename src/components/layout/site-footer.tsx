import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Pricing Plans", href: "/#pricing" },
  { label: "Contact Us", href: "/contact" },
  { label: "Online Application", href: "/apply" },
];

// Decorative only — not real links, since no verified social profiles exist
// yet for the business. TODO: wire these up once real profile URLs exist.
function SocialBadge({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span
      aria-label={label}
      title={`${label} (coming soon)`}
      className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70"
    >
      {children}
    </span>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="relative pb-3 font-heading text-base font-bold tracking-tight text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-primary">
      {children}
    </h3>
  );
}

function SiteFooter() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <footer className="bg-neutral-950 text-white/70">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo variant="inverted" />
          <p className="mt-4 text-sm">
            {siteConfig.name} {siteConfig.tagline} is a premier driving school
            dedicated to providing comprehensive driver education and
            training, helping students become confident and responsible
            drivers.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <SocialBadge label="Facebook">
              <span className="text-sm font-bold">f</span>
            </SocialBadge>
            <SocialBadge label="X (Twitter)">
              <span className="text-sm font-bold">X</span>
            </SocialBadge>
            <SocialBadge label="LinkedIn">
              <span className="text-xs font-bold">in</span>
            </SocialBadge>
            <SocialBadge label="WhatsApp">
              <MessageCircle className="size-4" aria-hidden="true" />
            </SocialBadge>
          </div>
        </div>

        <div>
          <FooterHeading>Our Courses</FooterHeading>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {siteConfig.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={phoneHref} className="transition-colors hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-xs sm:px-6">
          &copy; {new Date().getFullYear()} {siteConfig.name} {siteConfig.tagline}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { SiteFooter };
