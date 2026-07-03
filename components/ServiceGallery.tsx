"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

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
            const imageIndex = clickable
              ? realImages.indexOf(src!)
              : -1;
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

type LightboxProps = {
  images: string[];
  initialIndex: number;
  alt: string;
  onClose: () => void;
};

function Lightbox({ images, initialIndex, alt, onClose }: LightboxProps) {
  const [i, setI] = useState(initialIndex);

  const next = useCallback(
    () => setI((v) => (v + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setI((v) => (v - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} gallery`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-3 right-3 md:top-6 md:right-6 text-white/80 hover:text-white p-2"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 md:p-3"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <path d="M10.8285 12.0007L15.7783 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7783 7.05093L10.8285 12.0007Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 md:p-3"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L15.9999 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </button>
        </>
      )}

      <div
        className="relative w-full h-full max-w-6xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[i]}
          alt={`${alt} ${i + 1}`}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-[13px] font-medium">
          {i + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
