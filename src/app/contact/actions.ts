"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, "Subject is required."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

export type ContactFieldErrors = Partial<
  Record<keyof z.infer<typeof contactSchema>, string>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactFieldErrors;
};

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const errors: ContactFieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in errors)) {
        errors[field as keyof ContactFieldErrors] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // TODO: persist the message (database row + admin email notification)
  // once the backend for this is wired up. For now it's only validated.
  console.log("New contact message received:", result.data);

  return {
    status: "success",
    message: "Thanks for reaching out — we'll get back to you soon.",
  };
}
