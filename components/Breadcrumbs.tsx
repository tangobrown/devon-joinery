import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; href: string };

/**
 * Renders a visible breadcrumb trail and the matching BreadcrumbList JSON-LD
 * from a single list of crumbs, so the two never drift apart. The last crumb is
 * the current page and is not linked. Structured-data `item` URLs are absolute,
 * built from SITE_URL, so they track the canonical host automatically.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-6 pt-6">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-bodyMuted">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink font-medium">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-maroon hover:underline">
                  {crumb.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-bodyMuted/50">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
