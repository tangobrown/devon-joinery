import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getPost } from "@/lib/blog";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Sash vs Casement Windows: Which Suits a Period Home?",
  description:
    "Sash or casement windows for a period Devon home? Compare looks, cost, draughts, maintenance and conservation rules before you specify replacements.",
  alternates: { canonical: "/blog/sash-vs-casement-windows-period-devon-homes" },
};

export default function ArticlePage() {
  const post = getPost("sash-vs-casement-windows-period-devon-homes")!;

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
          Sash vs Casement Windows: Which Suits a Period Devon Home?
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
          label="Sash window — hero image"
          ratio="1.9 / 1"
          className="mb-8"
          src="/images/windows/listed-property-windows.jpg"
          alt="Timber sash window in a period Devon home, made by Devon Joinery"
        />

        <div className="prose-body space-y-5 text-[17px] leading-[1.75] text-body">
          <p>
            Ask most people to picture an old English house and they will
            picture sash windows. Tall, elegant, divided into panes, sliding
            vertically in a box frame. It is such a fixed image that homeowners
            often assume a period property must have them, and that replacing
            anything else would be a betrayal of the building.
          </p>
          <p>
            It is not that simple. Plenty of period Devon homes were built with
            casements and always had them. Getting this right matters, because
            windows are one of the few decisions that changes both how a house
            looks from the street and how it feels to live in, and they are
            expensive to get wrong.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What actually separates the two
          </h2>
          <p>
            A <strong>sash window</strong> slides. Two glazed panels, called
            sashes, move vertically past each other in a boxed frame,
            counterbalanced by weights on cords or by spiral springs. Nothing
            swings into the room or out over the garden.
          </p>
          <p>
            A <strong>casement window</strong> hinges, like a door. It swings
            outward on side or top hinges, held by a stay, secured by a
            fastener.
          </p>
          <p>
            That single mechanical difference drives everything else: how they
            seal, what they cost, how they are maintained, and where they look
            right.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Which one belongs on your house
          </h2>
          <p>The honest answer is: whatever the house was built with.</p>
          <p>
            Sash windows arrived in England in the late seventeenth century and
            dominated Georgian and Victorian building. If your home is a
            Georgian townhouse in Exeter, a Victorian terrace, or a
            nineteenth-century villa, it was almost certainly built with sashes,
            and the proportions of the façade were designed around them.
          </p>
          <p>
            But Devon&apos;s building stock runs far older and far more varied.
            Thatched cottages, farmhouses, converted barns and anything
            predating the eighteenth century were built with casements, because
            that is what existed. On those buildings a sash window looks
            imported: too tall, too formal, wrong for the wall.
          </p>
          <p>
            There is also a middle case worth naming: twentieth-century houses
            that had their original windows replaced with uPVC in the eighties
            and nineties. Here you are not restoring, you are correcting, and the
            question is genuinely open.
          </p>
          <p>
            The test is simple. Look at the neighbours, specifically the ones
            that have not been altered. Look at any original windows left in less
            visible elevations. Look at old photographs if the house has them.
            The building will usually tell you.
          </p>

          <ImagePlaceholder
            label="Casement window — comparison image"
            ratio="1.9 / 1"
            className="my-8"
            src="/images/windows/white-casement-windows-in-home.jpg"
            alt="Bespoke timber casement window on a Devon cottage"
          />

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Draughts, heat and the myth about sash windows
          </h2>
          <p>
            The most common thing we hear is that sash windows are draughty and
            casements are not.
          </p>
          <p>It is half true, and the half that is true is fixable.</p>
          <p>
            Old sash windows are often draughty because their brush seals have
            worn out, the sashes have dropped out of alignment, or the frame has
            moved. That is a maintenance state, not a property of the design. A
            well-made modern sash with proper draught stripping and double
            glazing performs to the same standard as a modern casement.
          </p>
          <p>
            Where casements do have a genuine edge is the seal. A casement
            compresses against its frame when you close it: one continuous seal,
            pulled tight by the fastener. A sash slides, so it relies on brushes
            and pile seals along the sliding faces. Both work. The casement&apos;s
            is inherently simpler and stays effective longer with no attention.
          </p>
          <p>
            So: if you want the best possible thermal performance and the house
            does not demand sashes, casements are the easier route. If the house
            wants sashes, a properly made sash will not leave you cold. What will
            leave you cold is a cheap sash, or an old one nobody has maintained.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            What each costs to live with
          </h2>
          <p>
            Sash windows cost more. More timber, more joints, a boxed frame, a
            counterbalance mechanism, and considerably more setting-out. Expect a
            meaningful premium over a casement of the same size and
            specification.
          </p>
          <p>
            They also ask more of you over time. Cords stretch and eventually
            break. Sliding faces need to stay clean and lubricated. Repainting
            means painting surfaces that move against each other, which needs
            care to avoid sticking.
          </p>
          <p>
            Casements are simpler. Hinges and a stay, and the moving part swings
            clear of everything. Maintenance is essentially painting and
            occasionally adjusting a hinge.
          </p>
          <p>
            None of which is an argument against sashes. It is an argument for
            buying good ones. A well-made sash in a durable timber will outlast a
            cheap casement by decades. The premium buys you a window that is
            still working in fifty years, which is the only cost comparison that
            ends up mattering.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            Conservation areas and listed buildings
          </h2>
          <p>
            If your home is listed or sits in a conservation area, the choice may
            already be made for you.
          </p>
          <p>
            Listed buildings need listed building consent for window
            replacement, and the conservation officer will normally expect
            like-for-like: same type, same materials, same sightlines, often the
            same glazing bar arrangement. Slim-profile double glazing is
            frequently acceptable now, but that is a conversation to have before
            you order, not after.
          </p>
          <p>
            Conservation area rules are looser: they usually bite on elevations
            facing a public road, and permitted development rights may have been
            withdrawn by an Article 4 direction. Devon has a lot of conservation
            area coverage, and the rules vary between authorities.
          </p>
          <p>
            Ring your local planning department before you commit to anything.
            Five minutes on the phone is cheaper than a window you have to take
            out again.
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-ink pt-4">
            How to decide
          </h2>
          <p>Work through it in this order:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Is the property listed, or in a conservation area?</strong>{" "}
              If yes, start with the conservation officer. Their answer may end
              the discussion.
            </li>
            <li>
              <strong>What did the house have originally?</strong> Match it
              unless there is a strong reason not to.
            </li>
            <li>
              <strong>If the house genuinely does not care</strong> (a later
              property, or one already altered beyond recognition), then choose
              on performance and budget. Casements are cheaper, seal slightly
              better and ask less of you.
            </li>
            <li>
              <strong>Whatever you choose, buy well.</strong> The gap between a
              good window and a cheap one is far wider than the gap between the
              two types.
            </li>
          </ol>
          <p>
            We make both, in{" "}
            <Link href="/about" className="text-maroon font-semibold underline">
              our workshop near Exeter
            </Link>
            , to suit the building rather than a catalogue:{" "}
            <Link
              href="/expertise/windows"
              className="text-maroon font-semibold underline"
            >
              sash, casement, stormproof, pivot and sliding
            </Link>
            , in softwood, oak or Accoya. If you are weighing this up for a
            particular house,{" "}
            <Link
              href="/free-estimate"
              className="text-maroon font-semibold underline"
            >
              send us a photograph
            </Link>{" "}
            of the elevation and we will tell you honestly what we think it
            wants.
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
