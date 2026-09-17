import type { SelectOption } from "@/lib/select-option";
import { courses } from "@/lib/courses";

export const contactSubjects: SelectOption[] = [
  { value: "general-inquiry", label: "General Inquiry" },
  ...courses.map((course) => ({ value: course.slug, label: course.title })),
  { value: "other", label: "Other" },
];
