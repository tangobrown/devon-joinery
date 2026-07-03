import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";

export const metadata = { title: "Our Expertise" };

export default function ExpertiseIndexPage() {
  return (
    <PageShell>
      <PageHeader
        title="Our Expertise"
        size="md"
        intro="Devon Joinery crafts bespoke joinery across eight core specialisms — explore each below."
      />
      <ExpertiseGrid />
    </PageShell>
  );
}
