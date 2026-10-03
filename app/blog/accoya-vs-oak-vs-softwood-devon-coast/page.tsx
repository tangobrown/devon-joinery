import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getPost } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Accoya vs Oak vs Softwood for Devon's Coastal Climate",
  description:
    "Which timber survives salt air and driving rain? An honest comparison of Accoya, oak and softwood for external joinery in Devon, including cost over time.",
  alternates: { canonical: "/blog/accoya-vs-oak-vs-softwood-devon-coast" },
};

export default function ArticlePage() {
  const post = getPost("accoya-vs-oak-vs-softwood-devon-coast")!;

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
          label="Timber comparison — hero image"
          ratio="1.7 / 1"
          className="mb-8"
          src="/images/windows/listed-property-windows.jpg"
          alt="Timber windows in an exposed coastal Devon property, made by Devon Joinery"
        />

        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          <p>
            Almost every quotation we send has a timber specification on it, and
            it is the line most people skip over. It is also the line that
            decides how the joinery looks in fifteen years, how often you will
            be out with a paintbrush, and a surprising amount of the price.
          </p>
          <p>
            Devon makes the decision matter more than it does inland. Salt air
            off the estuaries, rain driven horizontally off the moor, and long
            damp winters where nothing properly dries out: that is a hard
            environment for anything external. A timber that performs perfectly
            well in a sheltered garden in the Midlands can have a genuinely
            shorter life on a west-facing elevation near Exmouth.
          </p>
          <p>
            So here is an honest comparison of the three we specify most, what
            each is actually good at, and where we would and would not spend
            the money.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            The short version
          </h2>
          <p>
            <strong>Accoya</strong> for exposed external joinery that will be
            painted, especially wide components. <strong>Oak</strong> where the
            grain is meant to be seen or the wear is heavy, which makes it right
            for an{" "}
            <Link
              href="/expertise/staircases/oak-staircases"
              className="text-maroon font-semibold underline"
            >
              oak staircase
            </Link>{" "}
            far more often than for a painted window. <strong>Softwood</strong>{" "}
            where it is sheltered and painted and the budget is better spent
            elsewhere. The rest of this explains why, because the honest answer
            depends on which elevation we are standing in front of.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Accoya: the stable one
          </h2>
          <p>
            Accoya is radiata pine that has been acetylated, a chemical
            modification that changes how the timber holds water. Because it
            takes up far less moisture than untreated softwood, it barely moves
            with humidity and it is extremely resistant to rot and insect
            attack. It carries a long manufacturer warranty against decay, and
            in our experience it earns it.
          </p>
          <p>
            For external joinery in an exposed position that is going to be
            painted, it is usually the correct engineering choice, and it is our
            default recommendation for{" "}
            <Link
              href="/expertise/windows"
              className="text-maroon font-semibold underline"
            >
              timber windows
            </Link>{" "}
            and{" "}
            <Link
              href="/expertise/doors"
              className="text-maroon font-semibold underline"
            >
              external doors
            </Link>{" "}
            on coastal and west-facing elevations. Its real advantage shows on
            big components: a wide bifold stile or a tall door panel in Accoya
            stays flat where the same section in softwood would be inclined to
            move.
          </p>
          <p>
            It also holds paint unusually well, precisely because it is not
            swelling and shrinking underneath the film. That means longer
            intervals between repaints, which over twenty years is a real cost
            saving and not just a convenience.
          </p>
          <p>
            The honest downsides: it costs more than softwood, it is pale and
            fairly characterless so it is not a timber you leave bare for the
            look of it, and it needs stainless fixings because the acetic
            chemistry is hard on mild steel. There is also a slight vinegary
            smell when it is freshly machined, which disappears entirely once
            the joinery is finished and fitted, but does surprise people in the
            workshop.
          </p>

          <div className="grid grid-cols-2 gap-3 py-3">
            {[
              {
                src: "/images/windows/modern-style-windows.jpg",
                alt: "Painted timber windows on a modern Devon home",
              },
              {
                src: "/images/doors/timber-bi-folding-doors.jpg",
                alt: "Timber bifolding doors with wide stiles",
              },
            ].map((img) => (
              <ImagePlaceholder
                key={img.src}
                label={img.alt}
                ratio="1.4 / 1"
                src={img.src}
                alt={img.alt}
              />
            ))}
          </div>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Oak: the one you can see
          </h2>
          <p>
            European oak is dense, hard and durable, and it has the grain that
            people actually want to look at. It is the timber most people
            picture when they picture solid joinery, and for good reasons that
            survive scrutiny rather than just tradition.
          </p>
          <p>
            Where oak genuinely wins is anywhere the timber is on show and
            anywhere it takes physical wear. A{" "}
            <Link
              href="/expertise/staircases"
              className="text-maroon font-semibold underline"
            >
              staircase
            </Link>{" "}
            tread, a handrail, an{" "}
            <Link
              href="/expertise/doors/oak-front-doors"
              className="text-maroon font-semibold underline"
            >
              oak front door
            </Link>
            , a run of{" "}
            <Link
              href="/expertise/balustrades"
              className="text-maroon font-semibold underline"
            >
              balustrade
            </Link>{" "}
            spindles: these are all places where oak will look better in twenty
            years than it does on the day it goes in, which is not something
            you can say about most materials.
          </p>
          <p>
            It is naturally durable outside too, so an oak gate or front door
            will last without chemical treatment. But oak moves more than
            Accoya with the seasons, and on a wide external component that
            movement is the thing that cracks a paint film. It also contains
            tannins, which react with iron to produce black staining and can
            wash out onto pale stone beneath new oak joinery for the first year
            or so. Both are manageable: stainless or bronze fixings, and
            patience with the staining, which weathers out.
          </p>
          <p>
            The other honest point is cost. Oak is the most expensive of the
            three by a clear margin, and on a painted component you are paying
            for grain nobody will ever see. If the specification says painted
            and the position is exposed, that is usually Accoya's job rather
            than oak's.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Softwood: better than its reputation, in the right place
          </h2>
          <p>
            Softwood covers a wide range, and that is exactly why it has a
            mixed reputation. Fast-grown, wide-ringed, knotty stock is poor
            material for joinery and there is a lot of it about. Good
            slow-grown European redwood, properly selected, is a different
            product: stable enough, takes paint well, and has been used for
            external joinery in this country for centuries.
          </p>
          <p>
            It is worth remembering that the original{" "}
            <Link
              href="/expertise/windows/sash-windows"
              className="text-maroon font-semibold underline"
            >
              sash windows
            </Link>{" "}
            in most period Devon houses are softwood, and plenty are still in
            service two hundred years on. That is partly because
            nineteenth-century softwood was denser than most of what is
            available now, and partly because those windows were maintained.
            Which is the real point about softwood: it performs well when it is
            painted and repainted on time, and fails quickly when it is not.
          </p>
          <p>
            So softwood is the sensible choice on sheltered elevations, on
            internal joinery, and wherever the budget is better spent on getting
            the joinery right than on upgrading the material. We also use it
            routinely for the painted elements of a staircase, with hardwood
            treads and handrail where the wear is. Where we would steer you away
            from it is a west-facing coastal elevation, a large glazed door, or
            any situation where you know realistically that it will not get
            repainted when it should.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Cost over twenty years, not on the quotation
          </h2>
          <p>
            Comparing the three on purchase price alone is the most common
            mistake, because the maintenance interval differs enough to change
            the ranking. Softwood is cheapest to buy and the most demanding to
            keep. Accoya costs more up front and holds a paint finish longer, so
            the repaint cycle stretches. Oak sits at the top for material cost
            but needs no treatment to survive if you are prepared to let it
            silver.
          </p>
          <p>
            We are not going to put numbers on that here, because the honest
            answer depends on the component, the exposure and who does the
            decorating. What we will do is tell you at quotation stage what the
            realistic maintenance looks like for the specification we are
            proposing, including when the cheaper timber is the better buy.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What usually decides it
          </h2>
          <p>
            In practice it comes down to three questions. Is it painted, or is
            the grain on show? How exposed is the elevation? And how much
            movement can the component tolerate? Painted, exposed and wide
            points at Accoya. Grain on show, or heavy wear, points at oak.
            Painted, sheltered and modest in size points at softwood, and there
            is no shame in it.
          </p>
          <p>
            There is also no requirement to pick one timber for a whole house.
            Most of the projects we quote use two or three, placed where each
            one earns its cost: Accoya on the weather elevation, oak on the
            front door and the staircase, softwood on the sheltered side and the
            painted internal work. A specification that uses the same timber
            everywhere is usually one that has not been thought about.
          </p>
          <p>
            Tell us the elevation, what the component is and whether you want it
            painted, and we will tell you which of the three we would use and
            why, including when that is the cheapest of the three. We would
            rather specify a timber you will be happy with in fifteen years than
            sell you the most expensive one on the list.
          </p>
          <p>
            Explore our{" "}
            <Link
              href="/expertise/windows"
              className="text-maroon font-semibold underline"
            >
              bespoke windows
            </Link>{" "}
            and{" "}
            <Link
              href="/expertise/doors"
              className="text-maroon font-semibold underline"
            >
              bespoke doors
            </Link>
            , or{" "}
            <Link
              href="/free-estimate"
              className="text-maroon font-semibold underline"
            >
              request a free estimate
            </Link>{" "}
            and we will come and look at the job properly.
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
