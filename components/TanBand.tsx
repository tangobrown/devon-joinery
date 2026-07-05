import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  heading?: string;
  children?: ReactNode;
  cta?: { label: string; href: string };
  variant?: "card" | "plain";
};

export function TanBand({
  heading = "We'd love to hear from you...",
  children,
  cta,
  variant = "card",
}: Props) {
  return (
    <section className="bg-tan px-6 py-14">
      {variant === "card" ? (
        <div className="max-w-band mx-auto bg-white text-center px-6 md:px-10 py-11">
          <h2 className="text-[30px] md:text-[40px] font-bold text-ink mb-4">
            {heading}
          </h2>
          {children && (
            <div className="text-[15px] md:text-[16px] leading-[1.7] text-bodyMuted max-w-[560px] mx-auto">
              {children}
            </div>
          )}
          {cta && (
            <div className="mt-7">
              <Link
                href={cta.href}
                className="inline-block bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3"
              >
                {cta.label}
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-band mx-auto text-center">
          {heading && (
            <h2 className="text-[30px] md:text-[40px] font-bold text-ink mb-8">
              {heading}
            </h2>
          )}
          {children}
        </div>
      )}
    </section>
  );
}
