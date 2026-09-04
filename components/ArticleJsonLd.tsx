import { SITE_URL } from "@/lib/site";
import { toISODate, type BlogPost } from "@/lib/blog";

/**
 * BlogPosting JSON-LD built from a BlogPost record, so every article (current
 * and future) gets valid article schema with no per-post schema code. Author is
 * the Organization (per the "Devon Joinery" byline), and publisher references
 * the existing LocalBusiness #business node rather than duplicating it.
 */
export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: toISODate(post.date),
    ...(post.coverImage ? { image: `${SITE_URL}${post.coverImage}` } : {}),
    author: { "@type": "Organization", name: "Devon Joinery" },
    publisher: { "@id": `${SITE_URL}#business` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    description: post.excerpt,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
