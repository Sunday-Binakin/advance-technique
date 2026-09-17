import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { LocationMap } from "@/components/contact/location-map";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us — Advanced Technique Driving School",
  description: "Get in touch with Advanced Technique Driving School.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ContactInfoCards />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LocationMap />
          <ContactForm
            title="Get a Booking"
            description="Tell us what you need and we'll get back to you shortly."
            submitLabel="Submit"
          />
        </div>
      </div>
    </>
  );
}
