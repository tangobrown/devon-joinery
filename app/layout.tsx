import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Devon Joinery — Bespoke Joinery in Exeter, Devon",
    template: "%s — Devon Joinery",
  },
  description:
    "Devon Joinery crafts bespoke kitchens, fitted wardrobes, windows, doors, balustrades, gates and architectural joinery from our family-run workshop in Exeter.",
  metadataBase: new URL("https://devonjoinery.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="font-sans bg-creamHome text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
