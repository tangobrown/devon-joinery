import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bespoke Joiners in Exeter, Devon",
  description:
    "Get in touch with Devon Joinery in Exeter. Phone 01395 239 049, email info@devonjoinery.co.uk, or send a message via our contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
