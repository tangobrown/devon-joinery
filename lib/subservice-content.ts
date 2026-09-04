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
              "A sliding sash window is one of the few pieces of joinery in a house that people notice when it is wrong. The proportions of the boxes, the width of the glazing bars, the depth of the horns on the meeting rail: get any of those slightly off and a Georgian or Victorian facade stops looking right, even to someone who could not tell you why. It is the clearest case there is for ",
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
              "We take a record of the existing window before it comes out (glazing bar width, sash horn profile, box depth, sill projection, the number and arrangement of panes) and reproduce it in the new frames. Where the original windows have already been replaced badly at some point, which is common, we can work from a neighbouring property or from photographs of the terrace as it was.",
            ],
            [
              "Timber choice matters more here than people expect. Coastal Devon is hard on external joinery: salt, driving rain and long damp winters. Accoya is our usual recommendation for exposed positions: it is modified softwood, dimensionally very stable, and carries a long warranty against rot. Inland, or on a sheltered elevation, a good European redwood or a hardwood such as sapele is often the more sensible spend.",
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
              "Discreet brush or compression seals sit in the rebates and stop the rattle and the draught. Slim-profile double glazing units (typically around 11 to 14mm overall, against 24mm for a standard modern unit) will fit into a traditional sash section with the correct putty line and glazing bar width retained. From the pavement, a well-executed slim-glazed sash is very hard to distinguish from single glazing.",
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
              "A large share of the sash work we do sits in a conservation area, and some of it is listed. Rules vary between authorities (Exeter, East Devon and Teignbridge all take slightly different positions on slim double glazing in particular), so the honest answer to “will this be approved?” is usually “it depends on your officer”.",
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
              "If you are not sure which side of that line you are on, we will tell you honestly, including when the answer is that the windows are fine and need painting.",
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
  doors: {
    "front-doors": {
      parentSlug: "doors",
      parentLabel: "Doors",
      slug: "front-doors",
      h1: "Front Entrance Doors",
      title: "Bespoke Front Entrance Doors in Exeter & Devon",
      metaDescription:
        "Handmade front entrance doors for Devon homes. Oak, Accoya and painted hardwood, built to your opening with secure locking and a weather-tight seal.",
      intro:
        "Handmade front entrance doors, designed and built in our Exeter workshop to suit your home, from the timber and glazing through to the locking and finish.",
      heroImage: {
        src: "/images/doors/grand-timber-front-door.jpg",
        alt: "Bespoke timber front entrance door on a Devon home",
      },
      sections: [
        {
          h2: "Why a front door is worth making rather than buying",
          paragraphs: [
            [
              "A front door is the first thing anyone sees of your house, and the one piece of joinery you touch every single day, so it is worth getting right. An off-the-shelf door is built to a standard size and then trimmed to fit the opening. We work the other way round: we make the door to suit the opening, the style of the house and the way you want it to look and feel. That is the real advantage of ",
              { text: "bespoke doors", href: "/expertise/doors" },
              ": the proportions, the panel layout, the mouldings and the ironmongery are all chosen for your home rather than pulled from a catalogue.",
            ],
          ],
        },
        {
          h2: "Timber, and what survives a Devon winter",
          paragraphs: [
            [
              "An external door in Devon has a hard life: driving rain off the moor or the coast, salt air near the estuaries, and long damp winters. The timber matters more here than it does inland.",
            ],
            [
              "Accoya, a modified softwood, is our usual recommendation for exposed doors because it is dimensionally very stable and highly resistant to rot. Oak and durable hardwoods such as sapele suit doors where the grain is meant to be seen, and for a painted finish a good engineered section gives a stable base that holds paint well. You can ",
              { text: "see examples of our door work", href: "/gallery" },
              " across homes around Exeter and the wider county.",
            ],
          ],
          image: {
            src: "/images/doors/black-front-door-in-stone-building.jpg",
            alt: "Painted black front door in a Devon stone cottage",
          },
        },
        {
          h2: "Security, locking and building regulations",
          paragraphs: [
            [
              "A front door has to do more than look good. We build doors to take robust, well-fitted locking and quality ironmongery, specified with you to suit how the door is used. New external doors also need to meet current building regulations for thermal performance, and we take that into account in the door and glazing specification. If your project calls for a particular security or certification standard, tell us at the quotation stage so we can specify the door to meet it.",
            ],
          ],
        },
        {
          h2: "Glazing, ironmongery and finish",
          paragraphs: [
            [
              "Glazing, from a single vision panel to a fully glazed and side-lit entrance, is chosen for light, privacy and style, with obscure or toughened glass where it makes sense. Ironmongery is where a door's character often lives: handles, letter plates, knockers, hinges and locks, chosen to suit the period and the look. Doors can be supplied primed and ready for your decorator, or finished in the colour you choose; just let us know which you would prefer.",
            ],
          ],
        },
        {
          h2: "Period and heritage front doors",
          paragraphs: [
            [
              "Much of the front-door work we do in Devon is for period and character homes, where a replacement needs to match what was there, or what should have been. We can reproduce a traditional panelled door with the correct proportions, mouldings and glazing pattern, working from the existing door, a neighbour's, or old photographs. For listed buildings and homes in conservation areas the detailing matters, and we are used to making doors that suit the building.",
            ],
          ],
          image: {
            src: "/images/doors/timber-front-door.jpg",
            alt: "Traditional panelled timber front door in Exeter",
          },
        },
        {
          h2: "How we work",
          paragraphs: [
            [
              "We start with a survey and measure of the opening, then a quotation setting out the timber, glazing, ironmongery and finish. The door is made in our workshop at Clyst St. Mary, and fitted by our own team or coordinated with your builder. When you are ready, ",
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
