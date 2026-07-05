import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";

export const metadata = {
  title: "Our Expertise | Bespoke Joinery Services in Exeter",
  description:
    "Explore Devon Joinery's eight specialisms: balustrades, gates, doors, receptions, windows, wardrobes & storage, media units and staircases — all handcrafted in Exeter.",
  alternates: { canonical: "/expertise" },
};

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
