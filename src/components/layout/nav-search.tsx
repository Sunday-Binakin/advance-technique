"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function NavSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function close() {
    setOpen(false);
    inputRef.current?.blur();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = inputRef.current?.value.trim();
    if (!query) return;
    router.push(`/courses?q=${encodeURIComponent(query)}`);
    close();
  }

  if (open) {
    return (
      <form
        onSubmit={handleSubmit}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) close();
        }}
        className="flex items-center gap-1"
      >
        <Input
          ref={inputRef}
          autoFocus
          type="search"
          placeholder="Search courses…"
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
          className="h-8 w-40 sm:w-56"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close search"
          onClick={close}
        >
          <X />
        </Button>
      </form>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label="Search courses"
      onClick={() => setOpen(true)}
    >
      <Search />
    </Button>
  );
}

export { NavSearch };
