"use server";

import { z } from "zod";
import {
  courseOptions,
  genderOptions,
  idTypeOptions,
  religionOptions,
} from "@/lib/apply-form-options";

const optionValues = (options: { value: string }[]) =>
  options.map((option) => option.value) as [string, ...string[]];

const requiredFile = (message: string) =>
  z
    .instanceof(File)
    .refine((file) => file.size > 0, { message });

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  otherNames: z.string().trim().optional(),
  age: z.coerce
    .number({ error: "Enter a valid age." })
    .int()
    .min(15, "Applicants must be at least 15 years old.")
    .max(100, "Enter a valid age."),
  gender: z.enum(optionValues(genderOptions), { error: "Select a gender." }),
  phone: z.string().trim().min(9, "Enter a valid phone number."),
  email: z.email("Enter a valid email address."),
  dateOfBirth: z.string().min(1, "Date of birth is required."),
  homeAddress: z.string().trim().min(1, "Home address is required."),
  occupation: z.string().trim().min(1, "Occupation is required."),
  course: z.enum(optionValues(courseOptions), { error: "Select a course." }),
  religion: z.enum(optionValues(religionOptions), {
    error: "Select a religion.",
  }),
  medicalReport: requiredFile("Upload your medical report."),
  idType: z.enum(optionValues(idTypeOptions), {
    error: "Select an ID type.",
  }),
  idNumber: z.string().trim().min(1, "ID number is required."),
  guardianName: z.string().trim().min(1, "Guardian name is required."),
  guardianContact: z.string().trim().min(9, "Enter a valid guardian contact."),
  passportPicture: requiredFile("Upload a passport picture."),
});

export type ApplicationFieldErrors = Partial<
  Record<keyof z.infer<typeof applicationSchema>, string>
>;

export type ApplicationFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ApplicationFieldErrors;
};

export async function submitApplication(
  _prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const result = applicationSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const errors: ApplicationFieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in errors)) {
        errors[field as keyof ApplicationFieldErrors] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // TODO: persist the application (database row, admin email notification,
  // and durable storage for medicalReport / passportPicture) once the
  // backend for this is wired up. For now the submission is only validated.
  console.log("New application received:", {
    ...result.data,
    medicalReport: result.data.medicalReport.name,
    passportPicture: result.data.passportPicture.name,
  });

  return {
    status: "success",
    message: "Your application has been received. We'll be in touch soon.",
  };
}
