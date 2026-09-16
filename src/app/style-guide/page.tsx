import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const swatches: { name: string; token: string; className: string }[] = [
  { name: "Background", token: "--background", className: "bg-background text-foreground border" },
  { name: "Foreground", token: "--foreground", className: "bg-foreground text-background" },
  { name: "Primary", token: "--primary", className: "bg-primary text-primary-foreground" },
  { name: "Secondary", token: "--secondary", className: "bg-secondary text-secondary-foreground" },
  { name: "Accent", token: "--accent", className: "bg-accent text-accent-foreground" },
  { name: "Muted", token: "--muted", className: "bg-muted text-muted-foreground" },
  { name: "Card", token: "--card", className: "bg-card text-card-foreground border" },
  { name: "Destructive", token: "--destructive", className: "bg-destructive text-destructive-foreground" },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-heading text-2xl font-semibold tracking-tight uppercase">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground text-sm mt-1 max-w-prose">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-16">
      <header className="space-y-2">
        <Badge className="uppercase tracking-wide">M01 — Design System</Badge>
        <h1 className="font-heading text-4xl font-bold tracking-tight uppercase">
          Advanced Technique Style Guide
        </h1>
        <p className="text-muted-foreground max-w-prose">
          Living reference for every base component the site is built from. Nothing on this
          page ships to visitors — it exists so every later module reuses the same tokens.
        </p>
      </header>

      <Section title="Color tokens" description="Light theme shown; each token flips automatically in dark mode.">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {swatches.map((s) => (
            <div key={s.token} className="space-y-1.5">
              <div className={`h-16 rounded-md flex items-end p-2 text-xs font-mono ${s.className}`}>
                {s.token}
              </div>
              <p className="text-xs text-muted-foreground">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography" description="Oswald for headings, Public Sans for body copy, JetBrains Mono for routes/data.">
        <div className="space-y-3">
          <p className="font-heading text-4xl font-bold uppercase tracking-tight">Heading / H1</p>
          <p className="font-heading text-3xl font-semibold uppercase tracking-tight">Heading / H2</p>
          <p className="font-heading text-xl font-semibold uppercase tracking-tight">Heading / H3</p>
          <p className="text-base">
            Body copy in Public Sans — used for every paragraph, form label, and card
            description across the site. Regular 7-Week Training prepares learners for the
            DVLA road test with defensive driving technique built in from lesson one.
          </p>
          <p className="font-mono text-sm text-muted-foreground">/courses/regular-7-week — GHS 1,720</p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Section title="Card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Intensive 4-Week Training</CardTitle>
            <CardDescription>Fast-track course for confident learners.</CardDescription>
            <CardAction>
              <Badge variant="secondary">Popular</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Daily lessons, road test preparation, and parallel parking practice — 4 weeks
              start to finish.
            </p>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="font-mono text-sm">GHS 2,220</span>
            <Button size="sm">Apply Now</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Tabs" description="Used on the Pricing page to switch between Student / Non-Student / License-Only.">
        <Tabs defaultValue="non-student" className="max-w-md">
          <TabsList>
            <TabsTrigger value="non-student">Non-Student</TabsTrigger>
            <TabsTrigger value="license">License Only</TabsTrigger>
          </TabsList>
          <TabsContent value="non-student" className="text-sm text-muted-foreground">
            Regular 7 Weeks — GHS 1,720 · Intensive 4 Weeks — GHS 2,220
          </TabsContent>
          <TabsContent value="license" className="text-sm text-muted-foreground">
            Standard (3 months) — GHS 590 · Premium (3–4 weeks) — GHS 850
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Accordion" description="Candidate layout for the Driving Guidelines module.">
        <Accordion defaultValue={["distance"]} className="max-w-md">
          <AccordionItem value="distance">
            <AccordionTrigger>Keep a safe following distance</AccordionTrigger>
            <AccordionContent>
              Leave at least a 3-second gap to the vehicle ahead in normal conditions, more in
              rain or heavy traffic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="signals">
            <AccordionTrigger>Always signal your turns</AccordionTrigger>
            <AccordionContent>
              Indicate at least 30 metres before turning so other road users have time to
              react.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Table" description="Base for the Admin applications inbox.">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ama Boateng</TableCell>
              <TableCell>Regular 7-Week</TableCell>
              <TableCell><Badge variant="secondary">Enrolled</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kwesi Owusu</TableCell>
              <TableCell>License Only</TableCell>
              <TableCell><Badge variant="outline">Pending</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      <Section title="Form elements" description="Building blocks for the Application and Contact forms (M15/M16).">
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          <div className="space-y-1.5">
            <Label htmlFor="sg-name">Full name</Label>
            <Input id="sg-name" placeholder="Ama Boateng" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="sg-course">Course</Label>
            <Select>
              <SelectTrigger id="sg-course" className="w-full">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular 7-Week</SelectItem>
                <SelectItem value="intensive">Intensive 4-Week</SelectItem>
                <SelectItem value="saturdays">Saturdays Only</SelectItem>
                <SelectItem value="license">License Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="sg-message">Message</Label>
            <Textarea id="sg-message" placeholder="Tell us about your schedule…" />
          </div>
        </div>
      </Section>

      <Section title="Dialog &amp; Sheet" description="Confirmation modals and the mobile navigation drawer.">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm application</DialogTitle>
                <DialogDescription>
                  We&apos;ll email you a confirmation once your application is received.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Mobile navigation drawer preview.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Section>

      <Separator />
      <p className="text-xs text-muted-foreground font-mono">
        /style-guide — M01 Definition of Done reference
      </p>
    </div>
  );
}
