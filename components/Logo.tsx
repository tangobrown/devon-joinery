import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  height?: number;
};

export function Logo({ className = "", height = 46 }: Props) {
  const width = Math.round(height * (652 / 319));
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Devon Joinery — home"
    >
      <Image
        src="/images/logo.png"
        alt="Devon Joinery"
        width={width}
        height={height}
        priority
        className="h-[46px] w-auto block"
      />
    </Link>
  );
}
