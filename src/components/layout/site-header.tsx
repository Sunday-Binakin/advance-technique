"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { NavLink } from "@/components/layout/nav-link";
import { NavSearch } from "@/components/layout/nav-search";
import { siteConfig } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";

// Homepage sections that double as previews of their own dedicated pages —
// scrolling past one on "/" should highlight the matching nav item.
const TRACKED_SECTION_IDS = ["about", "services"];
const sectionIdByHref: Record<string, string> = {
  "/#about": "about",
  "/courses": "services",
};

function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const activeSectionId = useActiveSection(TRACKED_SECTION_IDS, pathname === "/");

  return (
    <header className="sticky top-0 z-40 flex h-24 items-stretch border-b border-border bg-background">
      <div className="relative flex items-center overflow-hidden rounded-r-full bg-primary py-2 pr-8 pl-5 sm:pr-12 sm:pl-6 md:w-2/5 md:rounded-none md:bg-transparent md:pr-14">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 -z-10 hidden size-full text-primary md:block"
          aria-hidden="true"
        >
          <path d="M0,0 L70,0 C85,15 85,35 70,50 S55,85 70,100 L0,100 Z" fill="currentColor" />
        </svg>
        <Logo variant="inverted" />
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-4 px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
        >
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              sectionId={sectionIdByHref[link.href]}
              activeSectionId={activeSectionId}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href={siteConfig.loginHref} />}
          >
            Login
          </Button>
          <NavSearch />
          <Button
            size="lg"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<Link href={siteConfig.applyHref} />}
          >
            Apply Now
            <ArrowRight />
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Open menu"
          className="ml-auto md:hidden"
          onClick={() => setMobileNavOpen(true)}
        >
          <Menu />
        </Button>
      </div>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xs">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav aria-label="Primary" className="flex flex-col gap-1 px-4">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                link={link}
                onNavigate={() => setMobileNavOpen(false)}
                sectionId={sectionIdByHref[link.href]}
                activeSectionId={activeSectionId}
                className="rounded-lg px-2.5 py-2 text-base hover:bg-muted aria-[current=page]:bg-muted"
              />
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-2 p-4">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href={siteConfig.loginHref} />}
              onClick={() => setMobileNavOpen(false)}
            >
              Login
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={siteConfig.applyHref} />}
              onClick={() => setMobileNavOpen(false)}
            >
              Apply Now
              <ArrowRight />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export { SiteHeader };
