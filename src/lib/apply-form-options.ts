export type SelectOption = {
  value: string;
  label: string;
};

export const genderOptions: SelectOption[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const courseOptions: SelectOption[] = [
  { value: "intensive", label: "Intensive Training" },
  { value: "regular", label: "Regular Training" },
  { value: "saturday", label: "Saturday Training" },
];

export const religionOptions: SelectOption[] = [
  { value: "christianity", label: "Christianity" },
  { value: "islam", label: "Islam" },
  { value: "traditionalist", label: "Traditionalist" },
  { value: "other", label: "Other" },
];

export const idTypeOptions: SelectOption[] = [
  { value: "ghana_card", label: "Ghana Card" },
  { value: "passport", label: "Passport" },
  { value: "voters_id", label: "Voter's ID" },
  { value: "drivers_license", label: "Driver's License" },
  { value: "other", label: "Other" },
];
