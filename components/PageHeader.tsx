import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  intro?: ReactNode;
  cta?: { label: string; href: string };
  size?: "sm" | "md" | "lg";
};

export function PageHeader({ title, intro, cta, size = "lg" }: Props) {
  const titleSize =
    size === "lg"
      ? "text-[38px] md:text-[56px]"
      : size === "md"
        ? "text-[36px] md:text-[46px]"
        : "text-[30px] md:text-[40px]";

  const introClass =
    size === "lg"
      ? "text-[16px] md:text-[18px] font-semibold text-body leading-[1.65]"
      : "text-[16px] md:text-[17px] text-body leading-[1.6]";

  return (
    <section className="max-w-article mx-auto px-6 pt-12 md:pt-16 pb-10 text-center">
      <h1
        className={`${titleSize} font-bold tracking-[-1px] text-ink mb-3.5 leading-[1.1]`}
      >
        {title}
      </h1>
      {intro && (
        <div className={`${introClass} max-w-[640px] mx-auto`}>{intro}</div>
      )}
      {cta && (
        <div className="mt-6">
          <Link
            href={cta.href}
            className="inline-block bg-maroon-button text-white text-[15px] font-semibold px-6 py-3"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </section>
  );
}
