import { ReactNode } from "react";

type Props = {
  label?: string;
  className?: string;
  ratio?: string;
  children?: ReactNode;
  fill?: boolean;
};

/**
 * Placeholder for photography not yet supplied. Renders a neutral cream
 * tile with the label centered. Swap for <Image /> when assets arrive.
 */
export function ImagePlaceholder({
  label = "Image",
  className = "",
  ratio,
  fill = false,
  children,
}: Props) {
  if (fill) {
    return (
      <div
        className={`absolute inset-0 w-full h-full bg-[#d8d3c4] flex items-center justify-center text-[#6a727c] text-[13px] font-medium text-center px-4 ${className}`}
      >
        {children ?? label}
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
