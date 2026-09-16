import { Tag } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { licenseOnlyPricing, nonStudentPricing, type PricingRow } from "@/lib/pricing";

function PricingTable({ rows }: { rows: PricingRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-neutral-900 hover:bg-neutral-900">
            <TableHead className="whitespace-normal text-white">Packages</TableHead>
            <TableHead className="whitespace-normal text-white">Duration</TableHead>
            <TableHead className="whitespace-normal text-white">Fees (GHS)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.package}>
              <TableCell className="whitespace-normal font-medium">
                {row.package}
              </TableCell>
              <TableCell className="whitespace-normal text-muted-foreground">
                {row.duration}
              </TableCell>
              <TableCell className="font-mono font-semibold">
                {row.fee}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-4xl scroll-mt-24 px-4 py-16 text-center sm:px-6 sm:py-24">
      <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
        <Tag className="size-5" aria-hidden="true" />
        Pricing Plan
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Our Most Valuable Pricing Packages
      </h2>

      <Tabs defaultValue="non-students" className="mt-8 items-center">
        <TabsList>
          <TabsTrigger
            value="non-students"
            className="data-active:bg-primary data-active:text-primary-foreground"
          >
            Non-Students
          </TabsTrigger>
          <TabsTrigger
            value="license-only"
            className="data-active:bg-primary data-active:text-primary-foreground"
          >
            Driver&apos;s License Only
          </TabsTrigger>
        </TabsList>

        <TabsContent value="non-students" className="mt-8 w-full text-left">
          <PricingTable rows={nonStudentPricing} />
        </TabsContent>
        <TabsContent value="license-only" className="mt-8 w-full text-left">
          <PricingTable rows={licenseOnlyPricing} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export { PricingSection };
