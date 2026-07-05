import Image from "next/image";
import { accreditations } from "@/lib/site";

export function AccreditationsGrid() {
  return (
    <section className="max-w-content mx-auto px-6 pt-14 pb-16 text-center">
      <h2 className="text-[28px] md:text-[32px] font-bold text-ink mb-8">
        Accreditations &amp; Memberships
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {accreditations.map((a) => (
          <div
            key={a.id}
            className="bg-white border border-[#ececec] p-5 flex flex-col items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,.04)]"
          >
            <div className="relative w-[150px] h-[150px]">
              <Image
                src={a.logo}
                alt={a.label}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <div className="text-[11px] text-[#6a727c] leading-[1.3]">
              {a.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
