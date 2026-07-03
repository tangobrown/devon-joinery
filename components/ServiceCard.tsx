import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ArrowUpRightIcon } from "@/components/Icons";
import { serviceHref, type Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative overflow-hidden shadow-card group" style={{ aspectRatio: "1 / 1.28" }}>
      <ImagePlaceholder fill label={`${service.title} photo`} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.72) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-3.5 flex flex-col items-center gap-2.5">
        <div className="text-white font-semibold text-[20px] text-center leading-[1.2]">
          {service.title}
        </div>
        <Link
          href={serviceHref(service.slug)}
          className="flex items-center justify-center gap-2 w-full bg-maroon-button text-white text-[14px] md:text-[15px] font-semibold py-2 hover:brightness-110"
        >
          More Details <ArrowUpRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
