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
          h2: "Repair, or replace?",
          paragraphs: [
            [
              "Not every tired sash window needs replacing. Sash cords, weights, pulleys, individual sills and the bottom rails of the sashes can all be ",
              {
                text: "renewed",
                href: "/expertise/windows/sash-window-restoration",
              },
              ", and a box frame that is sound in the main is usually worth keeping. Replacement makes sense when the boxes themselves have gone, when previous repairs have destroyed the profiles, or when a whole elevation needs to match.",
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
    "sash-window-restoration": {
      parentSlug: "windows",
      parentLabel: "Windows",
      slug: "sash-window-restoration",
      h1: "Sash Window Restoration",
      title: "Sash Window Restoration in Exeter & Devon",
      metaDescription:
        "Overhaul, draught-proofing and slim double glazing for original sash windows in Exeter and across Devon. Keep the frames, improve the performance.",
      intro:
        "Bringing original sash windows back into good working order, so the frames, the proportions and the glass stay as they were built.",
      heroImage: {
        src: "/images/windows/listed-property-windows.jpg",
        alt: "Original sash windows in a listed Devon property",
      },
      sections: [
        {
          h2: "Most sash windows are in better condition than they look",
          paragraphs: [
            [
              "A window that sticks, rattles, draws a draught or has paint flaking off it looks like a window at the end of its life. Often it is not. What has usually failed is the paint, a sash cord, and the seal around the glass. The box frame and the sashes themselves are frequently sound underneath.",
            ],
            [
              "That matters, because the timber in an original window is generally better than what you can buy today. Slow-grown Baltic redwood and heart pine from the nineteenth century is denser and more stable than most modern softwood, so where the sashes are sound, keeping them is both the cheaper option and the better one. If the windows need redecorating rather than any work from us, we will say that.",
            ],
          ],
        },
        {
          h2: "What the work covers",
          paragraphs: [
            [
              "We survey each window rather than the elevation as a whole, because they rarely fail at the same rate. We look at the box frame, the condition of both sashes, the cords, pulleys and weights, the sill, and how much original glass survives.",
            ],
            [
              "Where the sashes are sound, the work covers overhauling the mechanism so the window runs and holds properly, renewing cords and rebalancing the weights, re-puttying and re-securing or re-glazing the glass, fitting draught seals, and redecoration.",
            ],
            [
              "Scope is worth being plain about. We do not patch decayed timber into an original sash. Where the timber itself has gone, we make a new sash or a new window to match the original rather than piecing the old one back together: same profiles, same glazing bar widths, same proportions, taken off the window that is coming out. It is a cleaner job and it lasts longer than a repair in the same position would.",
            ],
            [
              "In practice most elevations are a mixture. We regularly overhaul the sound windows on a house and make ",
              {
                text: "new sliding sash windows",
                href: "/expertise/windows/sash-windows",
              },
              " for the ones that are past saving, matched so you cannot tell which is which.",
            ],
          ],
          image: {
            src: "/images/windows/bespoke-windows.jpg",
            alt: "Sash window rail and glazing bar detail",
          },
        },
        {
          h2: "Draughts, rattle and slim double glazing",
          paragraphs: [
            [
              "This is the part that makes the biggest difference to living with the window, and it is why most people get in touch.",
            ],
            [
              "Slim-profile double-glazed units can go into your existing sashes, keeping the correct putty line and glazing bar width, so from outside the window looks as it did. Whether it is possible on a particular window depends on the rebate depth and on whether the sashes can carry the extra weight, which is a survey question rather than a catalogue one. Discreet brush or compression seals set into the staff bead, parting bead and meeting rail then stop the rattle and cut the draught substantially, and are invisible from outside.",
            ],
            [
              "Draught-proofing is done as part of this work rather than as a job on its own, because the seals need the sashes overhauled and running correctly to seat properly. Sealing a window that does not close squarely does not achieve much.",
            ],
            [
              "As we say on the ",
              {
                text: "sash windows page",
                href: "/expertise/windows/sash-windows",
              },
              ", you will not reach the U-value of a modern casement this way, and we would rather tell you that up front. What you get is a marked improvement in comfort and noise with the building's character untouched.",
            ],
          ],
          image: {
            src: "/images/windows/secondary-glazing.jpg",
            alt: "Sash window with slim double glazing seen from inside a Devon home",
          },
        },
        {
          h2: "Conservation areas and listed buildings",
          paragraphs: [
            [
              "Restoration is very often the route a conservation officer prefers, and because nothing changes externally it frequently needs no consent at all. That is close to the opposite of the position you are in with replacement, where the application can turn on the glazing specification.",
            ],
            [
              "The rules vary between Exeter, East Devon and Teignbridge, particularly on slim double glazing, so the honest answer to what will be approved is usually that it depends on your officer. Our guide to ",
              {
                text: "planning permission for windows in a conservation area",
                href: "/blog/planning-permission-windows-conservation-area-devon",
              },
              " sets out what generally needs consent and what does not.",
            ],
          ],
        },
        {
          h2: "Overhaul, or new windows?",
          paragraphs: [
            [
              "Overhaul is the better answer where the sashes and boxes are sound, where the house is listed or in a conservation area, or where the original glass and proportions are part of why you bought it. New windows are the better answer where decay has gone into the timber, where the existing windows are poor later replacements with nothing worth keeping, or where a whole elevation needs to match.",
            ],
            [
              "There is no reason to treat every opening the same way, and we would rather give you a window-by-window answer than a single number for the house.",
            ],
          ],
        },
        {
          h2: "Sash window work across Devon",
          paragraphs: [
            [
              "We work from our workshop at Clyst St Mary, just outside Exeter, across the city and out through Exmouth, Topsham, Sidmouth and the surrounding villages. Sashes come back to the workshop where the work needs a bench, and the glazing, seals and reinstallation are done on site by our own team.",
            ],
            [
              "If you are not sure whether your windows want overhauling or replacing, ",
              { text: "request a free estimate", href: "/free-estimate" },
              " and we will come and look at them properly.",
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
        {
          h2: "Oak, specifically",
          paragraphs: [
            [
              "Oak is the timber most people have in mind when they picture a solid front door, and it behaves differently enough from the alternatives to be worth its own page. If you have settled on the material and want the detail, see ",
              {
                text: "oak front doors",
                href: "/expertise/doors/oak-front-doors",
              },
              ".",
            ],
          ],
        },
      ],
    },
    "oak-front-doors": {
      parentSlug: "doors",
      parentLabel: "Doors",
      slug: "oak-front-doors",
      h1: "Oak Front Doors",
      title: "Bespoke Oak Front Doors in Exeter & Devon",
      metaDescription:
        "Bespoke oak front doors handmade in Exeter. How oak grain, movement and finish behave on an external door, and how it compares with Accoya and painted hardwood.",
      intro:
        "Oak front doors made in our Exeter workshop, and an honest account of how the timber behaves once it is hanging in a Devon doorway.",
      heroImage: {
        src: "/images/doors/timber-front-door.jpg",
        alt: "Bespoke oak front door on a Devon home",
      },
      sections: [
        {
          h2: "Why oak for a front door",
          paragraphs: [
            [
              "Oak is dense, hard, and it ages well rather than merely lasting. A south-west-facing front door in Devon takes driven rain, salt air off the estuaries and strong summer sun, and oak handles all three better than almost anything at a comparable price.",
            ],
            [
              "It is also heavy, which is part of the appeal and part of the engineering. An oak door closes with a weight that a lightweight door cannot imitate. It also means the frame, the hinges and the locking all have to be specified to carry it, which is one of the reasons an oak door is not simply a standard door in a different material.",
            ],
            [
              "This page is about the timber. For door styles, glazing, ironmongery, security and the buying process, see ",
              {
                text: "front entrance doors",
                href: "/expertise/doors/front-doors",
              },
              ".",
            ],
          ],
        },
        {
          h2: "Grain and character",
          paragraphs: [
            [
              "No two oak doors look the same, which is most of the point of choosing it. Cleaner, more consistent stock gives a calmer, more formal door; timber carrying more knots and figure gives a door with obvious character, and on a period property that is very often what people actually want.",
            ],
            [
              "Colour varies too, from pale honey through to a warmer brown, and it shifts over the first year or two as the timber settles and the finish matures. An oak door is darker at five years than at five weeks, and that is worth picturing before you choose a finish.",
            ],
            [
              "We will talk through what we are proposing at quotation stage and why, and you can ",
              { text: "see examples of our door work", href: "/gallery" },
              " to get a sense of how different oak reads once it is finished.",
            ],
          ],
          image: {
            src: "/images/doors/grand-timber-front-door.jpg",
            alt: "Oak front door showing grain and panel detail",
          },
        },
        {
          h2: "How oak moves, and what we do about it",
          paragraphs: [
            [
              "All timber moves with humidity and oak is no exception: it shrinks and swells across the grain through the year. A door built as a single slab will cup. A door built as a frame and panel lets the panels float in their grooves so they can move without splitting the rails, and an engineered construction, with a stable laminated core and solid oak faces, stays flatter still on a wide door.",
            ],
            [
              "Oak also contains tannins, which react with iron. Mild steel fixings and fittings in contact with oak will cause black staining, and tannin washing off a new oak door can mark pale masonry beneath it in the first year or so. Stainless or bronze fixings avoid the first problem; the second generally weathers out, and is worth knowing about before it happens rather than afterwards.",
            ],
          ],
        },
        {
          h2: "Oiled, stained or painted",
          paragraphs: [
            [
              "Oiled oak keeps the grain visible and warms to a deeper gold over the first year. Left unmaintained it silvers, which some people want and some people very much do not. Stained oak holds a colour and offers more UV protection. Oak can be painted, and on some period properties that is the correct answer, though it does cover the thing you paid for.",
            ],
            [
              "Realistic maintenance on an oiled door: re-oiling in the first year or two, then less often as the finish establishes. A west-facing coastal door will want it more frequently than a sheltered north-facing one. This is the main ongoing difference between oak and a painted factory finish, and it is the honest trade-off for the grain being on show.",
            ],
          ],
          image: {
            src: "/images/doors/timber-external-door.jpg",
            alt: "Oiled oak external door with visible grain",
          },
        },
        {
          h2: "Oak, Accoya or painted hardwood?",
          paragraphs: [
            [
              "Oak is not automatically the right answer, and it would be a poor page that pretended otherwise.",
            ],
            [
              "Accoya is more dimensionally stable than oak and more resistant to rot, and it takes paint extremely well. For a door that is going to be painted, and particularly for a wide or very exposed door, Accoya is often the better engineering choice: you are not paying for grain you intend to cover. That is why it is our usual recommendation for exposed positions elsewhere on the site.",
            ],
            [
              "Oak wins where the grain is the point, where the weight and the feel matter, and where the house asks for it. If you are weighing the three up, our guide to ",
              {
                text: "Accoya, oak and softwood on the Devon coast",
                href: "/blog/accoya-vs-oak-vs-softwood-devon-coast",
              },
              " goes through the comparison properly.",
            ],
          ],
        },
        {
          h2: "Oak front doors across Devon",
          paragraphs: [
            [
              "Every door is drawn, cut and finished in our workshop at Clyst St Mary, then fitted by our own team or coordinated with your builder. We work across Exeter, Exmouth, Sidmouth, Topsham and the surrounding villages.",
            ],
            [
              "If you want to talk through whether oak is the right call for your opening, ",
              { text: "request a free estimate", href: "/free-estimate" },
              " and we will come and take a look.",
            ],
          ],
        },
      ],
    },
  },
  staircases: {
    "oak-staircases": {
      parentSlug: "staircases",
      parentLabel: "Staircases",
      slug: "oak-staircases",
      h1: "Oak Staircases",
      title: "Bespoke Oak Staircases in Exeter & Devon",
      metaDescription:
        "Bespoke oak staircases hand-built in Exeter. Solid and engineered oak, traditional cut-string to open-tread designs, engineered to fit your opening exactly.",
      intro:
        "Oak staircases designed, engineered and hand-built in our Exeter workshop, from traditional cut-string flights to contemporary open-tread designs.",
      heroImage: {
        src: "/images/staircases/wooden-staircase.jpg",
        alt: "Bespoke oak staircase in a Devon home",
      },
      sections: [
        {
          h2: "Why oak is the default for a staircase",
          paragraphs: [
            [
              "A staircase is the one piece of joinery in a house that every occupant touches every day, usually with their hands and their feet at the same time. That makes hardness and wear matter more than they do almost anywhere else, and it is the main practical reason oak has been the default staircase timber in this country for centuries.",
            ],
            [
              "Oak also looks better as it wears. Treads develop a sheen where feet fall and a handrail darkens where hands run, and on a well-made oak flight that reads as age rather than damage. A painted softwood tread in the same position chips and shows it.",
            ],
            [
              "It is not the only sensible answer. See the ",
              { text: "staircases overview", href: "/expertise/staircases" },
              " for painted, contemporary and mixed-timber options.",
            ],
          ],
        },
        {
          h2: "Solid oak, or engineered oak?",
          paragraphs: [
            [
              "Both have a place, and the distinction is worth understanding before you compare quotes, because it accounts for a good part of the price difference between two apparently similar staircases.",
            ],
            [
              "Solid oak is exactly that: components machined from solid stock. It is the traditional construction and it suits treads, handrails and newels, where the section is thick and the wear is heavy.",
            ],
            [
              "Engineered oak is a stable laminated core with a solid oak face. On wide components (a long string, a broad riser, a landing nosing) it has a real advantage, because it stays flat where solid stock of the same width would be more inclined to cup. Used where it belongs it is not a cost-saving compromise; used everywhere it would be.",
            ],
            [
              "Which makes sense for your staircase depends on the design and the spans involved, and the quotation will set out what we are proposing and why rather than leaving you to guess.",
            ],
          ],
          image: {
            src: "/images/staircases/staircase-in-the-process-of-manufacturing.jpg",
            alt: "Oak staircase under construction in the Devon Joinery workshop",
          },
        },
        {
          h2: "Traditional and contemporary oak",
          paragraphs: [
            [
              "At the traditional end: cut-string or closed-string flights, turned or square spindles, a shaped handrail, moulded nosings and turned newel posts. This is what most period Devon houses want, and the detailing is what makes it sit right.",
            ],
            [
              "At the contemporary end: open treads, square-section posts, glass or steel infill in place of spindles, and oak left oiled rather than stained. The timber is the same; the detailing is deliberately stripped back.",
            ],
            [
              "Oak takes both because the grain carries a plain design and does not fight an ornate one. Whichever direction you go, the balustrade is a large part of what you see and a large part of the cost. The ",
              { text: "balustrades page", href: "/expertise/balustrades" },
              " covers the options in their own right.",
            ],
          ],
          image: {
            src: "/images/staircases/winding-staircase.jpg",
            alt: "Winding oak staircase with timber balustrade",
          },
        },
        {
          h2: "Fitting an oak staircase into an old house",
          paragraphs: [
            [
              "A new build gives you a square opening, a level floor and a known floor-to-floor height. A two-hundred-year-old Devon cottage gives you none of those, and that is where a made-to-measure staircase earns its cost.",
            ],
            [
              "Building regulations set limits on rise, going, headroom and the gaps a balustrade can leave, and those limits shape what is possible in a given opening. Working out what will fit, and what it will mean for the layout at the top and bottom of the flight, is a setting-out exercise we go through with you and your builder before anything is cut. Where a project needs formal sign-off or structural input, we will say so at quotation stage and agree who is arranging it.",
            ],
          ],
        },
        {
          h2: "Finish and movement",
          paragraphs: [
            [
              "Oak is usually oiled or lacquered on a staircase rather than painted. Oil is more repairable, which matters on a surface that takes this much wear: a worn patch can be cleaned and re-oiled in place, where lacquer generally has to be sanded back and redone as a whole.",
            ],
            [
              "Expect some seasonal movement and the occasional creak. Oak shrinks and swells with humidity, and a staircase is a large assembly of components doing that together through a heating season. Good joinery accommodates it rather than preventing it, and a flight that is entirely silent in February is usually one that has not been through a winter yet.",
            ],
            [
              "If you are weighing oak against the alternatives on cost and durability, our guide to ",
              {
                text: "Accoya, oak and softwood",
                href: "/blog/accoya-vs-oak-vs-softwood-devon-coast",
              },
              " is a useful starting point, though it is written mainly with external joinery in mind.",
            ],
          ],
        },
        {
          h2: "Oak staircases across Devon",
          paragraphs: [
            [
              "Every staircase is drawn, engineered and built in our workshop at Clyst St Mary, then fitted by our own team or coordinated with your builder. We work across Exeter, Exmouth, Sidmouth, Topsham and the surrounding villages.",
            ],
            [
              "We cannot quote a staircase from a description. What we need is the opening: the floor-to-floor height, the available run and width, and what sits above and below. Send photographs and rough measurements and we will tell you what is realistic in the space, then ",
              { text: "request a free estimate", href: "/free-estimate" },
              " for a surveyed, fixed price.",
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
