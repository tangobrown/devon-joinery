import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Devon Joinery — home"
    >
      <Image
        src="/images/logo.png"
        alt="Devon Joinery"
        width={652}
        height={319}
        priority
        sizes="(max-width: 768px) 140px, 180px"
        className="h-[54px] md:h-[58px] w-auto block"
      />
    </Link>
  );
}
