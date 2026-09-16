export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: replace with real student testimonials (name, quote, course, photo)
// once they're collected — these are placeholder copy only.
export const testimonials: Testimonial[] = [
  {
    quote:
      "My instructor was professional and patient. They helped me understand common mistakes and road etiquette from the very first lesson.",
    name: "Student Name",
    role: "Regular 7-Week Graduate",
  },
  {
    quote:
      "The lessons were well-structured and easy to follow. I felt confident and ready by the time I sat my road test.",
    name: "Student Name",
    role: "Intensive 4-Week Graduate",
  },
  {
    quote:
      "Training on Saturdays fit perfectly around my work schedule, and the instructors were just as attentive as any weekday class.",
    name: "Student Name",
    role: "Saturdays Course Graduate",
  },
];
