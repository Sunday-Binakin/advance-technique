"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
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
import { FileField } from "@/components/apply/file-field";
import {
  courseOptions,
  genderOptions,
  idTypeOptions,
  religionOptions,
} from "@/lib/apply-form-options";
import {
  submitApplication,
  type ApplicationFormState,
} from "@/app/apply/actions";

const initialApplicationState: ApplicationFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending && <Loader2 className="animate-spin" />}
      {pending ? "Submitting…" : "Submit Application"}
    </Button>
  );
}

function ApplicationForm() {
  const [state, formAction] = useActionState(
    submitApplication,
    initialApplicationState
  );

  if (state.status === "success") {
    return (
      <Card className="mx-auto max-w-xl text-center">
        <CardContent className="flex flex-col items-center gap-3 py-10">
          <CheckCircle2 className="size-12 text-secondary" />
          <CardTitle>Application received</CardTitle>
          <CardDescription>{state.message}</CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {state.message}
        </p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Tell us who you are.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="First name" htmlFor="firstName" required error={state.errors?.firstName}>
            <Input id="firstName" name="firstName" required aria-invalid={!!state.errors?.firstName} />
          </Field>
          <Field label="Last name" htmlFor="lastName" required error={state.errors?.lastName}>
            <Input id="lastName" name="lastName" required aria-invalid={!!state.errors?.lastName} />
          </Field>
          <Field label="Other names" htmlFor="otherNames" error={state.errors?.otherNames}>
            <Input id="otherNames" name="otherNames" />
          </Field>
          <Field label="Age" htmlFor="age" required error={state.errors?.age}>
            <Input id="age" name="age" type="number" min={15} max={100} required aria-invalid={!!state.errors?.age} />
          </Field>
          <SelectField
            label="Gender"
            name="gender"
            options={genderOptions}
            placeholder="Select gender"
            required
            error={state.errors?.gender}
          />
          <Field label="Date of birth" htmlFor="dateOfBirth" required error={state.errors?.dateOfBirth}>
            <Input id="dateOfBirth" name="dateOfBirth" type="date" required aria-invalid={!!state.errors?.dateOfBirth} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact &amp; Address</CardTitle>
          <CardDescription>How and where we can reach you.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Phone number" htmlFor="phone" required error={state.errors?.phone}>
            <Input id="phone" name="phone" type="tel" required aria-invalid={!!state.errors?.phone} />
          </Field>
          <Field label="Email" htmlFor="email" required error={state.errors?.email}>
            <Input id="email" name="email" type="email" required aria-invalid={!!state.errors?.email} />
          </Field>
          <Field label="Occupation" htmlFor="occupation" required error={state.errors?.occupation}>
            <Input id="occupation" name="occupation" required aria-invalid={!!state.errors?.occupation} />
          </Field>
          <Field
            label="Home address"
            htmlFor="homeAddress"
            required
            error={state.errors?.homeAddress}
            className="flex flex-col gap-1.5 sm:col-span-2"
          >
            <Textarea id="homeAddress" name="homeAddress" required aria-invalid={!!state.errors?.homeAddress} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course</CardTitle>
          <CardDescription>Which training schedule fits you best?</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField
            label="Course"
            name="course"
            options={courseOptions}
            placeholder="Select a course"
            required
            error={state.errors?.course}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Religion &amp; Identification</CardTitle>
          <CardDescription>Used for enrollment records only.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField
            label="Religion"
            name="religion"
            options={religionOptions}
            placeholder="Select religion"
            required
            error={state.errors?.religion}
          />
          <SelectField
            label="ID type"
            name="idType"
            options={idTypeOptions}
            placeholder="Select ID type"
            required
            error={state.errors?.idType}
          />
          <Field label="ID number" htmlFor="idNumber" required error={state.errors?.idNumber}>
            <Input id="idNumber" name="idNumber" required aria-invalid={!!state.errors?.idNumber} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guardian Information</CardTitle>
          <CardDescription>Someone we can contact in an emergency.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Guardian name" htmlFor="guardianName" required error={state.errors?.guardianName}>
            <Input id="guardianName" name="guardianName" required aria-invalid={!!state.errors?.guardianName} />
          </Field>
          <Field label="Guardian contact" htmlFor="guardianContact" required error={state.errors?.guardianContact}>
            <Input id="guardianContact" name="guardianContact" type="tel" required aria-invalid={!!state.errors?.guardianContact} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
          <CardDescription>Accepted formats: JPG, PNG, or PDF.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FileField
            name="medicalReport"
            label="Medical report"
            accept="image/*,application/pdf"
            required
            hint="A recent medical fitness report."
            error={state.errors?.medicalReport}
          />
          <FileField
            name="passportPicture"
            label="Passport picture"
            accept="image/*"
            required
            showImagePreview
            hint="Passport-style photo, plain background."
            error={state.errors?.passportPicture}
          />
        </CardContent>
      </Card>

      <SubmitButton />
    </form>
  );
}

export { ApplicationForm };
