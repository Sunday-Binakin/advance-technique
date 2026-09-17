"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import type { NavLink as NavLinkType } from "@/lib/site-config";

function isActivePath(
  pathname: string,
  href: string,
  sectionId: string | undefined,
  activeSectionId: string | null
) {
  // On the homepage, "About Us" and "Courses" track the corresponding
  // section scrolled into view instead of the URL (they still link to
  // their own routes for direct navigation, but while you're already on
  // "/" scrolling past their homepage preview should highlight them too).
  if (pathname === "/" && sectionId) {
    return activeSectionId === sectionId;
  }

  if (href === "/") {
    return pathname === "/" && activeSectionId === null;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  link,
  className,
  onNavigate,
  sectionId,
  activeSectionId = null,
}: {
  link: NavLinkType;
  className?: string;
  onNavigate?: () => void;
  sectionId?: string;
  activeSectionId?: string | null;
}) {
  const pathname = usePathname();
  const active = isActivePath(pathname, link.href, sectionId, activeSectionId);

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:bg-primary/10 aria-[current=page]:font-bold aria-[current=page]:text-primary md:text-base lg:text-lg",
        className
      )}
    >
      {link.label}
    </Link>
  );
}

export { NavLink };
