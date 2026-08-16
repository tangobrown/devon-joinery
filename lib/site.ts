export const SITE_URL = "https://www.devonjoinery.co.uk";

export const site = {
  name: "Devon Joinery",
  phone: "01395 239 049",
  phoneHref: "tel:01395239049",
  email: "info@devonjoinery.co.uk",
  emailHref: "mailto:info@devonjoinery.co.uk",
  // Verified Postmark sending identity. Must be a verified Sender Signature or
  // an address on a domain verified in Postmark (DKIM/SPF). Enquiry
  // notifications are sent From here.
  mailFrom: "Devon Joinery <enquiries@devonjoinery.co.uk>",
  // Postmark message stream ID for this server (Servers → stream → Stream ID).
  postmarkMessageStream: "devon-joinery",
  address: {
    lines: [
      "Clyst Court",
      "Blackmore Rd",
      "Hill Barton Business Park",
      "Clyst St. Mary, Exeter",
      "Devon EX5 1SA",
    ],
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Devon+Joinery,+Clyst+Court,+Hill+Barton+Business+Park,+Exeter+EX5+1SA&z=13&output=embed",
  formspreeEndpoint: "https://formspree.io/f/mqevnpjb",
};

export const footerMoreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Work Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Free Estimate", href: "/free-estimate" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const accreditations = [
  {
    id: "accoya",
    label: "Trained User of Accoya",
    logo: "/images/accreditations/accoya.png",
  },
  {
    id: "bwf",
    label: "British Woodworking Federation",
    logo: "/images/accreditations/bwf.png",
  },
  {
    id: "ssip",
    label: "SSIP",
    logo: "/images/accreditations/ssip.png",
  },
  {
    id: "citb",
    label: "Construction Industry Training Board",
    logo: "/images/accreditations/citb.png",
  },
];
