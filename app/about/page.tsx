import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { AccreditationsGrid } from "@/components/AccreditationsGrid";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TanBand } from "@/components/TanBand";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        title="About Us"
        size="md"
        intro="For over 25 years, Devon Joinery has been proudly crafting exceptional bespoke joinery across Devon and the South West."
      />

      <section className="max-w-content mx-auto px-6">
        <ImagePlaceholder label="Reception / cabinetry photo" ratio="1.55 / 1" />
      </section>

      <section className="max-w-content mx-auto px-6 pt-14 pb-6 grid md:grid-cols-2 gap-10 md:gap-14">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.15] text-ink mb-5">
            Where Tradition Meets Excellence
          </h2>
          <p className="text-[15px] leading-[1.75] text-bodyMuted mb-4">
            At Devon Joinery, we believe that quality joinery is an investment
            in your property&apos;s future. Our team of skilled craftsmen
            brings decades of combined experience to every project, whether
            it&apos;s a handcrafted staircase, a bespoke kitchen, or intricate
            architectural joinery. We work with carefully selected timbers and
            premium materials, employing time-honoured techniques alongside
            modern manufacturing technology to ensure precision, durability,
            and beauty in every piece we create.
          </p>
          <p className="text-[15px] leading-[1.75] text-bodyMuted mb-7">
            From initial consultation and design through to manufacture and
            installation, we&apos;re with you every step of the way. We pride
            ourselves on our attention to detail, clear communication, and
            commitment to delivering exceptional results that exceed
            expectations.
          </p>
          <Link
            href="/free-estimate"
            className="inline-block bg-maroon-button text-white text-[13px] font-semibold px-6 py-3"
          >
            Get In Touch
          </Link>
        </div>
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.15] text-ink mb-5">
            Our Approach
          </h2>
          <p className="text-[15px] leading-[1.75] text-bodyMuted mb-4">
            We understand that every project is unique. That&apos;s why we take
            the time to listen to your requirements, assess your space, and
            provide expert guidance on design, materials, and finishes. Whether
            you&apos;re restoring a period property or creating a contemporary
            masterpiece, our focus remains the same: outstanding craftsmanship,
            superior materials, and a finished product that stands the test of
            time.
          </p>
          <p className="text-[15px] leading-[1.75] text-bodyMuted mb-7">
            Our workshop is equipped with state-of-the-art machinery and
            traditional hand tools, allowing us to tackle projects of any scale
            and complexity. We&apos;re proud members of leading industry bodies
            and continually invest in training and development to ensure we
            remain at the forefront of our craft.
          </p>
          <Link
            href="/free-estimate"
            className="inline-block bg-maroon-button text-white text-[13px] font-semibold px-6 py-3"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <AccreditationsGrid />

      <TanBand heading="Meet the Devon Joinery team..." variant="plain">
        <div className="max-w-[560px] mx-auto">
          <ImagePlaceholder label="Team photo" ratio="1.55 / 1" />
        </div>
      </TanBand>

      <ExpertiseGrid withIntro />
    </PageShell>
  );
}
