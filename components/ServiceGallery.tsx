"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Props = {
  serviceTitle: string;
  images?: string[];
};

const GAP_PX = 16;

export function ServiceGallery({ serviceTitle, images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: false, startX: 0, startScroll: 0 });
  const [perPage, setPerPage] = useState(3);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setPerPage(mq.matches ? 3 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = el.clientWidth;
      if (w === 0) return;
      setActivePage(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const slots =
    images && images.length > 0
      ? images
      : [
          `${serviceTitle} photo 1`,
          `${serviceTitle} photo 2`,
          `${serviceTitle} photo 3`,
        ].map(() => null as string | null);

  const totalPages = Math.max(1, Math.ceil(slots.length / perPage));

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    drag.current = {
      down: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down || !scrollRef.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    scrollRef.current.scrollLeft = drag.current.startScroll - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    drag.current.down = false;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const goToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
  };

  const slideWidth = `calc((100% - ${(perPage - 1) * GAP_PX}px) / ${perPage})`;

  return (
    <section className="max-w-content mx-auto px-6 pt-2 pb-8">
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClick={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing select-none touch-pan-y"
        style={{ gap: `${GAP_PX}px` }}
      >
        {slots.map((src, i) => (
          <div
            key={i}
            className="flex-none snap-start"
            style={{ width: slideWidth }}
          >
            <ImagePlaceholder
              label={`${serviceTitle} photo ${i + 1}`}
              src={src ?? undefined}
              alt={`${serviceTitle} ${i + 1}`}
              ratio="1 / 1"
            />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === activePage
                  ? "w-6 bg-maroon"
                  : "w-2.5 bg-[#cfcabb] hover:bg-[#b0aa9a]"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
