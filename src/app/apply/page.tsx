import type { Metadata } from "next";
import { ApplicationForm } from "@/components/apply/application-form";

export const metadata: Metadata = {
  title: "Apply Now — Advanced Technique Driving School",
  description: "Apply for driver training at Advanced Technique Driving School.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Enrollment
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl">
        Apply Now
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Fill in the form below to start your enrollment. Fields marked with
        an asterisk (*) are required.
      </p>

      <div className="mt-10">
        <ApplicationForm />
      </div>
    </div>
  );
}
