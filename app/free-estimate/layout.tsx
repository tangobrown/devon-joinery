import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Estimate | Bespoke Joinery Quote — Exeter, Devon",
  description:
    "Request a free, no-obligation estimate for bespoke joinery in Devon. Doors, windows, staircases, balustrades, gates, wardrobes and more, made in Exeter.",
  alternates: { canonical: "/free-estimate" },
};

export default function FreeEstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
