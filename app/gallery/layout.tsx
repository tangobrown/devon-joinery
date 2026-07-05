import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Gallery | Bespoke Joinery Portfolio in Exeter, Devon",
  description:
    "A gallery of bespoke joinery handcrafted by Devon Joinery — balustrades, gates, doors, windows, staircases, wardrobes, media units and reception counters. Filter by service.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
