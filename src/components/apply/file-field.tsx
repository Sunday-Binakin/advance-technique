"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { cn } from "cn";
import { Label } from "@/components/ui/label";

function FileField({
  name,
  label,
  accept,
  required,
  hint,
  error,
  showImagePreview,
}: {
  name: string;
  label: string;
  accept?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  showImagePreview?: boolean;
}) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const previewUrl = useMemo(() => {
    if (!file || !showImagePreview) return null;
    return URL.createObjectURL(file);
  }, [file, showImagePreview]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>

      <div className="flex items-center gap-3">
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewUrl}
            alt=""
            className="size-14 shrink-0 rounded-lg border border-input object-cover"
          />
        ) : null}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={cn(
            "flex h-8 flex-1 items-center gap-2 rounded-lg border border-dashed border-input bg-transparent px-2.5 text-sm text-muted-foreground transition-colors hover:border-ring hover:text-foreground",
            error && "border-destructive text-destructive"
          )}
        >
          <Upload className="size-4 shrink-0" />
          <span className="truncate">{file ? file.name : "Choose file"}</span>
        </button>
      </div>

      <input
        ref={inputRef}
        id={id}
        name={name}
        type="file"
        accept={accept}
        required={required}
        className="sr-only"
        onChange={(event) => setFile(event.target.files?.[0] ?? null)}
      />

      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export { FileField };
