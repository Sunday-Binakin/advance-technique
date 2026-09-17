"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/form/field";
import { SelectField } from "@/components/form/select-field";
import { contactSubjects } from "@/lib/contact-subjects";
import {
  submitContactMessage,
  type ContactFormState,
} from "@/app/contact/actions";

const initialContactState: ContactFormState = { status: "idle" };

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="animate-spin" /> : <Send />}
      {pending ? "Sending…" : label}
    </Button>
  );
}

function ContactForm({
  title = "Send Us a Message",
  description = "Have a question about a course or your application? We'll get back to you as soon as we can.",
  submitLabel = "Send Message",
}: {
  title?: string;
  description?: string;
  submitLabel?: string;
}) {
  const [state, formAction] = useActionState(
    submitContactMessage,
    initialContactState
  );

  if (state.status === "success") {
    return (
      <Card className="text-center">
        <CardContent className="flex flex-col items-center gap-3 py-10">
          <CheckCircle2 className="size-12 text-secondary" />
          <CardTitle>Message sent</CardTitle>
          <CardDescription>{state.message}</CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name" htmlFor="name" required error={state.errors?.name}>
              <Input id="name" name="name" required aria-invalid={!!state.errors?.name} />
            </Field>
            <Field label="Email" htmlFor="email" required error={state.errors?.email}>
              <Input id="email" name="email" type="email" required aria-invalid={!!state.errors?.email} />
            </Field>
            <Field label="Phone number" htmlFor="phone" error={state.errors?.phone}>
              <Input id="phone" name="phone" type="tel" />
            </Field>
            <SelectField
              label="Subject"
              name="subject"
              options={contactSubjects}
              placeholder="Select subject"
              required
              error={state.errors?.subject}
            />
          </div>

          <Field label="Message" htmlFor="message" required error={state.errors?.message}>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-invalid={!!state.errors?.message}
            />
          </Field>

          <SubmitButton label={submitLabel} />
        </form>
      </CardContent>
    </Card>
  );
}

export { ContactForm };
