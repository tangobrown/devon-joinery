"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";
import { PageHeader } from "@/components/PageHeader";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Lightbox } from "@/components/Lightbox";

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
type Cat = Exclude<Category, "All">;

type Item = { src: string; cat: Cat };

const ITEMS: Item[] = [
  // Balustrades
  { cat: "Balustrades", src: "/images/balustrades/black-external-ballustrades.jpg" },
  { cat: "Balustrades", src: "/images/balustrades/external-ballustrades.jpg" },
  { cat: "Balustrades", src: "/images/balustrades/new-home-staircase.jpg" },
  { cat: "Balustrades", src: "/images/balustrades/staircase-with-wooden-ballustrades.jpg" },
  { cat: "Balustrades", src: "/images/balustrades/wooden-staircase-with-steel-ballustrades.jpg" },
  { cat: "Balustrades", src: "/images/balustrades/wooden-staircase-with-wooden-ballustrades.jpg" },

  // Gates
  { cat: "Gates", src: "/images/gates/bespoke-gates-for-driveway.jpg" },
  { cat: "Gates", src: "/images/gates/driveway-gates.jpg" },
  { cat: "Gates", src: "/images/gates/driveway-gates-full.jpg" },
  { cat: "Gates", src: "/images/gates/entry-exit-gates.jpg" },
  { cat: "Gates", src: "/images/gates/external-storage-gates.jpg" },

  // Doors
  { cat: "Doors", src: "/images/doors/black-front-door-in-stone-building.jpg" },
  { cat: "Doors", src: "/images/doors/black-front-door.jpg" },
  { cat: "Doors", src: "/images/doors/grand-timber-front-door.jpg" },
  { cat: "Doors", src: "/images/doors/interior-doors.jpg" },
  { cat: "Doors", src: "/images/doors/off-white-stable-door.jpg" },
  { cat: "Doors", src: "/images/doors/out-building-doors.jpg" },
  { cat: "Doors", src: "/images/doors/sliding-doors.jpg" },
  { cat: "Doors", src: "/images/doors/timber-bi-folding-doors.jpg" },
  { cat: "Doors", src: "/images/doors/timber-external-door.jpg" },
  { cat: "Doors", src: "/images/doors/timber-front-door.jpg" },
  { cat: "Doors", src: "/images/doors/timber-stained-french-doors.jpg" },
  { cat: "Doors", src: "/images/doors/white-bi-fold-doors.jpg" },
  { cat: "Doors", src: "/images/doors/white-franch-doors.jpg" },
  { cat: "Doors", src: "/images/doors/white-french-doors-in-brick-building.jpg" },
  { cat: "Doors", src: "/images/doors/white-stable-door.jpg" },

  // Receptions
  { cat: "Receptions", src: "/images/receptions/reception--counter-for-yoshe.jpg" },
  { cat: "Receptions", src: "/images/receptions/reception---counter-for-food.jpg" },
  { cat: "Receptions", src: "/images/receptions/reception-counter-for-millies.jpg" },
  { cat: "Receptions", src: "/images/receptions/reception-for-dvcc.jpg" },
  { cat: "Receptions", src: "/images/receptions/reception-front-counter.jpg" },
  { cat: "Receptions", src: "/images/receptions/reception-front-counters-for-library.jpg" },
  { cat: "Receptions", src: "/images/receptions/reception-retail-counters.jpg" },

  // Windows
  { cat: "Windows", src: "/images/windows/bespoke-windows.jpg" },
  { cat: "Windows", src: "/images/windows/home-windows---white-casement.jpg" },
  { cat: "Windows", src: "/images/windows/listed-property-windows.jpg" },
  { cat: "Windows", src: "/images/windows/modern-style-windows.jpg" },
  { cat: "Windows", src: "/images/windows/secondary-glazing.jpg" },
  { cat: "Windows", src: "/images/windows/single-hung-window.jpg" },
  { cat: "Windows", src: "/images/windows/sliding-windows.jpg" },
  { cat: "Windows", src: "/images/windows/white-casement-windows-in-home.jpg" },
  { cat: "Windows", src: "/images/windows/white-single-hung-window.jpg" },
  { cat: "Windows", src: "/images/windows/windows-for-bathrooms.jpg" },

  // Wardrobes & Storage
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/bespoke-cabinets.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/bespoke-storage-for-homes.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/bespoke-storage-unit.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/bespoke-storage.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/bespoke-wardrobes.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/fitted-wardrobes.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/wardrobe-for-homes-2.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/wardrobe-for-homes.jpg" },
  { cat: "Wardrobes & Storage", src: "/images/wardrobes-and-storage/wood-and-glass-storage.jpg" },

  // Media Units
  { cat: "Media Units", src: "/images/media-units/black-tv-cabinet.jpg" },
  { cat: "Media Units", src: "/images/media-units/green-media-unit.jpg" },
  { cat: "Media Units", src: "/images/media-units/large-media-unit.jpg" },
  { cat: "Media Units", src: "/images/media-units/media-unit-in-a-home.jpg" },
  { cat: "Media Units", src: "/images/media-units/wall-to-wall-media-unit.jpg" },
  { cat: "Media Units", src: "/images/media-units/wooden-tv-cabinet.jpg" },

  // Staircases
  { cat: "Staircases", src: "/images/staircases/new-home-staircase.jpg" },
  { cat: "Staircases", src: "/images/staircases/staircase-in-the-process-of-manufacturing.jpg" },
  { cat: "Staircases", src: "/images/staircases/staircase-with-wooden-ballustrades.jpg" },
  { cat: "Staircases", src: "/images/staircases/winding-staircase.jpg" },
  { cat: "Staircases", src: "/images/staircases/wooden-staircase-with-handrail.jpg" },
  { cat: "Staircases", src: "/images/staircases/wooden-staircase-with-steel-ballustrades.jpg" },
  { cat: "Staircases", src: "/images/staircases/wooden-staircase-with-wooden-ballustrades.jpg" },
  { cat: "Staircases", src: "/images/staircases/wooden-staircase.jpg" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter)),
    [filter],
  );
  const visibleSrcs = useMemo(() => visible.map((i) => i.src), [visible]);

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
                    "px-[18px] py-[9px] text-[15px] font-semibold border transition-colors " +
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
            {visible.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                aria-label={`Open ${item.cat} image`}
              >
                <ImagePlaceholder
                  ratio="1 / 1"
                  label={`${item.cat} photo`}
                  src={item.src}
                  alt={item.cat}
                />
                <span className="absolute left-2.5 bottom-2.5 bg-maroon/[.92] text-white text-[11px] md:text-[12px] font-semibold px-2.5 py-1.5">
                  {item.cat}
                </span>
              </button>
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
      {lightboxIndex !== null && visibleSrcs.length > 0 && (
        <Lightbox
          images={visibleSrcs}
          initialIndex={Math.max(
            0,
            Math.min(lightboxIndex, visibleSrcs.length - 1),
          )}
          alt={filter === "All" ? "Devon Joinery gallery" : filter}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
