"use client";

import { useState } from "react";
import Link from "next/link";
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

function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-24 items-stretch border-b border-border bg-background">
      <div className="flex items-center rounded-r-full bg-primary py-2 pr-8 pl-5 sm:pr-12 sm:pl-6">
        <Logo variant="inverted" />
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-4 px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
        >
          {siteConfig.navLinks.map((link) => (
            <NavLink key={link.href} link={link} />
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
