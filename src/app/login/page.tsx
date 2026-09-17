import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign In — Advanced Technique Driving School",
  description: "Sign in to your Advanced Technique Driving School account.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
      <LoginForm />
    </div>
  );
}
