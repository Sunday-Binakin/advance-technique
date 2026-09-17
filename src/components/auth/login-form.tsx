"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Info, Loader2, LogIn } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/form/field";
import { submitLogin, type LoginFormState } from "@/app/login/actions";

const initialLoginState: LoginFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? <Loader2 className="animate-spin" /> : <LogIn />}
      {pending ? "Signing in…" : "Sign In"}
    </Button>
  );
}

function LoginForm() {
  const [state, formAction] = useActionState(submitLogin, initialLoginState);

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your details to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          {state.status === "error" && (
            <p
              role="alert"
              className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              {state.message}
            </p>
          )}
          {state.status === "unavailable" && (
            <p
              role="status"
              className="flex items-start gap-2 rounded-lg border border-border bg-muted px-4 py-3 text-sm text-muted-foreground"
            >
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {state.message}
            </p>
          )}

          <Field label="Email" htmlFor="email" required error={state.errors?.email}>
            <Input
              id="email"
              name="email"
              type="email"
              required
              aria-invalid={!!state.errors?.email}
            />
          </Field>
          <Field label="Password" htmlFor="password" required error={state.errors?.password}>
            <Input
              id="password"
              name="password"
              type="password"
              required
              aria-invalid={!!state.errors?.password}
            />
          </Field>

          <SubmitButton />
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link href="/apply" className="font-medium text-primary hover:underline">
            Apply for a course
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export { LoginForm };
