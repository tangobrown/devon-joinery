import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { ServiceGallery } from "@/components/ServiceGallery";
import { ServicePanelSection } from "@/components/ServicePanelContent";
import { TanBand } from "@/components/TanBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubServiceLinks } from "@/components/SubServiceLinks";
import { RelatedReading } from "@/components/RelatedReading";
import { listServiceSlugs, serviceContent } from "@/lib/service-content";
import { SITE_URL } from "@/lib/site";

type Params = { service: string };

export function generateStaticParams() {
  return listServiceSlugs().map((service) => ({ service }));
}

export function generateMetadata({ params }: { params: Params }) {
  const c = serviceContent[params.service];
  if (!c) return {};
  const ogImage = c.topGalleryImages?.[0];
  return {
    title: c.metaTitle ?? c.h1,
    description: c.metaDescription,
    alternates: { canonical: `/expertise/${c.slug}` },
    openGraph: {
      title: c.metaTitle ?? c.h1,
      description: c.metaDescription,
      url: `/expertise/${c.slug}`,
      type: "website",
      siteName: "Devon Joinery",
      locale: "en_GB",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: c.h1,
              },
            ],
          }
        : {}),
    },
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const content = serviceContent[params.service];
  if (!content) notFound();

  const shortName = content.h1.replace(/^Bespoke\s+/i, "");

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: shortName, href: `/expertise/${content.slug}` },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    // Sub-service pages reference this @id via `isPartOf`, so it must stay
    // in step with the URL shape used there.
    "@id": `${SITE_URL}/expertise/${content.slug}`,
    name: content.h1,
    ...(content.metaDescription
      ? { description: content.metaDescription }
      : {}),
    serviceType: shortName,
    url: `${SITE_URL}/expertise/${content.slug}`,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Devon" },
      { "@type": "City", name: "Exeter" },
      { "@type": "City", name: "Exmouth" },
      { "@type": "City", name: "Sidmouth" },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHeader
        title={content.h1}
        intro={content.intro}
        cta={
          content.showHeaderCta
            ? { label: "Free Estimate", href: "/free-estimate" }
            : undefined
        }
      />

      <ServiceGallery
        serviceTitle={content.h1.replace(/^Bespoke\s+/i, "")}
        images={content.topGalleryImages}
      />

      {content.panels.map((p, i) => (
        <ServicePanelSection key={i} panel={p} />
      ))}

      {content.subServices?.length ? (
        <SubServiceLinks
          heading={`${shortName.replace(/\s+in\s+.+$/i, "")} we make`}
          items={content.subServices}
        />
      ) : null}

      {content.relatedReading?.length ? (
        <RelatedReading heading="Related reading" items={content.relatedReading} />
      ) : null}

      {content.tanBand && (
        <TanBand heading={content.tanBand.heading} cta={content.tanBand.cta}>
          {content.tanBand.body}
        </TanBand>
      )}

      {content.extraPanels?.map((p, i) => (
        <ServicePanelSection key={`extra-${i}`} panel={p} />
      ))}

      <ExpertiseGrid withIntro />
    </PageShell>
  );
}
