"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/hero-slides";
import { siteConfig } from "@/lib/site-config";

const AUTOPLAY_MS = 6000;

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const slide = heroSlides[index];
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Why train with us"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative isolate flex h-[560px] items-end overflow-hidden bg-neutral-900 text-white sm:h-[620px]"
    >
      {heroSlides.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.headlineHighlight}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              s.gradientClassName,
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Icon
              className="absolute -right-10 bottom-0 size-[420px] text-white/5"
              strokeWidth={0.6}
              aria-hidden="true"
            />
          </div>
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      <div className="absolute inset-y-0 left-4 z-10 hidden flex-col items-center justify-center gap-3 sm:left-8 sm:flex">
        {heroSlides.map((s, i) => (
          <button
            key={s.headlineHighlight}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2.5 rounded-full border border-white/70 transition-all",
              i === index ? "scale-125 bg-white" : "bg-transparent hover:bg-white/40"
            )}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 md:pl-16">
        <p className="font-mono text-xs font-medium tracking-widest text-white/80 uppercase sm:text-sm">
          {slide.eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-heading text-4xl leading-[1.05] font-bold uppercase sm:text-5xl md:text-6xl">
          <span className="relative mr-3 inline-block px-3 py-1">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-white"
              style={{ clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)" }}
            />
            <span className="relative text-primary">{slide.headlineHighlight}</span>
          </span>
          <span>{slide.headlineRest}</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Button size="lg" nativeButton={false} render={<Link href={phoneHref} />}>
            Call Us
            <ArrowRight />
          </Button>
          <Link href={phoneHref} className="flex items-center gap-3 text-sm font-medium">
            <span className="flex size-10 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur">
              <Phone className="size-4" />
            </span>
            {siteConfig.phone}
          </Link>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll down"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white/10"
      >
        <ChevronDown className="size-5" />
      </button>
    </section>
  );
}

export { HeroCarousel };
