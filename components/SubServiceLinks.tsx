import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export type SubServiceLink = { label: string; href?: string; blurb: string };

/**
 * Server-rendered link block from a service (parent) page down to its
 * sub-service (child) pages, so the children are crawlable and inherit link
 * equity. Matches the ServiceCard / ExpertiseGrid visual language.
 */
export function SubServiceLinks({
  heading,
  items,
}: {
  heading: string;
  items: SubServiceLink[];
}) {
  return (
    <section className="bg-creamHome px-6 py-14">
      <div className="max-w-content mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-bold text-ink text-center mb-8">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) =>
            item.href ? (
              <Link
                key={item.href}
                href={item.href}
                className="group block bg-white border border-borderCream p-6 transition-shadow hover:shadow-card"
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
                  Learn more
                </span>
              </Link>
            ) : (
              <div
                key={item.label}
                className="bg-white border border-borderCream p-6"
              >
                <h3 className="text-[18px] font-bold text-ink leading-[1.3] mb-2">
                  {item.label}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-bodyMuted">
                  {item.blurb}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
