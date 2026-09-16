"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import type { NavLink as NavLinkType } from "@/lib/site-config";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  link,
  className,
  onNavigate,
}: {
  link: NavLinkType;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = isActivePath(pathname, link.href);

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground aria-[current=page]:text-foreground md:text-base lg:text-lg",
        className
      )}
    >
      {link.label}
    </Link>
  );
}

export { NavLink };
