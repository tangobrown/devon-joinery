/**
 * Sub-service content model — the scaffold for the sub-service page programme
 * (e.g. /expertise/windows/sash-windows), one level below the /expertise/[service]
 * pages defined in `service-content.ts`.
 *
 * Content is keyed by parent service slug, then child slug, which mirrors the
 * `/expertise/[service]/[subservice]` route hierarchy and keeps each child bound
 * to a real parent. Body copy is modelled as sections of rich paragraphs so that
 * inline internal links survive editing.
 */

/** A run of text, or an inline internal link. */
export type InlineNode = string | { text: string; href: string };

/** One rich paragraph: an ordered list of text/link nodes. */
export type RichParagraph = InlineNode[];

export type SubServiceSection = {
  h2: string;
  paragraphs: RichParagraph[];
  /** Optional image rendered immediately after this section. */
  image?: { src: string; alt: string };
};

export type SubServiceContent = {
  /** Parent service slug, e.g. "windows". Must match a key in serviceContent. */
  parentSlug: string;
  /** Short breadcrumb/nav label for the parent, e.g. "Windows". */
  parentLabel: string;
  /** Child slug, e.g. "sash-windows". */
  slug: string;
  h1: string;
  /** Meta title source string — brand excluded (the template appends it). */
  title: string;
  metaDescription: string;
  intro?: string;
  /** Hero image, also used as og:image. */
  heroImage?: { src: string; alt: string };
  sections: SubServiceSection[];
};

export const subServiceContent: Record<
  string,
  Record<string, SubServiceContent>
> = {
  windows: {
    "sash-windows": {
      parentSlug: "windows",
      parentLabel: "Windows",
      slug: "sash-windows",
      h1: "Sliding Sash Windows",
      title: "Sliding Sash Windows in Exeter & Devon",
      metaDescription:
        "Traditional sliding sash windows handmade in Exeter. Period-matched proportions and glazing bars, with optional draught seals and slim double glazing.",
      intro:
        "Traditional vertically-sliding sash windows, made in our Exeter workshop to match the proportions and glazing bars of period, listed and conservation-area properties across Devon.",
      heroImage: {
        src: "/images/windows/white-single-hung-window.jpg",
        alt: "Sliding sash window in a period Exeter property",
      },
      sections: [
        {
          h2: "Why sash windows are worth doing properly",
          paragraphs: [
            [
              "A sliding sash window is one of the few pieces of joinery in a house that people notice when it is wrong. The proportions of the boxes, the width of the glazing bars, the depth of the horns on the meeting rail — get any of those slightly off and a Georgian or Victorian facade stops looking right, even to someone who could not tell you why. It is the clearest case there is for ",
              { text: "bespoke windows", href: "/expertise/windows" },
              " made to the opening rather than bought to a standard size.",
            ],
            [
              "That is the argument for making them rather than buying them. Off-the-shelf sash windows are built to a fixed set of sizes and a fixed set of profiles, and the opening gets adjusted to suit the window. We work the other way round: we survey the opening, take the existing details off the original window where there is one, and make the new frames to match.",
            ],
          ],
        },
        {
          h2: "Matching a period property",
          paragraphs: [
            [
              "Most of the sash work we do in Devon is replacement rather than new-build, and most of it is in houses built between about 1780 and 1910. The details that matter vary by period and often by street.",
            ],
            [
              "We take a record of the existing window before it comes out — glazing bar width, sash horn profile, box depth, sill projection, the number and arrangement of panes — and reproduce it in the new frames. Where the original windows have already been replaced badly at some point, which is common, we can work from a neighbouring property or from photographs of the terrace as it was.",
            ],
            [
              "Timber choice matters more here than people expect. Coastal Devon is hard on external joinery: salt, driving rain and long damp winters. Accoya is our usual recommendation for exposed positions — it is modified softwood, dimensionally very stable, and carries a long warranty against rot. Inland, or on a sheltered elevation, a good European redwood or a hardwood such as sapele is often the more sensible spend.",
            ],
            [
              "You can ",
              { text: "see examples of our window work", href: "/gallery" },
              " across period homes in Exeter and the surrounding villages.",
            ],
          ],
          image: {
            src: "/images/windows/bespoke-windows.jpg",
            alt: "Close detail of a sash window meeting rail and horn",
          },
        },
        {
          h2: "Draught seals and slim double glazing",
          paragraphs: [
            [
              "The two common complaints about original sash windows are that they rattle and that they are cold. Both are solvable without changing how the window looks.",
            ],
            [
              "Discreet brush or compression seals sit in the rebates and stop the rattle and the draught. Slim-profile double glazing units — typically around 11 to 14mm overall, against 24mm for a standard modern unit — will fit into a traditional sash section with the correct putty line and glazing bar width retained. From the pavement, a well-executed slim-glazed sash is very hard to distinguish from single glazing.",
            ],
            [
              "You will not get the U-value of a modern casement, and we would rather say so than oversell it. What you get is a substantial improvement in comfort and noise with the character of the building intact.",
            ],
          ],
          image: {
            src: "/images/windows/secondary-glazing.jpg",
            alt: "Sliding sash window seen from inside a Devon home",
          },
        },
        {
          h2: "Conservation areas and listed buildings",
          paragraphs: [
            [
              "A large share of the sash work we do sits in a conservation area, and some of it is listed. Rules vary between authorities — Exeter, East Devon and Teignbridge all take slightly different positions on slim double glazing in particular — so the honest answer to “will this be approved?” is usually “it depends on your officer”.",
            ],
            [
              "What we can do is make a window that gives the application the best chance: correct profiles, correct materials, single glazing where that is the condition, and drawings suitable for submission. We are used to the process and are happy to talk to a conservation officer directly.",
            ],
          ],
        },
        {
          // TODO(TAN-25 follow-up): once /expertise/windows/sash-window-restoration
          // ships (programme row 4), link "renewed" / "Replacement" here to that page.
          h2: "Repair, or replace?",
          paragraphs: [
            [
              "Not every tired sash window needs replacing. Sash cords, weights, pulleys, individual sills and the bottom rails of the sashes can all be renewed, and a box frame that is sound in the main is usually worth keeping. Replacement makes sense when the boxes themselves have gone, when previous repairs have destroyed the profiles, or when a whole elevation needs to match.",
            ],
            [
              "If you are not sure which side of that line you are on, we will tell you honestly — including when the answer is that the windows are fine and need painting.",
            ],
          ],
        },
        {
          h2: "How we work",
          paragraphs: [
            [
              "Survey and measure, then a quotation with the timber, glazing and finish specified. Manufacture in our workshop at Clyst St Mary. Fitting by our own team or coordinated with your builder, and we make good afterwards.",
            ],
            [
              "When you are ready, ",
              { text: "request a free estimate", href: "/free-estimate" },
              " and we will come and take a look.",
            ],
          ],
        },
      ],
    },
  },
};

/** All {service, subservice} pairs, for generateStaticParams and the sitemap. */
export function listSubServiceParams(): {
  service: string;
  subservice: string;
}[] {
  return Object.entries(subServiceContent).flatMap(([service, children]) =>
    Object.keys(children).map((subservice) => ({ service, subservice })),
  );
}

export function getSubService(
  service: string,
  subservice: string,
): SubServiceContent | undefined {
  return subServiceContent[service]?.[subservice];
}
