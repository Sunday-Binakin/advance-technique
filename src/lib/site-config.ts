export type NavLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Advanced Technique",
  tagline: "Driving School",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  loginHref: "/login",
  applyHref: "/apply",
  // TODO: replace phone/email with the real business contact details once supplied.
  phone: "+233 00 000 0000",
  email: "info@example.com",
  address: "Opposite Zen Filling Station, Obuom Road, Kasoa, Ghana",
} as const;
