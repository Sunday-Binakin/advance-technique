export type PricingRow = {
  package: string;
  duration: string;
  fee: string;
};

export const nonStudentPricing: PricingRow[] = [
  {
    package: "Regular 7 Weeks Training without license",
    duration: "1 Week Theory · 6 Weeks Practical",
    fee: "GHS 1,720",
  },
  {
    package: "Intensive 4 Weeks Training without license",
    duration: "1 Week Theory · 3 Weeks Practical",
    fee: "GHS 2,220",
  },
  {
    package: "Intensive Saturdays Only without license",
    duration: "2 Weeks Theory · 8 Weeks Practical",
    fee: "GHS 2,500",
  },
];

export const licenseOnlyPricing: PricingRow[] = [
  { package: "Standard", duration: "3 months", fee: "GHS 590" },
  { package: "Premium", duration: "3–4 weeks", fee: "GHS 850" },
  { package: "Eye Test", duration: "1 day", fee: "GHS 100" },
];
