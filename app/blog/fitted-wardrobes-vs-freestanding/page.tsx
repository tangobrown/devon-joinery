import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getPost } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Fitted Wardrobes vs Freestanding: What Adds Value",
  description:
    "Do fitted wardrobes add value to a Devon home, and when is freestanding the better buy? An honest comparison on cost, storage gained and resale.",
  alternates: { canonical: "/blog/fitted-wardrobes-vs-freestanding" },
};

export default function ArticlePage() {
  const post = getPost("fitted-wardrobes-vs-freestanding")!;

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
          label="Fitted wardrobes — hero image"
          ratio="1.7 / 1"
          className="mb-8"
          src="/images/wardrobes-and-storage/bespoke-wardrobes.jpg"
          alt="Bespoke fitted wardrobes in a Devon bedroom, made by Devon Joinery"
        />

        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          <p>
            Fitted or freestanding is usually framed as a budget question.
            Fitted costs more, so the thinking goes, and freestanding is what
            you buy if you cannot stretch to it.
          </p>
          <p>
            That is not wrong exactly, but it is the least useful way to
            approach the decision. Two more revealing questions: how long are
            you staying in the house, and what shape is the room? Answer those
            honestly and the choice usually makes itself, and in a fair number
            of Devon houses the answer is freestanding, which is not something
            you will often hear from a company that builds{" "}
            <Link
              href="/expertise/wardrobes-and-storage/fitted-wardrobes"
              className="text-maroon font-semibold underline"
            >
              fitted wardrobes
            </Link>
            .
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What &ldquo;adds value&rdquo; actually means
          </h2>
          <p>
            There are two different claims bundled into that phrase and they are
            worth separating.
          </p>
          <p>
            The first is <strong>resale value</strong>: does a buyer pay more
            for a house with fitted wardrobes in it? The honest answer is that
            nobody can give you a reliable figure, and anyone quoting you a
            percentage is guessing. What is observable is softer and still real:
            fitted storage gets mentioned in estate agents&rsquo; particulars,
            it photographs well, and a bedroom that does not have a wardrobe
            standing in the middle of one wall looks bigger in a listing. On a
            period property in particular, joinery that looks built-in reads as
            a house that has been looked after.
          </p>
          <p>
            The second is <strong>value to you while you live there</strong>,
            which is easier to be concrete about. A fitted run typically yields
            somewhere between a quarter and a third more usable storage than
            freestanding furniture in the same footprint, because it goes to the
            ceiling, into the corners, and up against the walls with nothing
            wasted behind or above. In a small bedroom that difference is the
            difference between storage that works and storage you fight with
            every morning.
          </p>
          <p>
            If you are staying five years or more, the second claim is the one
            that matters and it is the stronger of the two.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            When freestanding is genuinely the better buy
          </h2>
          <p>Three situations, and they are common enough to say plainly.</p>
          <p>
            <strong>You are moving within a couple of years.</strong> Fitted
            joinery does not come with you. A good freestanding wardrobe does,
            and a very good one holds a surprising amount of its value. If the
            house is a stepping stone, do not build into it.
          </p>
          <p>
            <strong>You are renting, or it is a rental property.</strong> Same
            logic with more paperwork.
          </p>
          <p>
            <strong>The room is square, generous and has a flat ceiling.</strong>{" "}
            This is the one people do not expect. The whole case for fitted is
            that it solves awkwardness: slopes, alcoves, bays, chimney breasts.
            In a plain rectangular room with normal ceiling height, a
            well-chosen freestanding wardrobe gets you most of the capacity for
            considerably less, and you can move it when you repaint. Fitted is
            worth paying for where the room is difficult, and a square room is
            not difficult.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            When fitted is the only thing that works
          </h2>
          <p>The mirror image of the above.</p>
          <p>
            <strong>Eaves bedrooms.</strong> A sloping ceiling defeats
            freestanding furniture completely: a square box stops at the point
            where the slope cuts in, and everything beyond that is wasted.
            Fitted joinery follows the slope, with full-height hanging where the
            headroom allows, drawers or shelving where it narrows, and the
            lowest section given over to things you do not need to stand in
            front of.
          </p>
          <p>
            <strong>Chimney breasts.</strong> You get two alcoves and they are
            almost never the same width as each other, which is why a matched
            pair of shop-bought units looks wrong in a way that is hard to put
            your finger on.
          </p>
          <p>
            <strong>Bays, odd corners and doors in awkward places.</strong>{" "}
            Anywhere the usable wall is interrupted.
          </p>
          <p>
            In a Devon housing stock that is heavy on cottages, converted lofts
            and Victorian terraces, that covers a great many bedrooms.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Cost, and the honest comparison
          </h2>
          <p>
            Comparing the two on headline price is misleading, because you are
            not buying the same thing. A useful comparison needs three
            adjustments.
          </p>
          <p>
            <strong>Adjust for capacity.</strong> If the fitted run holds a
            third more, compare the cost per metre of hanging rail rather than
            the total.
          </p>
          <p>
            <strong>Adjust for the rest of the room.</strong> Fitted work
            usually includes scribing to the walls, floor and ceiling, which
            means making good against surfaces that are not flat, level or
            square. Freestanding does not, and the gap it leaves is yours to
            live with.
          </p>
          <p>
            <strong>Adjust for how long it lasts.</strong> Flat-pack has a life
            measured in years. Properly made fitted joinery in a house is a
            permanent fixture, and the hinges and runners are the only parts
            anyone ever has to think about again.
          </p>
          <p>
            Once those three adjustments are made, fitted is usually still more
            expensive and the gap is smaller than the headline suggests.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            If you do go fitted, spend the money on the inside
          </h2>
          <p>
            The commonest mistake is to spend the budget on door style and treat
            the interior as an afterthought. It is the wrong way round. The
            doors are what you see; the inside is what you use every day.
          </p>
          <p>
            Before anything is designed, work out what is going in: how much
            long hanging against short, how many drawers, whether shoes live at
            the bottom or on a rack, what needs to be out of a child&rsquo;s
            reach. Two people with identical rooms and identical budgets
            routinely end up with entirely different interiors, and the one who
            talked through their clothes gets the better wardrobe.
          </p>
          <p>
            Our{" "}
            <Link
              href="/expertise/wardrobes-and-storage"
              className="text-maroon font-semibold underline"
            >
              wardrobes and storage page
            </Link>{" "}
            sets out the range we build, from single runs to walk-in dressing
            rooms.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Where to start
          </h2>
          <p>
            If the room is awkward and you are staying, fitted is almost
            certainly right and the only real question is the layout. If the
            room is square and you are moving, buy a good freestanding wardrobe
            and spend the difference elsewhere.
          </p>
          <p>
            If you are not sure which you are, send us photographs of the room
            and rough dimensions. We will tell you which we think makes sense,
            including when the answer is that you do not need us.
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
