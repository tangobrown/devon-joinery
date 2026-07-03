export type Service = {
  slug: string;
  title: string;
  navLabel?: string;
  cardImage?: string;
};

export const services: Service[] = [
  {
    slug: "balustrades",
    title: "Balustrades",
    cardImage: "/images/balustrades/staircase-with-wooden-ballustrades.jpg",
  },
  {
    slug: "gates",
    title: "Gates",
    cardImage: "/images/gates/driveway-gates-full.jpg",
  },
  {
    slug: "doors",
    title: "Doors",
    cardImage: "/images/doors/grand-timber-front-door.jpg",
  },
  {
    slug: "receptions",
    title: "Receptions",
    cardImage: "/images/receptions/reception-front-counter.jpg",
  },
  {
    slug: "windows",
    title: "Windows",
    cardImage: "/images/windows/bespoke-windows.jpg",
  },
  {
    slug: "wardrobes-and-storage",
    title: "Wardrobes & Storage",
    navLabel: "Wardrobes & Storage",
    cardImage: "/images/wardrobes-and-storage/fitted-wardrobes.jpg",
  },
  {
    slug: "media-units",
    title: "Media Units",
    cardImage: "/images/media-units/media-unit-in-a-home.jpg",
  },
  {
    slug: "staircases",
    title: "Staircases",
    cardImage: "/images/staircases/winding-staircase.jpg",
  },
];

export const servicesAlphabetical: Service[] = [...services].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export function serviceHref(slug: string): string {
  return `/expertise/${slug}`;
}
