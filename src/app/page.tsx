import { HeroCarousel } from "@/components/home/hero-carousel";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { WorkProcess } from "@/components/home/work-process";
import { PricingSection } from "@/components/home/pricing-section";
import { DrivingGuidelines } from "@/components/home/driving-guidelines";
import { GetToKnowMore } from "@/components/home/get-to-know-more";
import { InstructorsSection } from "@/components/home/instructors-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BookLessonSection } from "@/components/home/book-lesson-section";
import { BlogSection } from "@/components/home/blog-section";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkProcess />
      <PricingSection />
      <DrivingGuidelines />
      <GetToKnowMore />
      <InstructorsSection />
      <BookLessonSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
