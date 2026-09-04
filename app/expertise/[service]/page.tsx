import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { ServiceGallery } from "@/components/ServiceGallery";
import { ServicePanelSection } from "@/components/ServicePanelContent";
import { TanBand } from "@/components/TanBand";
import { Faq } from "@/components/Faq";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubServiceLinks } from "@/components/SubServiceLinks";
import { ReviewBadge } from "@/components/ReviewBadge";
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

      {content.faq && (
        <section className="bg-tan px-6 py-14">
          <div className="max-w-band mx-auto text-center mb-8">
            {content.faq.showReviewBadge && (
              <div className="mb-6 flex justify-center">
                <ReviewBadge />
              </div>
            )}
            <h2 className="text-[28px] md:text-[36px] font-bold text-ink">
              {content.faq.heading}
            </h2>
          </div>
          <Faq items={content.faq.items} />
          <div className="text-center mt-8">
            <Link
              href="/free-estimate"
              className="inline-block bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3"
            >
              Free Estimate
            </Link>
          </div>
        </section>
      )}

      {content.subServices?.length ? (
        <SubServiceLinks
          heading={`${shortName.replace(/\s+in\s+.+$/i, "")} we make`}
          items={content.subServices}
        />
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
