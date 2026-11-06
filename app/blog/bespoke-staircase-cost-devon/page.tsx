import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getPost } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "How Much Does a Bespoke Staircase Cost?",
  description:
    "What drives the cost of a bespoke staircase in Devon — timber, design, balustrade and fitting — plus realistic price bands and where the money goes.",
  alternates: { canonical: "/blog/bespoke-staircase-cost-devon" },
};

export default function ArticlePage() {
  const post = getPost("bespoke-staircase-cost-devon")!;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <PageShell>
      <ArticleJsonLd post={post} />
      <Breadcrumbs items={breadcrumbs} />
      <article className="max-w-article mx-auto px-6 pt-12 pb-16 text-body">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-maroon text-[13px] font-semibold mb-6 hover:underline"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-[32px] md:text-[40px] font-extrabold leading-[1.15] text-ink mb-5">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-2 mb-6 text-[12px] text-bodyMuted">
          {post.categories.map((c) => (
            <span
              key={c}
              className="bg-maroon text-white text-[11px] font-semibold px-2.5 py-1"
            >
              {c}
            </span>
          ))}
          <span className="ml-2">
            By {post.author} · {post.date} · {post.readTime}
          </span>
        </div>

        <ImagePlaceholder
          label="Bespoke staircase cost — hero image"
          ratio="1.7 / 1"
          className="mb-8"
          src="/images/staircases/staircase-in-the-process-of-manufacturing.jpg"
          alt="Bespoke timber staircase under construction in the Devon Joinery workshop in Exeter"
        />

        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            The short answer
          </h2>
          <p>
            A{" "}
            <Link
              href="/expertise/staircases"
              className="text-maroon font-semibold underline"
            >
              bespoke staircase
            </Link>{" "}
            is not a product with a price list, which is why nobody publishes
            one. It is a structural component, made once, for one opening, and
            the number depends more on the shape of your house than on anything
            you choose from a brochure.
          </p>
          <p>
            What we can do is explain honestly what moves the number, so that
            when you get a quote you can tell whether it is reasonable and what
            you would be giving up to make it cheaper. That is more useful than
            a figure with no context, and a lot more useful than a figure that
            turns out to exclude the balustrade.
          </p>
          <p>
            Broadly: a straight flight in painted softwood with a simple spindle
            balustrade sits at the bottom of the range. A curved or cantilevered
            staircase in oak with a glass balustrade sits at the top, and the
            gap between them is larger than most people expect, several times
            over rather than a few percent.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What actually drives the price
          </h2>
          <p>Five things, in roughly descending order.</p>
          <p>
            <strong>The shape.</strong> A straight flight is the cheapest thing
            we can make. Every turn adds cost: a quarter-landing adds a little, a
            winder (where the treads themselves turn) adds more because each
            tread is a different shape and each has to be set out individually. A
            curved or helical staircase means laminated strings bent to a
            former, and that is a different order of work entirely.
          </p>
          <p>
            <strong>The timber.</strong> See below; it is the biggest single
            material decision.
          </p>
          <p>
            <strong>The balustrade.</strong> Also below. People routinely
            underestimate this one.
          </p>
          <p>
            <strong>The finish.</strong> Painted, stained, oiled or left bare
            changes both the material and the labour. Painted work needs more
            preparation, not less, because every joint has to be filled and
            sanded to invisibility.
          </p>
          <p>
            <strong>The fitting.</strong> A staircase going into a new build with
            a clear opening and a level floor fits quickly. A staircase
            replacing one in a 200-year-old Devon cottage, where nothing is
            square, the ceiling height varies and the opening has moved over two
            centuries, takes longer and needs more survey time up front.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Timber: the biggest single variable
          </h2>
          <p>
            Painted softwood is the most economical, and for a staircase that is
            going to be painted anyway it is often the sensible answer; there is
            no point paying for grain you intend to cover.
          </p>
          <p>
            European oak costs significantly more and is what most people
            picture. It is harder, it wears better underfoot, and the grain is
            the point. American white oak is paler, straighter-grained and takes
            a stain more evenly.
          </p>
          <p>
            A common and sensible compromise is mixing them: oak treads and
            handrail where hands and feet go and where the timber shows, painted
            softwood strings and risers where it does not. You get most of the
            look for a good deal less than an all-oak flight, and an{" "}
            <Link
              href="/expertise/staircases/oak-staircases"
              className="text-maroon font-semibold underline"
            >
              oak staircase
            </Link>{" "}
            is a combination we make often.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            The balustrade is half the job
          </h2>
          <p>
            This is where quotes diverge most, and where comparing two quotes
            gets difficult.
          </p>
          <p>
            A simple turned spindle{" "}
            <Link
              href="/expertise/balustrades"
              className="text-maroon font-semibold underline"
            >
              balustrade
            </Link>{" "}
            in painted softwood is straightforward. A glass balustrade
            (toughened panels, stainless or timber fixings, all meeting current
            building regulations) costs considerably more, and our guide to{" "}
            <Link
              href="/blog/wood-vs-glass-balustrades"
              className="text-maroon font-semibold underline"
            >
              wood versus glass balustrades
            </Link>{" "}
            sets out the trade-offs. Bespoke turned or carved newel posts add
            more again, because each one is turned individually.
          </p>
          <p>
            The important practical point:{" "}
            <strong>
              when you compare quotes, check whether the balustrade is included.
            </strong>{" "}
            It frequently is not, and a quote that excludes it can look
            dramatically cheaper than one that does not for exactly the same
            staircase.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Where a staircase gets expensive
          </h2>
          <p>In rough order of impact:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Curves and cantilevers.</strong> Laminated strings bent to
              a former, and cantilevered treads needing structural calculation
              and often steelwork in the wall.
            </li>
            <li>
              <strong>Full-height galleries and landings.</strong> More
              balustrade than staircase.
            </li>
            <li>
              <strong>Hardwood throughout, including risers and strings.</strong>
            </li>
            <li>
              <strong>Carved or bespoke-turned newels.</strong>
            </li>
            <li>
              <strong>Difficult access.</strong> If a finished flight cannot
              physically get into the house, it has to be made in sections and
              assembled on site.
            </li>
          </ul>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What you get for the money
          </h2>
          <p>
            The honest case for bespoke over off-the-shelf is not that it looks
            better in a photograph. It is that it fits.
          </p>
          <p>
            A made-to-measure staircase is set out for your actual rise and
            going, which means every step is the same height, something stock
            staircases in old houses frequently fail at, and something you feel
            every single time you use it. Building regulations set limits on
            rise, going, headroom and balustrade gaps, and a bespoke staircase
            is designed to meet them in your opening rather than approximately.
          </p>
          <p>
            It also lasts. A well-made oak staircase is a fifty-year component,
            not a fifteen-year one.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            How to get an accurate number
          </h2>
          <p>
            We cannot quote a staircase from a description, and anyone who does
            is guessing. What we need is the opening: the floor-to-floor height,
            the available run, the width, and what is above and below.
            Photographs and rough measurements are enough to start a
            conversation; a survey is what produces a fixed price.
          </p>
          <p>
            Send through what you have and we will tell you honestly what is
            realistic in the space, including where spending more is worth it
            and where it is not.
          </p>

          <div className="pt-6">
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3"
            >
              Request a Free Estimate <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
