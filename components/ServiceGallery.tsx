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
  const [perPage, setPerPage] = useState(3);
  const [activePage, setActivePage] = useState(0);

  const slots = images && images.length > 0 ? images : [null, null, null];
  const totalPages = Math.max(1, Math.ceil(slots.length / perPage));

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
      if (w) setActivePage(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    let isDown = false;
    let dragged = false;
    let startX = 0;
    let startScroll = 0;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      isDown = true;
      dragged = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      if (dragged) {
        e.preventDefault();
        el.scrollLeft = startScroll - dx;
      }
    };

    const onMouseUp = () => {
      if (!isDown) return;
      const wasDrag = dragged;
      isDown = false;
      dragged = false;
      el.style.cursor = "grab";
      if (wasDrag) {
        const suppress = (ev: MouseEvent) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        window.addEventListener("click", suppress, {
          capture: true,
          once: true,
        });
      }
    };

    const onDragStart = (e: DragEvent) => e.preventDefault();

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, []);

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
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab select-none [&_img]:pointer-events-none [&_img]:select-none [&_img]:!bg-transparent"
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
