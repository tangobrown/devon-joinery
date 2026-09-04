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
        intro="Devon Joinery crafts bespoke kitchens, fitted wardrobes, windows, doors, and architectural joinery. Discover how we can transform your entire space with the same dedication to quality and craftsmanship. Devon Joinery crafts bespoke joinery across eight core specialisms. Explore each below."
      />

      <ExpertiseGrid />

      <section className="max-w-article mx-auto px-6 pt-4 pb-16">
        <h2 className="text-[26px] md:text-[32px] font-bold text-ink mb-4">
          Bespoke joinery, made in Exeter
        </h2>
        <p className="text-[16px] leading-[1.7] text-body mb-4">
          Everything on this page is designed, cut and finished in our own
          workshop at Clyst St. Mary, just outside Exeter. We have been doing it
          for over 25 years, which means most of what we make has been made
          before, in a different timber, to a different size, for a house with
          its own quirks. Bespoke does not have to mean experimental.
        </p>
        <p className="text-[16px] leading-[1.7] text-body mb-4">
          We work across Devon and the wider South West, on everything from a
          single replacement sash window in a Grade II cottage to a full
          staircase, reception fit-out or run of fitted wardrobes. Most projects
          start the same way: a conversation, a survey, a drawing, then a fixed
          price before anything is cut.
        </p>
        <h2 className="text-[26px] md:text-[32px] font-bold text-ink mb-4 mt-8">
          Timber, finishes and accreditations
        </h2>
        <p className="text-[16px] leading-[1.7] text-body">
          We are trained users of Accoya, members of the British Woodworking
          Federation and SSIP accredited, and we work in oak, Accoya, iroko,
          sapele and painted softwood depending on what the job and the weather
          ask for. Coastal Devon is hard on external joinery, and the right
          timber choice matters more here than it does inland.
        </p>
      </section>
    </PageShell>
  );
}
