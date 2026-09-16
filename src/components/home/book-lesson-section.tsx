import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const GAUGE_CENTER = { x: 280, y: 260 };
const GAUGE_RADIUS = 250;
const GAUGE_START_ANGLE = 180;
const GAUGE_END_ANGLE = 360;
const TICK_COUNT = 16;
const TICK_ANGLES = Array.from({ length: TICK_COUNT }, (_, i) =>
  GAUGE_START_ANGLE + ((GAUGE_END_ANGLE - GAUGE_START_ANGLE) * i) / (TICK_COUNT - 1)
);
const REDLINE_ANGLES = new Set(TICK_ANGLES.slice(-3).map((a) => Math.round(a * 100)));
const GAUGE_LABELS = [
  { label: "E", t: 0 },
  { label: "1/4", t: 0.25 },
  { label: "1/2", t: 0.5 },
  { label: "3/4", t: 0.75 },
  { label: "F", t: 1 },
].map(({ label, t }) => ({
  label,
  angle: GAUGE_START_ANGLE + (GAUGE_END_ANGLE - GAUGE_START_ANGLE) * t,
}));

function toXY(center: { x: number; y: number }, radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: center.x + radius * Math.cos(rad), y: center.y + radius * Math.sin(rad) };
}

function GaugeIllustration() {
  const needle = toXY(GAUGE_CENTER, GAUGE_RADIUS - 50, 228);

  return (
    <svg
      viewBox="0 0 560 300"
      className="absolute top-2 left-2 w-72 text-white/20 sm:top-4 sm:left-4 sm:w-96"
      aria-hidden="true"
    >
      {TICK_ANGLES.map((angle) => {
        const outer = toXY(GAUGE_CENTER, GAUGE_RADIUS, angle);
        const inner = toXY(GAUGE_CENTER, GAUGE_RADIUS - 22, angle);
        return (
          <line
            key={angle}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="currentColor"
            className={REDLINE_ANGLES.has(Math.round(angle * 100)) ? "text-primary" : undefined}
            strokeWidth={5}
            strokeLinecap="round"
          />
        );
      })}
      <line
        x1={GAUGE_CENTER.x}
        y1={GAUGE_CENTER.y}
        x2={needle.x}
        y2={needle.y}
        stroke="currentColor"
        className="text-primary"
        strokeWidth={5}
        strokeLinecap="round"
      />
      {GAUGE_LABELS.map(({ label, angle }) => {
        const pos = toXY(GAUGE_CENTER, GAUGE_RADIUS - 40, angle);
        return (
          <text
            key={label}
            x={pos.x}
            y={pos.y}
            fill="currentColor"
            fontSize={18}
            fontWeight={600}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

function TrafficLightIllustration() {
  return (
    <svg
      viewBox="0 0 60 200"
      className="absolute right-2 bottom-0 h-64 sm:right-4 sm:h-80"
      aria-hidden="true"
    >
      <line x1="30" y1="60" x2="30" y2="200" stroke="currentColor" className="text-white/20" strokeWidth={6} />
      <rect x="8" y="4" width="44" height="66" rx="10" fill="currentColor" className="text-white/10" />
      <circle cx="30" cy="20" r="9" fill="#E5473A" />
      <circle cx="30" cy="37" r="9" fill="#F2DD00" />
      <circle cx="30" cy="54" r="9" fill="#2FA84A" />
    </svg>
  );
}

const BUILDING_HEIGHTS = [40, 70, 55, 90, 65, 100, 75, 50, 85, 60, 95, 45];

function SkylineIllustration() {
  return (
    <svg
      viewBox="0 0 600 100"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-32 w-full sm:h-40"
      aria-hidden="true"
    >
      {BUILDING_HEIGHTS.map((height, buildingIndex) => {
        const x = buildingIndex * 50;
        const rows = Math.floor(height / 14);
        return (
          <g key={buildingIndex}>
            <rect x={x} y={100 - height} width={42} height={height} className="fill-white/6" />
            {Array.from({ length: rows }, (_, row) => {
              const lit = (row + buildingIndex) % 3 !== 0;
              return (
                <rect
                  key={row}
                  x={x + 8}
                  y={100 - height + 6 + row * 14}
                  width={6}
                  height={7}
                  className={lit ? "fill-white/25" : "fill-white/6"}
                />
              );
            })}
            {Array.from({ length: rows }, (_, row) => {
              const lit = (row + buildingIndex + 1) % 3 !== 0;
              return (
                <rect
                  key={`b-${row}`}
                  x={x + 26}
                  y={100 - height + 6 + row * 14}
                  width={6}
                  height={7}
                  className={lit ? "fill-white/25" : "fill-white/6"}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

const STAR_POSITIONS = [
  [6, 12], [14, 22], [22, 8], [31, 18], [40, 6], [48, 24], [57, 10], [66, 20],
  [74, 7], [83, 16], [91, 9], [11, 30], [36, 32], [62, 30], [88, 28], [4, 20],
];

function NightSkyIllustration() {
  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className="absolute inset-x-0 top-0 h-1/2 w-full"
      aria-hidden="true"
    >
      <circle cx="86" cy="10" r="4" className="fill-white/15" />
      {STAR_POSITIONS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 0.5 : 0.3} className="fill-white/40" />
      ))}
    </svg>
  );
}

function CarIllustration() {
  return (
    <svg viewBox="0 0 200 90" className="h-full w-full text-primary drop-shadow-lg" aria-hidden="true">
      <path
        d="M12,68 Q12,54 26,54 L44,54 Q56,32 78,28 L128,28 Q148,32 158,54 L174,54 Q188,54 188,68 L188,74 L12,74 Z"
        fill="currentColor"
      />
      <path d="M58,51 L76,33 L98,33 L98,51 Z" fill="#DCEFFB" />
      <path d="M103,33 L126,33 L142,51 L103,51 Z" fill="#DCEFFB" />
      <circle cx="56" cy="75" r="15" fill="#171412" />
      <circle cx="56" cy="75" r="6" fill="#F2EFEC" />
      <circle cx="148" cy="75" r="15" fill="#171412" />
      <circle cx="148" cy="75" r="6" fill="#F2EFEC" />
    </svg>
  );
}

function BookLessonSection() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <section className="relative isolate flex min-h-160 flex-col items-center justify-center overflow-hidden bg-neutral-950 py-24 text-white sm:min-h-190 sm:py-32">
      <NightSkyIllustration />
      <GaugeIllustration />
      <SkylineIllustration />
      <TrafficLightIllustration />

      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <span className="flex size-20 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/5">
          <span className="flex size-14 items-center justify-center rounded-full bg-white text-primary">
            <Phone className="size-6" aria-hidden="true" />
          </span>
        </span>

        <Link href={phoneHref} className="mt-5 text-lg font-bold text-primary hover:underline">
          {siteConfig.phone}
        </Link>

        <h2 className="mt-3 font-heading text-2xl leading-tight font-bold sm:text-3xl">
          Book Your First Driving Lesson
          <br />
          And Contact Us
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" nativeButton={false} render={<Link href="/apply" />}>
            Book Now
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Contact Us
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 h-16 sm:h-20 lg:h-24">
        <div
          className="absolute bottom-0 left-0 aspect-200/90 w-56 [--car-w:14rem] animate-[drive-across_28s_ease-in-out_infinite] motion-reduce:left-1/2 motion-reduce:animate-none sm:w-72 sm:[--car-w:18rem] lg:w-80 lg:[--car-w:20rem]"
        >
          <CarIllustration />
        </div>
      </div>
    </section>
  );
}

export { BookLessonSection };
