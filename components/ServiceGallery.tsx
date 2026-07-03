"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Lightbox } from "@/components/Lightbox";

type Props = {
  serviceTitle: string;
  images?: string[];
};

const GAP_PX = 16;
const AUTO_ADVANCE_MS = 5000;

export function ServiceGallery({ serviceTitle, images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [perPage, setPerPage] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasImages = Boolean(images && images.length > 0);
  const slots: (string | null)[] = hasImages ? images! : [null, null, null];
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
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (totalPages <= 1) return;
    if (lightboxIndex !== null) return;
    const id = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const nextPage = (activePage + 1) % totalPages;
      el.scrollTo({ left: nextPage * w, behavior: "smooth" });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [activePage, totalPages, lightboxIndex]);

  const goToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
  };

  const slideWidth = `calc((100% - ${(perPage - 1) * GAP_PX}px) / ${perPage})`;

  const realImages = slots.filter((s): s is string => Boolean(s));

  return (
    <>
      <section className="max-w-content mx-auto px-6 pt-4 pb-10 md:pb-12">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          style={{ gap: `${GAP_PX}px` }}
        >
          {slots.map((src, i) => {
            const clickable = Boolean(src);
            const imageIndex = clickable ? realImages.indexOf(src!) : -1;
            return (
              <div
                key={i}
                className="flex-none snap-start"
                style={{ width: slideWidth }}
              >
                {clickable ? (
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(imageIndex)}
                    className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                    aria-label={`Open ${serviceTitle} image ${i + 1}`}
                  >
                    <ImagePlaceholder
                      label={`${serviceTitle} photo ${i + 1}`}
                      src={src ?? undefined}
                      alt={`${serviceTitle} ${i + 1}`}
                      ratio="1 / 1"
                    />
                  </button>
                ) : (
                  <ImagePlaceholder
                    label={`${serviceTitle} photo ${i + 1}`}
                    ratio="1 / 1"
                  />
                )}
              </div>
            );
          })}
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
      {lightboxIndex !== null && realImages.length > 0 && (
        <Lightbox
          images={realImages}
          initialIndex={Math.max(
            0,
            Math.min(lightboxIndex, realImages.length - 1),
          )}
          alt={serviceTitle}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
