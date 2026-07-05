"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";

export type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

export function Faq({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-band mx-auto flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`bg-white border border-borderCream ${
              isOpen ? "shadow-card" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-ink"
            >
              <span>{item.q}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-maroon transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-[18px] text-[14.5px] leading-[1.7] text-bodyMuted">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
