export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readMinutes: number;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "solar-incentives-in-nigeria-explained",
    title: "Solar Incentives in Nigeria, Explained Simply",
    excerpt:
      "What VAT exemptions, REA programmes, and import duty waivers actually mean for your solar cost.",
    date: "2026-05-14",
    author: "Vicmanny Integrated Team",
    readMinutes: 6,
    category: "Incentives",
    content: [
      "Solar panels, inverters, and batteries imported for renewable energy projects are exempt from VAT under current federal policy, which lowers the landed cost of a system before installation even begins.",
      "The Rural Electrification Agency runs periodic programmes, including subsidized mini-grid and standalone solar initiatives, that can offset part of the cost for qualifying households and small businesses.",
      "Import duty waivers on solar components are reviewed periodically, so the exact savings can shift year to year — we check current rates against your specific equipment list during consultation.",
      "We handle the paperwork on incentives that apply to your install and give you a documentation packet with your final invoice, so nothing is left for you to chase down later.",
    ],
  },
  {
    slug: "how-many-panels-does-my-roof-need",
    title: "How Many Solar Panels Does My Roof Actually Need?",
    excerpt:
      "Sizing a system isn't about covering your whole roof — it's about matching output to your usage.",
    date: "2026-04-02",
    author: "Vicmanny Integrated Team",
    readMinutes: 5,
    category: "Installation",
    content: [
      "The right number of panels depends on your household's daily kWh usage, your roof's usable area, and how much direct sun it actually receives.",
      "Oversizing a system past your usage rarely pays back faster — excess generation without battery storage to hold it is generation you can't use.",
      "A proper site survey accounts for shading from trees, water tanks, or neighbouring buildings at different times of day, not just roof square footage.",
      "This is why we size systems from your recent billing history and generator fuel spend rather than a flat per-square-foot estimate.",
    ],
  },
  {
    slug: "is-a-solar-battery-worth-it-in-nigeria",
    title: "Is a Solar Battery Worth It in Nigeria?",
    excerpt:
      "Grid outages, generator fuel costs, and backup power — when battery storage actually pencils out.",
    date: "2026-02-20",
    author: "Vicmanny Integrated Team",
    readMinutes: 7,
    category: "Battery Storage",
    content: [
      "For most Nigerian households, battery storage isn't just a savings decision — it's what makes solar useful during the hours the national grid is down, which is often when you need power most.",
      "A battery sized to essential circuits — fridge, some outlets, internet, security — is usually more cost-effective than one sized to run an entire home off-grid.",
      "Compared against a monthly diesel or petrol generator budget, a right-sized battery system frequently pays for itself faster than the panels alone would on grid savings.",
      "We model both the financial case and the backup case separately during consultation, since they lead to different battery sizing recommendations.",
    ],
  },
  {
    slug: "solar-panel-maintenance-checklist",
    title: "A Simple Solar Panel Maintenance Checklist",
    excerpt:
      "What actually needs attention after installation — and what doesn't.",
    date: "2026-01-11",
    author: "Vicmanny Integrated Team",
    readMinutes: 4,
    category: "Maintenance",
    content: [
      "Harmattan dust is the biggest recurring maintenance factor for panels in most of Nigeria — a fine layer can measurably reduce output within weeks during peak season.",
      "Check your monitoring app monthly for unexpected drops in output — a sudden dip is often the first sign of dust buildup, shading, or a panel fault.",
      "Inverters are the component most likely to need service before panels do; most carry 10–12 year warranties versus 25 years for panels.",
      "An annual professional inspection, timed just after harmattan season, catches loose mounting hardware and connection wear before they become bigger repairs.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
