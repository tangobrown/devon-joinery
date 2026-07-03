import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  label?: string;
  className?: string;
  ratio?: string;
  children?: ReactNode;
  fill?: boolean;
  src?: string;
  alt?: string;
};

/**
 * Renders a real photo when `src` is provided, otherwise a neutral
 * cream tile with a descriptive label so unfilled slots are obvious
 * during content-loading.
 */
export function ImagePlaceholder({
  label = "Image",
  className = "",
  ratio,
  fill = false,
  children,
  src,
  alt,
}: Props) {
  const altText = alt ?? label;

  if (fill) {
    if (src) {
      return (
        <Image
          src={src}
          alt={altText}
          fill
          className={`object-cover ${className}`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      );
    }
    return (
      <div
        className={`absolute inset-0 w-full h-full bg-[#d8d3c4] flex items-center justify-center text-[#6a727c] text-[13px] font-medium text-center px-4 ${className}`}
      >
        {children ?? label}
      </div>
    );
  }

  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        <Image
          src={src}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full bg-[#d8d3c4] flex items-center justify-center text-[#6a727c] text-[13px] font-medium text-center px-4 ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {children ?? label}
    </div>
  );
}
