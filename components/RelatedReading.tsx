import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export type RelatedReadingItem = {
  label: string;
  href: string;
  blurb: string;
};

/**
 * Server-rendered link block from a service (parent) page out to the blog
 * articles that support it, so articles are not left as near-orphans reachable
 * only from the blog index. Deliberately mirrors SubServiceLinks, which does
 * the same job for child service pages — same shape, same visual language,
 * different edge of the link graph.
 *
 * Unlike `tanBand` (one promotional band per service, already used on Windows
 * to point at the sash-vs-casement guide) this takes a list, so a category can
 * accumulate articles without any component change.
 */
export function RelatedReading({
  heading,
  items,
}: {
  heading: string;
  items: RelatedReadingItem[];
}) {
  return (
    <section className="bg-white px-6 py-14">
      <div className="max-w-content mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-bold text-ink text-center mb-8">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-creamHome border border-borderCream p-6 transition-shadow hover:shadow-card"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-[18px] font-bold text-ink leading-[1.3]">
                  {item.label}
                </h3>
                <ArrowRightIcon className="w-4 h-4 text-maroon flex-shrink-0" />
              </div>
              <p className="text-[14.5px] leading-[1.6] text-bodyMuted">
                {item.blurb}
              </p>
              <span className="mt-3 inline-block text-maroon text-[13px] font-semibold group-hover:underline">
                Read the guide
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
