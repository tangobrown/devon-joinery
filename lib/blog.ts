export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  categories: string[];
  excerpt: string;
  coverImage?: string;
  coverAlt?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "planning-permission-windows-conservation-area-devon",
    title:
      "Do You Need Planning Permission for New Windows in a Conservation Area?",
    date: "01/09/2026",
    author: "Devon Joinery",
    readTime: "8 min read",
    categories: ["Windows", "Guides"],
    excerpt:
      "It is the question we are asked more than any other, and the honest answer is that it depends on three things: whether the house is listed, whether it is in a conservation area, and what you are replacing…",
    coverImage: "/images/windows/listed-property-windows.jpg",
    coverAlt:
      "Timber sash windows in a listed Devon property, made by Devon Joinery",
  },
  {
    slug: "sash-vs-casement-windows-period-devon-homes",
    title: "Sash vs Casement Windows: Which Suits a Period Devon Home?",
    date: "14/08/2026",
    author: "Devon Joinery",
    readTime: "7 min read",
    categories: ["Windows", "Comparisons"],
    excerpt:
      "Ask most people to picture an old English house and they will picture sash windows. But plenty of period Devon homes were built with casements, so here's how to choose…",
    coverImage: "/images/windows/listed-property-windows.jpg",
    coverAlt: "Timber sash window in a period Devon home, made by Devon Joinery",
  },
  {
    slug: "wood-vs-glass-balustrades",
    title: "Wood vs Glass Balustrades: Which Is Right for Your Home?",
    date: "13/06/2026",
    author: "Devon Joinery",
    readTime: "6 min read",
    categories: ["Balustrades", "Comparisons"],
    excerpt:
      "When it comes to choosing a balustrade for your staircase, landing or balcony, two materials tend to top the list…",
    coverImage: "/images/balustrades/glass-balustrades-on-staircase.jpg",
    coverAlt: "Frameless glass balustrades on a bespoke staircase by Devon Joinery",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Convert a dd/mm/yyyy display date to ISO 8601 (yyyy-mm-dd) for schema. */
export function toISODate(display: string): string {
  const [dd, mm, yyyy] = display.split("/");
  return `${yyyy}-${mm}-${dd}`;
}
