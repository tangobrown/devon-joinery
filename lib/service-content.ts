import type { FaqItem } from "@/components/Faq";

export type Paragraph = string;

export type MaroonPanelContent = {
  heading: string;
  imagePosition: "left" | "right";
  imageLabel: string;
  imageSrc?: string;
  paragraphs?: Paragraph[];
  boldLead?: string;
  bullets?: string[];
};

export type ServiceContent = {
  slug: string;
  h1: string;
  intro: string;
  metaTitle?: string;
  metaDescription?: string;
  showHeaderCta?: boolean;
  topGalleryImages?: string[];
  panels: MaroonPanelContent[];
  faq?: {
    heading: string;
    items: FaqItem[];
    showReviewBadge?: boolean;
  };
  tanBand?: {
    heading: string;
    body: string;
    cta: { label: string; href: string };
  };
  extraPanels?: MaroonPanelContent[];
};

export const serviceContent: Record<string, ServiceContent> = {
  balustrades: {
    slug: "balustrades",
    h1: "Bespoke Balustrades",
    metaTitle: "Bespoke Wooden & Glass Balustrades in Exeter, Devon",
    metaDescription:
      "Handcrafted wooden and glass balustrades made to measure in our Exeter workshop. Traditional turned timber or contemporary frameless glass — get a free estimate.",
    intro:
      "Balustrades are where safety meets style. The finishing touch that turns a staircase, landing or balcony into a feature. At Devon Joinery, we design and handcraft bespoke wooden and glass balustrades for homes across Exeter and Devon, each one made to fit your space exactly.",
    topGalleryImages: [
      "/images/balustrades/glass-balustrades-on-staircase.jpg",
      "/images/balustrades/wooden-staircase-with-wooden-ballustrades.jpg",
      "/images/balustrades/wooden-staircase-with-glass-balustrades.jpg",
      "/images/balustrades/wooden-staircase-with-steel-ballustrades.jpg",
      "/images/balustrades/external-ballustrades.jpg",
      "/images/balustrades/staircase-with-wooden-ballustrades.jpg",
      "/images/balustrades/black-external-ballustrades.jpg",
      "/images/balustrades/new-home-staircase.jpg",
    ],
    panels: [
      {
        heading: "Our approach to creating bespoke balustrades",
        imagePosition: "left",
        imageLabel: "Balustrade photo",
        imageSrc: "/images/balustrades/new-home-staircase.jpg",
        paragraphs: [
          "Every balustrade we make is crafted to order in our workshop in Exeter. Whether you love the timeless warmth of solid timber or the light, contemporary feel of frameless glass panels, we'll create a design that complements the character of your home.",
          "We work primarily in wood and glass, the two finishes Devon homeowners ask for most. Our wooden balustrades are made from premium hardwoods such as oak, ash and walnut, and can be paired with toughened glass where you want to keep a room feeling open and full of light. Every balustrade is built to last and made to comply with UK building regulations, so it's as safe as it is beautiful.",
        ],
      },
    ],
    tanBand: {
      heading: "We'd love to hear from you...",
      body: "Simply fill out the form on our free estimate page and we'll be in touch to talk through your ideas and arrange an obligation-free quote, tailored to your project, wherever you are in Exeter or the wider Devon area.",
      cta: { label: "Free Estimate", href: "/free-estimate" },
    },
    extraPanels: [
      {
        heading: "Why go for bespoke balustrades?",
        imagePosition: "right",
        imageLabel: "Balustrade detail photo",
        imageSrc: "/images/balustrades/black-external-ballustrades.jpg",
        paragraphs: [
          "Choosing a bespoke balustrade means it's made for your home and nobody else's. Unlike off-the-shelf kits, ours are measured, designed and finished for your need. The right baluster spacing, the handrail profile you want, and a seamless fit you simply can't get from standard parts.",
          "Bespoke also means freedom of design. Want hand-turned timber spindles to suit a period property in Exmouth or Sidmouth, or sleek glass to modernise a new build near Exeter? We'll bring your vision to life, balancing how it looks with how it has to perform underfoot for years to come.",
        ],
      },
    ],
  },
  gates: {
    slug: "gates",
    h1: "Bespoke Gates",
    metaTitle: "Bespoke Wooden & Metal Gates in Exeter, Devon",
    metaDescription:
      "Custom driveway, garden and entrance gates crafted in hardwood, iron, steel or aluminium. Designed for your property, made in our Devon workshop.",
    intro:
      "Bespoke gates are custom-designed solutions tailored to meet your specific requirements, aesthetic preferences, and project needs. Unlike standard gates, bespoke gates are crafted to reflect your vision, ensuring a unique and personalized entrance for your home or business.",
    topGalleryImages: [
      "/images/gates/bespoke-gates-for-driveway.jpg",
      "/images/gates/entry-exit-gates.jpg",
      "/images/gates/driveway-gates.jpg",
      "/images/gates/driveway-gates-full.jpg",
      "/images/gates/external-storage-gates.jpg",
    ],
    panels: [
      {
        heading: "Our approach to creating bespoke gates",
        imagePosition: "left",
        imageLabel: "Driveway gate photo",
        imageSrc: "/images/gates/external-storage-gates.jpg",
        paragraphs: [
          "Our bespoke gates are available in a range of materials, including hardwoods like Oak, Iroko, and Sapele for a traditional look, as well as wrought iron, steel, and aluminium for contemporary styles. We can also incorporate custom features such as automation, decorative elements, and enhanced security options to suit your needs. This flexibility allows you to create a gate that not only looks stunning but also provides optimal protection for your premises.",
          "To inspire your design, you can browse our gallery of completed bespoke gates, which showcases a variety of styles and finishes. From elegant wooden driveway gates to sleek aluminium entrance gates, our portfolio highlights the craftsmanship and creativity that goes into each project.",
        ],
      },
    ],
    tanBand: {
      heading: "We'd love to hear from you...",
      body: "To get started, simply fill out the form on our estimation page. We'll then contact you to discuss your requirements in more detail and provide an obligation-free estimation tailored to your project.",
      cta: { label: "Free Estimation", href: "/free-estimate" },
    },
    extraPanels: [
      {
        heading: "Why go for bespoke gates?",
        imagePosition: "right",
        imageLabel: "Gate detail photo",
        imageSrc: "/images/gates/bespoke-gates-for-driveway.jpg",
        bullets: [
          "**Customisation:** Every gate is made to measure, allowing you to choose materials, styles, and features that suit your property.",
          "**Enhanced Security:** Bespoke gates offer superior security and durability, providing peace of mind for your premises.",
          "**Aesthetic Appeal:** Whether you prefer classic wood, modern metal, or a combination, bespoke gates add elegance and character to your entrance.",
          "**Expert Craftsmanship:** Our skilled professionals combine advanced techniques with traditional craftsmanship to create gates that last for years.",
        ],
      },
    ],
  },
  doors: {
    slug: "doors",
    h1: "Bespoke Doors in Devon",
    metaTitle: "Bespoke Doors in Exeter, Devon — Front, French, Bifold",
    metaDescription:
      "Front doors, French doors, bifolds, sliders and internal doors — all handcrafted in our Exeter workshop from oak, sapele, Accoya and other premium timbers.",
    intro:
      "From elegant front entrance doors to spacious bifolding and sliding doors, Devon Joinery designs and manufactures every door in our family-run workshop to your exact requirements.",
    showHeaderCta: true,
    topGalleryImages: [
      "/images/doors/timber-front-door.jpg",
      "/images/doors/white-french-doors-in-brick-building.jpg",
      "/images/doors/timber-bi-folding-doors.jpg",
      "/images/doors/sliding-doors.jpg",
      "/images/doors/timber-external-door.jpg",
      "/images/doors/white-bi-fold-doors.jpg",
    ],
    panels: [
      {
        heading: "Our approach to creating bespoke doors",
        imagePosition: "left",
        imageLabel: "Front door photo",
        imageSrc: "/images/doors/black-front-door-in-stone-building.jpg",
        boldLead:
          "At Devon Joinery, our bespoke doors are made the traditional way: jointed, finished, and built to last, not just cut from standard profiles.",
        paragraphs: [
          "We work in quality hardwoods, softwoods, and modern materials to create doors for homes, renovations, and commercial projects across Devon and the South West.",
          "Every door project starts with a conversation about your home, your needs, and your vision. From there, Devon Joinery takes measurements, develops a design, agrees materials and finishes, and then manufactures the doors in-house before coordinating installation with trusted fitters or your chosen contractor.",
        ],
      },
    ],
    faq: {
      heading: "The types of bespoke doors that we create:",
      showReviewBadge: true,
      items: [
        {
          q: "Front Entrance Doors",
          a: "Make a lasting first impression with a handcrafted front door built to your design, glazing, and hardware — combining kerb appeal with security and weather performance.",
        },
        {
          q: "French Doors",
          a: "Classic double doors that open wide to bring the outside in, ideal for linking living spaces to gardens and patios with plenty of natural light.",
        },
        {
          q: "Bifolding Doors",
          a: "Space-saving folding panels that concertina neatly to one side, opening up an entire wall for a seamless connection between indoors and out.",
        },
        {
          q: "Sliding Doors",
          a: "Sleek, large-panel sliding doors that glide effortlessly, maximising glazed area and views while taking up no swing space.",
        },
        {
          q: "Interior Doors",
          a: "Bespoke internal doors made to match your home's character, from panelled period styles to clean contemporary designs, in the timber and finish of your choice.",
        },
        {
          q: "Doors for Heritage & Listed Buildings",
          a: "Sympathetic, made-to-measure doors that respect original proportions and detailing, crafted to meet conservation requirements for period and listed properties.",
        },
      ],
    },
    extraPanels: [
      {
        heading: "Why choose bespoke doors?",
        imagePosition: "right",
        imageLabel: "Interior door photo",
        imageSrc: "/images/doors/interior-doors.jpg",
        paragraphs: [
          "Choosing bespoke doors with Devon Joinery means your doors are designed for your property, not the other way around. Proportions, glazing, mouldings, and hardware can all be tailored to suit your space and style, which is especially important for character homes and new builds.",
        ],
        boldLead: "For homeowners, that means:",
        bullets: [
          "Perfect fit and seamless integration.",
          "Enhanced security and energy efficiency.",
          "A lasting investment that complements your property.",
        ],
      },
      {
        heading: "Timbers & Materials We Work With",
        imagePosition: "right",
        imageLabel: "Timber samples photo",
        imageSrc: "/images/doors/timber-stained-french-doors.jpg",
        paragraphs: [
          "The timber you choose affects the look, lifespan, and performance of your doors. At Devon Joinery, we carefully select materials to suit each project, whether it's a period cottage, a coastal property, or a contemporary new build.",
          "**Hardwoods** such as European oak, sapele, and iroko are prized for their natural beauty, strength, and longevity. Oak is particularly popular for entrance doors and heritage properties, offering a rich grain that can be left natural or stained to suit your style.",
          "**Accoya** is a modified timber engineered for exceptional stability and rot resistance. It's an ideal choice for sliding and bifolding doors where large panels need to remain warp-free over time, and it performs brilliantly in exposed coastal locations. We also work in quality **softwoods** and **engineered timber sections**, always ensuring the right material is matched to the right application.",
        ],
      },
    ],
  },
  windows: {
    slug: "windows",
    h1: "Bespoke Windows",
    metaTitle: "Bespoke Timber Windows in Exeter, Devon — Sash & Casement",
    metaDescription:
      "Sash, casement, stormproof, pivot and sliding timber windows made to order in Exeter. Ideal for period, listed and conservation properties across Devon.",
    intro:
      "From classic sash replacements in period properties to contemporary casement windows for modern extensions, Devon Joinery designs and manufactures each frame to order in our family-run Exeter workshop.",
    topGalleryImages: [
      "/images/windows/home-windows---white-casement.jpg",
      "/images/windows/listed-property-windows.jpg",
      "/images/windows/sliding-windows.jpg",
      "/images/windows/modern-style-windows.jpg",
      "/images/windows/white-casement-windows-in-home.jpg",
      "/images/windows/windows-for-bathrooms.jpg",
    ],
    panels: [
      {
        heading: "Bespoke timber windows",
        imagePosition: "left",
        imageLabel: "Sash window photo",
        imageSrc: "/images/windows/modern-style-windows.jpg",
        paragraphs: [
          "At Devon Joinery, bespoke windows are made the traditional way: carefully jointed, fully finished and built to last, rather than cut from standard off-the-shelf profiles.",
          "Working in quality softwoods, hardwoods and modern modified timbers such as Accoya, the team produces new and replacement windows for homes, renovations and commercial projects across Devon and the South West.",
          "Choosing bespoke joinery allows the windows to be designed around your property, rather than forcing the property to fit a standard size or style.",
        ],
      },
    ],
    faq: {
      heading: "The different types of bespoke windows that we can do:",
      items: [
        {
          q: "Sliding Sash Windows",
          a: "Traditional vertically-sliding sash windows, made to match period proportions and glazing bars — with the option of modern draught seals and slim double glazing for comfort.",
        },
        {
          q: "Flush Casement Windows",
          a: "Side-hung casements that sit flush within the frame for a clean, timeless look suited to both period cottages and contemporary homes.",
        },
        {
          q: "Stormproof Windows",
          a: "Casement windows with an overlapping, weather-rebated design that offers extra protection against wind and rain in exposed locations.",
        },
        {
          q: "Pivot Windows",
          a: "Windows that rotate on a central pivot, allowing easy cleaning from inside and a striking, contemporary opening action.",
        },
        {
          q: "Sliding Windows",
          a: "Horizontally-sliding frames that open without projecting outward — practical where space outside the window is limited.",
        },
        {
          q: "Secondary Glazing",
          a: "A discreet internal glazed panel fitted behind existing windows to improve thermal and acoustic performance while retaining original joinery.",
        },
      ],
    },
    extraPanels: [
      {
        heading: "Why choose bespoke windows?",
        imagePosition: "right",
        imageLabel: "Window detail photo",
        imageSrc: "/images/windows/single-hung-window.jpg",
        paragraphs: [
          "Proportions, glazing bars, mouldings and opening configurations can all be matched to existing details or tailored to a new design, which is especially important for character homes and conservation areas.",
        ],
        boldLead: "For homeowners, that means:",
        bullets: [
          "Better visual balance and kerb appeal.",
          "Improved comfort through modern glazing and seals.",
          "A long-term investment that complements the property rather than fighting against it.",
        ],
      },
    ],
  },
  "media-units": {
    slug: "media-units",
    h1: "Bespoke Media Units",
    metaTitle: "Bespoke Media Units & TV Walls in Exeter, Devon",
    metaDescription:
      "Bespoke media units, TV cabinets and full media walls designed to fit your room. Wood, gloss, glass and matt finishes, handcrafted in Exeter.",
    intro:
      "Transform your living space with our stylish and functional media units, designed to organize your entertainment essentials while adding a touch of elegance to your home.",
    topGalleryImages: [
      "/images/media-units/media-unit-in-a-home.jpg",
      "/images/media-units/green-media-unit.jpg",
      "/images/media-units/black-tv-cabinet.jpg",
      "/images/media-units/wooden-tv-cabinet.jpg",
      "/images/media-units/wall-to-wall-media-unit.jpg",
      "/images/media-units/large-media-unit.jpg",
    ],
    panels: [
      {
        heading: "Our approach to creating bespoke media units",
        imagePosition: "left",
        imageLabel: "Media unit photo",
        imageSrc: "/images/media-units/large-media-unit.jpg",
        paragraphs: [
          "Each media unit is crafted with customizable layouts, allowing you to choose adjustable shelves, closed cabinets, and open display spaces that best fit your needs. Durable finishes in wood, gloss, glass, and matt options are available in a wide range of colors, ensuring your unit complements your décor perfectly.",
          "Integrated cable management and discreet storage for remotes and accessories help keep your space tidy and clutter-free, while options for built-in or freestanding units ensure there's a solution for every room size and layout.",
        ],
      },
    ],
    tanBand: {
      heading: "We'd love to hear from you...",
      body: "To get started, simply fill out the form on our estimation page. We'll then contact you to discuss your requirements in more detail and provide an obligation-free estimation tailored to your project.",
      cta: { label: "Free Estimation", href: "/free-estimate" },
    },
    extraPanels: [
      {
        heading: "A unique look & feel",
        imagePosition: "right",
        imageLabel: "Media wall photo",
        imageSrc: "/images/media-units/wall-to-wall-media-unit.jpg",
        paragraphs: [
          "For those seeking a truly unique look, bespoke media walls can be tailored to your room's dimensions, combining style and practicality in a way that's entirely your own. Our multi-functional units go beyond just media storage, offering additional features like office space, seating, or extra shelving for a versatile addition to your home.",
          "Styling your media unit is simple — open shelves provide a perfect spot for family photos, books, and collectibles, while closed cabinets keep electronics and remotes out of sight. Adding ambient lighting or decorative back panels can further enhance the unit's visual appeal, and regular reorganization ensures it remains both functional and fresh.",
          "This approach creates a warm, inviting focal point in your living room while keeping your entertainment essentials neatly organized and easily accessible.",
        ],
      },
    ],
  },
  receptions: {
    slug: "receptions",
    h1: "Bespoke Receptions",
    metaTitle: "Bespoke Reception Counters & Desks in Exeter, Devon",
    metaDescription:
      "Bespoke reception counters and welcome desks for hotels, retailers, offices and libraries. Designed and built in our Exeter workshop for lasting impact.",
    intro:
      "From welcoming hotel foyers to bespoke commercial reception desks, Devon Joinery designs and manufactures reception joinery that makes an impression from the moment your visitors walk in.",
    topGalleryImages: [
      "/images/receptions/reception-for-dvcc.jpg",
      "/images/receptions/reception-front-counters-for-library.jpg",
      "/images/receptions/reception-retail-counters.jpg",
      "/images/receptions/reception-front-counter.jpg",
      "/images/receptions/reception-counter-for-millies.jpg",
      "/images/receptions/reception---counter-for-food.jpg",
    ],
    panels: [
      {
        heading: "Our approach to bespoke reception joinery",
        imagePosition: "left",
        imageLabel: "Reception desk photo",
        imageSrc: "/images/receptions/reception---counter-for-food.jpg",
        paragraphs: [
          "Every reception we build is designed around the space, the brand and the way you work. We combine premium timbers, veneers and modern materials with expert cabinetry to create desks and welcome areas that look considered and hard-wearing.",
          "From initial sketches through to on-site installation, our workshop team handles the project end-to-end so you get a reception area that fits perfectly and lasts.",
        ],
      },
    ],
    tanBand: {
      heading: "We'd love to hear from you...",
      body: "Tell us about your space and how you'd like it to feel. We'll put together an obligation-free estimate and talk through the options.",
      cta: { label: "Free Estimate", href: "/free-estimate" },
    },
    extraPanels: [
      {
        heading: "Why go for a bespoke reception?",
        imagePosition: "right",
        imageLabel: "Reception detail photo",
        imageSrc: "/images/receptions/reception--counter-for-yoshe.jpg",
        paragraphs: [
          "A bespoke reception lets you shape the arrival experience for your customers. Sizes, materials, storage and branded details are all yours to specify — so nothing has to be a compromise.",
        ],
      },
    ],
  },
  staircases: {
    slug: "staircases",
    h1: "Bespoke Staircases",
    metaTitle: "Bespoke Timber Staircases in Exeter, Devon",
    metaDescription:
      "Bespoke oak, painted, and contemporary staircases hand-built in Exeter. Traditional to modern designs, engineered to suit your home. Free estimate.",
    intro:
      "A staircase is often the most striking feature of a home. Devon Joinery designs and hand-builds bespoke staircases in a range of styles and timbers, made to fit your space exactly.",
    topGalleryImages: [
      "/images/staircases/wooden-staircase.jpg",
      "/images/staircases/new-home-staircase.jpg",
      "/images/staircases/wooden-staircase-with-handrail.jpg",
      "/images/staircases/winding-staircase.jpg",
      "/images/staircases/wooden-staircase-with-wooden-ballustrades.jpg",
      "/images/staircases/wooden-staircase-with-steel-ballustrades.jpg",
    ],
    panels: [
      {
        heading: "Our approach to bespoke staircases",
        imagePosition: "left",
        imageLabel: "Staircase photo",
        imageSrc: "/images/staircases/staircase-in-the-process-of-manufacturing.jpg",
        paragraphs: [
          "From traditional oak and painted staircases to contemporary open-tread and cantilevered designs, every staircase we make is drawn, engineered and built to order in our Exeter workshop.",
          "We work closely with homeowners, architects and builders to make sure the finished staircase is beautiful, safe and structurally sound — from the first sketch through to fitting.",
        ],
      },
    ],
    tanBand: {
      heading: "We'd love to hear from you...",
      body: "Send us your plans or a few photos of the space and we'll be in touch to talk through your options and put together a free estimate.",
      cta: { label: "Free Estimate", href: "/free-estimate" },
    },
    extraPanels: [
      {
        heading: "Why go for a bespoke staircase?",
        imagePosition: "right",
        imageLabel: "Staircase detail photo",
        imageSrc: "/images/staircases/staircase-with-wooden-ballustrades.jpg",
        paragraphs: [
          "A made-to-measure staircase means everything — treads, risers, handrails, balustrade — is designed for your home. That gives you complete control over the look, the feel underfoot and how it works alongside the rest of the property.",
        ],
      },
    ],
  },
  "wardrobes-and-storage": {
    slug: "wardrobes-and-storage",
    h1: "Bespoke Wardrobes & Storage",
    metaTitle: "Fitted Wardrobes & Bespoke Storage in Exeter, Devon",
    metaDescription:
      "Fitted wardrobes, dressing rooms and made-to-measure storage for awkward eaves, chimneys and sloping ceilings. Handmade in our Exeter workshop.",
    intro:
      "Fitted wardrobes, dressing rooms and clever storage solutions, designed and built by Devon Joinery to make the most of every corner of your home.",
    topGalleryImages: [
      "/images/wardrobes-and-storage/bespoke-wardrobes.jpg",
      "/images/wardrobes-and-storage/bespoke-storage-for-homes.jpg",
      "/images/wardrobes-and-storage/bespoke-cabinets.jpg",
      "/images/wardrobes-and-storage/bespoke-storage.jpg",
      "/images/wardrobes-and-storage/bespoke-storage-unit.jpg",
      "/images/wardrobes-and-storage/fitted-wardrobes.jpg",
    ],
    panels: [
      {
        heading: "Our approach to fitted wardrobes and storage",
        imagePosition: "left",
        imageLabel: "Fitted wardrobe photo",
        imageSrc: "/images/wardrobes-and-storage/wardrobe-for-homes.jpg",
        paragraphs: [
          "We start with the space — awkward eaves, sloping ceilings, chimney breasts, anything a standard flat-pack can't handle — and design storage that fits perfectly. Doors, drawers, hanging rails and interiors are all specified around what you actually own and how you use the room.",
          "Everything is manufactured in our Exeter workshop in quality materials and installed by our own team, so the finish is consistent from top to bottom.",
        ],
      },
    ],
    tanBand: {
      heading: "We'd love to hear from you...",
      body: "Tell us about the room and what you'd like it to hold. We'll come back with ideas and a free, no-obligation estimate.",
      cta: { label: "Free Estimate", href: "/free-estimate" },
    },
    extraPanels: [
      {
        heading: "Why go for bespoke storage?",
        imagePosition: "right",
        imageLabel: "Wardrobe interior photo",
        imageSrc: "/images/wardrobes-and-storage/wood-and-glass-storage.jpg",
        paragraphs: [
          "Off-the-shelf furniture rarely uses a room's full height or depth. Bespoke storage does — giving you more space, a cleaner look, and interiors laid out to suit the way you live.",
        ],
      },
    ],
  },
};

export function listServiceSlugs(): string[] {
  return Object.keys(serviceContent);
}
