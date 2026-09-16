import {
  Car,
  CornerUpRight,
  Eye,
  Gauge,
  Lock,
  PhoneOff,
  Ruler,
  Signpost,
  WineOff,
  type LucideIcon,
} from "lucide-react";

type Guideline = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const guidelines: Guideline[] = [
  {
    icon: Ruler,
    title: "Keep a Safe Distance",
    description: "Keep a safe distance from the vehicle in front of you and avoid tailgating.",
  },
  {
    icon: Gauge,
    title: "Speed Limit",
    description: "Follow the speed limit and adjust your speed to match road conditions.",
  },
  {
    icon: CornerUpRight,
    title: "Use Turn Signals",
    description: "Signal before changing lanes or turning, and always check your blind spots.",
  },
  {
    icon: Lock,
    title: "Wear Your Seat Belt",
    description: "Buckle up every trip, and make sure your passengers do the same.",
  },
  {
    icon: PhoneOff,
    title: "Avoid Distractions",
    description: "Avoid distractions like phones, eating, or drinking while driving.",
  },
  {
    icon: WineOff,
    title: "Drive Sober",
    description: "Never drive under the influence, and avoid driving while tired or drowsy.",
  },
  {
    icon: Eye,
    title: "Practice Defensive Driving",
    description: "Stay alert, cautious, and courteous to anticipate other drivers' mistakes.",
  },
  {
    icon: Signpost,
    title: "Know Traffic Laws",
    description: "Know local traffic laws and road signs, and follow them accordingly.",
  },
];

function GuidelineCard({ guideline }: { guideline: Guideline }) {
  const Icon = guideline.icon;
  return (
    <div className="flex flex-col gap-3">
      <Icon className="size-7 shrink-0 text-primary" aria-hidden="true" />
      <h3 className="font-heading text-base font-bold">{guideline.title}</h3>
      <p className="text-sm text-muted-foreground">{guideline.description}</p>
    </div>
  );
}

// Diagram coordinate space: a 100 x 60 unit grid. The wrapper below is forced
// to that exact aspect ratio so 1 x-unit and 1 y-unit map to the same pixel
// size, which keeps the wheel a circle and the item positions in sync with
// the connector lines drawn in the same units.
const CIRCLE = { cx: 50, cy: 26, r: 10 };

type Anchor = { x: number; y: number };

function edgePoint(anchor: Anchor) {
  const dx = anchor.x - CIRCLE.cx;
  const dy = anchor.y - CIRCLE.cy;
  const length = Math.hypot(dx, dy);
  return {
    x: CIRCLE.cx + (dx / length) * CIRCLE.r,
    y: CIRCLE.cy + (dy / length) * CIRCLE.r,
  };
}

const leftAnchors: Anchor[] = [6, 20, 34, 50].map((y) => ({ x: 32, y }));
const rightAnchors: Anchor[] = [6, 20, 34].map((y) => ({ x: 68, y }));
const bottomAnchor: Anchor = { x: 50, y: 52 };

function DiagramItem({
  guideline,
  anchor,
  side,
}: {
  guideline: Guideline;
  anchor: Anchor;
  side: "left" | "right" | "bottom";
}) {
  const Icon = guideline.icon;
  const topPct = (anchor.y / 60) * 100;

  // The icon is positioned independently, centered exactly on the anchor
  // point the connector line targets, so the line always meets the icon
  // regardless of how tall the title/description text next to it is.
  const icon = (
    <div
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      style={{ top: `${topPct}%`, left: `${anchor.x}%` }}
    >
      <Icon className="size-5 text-primary" aria-hidden="true" />
    </div>
  );

  if (side === "left") {
    return (
      <>
        {icon}
        <div
          className="absolute w-44 -translate-y-1/2 text-right"
          style={{ top: `${topPct}%`, right: `calc(${100 - anchor.x}% + 14px)` }}
        >
          <h3 className="font-heading text-sm font-bold">{guideline.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{guideline.description}</p>
        </div>
      </>
    );
  }

  if (side === "right") {
    return (
      <>
        {icon}
        <div
          className="absolute w-44 -translate-y-1/2 text-left"
          style={{ top: `${topPct}%`, left: `calc(${anchor.x}% + 14px)` }}
        >
          <h3 className="font-heading text-sm font-bold">{guideline.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{guideline.description}</p>
        </div>
      </>
    );
  }

  return (
    <>
      {icon}
      <div
        className="absolute w-48 -translate-x-1/2 text-center"
        style={{ top: `calc(${topPct}% + 14px)`, left: `${anchor.x}%` }}
      >
        <h3 className="font-heading text-sm font-bold">{guideline.title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{guideline.description}</p>
      </div>
    </>
  );
}

function RadialDiagram() {
  const leftItems = guidelines.slice(0, 4);
  const rightItems = guidelines.slice(4, 7);
  const bottomItem = guidelines[7];

  const lines = [
    ...leftAnchors.map((anchor) => ({ anchor, edge: edgePoint(anchor) })),
    ...rightAnchors.map((anchor) => ({ anchor, edge: edgePoint(anchor) })),
    { anchor: bottomAnchor, edge: edgePoint(bottomAnchor) },
  ];

  return (
    <div className="relative mx-auto hidden w-full max-w-4xl lg:block" style={{ aspectRatio: "100 / 60" }}>
      <svg
        viewBox="0 0 100 60"
        className="absolute inset-0 size-full text-primary"
        aria-hidden="true"
      >
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.anchor.x}
            y1={line.anchor.y}
            x2={line.edge.x}
            y2={line.edge.y}
            stroke="currentColor"
            strokeWidth={0.4}
            strokeDasharray="1.6 1.4"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div
        className="absolute flex items-center justify-center rounded-full bg-primary text-primary-foreground"
        style={{
          left: `${CIRCLE.cx}%`,
          top: `${(CIRCLE.cy / 60) * 100}%`,
          width: `${CIRCLE.r * 2}%`,
          height: `${((CIRCLE.r * 2) / 60) * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Car className="size-2/5" aria-hidden="true" />
      </div>

      {leftItems.map((guideline, i) => (
        <DiagramItem key={guideline.title} guideline={guideline} anchor={leftAnchors[i]} side="left" />
      ))}
      {rightItems.map((guideline, i) => (
        <DiagramItem key={guideline.title} guideline={guideline} anchor={rightAnchors[i]} side="right" />
      ))}
      <DiagramItem guideline={bottomItem} anchor={bottomAnchor} side="bottom" />
    </div>
  );
}

function DrivingGuidelines() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
        <Signpost className="size-5" aria-hidden="true" />
        Driving Guidelines
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Our Experience Is Your Advantage
      </h2>

      <RadialDiagram />

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:hidden">
        {guidelines.map((guideline) => (
          <GuidelineCard key={guideline.title} guideline={guideline} />
        ))}
      </div>
    </section>
  );
}

export { DrivingGuidelines };
