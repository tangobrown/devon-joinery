import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { posts } from "@/lib/blog";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Joinery Blog | Tips & Guides from Devon Joinery, Exeter",
  description:
    "Thoughts, tips and guides from the Devon Joinery team on bespoke joinery, timber choices, staircases, balustrades and more, all crafted in our Exeter workshop.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <PageShell>
      <PageHeader
        title="Our Thoughts"
        size="md"
        intro="A collection of thoughts and tips from the Devon Joinery team"
      />

      <section className="max-w-content mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-borderCream2 hover:shadow-hoverLift transition-shadow"
            >
              <ImagePlaceholder
                label={`${post.title} — hero image`}
                ratio="1.8 / 1"
                src={post.coverImage}
                alt={post.coverAlt ?? post.title}
              />
              <div className="p-5">
                <div className="text-maroon text-[12px] font-semibold mb-2">
                  {post.date}
                </div>
                <h3 className="text-[19px] font-bold text-ink leading-[1.3] mb-3">
                  {post.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-bodyMuted mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-maroon text-[13px] font-semibold">
                  Read more <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
