import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getPost } from "@/lib/blog";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Wood vs Glass Balustrades: Which Is Right for Your Home?",
};

export default function ArticlePage() {
  const post = getPost("wood-vs-glass-balustrades")!;

  return (
    <PageShell>
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
          label="Balustrade — hero image"
          ratio="1.7 / 1"
          className="mb-8"
        />

        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          <p>
            When it comes to choosing a balustrade for your staircase, landing
            or balcony, two materials tend to top the list: timber and glass.
            Both are beautiful, both are safe when properly made, and both can
            completely transform the feel of a space. So how do you decide?
          </p>
          <p>
            At Devon Joinery, we design and handcraft bespoke balustrades in
            both wood and glass for homes across Exeter and the wider Devon
            area, so we&apos;ve helped a lot of homeowners weigh up this exact
            question. Here&apos;s an honest look at how the two compare, and
            how to work out which is right for your home.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            First, what they have in common
          </h2>
          <p>
            Before the differences, it&apos;s worth saying that whichever you
            choose, a few things stay the same. Both wooden and glass
            balustrades have to meet UK building regulations, which set minimum
            heights and limit the gaps a balustrade can have (so a 100mm sphere
            can&apos;t pass through). And whether it&apos;s timber or glass, a
            bespoke balustrade is measured, designed and finished to fit your
            staircase exactly, rather than forced to fit from a kit. The choice
            between them is really about look, feel and lifestyle, not about
            quality or safety.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            The case for wooden balustrades
          </h2>
          <p>
            Wood is the classic choice, and for good reason. There&apos;s a
            warmth and character to timber that&apos;s hard to replicate, and
            it suits an enormous range of homes, from cosy cottages to grand
            period properties.
          </p>
          <p>
            If you live in an older or period home, which Devon has no shortage
            of, wooden balustrades often feel like the natural fit. Hand-turned
            spindles, a shaped handrail and a richly grained timber can
            complement original features beautifully. We work with premium
            hardwoods such as oak, ash and walnut, each with its own colour and
            character, and the design possibilities are almost endless:
            traditional turned balusters, clean square spindles, or something
            entirely your own.
          </p>
          <p>
            Timber is also forgiving over a lifetime. It can be sanded, re-oiled
            or repainted as tastes change or wear shows, so a wooden balustrade
            can be refreshed rather than replaced. For families with young
            children, some homeowners also prefer the reassuring solidity of
            timber and the fact that it doesn&apos;t show every fingerprint.
          </p>

          <div className="grid grid-cols-3 gap-3 py-3">
            {[1, 2, 3].map((n) => (
              <ImagePlaceholder
                key={n}
                label={`Wooden balustrade ${n}`}
                ratio="1 / 1"
              />
            ))}
          </div>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            The case for glass balustrades
          </h2>
          <p>
            Glass is the modern favourite, and its biggest strength is what it{" "}
            <em>doesn&apos;t</em> do: it doesn&apos;t block light or sightlines.
            A glass balustrade lets daylight flow through a stairwell and keeps
            a room feeling open, airy and larger than it is. In a smaller home,
            a narrow hallway or a property where you want to make the most of a
            view, that can be transformative.
          </p>
          <p>
            Visually, glass is sleek and almost invisible, which makes it a
            popular choice in contemporary interiors and new builds where the
            goal is clean lines and minimal fuss. It can be frameless for the
            most seamless look, or paired with timber or metal fixings for
            something a little softer.
          </p>
          <p>
            Glass also tends to make a space feel brighter and more spacious
            without drawing attention to itself, so if you&apos;ve invested in a
            striking staircase, a feature wall or a view across the garden,
            glass lets those elements take centre stage rather than competing
            with them.
          </p>

          <div className="grid grid-cols-2 gap-3 py-3">
            {[1, 2].map((n) => (
              <ImagePlaceholder
                key={n}
                label={`Glass balustrade ${n}`}
                ratio="1.4 / 1"
              />
            ))}
          </div>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Maintenance: an honest comparison
          </h2>
          <p>
            This is where lifestyle really matters. Glass looks stunning when
            it&apos;s clean, but it does show fingerprints, smudges and dust, so
            if you have children or pets, expect to keep a cloth handy. The
            upside is that cleaning is quick and there&apos;s no finish to
            maintain over the years.
          </p>
          <p>
            Wood asks for less frequent but slightly more involved care. A
            quality finish will protect it for a long time, and the occasional
            re-oiling or touch-up keeps it looking its best. Many people find
            that low-key upkeep part of the appeal of a natural material.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What about cost?
          </h2>
          <p>
            It&apos;s difficult to give a single figure, because so much depends
            on the design, the size of the run and the specific materials. As a
            general guide, a simple timber balustrade and a simple glass
            balustrade can be comparable, while the cost of either climbs with
            complexity, curved sections, premium hardwoods or frameless
            structural glass all add to the price. The most useful way to
            compare is to get a quote based on your actual staircase, which is
            something we&apos;re always happy to provide.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Why not have both?
          </h2>
          <p>
            Here&apos;s the option many people don&apos;t realise is available:
            you don&apos;t have to choose. Some of our favourite balustrades
            combine the two, pairing a warm timber handrail you can comfortably
            grip with glass infill panels below. You get the light and openness
            of glass with the warmth and tactility of wood, and the result often
            suits both traditional and modern homes. It&apos;s a genuinely
            best-of-both-worlds approach, and because everything we make is
            bespoke, the mix is entirely up to you.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            How to decide
          </h2>
          <p>As a rough rule of thumb:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Choose wood</strong> if you have a period or traditional
              home, you love natural materials and character, or you want
              something that can be refreshed and re-finished over the years.
            </li>
            <li>
              <strong>Choose glass</strong> if you want to maximise light and
              space, you have a contemporary interior, or there&apos;s a view
              you&apos;d rather not interrupt.
            </li>
            <li>
              <strong>Consider a mix</strong> if you can&apos;t decide, want the
              warmth of a timber handrail with the openness of glass, or simply
              want something a little different.
            </li>
          </ul>
          <p>
            There&apos;s no universally &ldquo;right&rdquo; answer, only the one
            that&apos;s right for your home, your style and how you live.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Talk it through with us
          </h2>
          <p>
            The best way to settle the wood-versus-glass question is to see
            both against your own staircase and budget. At Devon Joinery,
            we&apos;ll talk through your ideas, show you the options and design
            a bespoke balustrade made and fitted to suit your home, wherever
            you are in Exeter or across Devon.
          </p>
          <p>
            Explore our{" "}
            <Link
              href="/expertise/balustrades"
              className="text-maroon font-semibold underline"
            >
              bespoke balustrades
            </Link>{" "}
            or{" "}
            <Link
              href="/free-estimate"
              className="text-maroon font-semibold underline"
            >
              request a free estimate
            </Link>{" "}
            and we&apos;ll help you find the perfect fit.
          </p>

          <div className="pt-6">
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 bg-maroon-button text-white text-[13px] font-semibold px-6 py-3"
            >
              Request a Free Estimate <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
