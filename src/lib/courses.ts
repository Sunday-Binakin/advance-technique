import { Car, Gauge, CalendarDays, type LucideIcon } from "lucide-react";

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
};

export const courses: Course[] = [
  {
    slug: "regular-7-week",
    title: "Regular 7 Weeks Training",
    tagline: "Our standard course, at your own pace",
    price: "GHS 1,720",
    duration: "7 weeks",
    description:
      "Our standard driving course designed for beginners who want to master safe and confident driving at their own pace.",
    highlights: [
      "Steady, beginner-friendly lesson pace",
      "Defensive driving fundamentals",
      "DVLA road test preparation",
      "Parallel parking & maneuvering practice",
    ],
    icon: Car,
  },
  {
    slug: "intensive-4-week",
    title: "Intensive 4 Weeks Training",
    tagline: "Fast-track course for confident learners",
    price: "GHS 2,220",
    duration: "4 weeks",
    description:
      "A fast-track driving course designed for learners who want to acquire driving skills quickly and efficiently.",
    highlights: [
      "Daily lessons for rapid progress",
      "Road test preparation built in",
      "Parallel parking & maneuvering practice",
      "Ideal for tight schedules",
    ],
    icon: Gauge,
  },
  {
    slug: "saturdays-only",
    title: "Intensive Saturdays Only",
    tagline: "Flexible weekend classes",
    price: "GHS 2,500",
    duration: "2 Weeks Theory · 8 Weeks Practical",
    description:
      "Flexible weekend classes for busy professionals who want to learn driving during their free time.",
    highlights: [
      "Every Saturday, no weekday commitment",
      "Same certified instructors",
      "DVLA road test preparation",
      "Ideal for working professionals",
    ],
    icon: CalendarDays,
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}
