import Link from "next/link";
import { ReactNode } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Props = {
  heading: string;
  imagePosition?: "left" | "right";
  imageLabel?: string;
  imageSrc?: string;
  cta?: { label: string; href: string };
  children: ReactNode;
  imageRatio?: string;
};

export function MaroonPanel({
  heading,
  imagePosition = "left",
  imageLabel = "Photo",
  imageSrc,
  cta,
  children,
  imageRatio = "1 / 1",
}: Props) {
  const image = (
    <ImagePlaceholder
      label={imageLabel}
      ratio={imageRatio}
      src={imageSrc}
      alt={imageLabel}
    />
  );

  const card = (
    <div className="bg-maroon text-white px-8 md:px-11 pt-11 pb-10 flex flex-col justify-center">
      <h2 className="text-[30px] md:text-[40px] font-bold mb-5 leading-tight">
        {heading}
      </h2>
      <div className="text-[14.5px] md:text-[15px] leading-[1.7] text-white/90 space-y-4">
        {children}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="inline-block bg-white text-maroon text-[15px] font-semibold btn-lift px-6 py-3 mt-7 w-fit"
        >
          {cta.label}
        </Link>
      )}
    </div>
  );

  return (
    <section className="max-w-content mx-auto px-6 py-10 md:py-12">
      <div className="grid md:grid-cols-2 items-stretch">
        {imagePosition === "left" ? (
          <>
            {image}
            {card}
          </>
        ) : (
          <>
            {card}
            {image}
          </>
        )}
      </div>
    </section>
  );
}

/**
 * Render `**bold**` runs in body copy. Plain text otherwise.
 */
export function renderBoldMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
