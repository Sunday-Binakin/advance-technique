import { Car, Route, ShieldCheck, type LucideIcon } from "lucide-react";

export type HeroSlide = {
  eyebrow: string;
  headlineHighlight: string;
  headlineRest: string;
  icon: LucideIcon;
  gradientClassName: string;
};

// TODO: once real photography is supplied, give each slide an `image` src
// and render it with next/image (fill + object-cover) behind the overlay
// instead of the gradient + icon placeholder below.
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Unlock Your Driving Potential",
    headlineHighlight: "Master the Road",
    headlineRest: "with Ease",
    icon: Car,
    gradientClassName: "bg-gradient-to-br from-neutral-900 via-neutral-900 to-primary/40",
  },
  {
    eyebrow: "DVLA-Ready Training",
    headlineHighlight: "Pass Your Test",
    headlineRest: "the First Time",
    icon: ShieldCheck,
    gradientClassName: "bg-gradient-to-bl from-neutral-900 via-neutral-900 to-primary/40",
  },
  {
    eyebrow: "Flexible Learning, Every Week",
    headlineHighlight: "Drive With",
    headlineRest: "Confidence",
    icon: Route,
    gradientClassName: "bg-gradient-to-t from-neutral-900 via-neutral-900 to-primary/30",
  },
];
