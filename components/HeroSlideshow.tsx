"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  intervalMs?: number;
  fadeMs?: number;
  alt?: string;
};

export function HeroSlideshow({
  images,
  intervalMs = 5000,
  fadeMs = 1200,
  alt = "Devon Joinery bespoke work",
}: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div aria-hidden className="absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          fill
          priority={i === 0}
          sizes="100vw"
          className="object-cover transition-opacity ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: `${fadeMs}ms`,
          }}
        />
      ))}
    </div>
  );
}
