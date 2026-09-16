import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "@/components/apply/field";
import type { SelectOption } from "@/lib/apply-form-options";

function SelectField({
  label,
  name,
  options,
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  options: SelectOption[];
  placeholder: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <Field label={label} htmlFor={name} required={required} error={error}>
      <Select name={name} required={required}>
        <SelectTrigger id={name} className="w-full" aria-invalid={!!error}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}

export { SelectField };
