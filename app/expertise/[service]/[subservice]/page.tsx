import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRightIcon } from "@/components/Icons";
import {
  getSubService,
  listSubServiceParams,
  type RichParagraph,
} from "@/lib/subservice-content";

type Params = { service: string; subservice: string };

export function generateStaticParams() {
  return listSubServiceParams();
}

export function generateMetadata({ params }: { params: Params }) {
  const content = getSubService(params.service, params.subservice);
  if (!content) return {};
  const ogImage = content.heroImage?.src;
  const url = `/expertise/${content.parentSlug}/${content.slug}`;
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url,
      type: "article",
      siteName: "Devon Joinery",
      locale: "en_GB",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: content.heroImage!.alt,
              },
            ],
          }
        : {}),
    },
  };
}

function renderParagraph(nodes: RichParagraph) {
  return nodes.map((node, i) =>
    typeof node === "string" ? (
      node
    ) : (
      <Link
        key={i}
        href={node.href}
        className="text-maroon font-semibold underline"
      >
        {node.text}
      </Link>
    ),
  );
}

export default function SubServicePage({ params }: { params: Params }) {
  const content = getSubService(params.service, params.subservice);
  if (!content) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: content.parentLabel, href: `/expertise/${content.parentSlug}` },
    {
      name: content.h1,
      href: `/expertise/${content.parentSlug}/${content.slug}`,
    },
  ];

  return (
    <PageShell>
      <Breadcrumbs items={breadcrumbs} />
      <PageHeader
        title={content.h1}
        intro={content.intro}
        cta={{ label: "Free Estimate", href: "/free-estimate" }}
        size="md"
      />

      {content.heroImage && (
        <section className="max-w-content mx-auto px-6 pb-4">
          <ImagePlaceholder
            label={`${content.h1} — hero image`}
            ratio="1.9 / 1"
            src={content.heroImage.src}
            alt={content.heroImage.alt}
          />
        </section>
      )}

      <article className="max-w-article mx-auto px-6 pt-6 pb-16 text-body">
        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          {content.sections.map((section, si) => (
            <section key={si}>
              <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4 mb-4">
                {section.h2}
              </h2>
              <div className="space-y-5">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi}>{renderParagraph(p)}</p>
                ))}
              </div>
              {section.image && (
                <ImagePlaceholder
                  label={`${content.h1} — ${section.h2}`}
                  ratio="1.9 / 1"
                  className="mt-8"
                  src={section.image.src}
                  alt={section.image.alt}
                />
              )}
            </section>
          ))}

          <div className="pt-6">
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3"
            >
              Request a Free Estimate <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      <ExpertiseGrid withIntro />
    </PageShell>
  );
}
