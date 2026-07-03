export type Service = {
  slug: string;
  title: string;
  navLabel?: string;
  cardImage?: string;
};

export const services: Service[] = [
  { slug: "balustrades", title: "Balustrades" },
  { slug: "gates", title: "Gates" },
  {
    slug: "doors",
    title: "Doors",
    cardImage: "/images/doors/grand-timber-front-door.jpg",
  },
  { slug: "receptions", title: "Receptions" },
  { slug: "windows", title: "Windows" },
  {
    slug: "wardrobes-and-storage",
    title: "Wardrobes & Storage",
    navLabel: "Wardrobes & Storage",
  },
  {
    slug: "media-units",
    title: "Media Units",
    cardImage: "/images/media-units/media-unit-in-a-home.jpg",
  },
  { slug: "staircases", title: "Staircases" },
];

export const servicesAlphabetical: Service[] = [...services].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export function serviceHref(slug: string): string {
  return `/expertise/${slug}`;
}
