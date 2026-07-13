import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

const GA_ID = "G-MR4STG9MCN";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-public-sans",
  display: "swap",
});

const SITE_URL = "https://devonjoinery.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devon Joinery — Bespoke Joinery in Exeter, Devon",
    template: "%s — Devon Joinery",
  },
  description:
    "Family-run bespoke joinery workshop in Exeter, Devon. Over 25 years crafting doors, windows, staircases, balustrades, gates, wardrobes and more. Free estimate.",
  keywords: [
    "bespoke joinery Exeter",
    "bespoke joinery Devon",
    "joiners Exeter",
    "bespoke doors Devon",
    "timber windows Devon",
    "bespoke staircases Exeter",
    "wooden balustrades Devon",
    "fitted wardrobes Exeter",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Devon Joinery",
    title: "Devon Joinery — Bespoke Joinery in Exeter, Devon",
    description:
      "Family-run bespoke joinery workshop in Exeter, Devon. Over 25 years crafting doors, windows, staircases, balustrades, gates, wardrobes and more.",
    url: SITE_URL,
    locale: "en_GB",
    images: [
      {
        url: "/images/hero/slide---stairs.jpg",
        width: 1200,
        height: 630,
        alt: "Bespoke joinery by Devon Joinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devon Joinery — Bespoke Joinery in Exeter, Devon",
    description:
      "Family-run bespoke joinery workshop in Exeter, Devon. Doors, windows, staircases, balustrades, gates, wardrobes and more.",
    images: ["/images/hero/slide---stairs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#business`,
  name: site.name,
  description:
    "Family-run bespoke joinery workshop in Exeter, Devon. Doors, windows, staircases, balustrades, gates, wardrobes, media units and reception counters.",
  url: SITE_URL,
  telephone: site.phone,
  email: site.email,
  image: `${SITE_URL}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Clyst Court, Blackmore Rd, Hill Barton Business Park",
    addressLocality: "Clyst St. Mary, Exeter",
    addressRegion: "Devon",
    postalCode: "EX5 1SA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7273,
    longitude: -3.4472,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Devon" },
    { "@type": "City", name: "Exeter" },
    { "@type": "City", name: "Exmouth" },
    { "@type": "City", name: "Sidmouth" },
  ],
  priceRange: "££",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bespoke joinery services",
    itemListElement: [
      "Balustrades",
      "Gates",
      "Doors",
      "Receptions",
      "Windows",
      "Wardrobes & Storage",
      "Media Units",
      "Staircases",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `Bespoke ${service}` },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans bg-creamHome text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
