"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services, serviceHref } from "@/lib/services";
import { ChevronDownIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const trailingLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const sortedServices = [...services].sort((a, b) =>
  a.title.localeCompare(b.title),
);

type Props = {
  transparent?: boolean;
};

export function SiteHeader({ transparent = false }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const isOverlaying = transparent && !scrolled;

  const positionClasses = transparent
    ? "fixed top-0 left-0 right-0"
    : "sticky top-0";
  const bgClasses = isOverlaying
    ? "bg-transparent"
    : "bg-maroon shadow-[0_2px_10px_rgba(0,0,0,.15)]";
  const paddingY = isOverlaying ? "py-[18px]" : "py-3";

  return (
    <header
      className={`w-full ${positionClasses} z-40 ${bgClasses} transition-colors duration-300`}
    >
      <div
        className={`mx-auto flex max-w-nav items-center justify-between px-6 md:px-[46px] ${paddingY} transition-[padding] duration-300`}
      >
        <Logo className="text-white" />

        <nav className="hidden md:flex items-center gap-[30px] text-white text-[15px] font-medium">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-80">
              {l.label}
            </Link>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-[5px] cursor-pointer hover:opacity-80">
              Expertise
              <ChevronDownIcon className="w-[14px] h-[14px] transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[14px] z-50 hidden group-hover:block">
              <div className="bg-white min-w-[210px] shadow-menu border border-borderCream py-1">
                {sortedServices.map((s, i) => (
                  <Link
                    key={s.slug}
                    href={serviceHref(s.slug)}
                    className={`block px-[18px] py-[11px] text-[15px] font-medium text-ink whitespace-nowrap hover:bg-[#f4efe2] hover:text-maroon ${
                      i < sortedServices.length - 1
                        ? "border-b border-borderCream2"
                        : ""
                    }`}
                  >
                    {s.navLabel ?? s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {trailingLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-80">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/free-estimate"
            className="bg-transparent text-white border border-white hover:bg-white hover:text-maroon text-[15px] font-semibold btn-lift px-[22px] py-[11px]"
          >
            Free Estimate
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/free-estimate"
            className="bg-transparent text-white border border-white hover:bg-white hover:text-maroon text-[13px] font-semibold btn-lift px-3 py-1.5"
          >
            Free Estimate
          </Link>
          <button
            className="text-white p-2 -mr-2"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              {mobileOpen ? (
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
              ) : (
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-maroon border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-3 text-white text-[16px] font-medium">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <details className="group">
              <summary className="flex items-center gap-1 cursor-pointer list-none">
                Expertise
                <ChevronDownIcon className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-3 pt-2 flex flex-col gap-2 text-white/85">
                {sortedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={serviceHref(s.slug)}
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.navLabel ?? s.title}
                  </Link>
                ))}
              </div>
            </details>
            {trailingLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-estimate"
              onClick={() => setMobileOpen(false)}
              className="bg-transparent text-white border border-white hover:bg-white hover:text-maroon text-[15px] font-semibold btn-lift px-[22px] py-[11px] inline-block w-fit mt-2"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
