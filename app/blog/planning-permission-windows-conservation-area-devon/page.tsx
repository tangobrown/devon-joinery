import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getPost } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Planning Permission for Windows in a Conservation Area",
  description:
    "Replacing windows in a Devon conservation area or listed home? What needs consent, what does not, and what officers in Exeter and East Devon look for.",
  alternates: {
    canonical: "/blog/planning-permission-windows-conservation-area-devon",
  },
};

export default function ArticlePage() {
  const post = getPost("planning-permission-windows-conservation-area-devon")!;

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
          Do You Need Planning Permission for New Windows in a Conservation
          Area?
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
          label="Conservation area windows — hero image"
          ratio="1.9 / 1"
          className="mb-8"
          src="/images/windows/listed-property-windows.jpg"
          alt="Timber sash windows in a listed Devon property, made by Devon Joinery"
        />

        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          <p>
            It is the question we are asked more than any other, and the honest
            answer is that it depends on three things: whether the house is
            listed, whether it sits in a conservation area, and what exactly you
            are replacing.
          </p>
          <p>
            Those three things are often confused with each other, and getting
            them straight is most of the battle. Here is how they actually work,
            and what we see happen in practice across Exeter, Exmouth, Topsham
            and the East Devon villages.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Listed and conservation area are two different things
          </h2>
          <p>
            A <strong>listed building</strong> is protected in its own right,
            inside and out. There are around half a million in England and Devon
            has more than its share. If your house is listed, you need{" "}
            <strong>listed building consent</strong> to alter it, and that
            includes the windows. Replacing a window in a listed building
            without consent is a criminal offence, not a planning technicality.
            It rarely goes that far, but it is worth knowing that the law is
            unusually sharp here.
          </p>
          <p>
            A <strong>conservation area</strong> protects the character of a
            place rather than any individual building. Most of central Exeter,
            most of Topsham, and large parts of Sidmouth, Dartmouth and Totnes
            are conservation areas. Being in one does not automatically mean you
            need permission for windows, and this is where most of the confusion
            lives.
          </p>
          <p>
            A house can be both, one, or neither. Check which you are before you
            do anything else. Your local authority&apos;s planning portal will
            tell you in about two minutes, and it is free.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            If your house is not listed and not in a conservation area
          </h2>
          <p>
            Replacing windows on a normal house is usually{" "}
            <strong>permitted development</strong>. You do not need planning
            permission, as long as the new windows are similar in appearance to
            the old ones. Upper-floor windows on a side elevation need to be
            obscure-glazed and non-opening below 1.7m, which catches people out
            occasionally.
          </p>
          <p>
            You do still need to satisfy <strong>building regulations</strong>{" "}
            for thermal performance, safety glazing and means of escape. That is
            a different process from planning, it is usually handled through a
            competent-person scheme or a building notice, and it applies whether
            or not you needed planning permission.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            If you are in a conservation area but not listed
          </h2>
          <p>
            Here is the part that surprises people: for most houses in a
            conservation area, <strong>like-for-like window replacement does
            not need planning permission.</strong> Conservation area status does
            not remove permitted development rights for windows by itself.
          </p>
          <p>Two things can remove them.</p>
          <p>
            The first is an <strong>Article 4 direction</strong>. This is a
            formal step a council takes to withdraw permitted development rights
            in a specific area, and it is very often aimed precisely at windows
            and doors, because uPVC replacements are what erode a Georgian
            street fastest. If an Article 4 direction covers your street, you
            need planning permission for window replacement even though your
            neighbour two streets over does not. Article 4 directions are mapped
            on the council&apos;s website. Look before you order.
          </p>
          <p>
            The second is that &ldquo;like for like&rdquo; has to actually mean
            like for like. A timber sash replaced with a timber sash of the same
            proportions and glazing pattern is a replacement. A timber sash
            replaced with a uPVC casement is an alteration, and it will be
            treated as one.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            If your house is listed
          </h2>
          <p>
            You need listed building consent, and you should assume the
            conversation will be about detail rather than about whether you may
            do it at all.
          </p>
          <p>
            Conservation officers are usually not trying to stop you replacing
            rotten windows. What they want is for the replacement to be right:
            the correct glazing bar width, the correct horn profile on a sash,
            the correct box depth and sill projection, the correct timber, and
            often the correct glass. Where the existing windows are original,
            they will normally expect repair to be considered before
            replacement, and they are frequently right to.
          </p>
          <p>
            The strongest applications we see include a survey of the existing
            window, a drawing of the proposed one at a sensible scale, and a
            short honest statement about why repair is not the better option. We
            produce drawings suitable for submission as a matter of course.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            The slim double glazing question
          </h2>
          <p>
            This is the live argument in Devon at the moment, and the answer
            varies by authority.
          </p>
          <p>
            Slim-profile double glazed units are typically 11 to 14mm overall
            against 24mm for a standard modern unit, which means they will fit
            into a traditional sash section with the putty line and glazing bar
            width kept correct. From the pavement, a well-executed slim-glazed
            sash is very hard to tell from single glazing.
          </p>
          <p>
            Different Devon authorities, and even individual officers within the
            same authority, can take different views on whether that is
            acceptable in a listed building. The honest answer to &ldquo;will
            this be approved?&rdquo; is usually &ldquo;it depends on your
            officer&rdquo;. In conservation areas without an Article 4 direction
            it is generally not a planning question at all.
          </p>
          <p>
            If it matters to you, ask early, informally, before you commission
            anything. Most conservation officers will give you a steer, and a
            five-minute phone call is cheaper than a refused application.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What we would do in your position
          </h2>
          <p>
            Check whether you are listed, in a conservation area, or under an
            Article 4 direction. Those three checks are free and take ten
            minutes.
          </p>
          <p>
            If any of them apply, talk to the conservation officer before you
            commit to a specification. Get the existing windows surveyed and
            recorded properly, because that record is what the application rests
            on. And be genuinely open to repair, because a sash box that is
            sound in the main is often worth keeping even when the sashes are
            not.
          </p>
          <p>
            If you are still weighing up the style itself, our guide to{" "}
            <Link
              href="/blog/sash-vs-casement-windows-period-devon-homes"
              className="text-maroon font-semibold underline"
            >
              sash versus casement windows
            </Link>{" "}
            is a useful next read.
          </p>
          <p>
            Then choose a maker who has done it before. We have been making{" "}
            <Link
              href="/expertise/windows/sash-windows"
              className="text-maroon font-semibold underline"
            >
              sliding sash windows
            </Link>{" "}
            and{" "}
            <Link
              href="/expertise/windows"
              className="text-maroon font-semibold underline"
            >
              casement windows
            </Link>{" "}
            for period properties across Devon for over 25 years, and we are
            used to talking to conservation officers directly.
          </p>
          <p>
            <strong>
              This article is general guidance, not planning advice.
            </strong>{" "}
            Rules vary between authorities and change over time. Always check
            with your own local planning authority before you commit to
            anything.
          </p>
          <p>
            If you are working out what your options are,{" "}
            <Link
              href="/free-estimate"
              className="text-maroon font-semibold underline"
            >
              request a free estimate
            </Link>{" "}
            and we will come and look at the windows.
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
