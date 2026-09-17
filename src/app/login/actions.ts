"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

export type LoginFieldErrors = Partial<
  Record<keyof z.infer<typeof loginSchema>, string>
>;

export type LoginFormState = {
  status: "idle" | "error" | "unavailable";
  message?: string;
  errors?: LoginFieldErrors;
};

export async function submitLogin(
  _prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const errors: LoginFieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in errors)) {
        errors[field as keyof LoginFieldErrors] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // TODO: wire up real authentication once a backend/user store exists.
  // Fields are validated above but there is nothing to check them against yet.
  return {
    status: "unavailable",
    message:
      "Sign-in isn't set up yet — this page is a placeholder while the account system is being built.",
  };
}
