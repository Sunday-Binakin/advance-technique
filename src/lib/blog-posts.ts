import {
  AlertTriangle,
  Backpack,
  Car,
  GraduationCap,
  ListChecks,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  icon: LucideIcon;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tips-for-passing-your-dvla-road-test",
    title: "Tips for Passing Your DVLA Road Test",
    excerpt:
      "A few habits that make the biggest difference on test day, from mirror checks to parking.",
    content: [
      "The DVLA road test rewards consistency, not perfection. Examiners are looking for a driver who checks mirrors before every maneuver, signals early, and stays calm under pressure.",
      "Before test day, practice the maneuvers you're least confident in — parallel parking and reversing around a corner trip up more learners than anything else. A little repetition goes a long way.",
      "On the day itself, give yourself extra time to arrive, take a breath before you start the engine, and remember that small mistakes are recoverable. Examiners are watching for how you handle the road, not for a flawless run.",
    ],
    author: "Admin",
    date: "2026-03-15",
    icon: ShieldCheck,
  },
  {
    slug: "understanding-ghanas-driving-license-process",
    title: "Understanding Ghana's Driving License Process",
    excerpt:
      "A plain-language walkthrough of what happens between enrolling in a course and getting your license.",
    content: [
      "Getting licensed in Ghana generally involves three stages: training with a registered driving school, sitting the theory and eye test, and passing the practical road test with the DVLA.",
      "Choosing a structured course — rather than learning informally — means your theory and practical training are aligned with what examiners actually test, which shortens the path to a first-time pass.",
      "Once you've completed your course, your school will guide you through booking your test dates and preparing the paperwork the DVLA requires, so nothing catches you off guard.",
    ],
    author: "Admin",
    date: "2026-02-02",
    icon: GraduationCap,
  },
  {
    slug: "why-defensive-driving-matters",
    title: "Why Defensive Driving Matters",
    excerpt:
      "Defensive driving isn't about being cautious to a fault — it's about anticipating the road around you.",
    content: [
      "Defensive driving means assuming the other driver might make a mistake, and positioning yourself so their mistake doesn't become your accident.",
      "That includes simple habits: keeping a safe following distance, checking blind spots before every lane change, and staying off your phone entirely while the car is moving.",
      "It's a mindset we build into every course from lesson one, because the goal isn't just passing a test — it's driving safely for years afterward.",
    ],
    author: "Admin",
    date: "2026-01-10",
    icon: Car,
  },
  {
    slug: "how-to-choose-the-right-course-for-you",
    title: "How to Choose the Right Course for You",
    excerpt:
      "Regular, intensive, or Saturdays-only — here's how to pick the schedule that actually fits your life.",
    content: [
      "There's no single \"best\" course — only the one that fits how much time you realistically have each week. Our Regular 7-Week course spreads lessons out for a steady, beginner-friendly pace.",
      "If you need to be road-ready fast, the Intensive 4-Week course front-loads daily lessons so you build muscle memory quickly, without long gaps between sessions.",
      "And if weekdays are off the table entirely, the Saturdays-only course covers the same curriculum over a longer calendar span, one session a week, with no weekday commitment.",
    ],
    author: "Admin",
    date: "2026-04-02",
    icon: ListChecks,
  },
  {
    slug: "common-mistakes-new-drivers-make",
    title: "Common Mistakes New Drivers Make (and How to Avoid Them)",
    excerpt:
      "The small habits that trip up learners most often — and the simple fixes for each one.",
    content: [
      "Riding the clutch, forgetting to check blind spots, and creeping through junctions instead of committing to a decision are the three mistakes we see most often in early lessons.",
      "Most of these come down to hesitation rather than a lack of skill — new drivers often know the right move but second-guess themselves at the moment it matters.",
      "The fix is repetition in low-pressure settings, which is exactly why our lessons build from quiet roads up to full traffic conditions before test day.",
    ],
    author: "Admin",
    date: "2026-04-20",
    icon: AlertTriangle,
  },
  {
    slug: "what-to-bring-on-your-test-day",
    title: "What to Bring on Your DVLA Test Day",
    excerpt:
      "A short checklist so paperwork is one less thing to worry about before your road test.",
    content: [
      "Bring valid identification, your learner's permit, and any documents your instructor has told you the DVLA will ask for at your specific test centre.",
      "Arrive in comfortable clothing and footwear that won't get in the way of the pedals — flip-flops and loose sandals are best left at home.",
      "Get a good night's sleep beforehand. Test-day nerves are normal, but a well-rested driver makes noticeably fewer of the small mistakes that add up on a scorecard.",
    ],
    author: "Admin",
    date: "2026-05-05",
    icon: Backpack,
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getRelatedPosts(slug: string, limit = 4) {
  return getSortedPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}
