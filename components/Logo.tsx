import Link from "next/link";

export function Logo({ className = "text-white" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="text-[30px] font-extrabold tracking-[-1px] leading-none">
        dj
      </span>
      <span className="text-[13px] font-semibold leading-[1.05] tracking-[0.5px]">
        devon
        <br />
        joinery
      </span>
    </Link>
  );
}
