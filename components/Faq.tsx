import { ChevronDownIcon } from "@/components/Icons";

export type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

export function Faq({ items }: Props) {
  return (
    <div className="max-w-band mx-auto flex flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group bg-white border border-borderCream open:shadow-card"
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-[15px] font-semibold text-ink">
            <span>{item.q}</span>
            <ChevronDownIcon className="w-4 h-4 text-maroon transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
          </summary>
          <div className="px-5 pb-[18px] text-[14.5px] leading-[1.7] text-bodyMuted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
