import Link from "next/link";
import { EmailIcon, ListIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export function ContactStrip() {
  return (
    <section className="bg-night">
      <div className="mx-auto max-w-content px-6">
        <div className="bg-maroon-deep grid grid-cols-1 sm:grid-cols-3 gap-2.5 px-6 py-[26px] text-center text-white rounded-b-lg">
          <a
            href={site.emailHref}
            className="flex flex-col items-center gap-[9px] text-[14px] md:text-[16px] hover:opacity-90 break-words"
          >
            <EmailIcon className="w-[26px] h-[26px]" />
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="flex flex-col items-center gap-[9px] text-[14px] md:text-[16px] hover:opacity-90 sm:border-x sm:border-white/[.14]"
          >
            <PhoneIcon className="w-[26px] h-[26px]" />
            {site.phone}
          </a>
          <Link
            href="/free-estimate"
            className="flex flex-col items-center gap-[9px] text-[14px] md:text-[16px] hover:opacity-90"
          >
            <ListIcon className="w-[26px] h-[26px]" />
            Free Estimate Form
          </Link>
        </div>
      </div>
    </section>
  );
}
