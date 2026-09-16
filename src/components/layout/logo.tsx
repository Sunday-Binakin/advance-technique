import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { siteConfig } from "@/lib/site-config";

function Logo({
  variant = "default",
  className,
}: {
  variant?: "default" | "inverted";
  className?: string;
}) {
  const inverted = variant === "inverted";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3",
        inverted ? "focus-visible:ring-white/50" : "focus-visible:ring-ring/50",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="ATDS crest"
        width={185}
        height={220}
        priority
        className={cn(
          "w-auto shrink-0 rounded-md ring-1",
          inverted ? "h-11 ring-white/40" : "h-9 ring-border/60"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-tight uppercase",
            inverted && "text-white"
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "font-mono text-[0.65rem] font-medium tracking-widest uppercase",
            inverted ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}

export { Logo };
