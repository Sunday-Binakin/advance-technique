export type Instructor = {
  name: string;
  title: string;
  // TODO: populate from a backend/CMS once real staff photos are available.
  image?: string;
};

export const instructors: Instructor[] = [
  { name: "Francis Y. Agbozo", title: "CEO and Founder" },
  { name: "William Afredi", title: "Instructor" },
  { name: "Kelvin Prince Adu Poku", title: "Instructor" },
];
