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
    slug: "fitted-wardrobes-vs-freestanding",
    title: "Fitted Wardrobes vs Freestanding: What Adds Value",
    date: "01/11/2026",
    author: "Devon Joinery",
    readTime: "8 min read",
    categories: ["Storage", "Comparisons"],
    excerpt:
      "Fitted or freestanding is usually framed as a question about budget, but the more useful question is how long you are staying and what the room is shaped like…",
    coverImage: "/images/wardrobes-and-storage/bespoke-wardrobes.jpg",
    coverAlt:
      "Bespoke fitted wardrobes in a Devon bedroom, made by Devon Joinery",
  },
  {
    slug: "accoya-vs-oak-vs-softwood-devon-coast",
    title: "Accoya vs Oak vs Softwood for Devon's Coastal Climate",
    date: "03/10/2026",
    author: "Devon Joinery",
    readTime: "9 min read",
    categories: ["Timber", "Comparisons"],
    excerpt:
      "Salt air, driving rain and long damp winters are hard on external joinery, and the timber you choose matters more here than it does inland. An honest comparison of the three we use most…",
    coverImage: "/images/windows/listed-property-windows.jpg",
    coverAlt:
      "Timber windows in an exposed coastal Devon property, made by Devon Joinery",
  },
  {
    slug: "bespoke-staircase-cost-devon",
    title: "How Much Does a Bespoke Staircase Cost?",
    date: "01/10/2026",
    author: "Devon Joinery",
    readTime: "8 min read",
    categories: ["Staircases", "Guides"],
    excerpt:
      "A bespoke staircase has no price list, because it is made once, for one opening. An honest look at what actually drives the number, and where the money goes…",
    coverImage:
      "/images/staircases/staircase-in-the-process-of-manufacturing.jpg",
    coverAlt:
      "Bespoke timber staircase under construction in the Devon Joinery workshop in Exeter",
  },
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
    coverImage: "/images/windows/single-hung-window.jpg",
    coverAlt:
      "Timber single-hung sash window in a period Devon property, made by Devon Joinery",
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
