import Link from "next/link";
import { services, serviceHref } from "@/lib/services";
import { footerMoreLinks, site } from "@/lib/site";

const footerServiceOrder = [
  "balustrades",
  "receptions",
  "doors",
  "staircases",
  "gates",
  "wardrobes-and-storage",
  "media-units",
  "windows",
];

export function SiteFooter() {
  const orderedServices = footerServiceOrder
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <footer className="bg-night text-white px-6 pt-14 pb-10">
      <div className="mx-auto max-w-content grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px]">
        <div>
          <h3 className="text-[22px] font-bold mb-[22px]">Our Expertise</h3>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-10 text-[13px] text-footerText">
            {orderedServices.map((s) => (
              <Link
                key={s.slug}
                href={serviceHref(s.slug)}
                className="underline hover:text-white"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[22px] font-bold mb-[22px]">More Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            <div className="text-[13px] text-footerText leading-[1.7]">
              <div className="font-semibold text-white mb-1.5">Find Us:</div>
              {site.address.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
            <div className="flex flex-col gap-[9px] text-[13px] text-footerText">
              {footerMoreLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="underline hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-content mt-11 pt-[22px] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-footerLegal">
        <span>© Copyright 2025 – Devon Joinery Ltd</span>
        <span>
          Crafted by{" "}
          <a
            href="https://tangobrown.com"
            target="_blank"
            rel="noreferrer noopener"
            className="underline text-footerText"
          >
            Tango Brown
          </a>
        </span>
      </div>
    </footer>
  );
}
