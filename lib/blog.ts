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
