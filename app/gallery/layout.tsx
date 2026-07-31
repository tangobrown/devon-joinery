import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Joinery Portfolio in Exeter",
  description:
    "Browse bespoke joinery handcrafted in our Exeter workshop — balustrades, gates, doors, windows, staircases, wardrobes and media units. Filter by service.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
