import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { AccreditationsGrid } from "@/components/AccreditationsGrid";
import { ReviewBadge } from "@/components/ReviewBadge";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { HeroSlideshow } from "@/components/HeroSlideshow";

export const metadata: Metadata = {
  title: {
    absolute:
      "Devon Joinery | Bespoke Doors, Windows & Staircases in Exeter",
  },
  description:
    "Family-run bespoke joinery workshop in Exeter. Over 25 years crafting doors, windows, staircases, balustrades, gates, wardrobes, media units and reception counters across Devon.",
  alternates: { canonical: "/" },
};

const HERO_SLIDES = [
  "/images/hero/slide---reception-unit.jpg",
  "/images/hero/slide---stairs.jpg",
  "/images/hero/slide---storage-unit.jpg",
  "/images/hero/slide-storage.jpg",
  "/images/hero/slide-windows.jpg",
  "/images/hero/windows-and-stairs.jpg",
];

export default function HomePage() {
  return (
    <>
      <section className="relative w-full min-h-[660px] flex flex-col overflow-hidden">
        <HeroSlideshow images={HERO_SLIDES} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(15,17,20,0.78) 0%,rgba(15,17,20,0.55) 40%,rgba(15,17,20,0.78) 100%)",
          }}
        />

        <SiteHeader transparent />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-5 pt-36 md:pt-52 pb-16 md:pb-20 text-white">
          <div className="mb-5">
            <span className="text-[13px] md:text-[14px] font-medium tracking-[1px] uppercase">
              Carpentry &amp; Bespoke Joinery in Devon
            </span>
          </div>
          <h1 className="text-[50px] sm:text-[64px] md:text-[82px] font-semibold leading-[1.02] tracking-[-1.5px] mb-5">
            Timeless Techniques,
            <br />
            Flawless Finishes.
          </h1>
          <p className="max-w-[520px] text-[16px] md:text-[20px] leading-[1.6] text-white/90 mb-7">
            At Devon Joinery, family tradition meets modern skill to craft
            exquisite joinery in Exeter and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="#expertise"
              className="bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3.5"
            >
              Our Expertise
            </Link>
            <Link
              href="/free-estimate"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-maroon text-[15px] font-semibold btn-lift px-6 py-3.5"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <main className="bg-creamHome">
        <section className="max-w-article mx-auto px-6 pt-14 pb-2 text-center">
          <div className="mb-8 flex justify-center">
            <ReviewBadge />
          </div>
          <p className="text-[19px] md:text-[21px] font-semibold leading-[1.55] text-[#2b333c]">
            Devon Joinery crafts bespoke kitchens, fitted wardrobes, windows,
            doors, and architectural joinery. Discover how we can transform
            your entire space with the same dedication to quality and
            craftsmanship.
          </p>
        </section>

        <ExpertiseGrid id="expertise" />

        <section className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <ImagePlaceholder
            label="Workshop / cabinetry photo"
            ratio="1 / 1"
            src="/images/staircases/new-home-staircase.jpg"
            alt="Bespoke staircase in a new home by Devon Joinery"
          />
          <div>
            <h2 className="text-[30px] md:text-[40px] font-bold leading-[1.15] text-ink mb-5">
              Passion, Precision, Family &amp; History at Devon Joinery
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-bodyMuted mb-7">
              It all began 25 years ago in a humble Exeter garage, where a
              passionate carpenter and his business partner set out with a
              simple but powerful vision: to craft beautiful, bespoke joinery
              that stands the test of time. From those early days, surrounded
              by tools and timber, Devon Joinery was born.
            </p>
            <Link
              href="/about"
              className="inline-block bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3"
            >
              More About Us
            </Link>
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] text-ink mb-5">
              Meet the Family Behind Devon Joinery
            </h2>
            <p className="text-[15px] leading-[1.75] text-bodyMuted mb-7">
              Rooted in Exeter and the West Country, our team combines
              traditional joinery techniques with modern precision, ensuring
              every piece of joinery is made to perfection and built to last.
              Our passion extends beyond timber, we strive to make each project
              reflect the client&apos;s vision while upholding the rich
              heritage of craftsmanship that defines Devon Joinery.
            </p>
            <Link
              href="/about"
              className="inline-block bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3"
            >
              More About Us
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <ImagePlaceholder
              label="Bespoke storage unit"
              ratio="1 / 0.92"
              src="/images/wardrobes-and-storage/bespoke-storage-unit.jpg"
              alt="Bespoke storage unit by Devon Joinery"
            />
          </div>
        </section>

        <AccreditationsGrid />
      </main>

      <EstimateCTA />
      <ContactStrip />
      <SiteFooter />
    </>
  );
}
