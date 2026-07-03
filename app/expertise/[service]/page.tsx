import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { ServiceGallery } from "@/components/ServiceGallery";
import { ServicePanelSection } from "@/components/ServicePanelContent";
import { TanBand } from "@/components/TanBand";
import { Faq } from "@/components/Faq";
import { ReviewBadge } from "@/components/ReviewBadge";
import { listServiceSlugs, serviceContent } from "@/lib/service-content";

type Params = { service: string };

export function generateStaticParams() {
  return listServiceSlugs().map((service) => ({ service }));
}

export function generateMetadata({ params }: { params: Params }) {
  const c = serviceContent[params.service];
  if (!c) return {};
  return { title: c.h1 };
}

export default function ServicePage({ params }: { params: Params }) {
  const content = serviceContent[params.service];
  if (!content) notFound();

  return (
    <PageShell>
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
              className="inline-block bg-maroon-button text-white text-[13px] font-semibold px-6 py-3"
            >
              Free Estimate
            </Link>
          </div>
        </section>
      )}

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
