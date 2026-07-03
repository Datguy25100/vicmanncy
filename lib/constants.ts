export const SITE = {
  name: "Vicmanny Integrated",
  legalName: "Vicmanny Integrated Technology Services Limited",
  rcNumber: "RC 8754036",
  tagline: "Power, security & connectivity — installed right",
  description:
    "Vicmanny Integrated Technology Services Limited installs off-grid solar, inverter systems, solar boreholes, CCTV & smart security, telecommunications infrastructure, and industrial cabling across Lagos and beyond.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vicmannyintegrated.com",
  phone: "0803 275 6879",
  phoneSecondary: "0808 386 1352",
  phoneHref: "+2348032756879",
  phoneSecondaryHref: "+2348083861352",
  email: "vicmannyintegratedtechltd@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348032756879",
  address: "F-Line, Alaba International Market, Lagos State",
  hours: "Mon–Sat 8:00–18:00",
  serviceArea: "Lagos, Ogun & Nationwide",
};

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Get a Quote" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];
