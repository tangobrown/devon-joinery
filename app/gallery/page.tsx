"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";
import { PageHeader } from "@/components/PageHeader";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const CATEGORIES = [
  "All",
  "Balustrades",
  "Gates",
  "Doors",
  "Receptions",
  "Windows",
  "Wardrobes & Storage",
  "Media Units",
  "Staircases",
] as const;

type Category = (typeof CATEGORIES)[number];

type Item = { id: string; cat: Exclude<Category, "All">; placeholder: string };

const ITEMS: Item[] = CATEGORIES.filter((c) => c !== "All").flatMap((cat) =>
  [1, 2].map((n) => ({
    id: `${cat.toLowerCase().replace(/[^a-z]+/g, "-")}-${n}`,
    cat: cat as Exclude<Category, "All">,
    placeholder: `${cat} photo ${n}`,
  })),
);

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = useMemo(
    () => (filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter)),
    [filter],
  );

  return (
    <>
      <SiteHeader />
      <main className="bg-creamHome">
        <PageHeader
          title="Work Gallery"
          size="md"
          intro="A selection of bespoke joinery handcrafted in our Exeter workshop. Filter by service to explore our work."
        />

        <section className="max-w-gallery mx-auto px-6 pb-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={
                    "px-[18px] py-[9px] text-[13px] font-semibold border transition-colors " +
                    (active
                      ? "bg-maroon text-white border-maroon"
                      : "bg-white text-body border-[#d8d3c4] hover:border-maroon hover:text-maroon")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        <section className="max-w-gallery mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {visible.map((item) => (
              <div key={item.id} className="relative">
                <ImagePlaceholder ratio="1 / 1" label={item.placeholder} />
                <span className="absolute left-2.5 bottom-2.5 bg-maroon/[.92] text-white text-[10px] md:text-[11px] font-semibold px-2.5 py-1.5">
                  {item.cat}
                </span>
              </div>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="text-center text-body py-16">
              No items yet for {filter}.
            </p>
          )}
        </section>
      </main>
      <EstimateCTA />
      <ContactStrip />
      <SiteFooter />
    </>
  );
}
