export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  categories: string[];
  excerpt: string;
};

export const posts: BlogPost[] = [
  {
    slug: "wood-vs-glass-balustrades",
    title: "Wood vs Glass Balustrades: Which Is Right for Your Home?",
    date: "13/06/2026",
    author: "Tim",
    readTime: "6 min read",
    categories: ["Balustrades", "Comparisons"],
    excerpt:
      "When it comes to choosing a balustrade for your staircase, landing or balcony, two materials tend to top the list…",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
