export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: "sun" | "zap" | "droplet" | "lightbulb" | "camera" | "radio" | "cable" | "building" | "shopping";
  benefits: string[];
  process: { title: string; description: string }[];
  image: string;
  localImage: string;
};

export const services: Service[] = [
  {
    slug: "off-grid-solar-installation",
    name: "Off-Grid Solar Energy Installation",
    shortDescription: "Full solar systems for homes and sites with little or no grid access.",
    description:
      "We design and install complete off-grid solar systems — panels, batteries, and inverters sized to run independently of the national grid, for homes, sites, and facilities that need reliable power on their own terms.",
    icon: "sun",
    benefits: [
      "System sized to your real daily energy usage",
      "Panels, batteries, and inverter supplied and installed as one package",
      "Reduced dependence on diesel and petrol generators",
      "Warrantied components with after-sales support",
    ],
    process: [
      { title: "Site survey", description: "We assess roof/land space, sun exposure, and your load requirements." },
      { title: "System design", description: "Panels, battery bank, and inverter sized to your usage." },
      { title: "Installation", description: "Our technicians install and wire the full system." },
      { title: "Commissioning", description: "System tested and handed over with a usage walkthrough." },
    ],
    image: "off grid solar panels rooftop installation",
    localImage: "/images/hero/installers-on-roof.jpg",
  },
  {
    slug: "inverter-system-installation",
    name: "Inverter System Installation",
    shortDescription: "Inverter supply, installation, and integration with solar or mains power.",
    description:
      "From single-unit home inverters to larger hybrid systems, we supply and install inverter systems built to handle your load without the guesswork of an undersized unit.",
    icon: "zap",
    benefits: [
      "Correct inverter sizing for your actual load",
      "Hybrid options that combine mains, solar, and battery input",
      "Clean, code-compliant wiring and changeover setup",
      "Support and troubleshooting after installation",
    ],
    process: [
      { title: "Load assessment", description: "We calculate what needs to run and for how long." },
      { title: "Inverter sizing", description: "Matched to your load and battery bank." },
      { title: "Installation", description: "Wired and integrated with your existing power setup." },
      { title: "Testing", description: "Full load test and changeover check before handover." },
    ],
    image: "inverter system installation technician",
    localImage: "/images/services/inverter-battery-wall.jpg",
  },
  {
    slug: "solar-borehole",
    name: "Solar Borehole",
    shortDescription: "Solar-powered borehole pumping systems for reliable water supply.",
    description:
      "We install solar-powered borehole systems that pump water without relying on grid power or fuel — a practical fit for homes, estates, farms, and facilities needing an independent water supply.",
    icon: "droplet",
    benefits: [
      "Pump sized to your borehole depth and water demand",
      "No recurring fuel cost for water supply",
      "Suitable for homes, estates, and agricultural use",
      "Storage tank and plumbing integration available",
    ],
    process: [
      { title: "Site assessment", description: "Borehole depth, yield, and water demand reviewed." },
      { title: "Pump & panel sizing", description: "Solar array and pump matched to your requirements." },
      { title: "Installation", description: "Pump, panels, and controller installed and wired." },
      { title: "Testing", description: "Flow rate tested before handover." },
    ],
    image: "solar borehole water pump installation",
    localImage: "/images/projects/residential-with-tank.jpg",
  },
  {
    slug: "solar-street-lighting",
    name: "Solar Street Light",
    shortDescription: "Standalone solar street lighting for estates, roads, and compounds.",
    description:
      "Solar street lights that charge by day and run independently by night — no trenching for cabling and no addition to your electricity bill.",
    icon: "lightbulb",
    benefits: [
      "No grid connection or ongoing electricity cost",
      "Automatic dusk-to-dawn operation",
      "Suitable for estates, roads, and industrial compounds",
      "Durable, weather-resistant fittings",
    ],
    process: [
      { title: "Site survey", description: "Pole spacing and lighting coverage planned." },
      { title: "Supply", description: "Poles, panels, and fittings sourced and delivered." },
      { title: "Installation", description: "Poles mounted and lights installed." },
      { title: "Testing", description: "Dusk-to-dawn operation confirmed before handover." },
    ],
    image: "solar street light installation road",
    localImage: "https://images.unsplash.com/photo-1740805276608-ef60e2e468ba?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "solar-cctv-security",
    name: "Solar CCTV & Smart Security",
    shortDescription: "CCTV, smart door security, and solar-powered surveillance systems.",
    description:
      "We install CCTV and smart door security systems — including solar-powered setups for sites without reliable mains power — so your property stays monitored regardless of grid conditions.",
    icon: "camera",
    benefits: [
      "Indoor and outdoor CCTV camera installation",
      "Solar-powered options for off-grid sites",
      "Smart door security and access control",
      "Remote viewing setup on your phone",
    ],
    process: [
      { title: "Site walk-through", description: "Camera placement and coverage areas identified." },
      { title: "Equipment supply", description: "Cameras, recorders, and smart locks sourced." },
      { title: "Installation", description: "Cameras mounted, wired, and configured." },
      { title: "Handover", description: "Remote app access set up and demonstrated." },
    ],
    image: "cctv camera security installation",
    localImage: "https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "telecommunications",
    name: "Telecommunications Infrastructure",
    shortDescription: "Rectifier cabinets, rectifier modules, and CSU installation for telecom sites.",
    description:
      "We supply and install telecom power infrastructure — rectifier cabinets, rectifier modules, and CSUs — for telecom operators and facilities that need dependable site power.",
    icon: "radio",
    benefits: [
      "Rectifier cabinet and module supply and installation",
      "CSU (Charge/Sensor Unit) setup and integration",
      "Site power audits for telecom infrastructure",
      "Ongoing maintenance support",
    ],
    process: [
      { title: "Site audit", description: "Existing power setup and site requirements reviewed." },
      { title: "Equipment supply", description: "Rectifier cabinets and modules sourced to spec." },
      { title: "Installation", description: "Equipment installed and integrated with site power." },
      { title: "Commissioning", description: "Full system test before sign-off." },
    ],
    image: "telecom rectifier cabinet installation",
    localImage: "https://images.unsplash.com/photo-1511233744044-194342066754?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "industrial-solar-installations",
    name: "Industrial Solar Installations",
    shortDescription: "Larger-scale solar systems for factories, warehouses, and industrial sites.",
    description:
      "For industrial and commercial facilities, we design and install larger solar systems built to handle heavier loads and longer duty cycles than a typical residential setup.",
    icon: "building",
    benefits: [
      "System sized from your facility's real load profile",
      "Phased installation to avoid operational disruption",
      "Integration with existing generator or grid setup",
      "Maintenance plans available for ongoing performance",
    ],
    process: [
      { title: "Load audit", description: "Facility energy usage and peak demand assessed." },
      { title: "Engineering design", description: "System designed for your load and site layout." },
      { title: "Installation", description: "Phased install scheduled around operations." },
      { title: "Commissioning", description: "Full system testing and handover." },
    ],
    image: "industrial solar panels warehouse installation",
    localImage: "/images/projects/commercial-rooftop-array.jpg",
  },
  {
    slug: "electrical-solar-cabling",
    name: "Electrical & Solar Cabling",
    shortDescription: "Electrical, solar, and industrial cable supply and installation.",
    description:
      "We supply and install electrical cabling, solar cabling, and industrial cable runs — the wiring backbone behind every safe and code-compliant power or security installation.",
    icon: "cable",
    benefits: [
      "Electrical, solar, and industrial-grade cable supply",
      "Code-compliant wiring and cable runs",
      "Suitable for residential, commercial, and industrial sites",
      "Supplied as part of a project or as standalone cabling work",
    ],
    process: [
      { title: "Scope review", description: "Cable runs and load requirements assessed." },
      { title: "Supply", description: "Correct cable grade and gauge sourced." },
      { title: "Installation", description: "Cabling run, terminated, and tested." },
    ],
    image: "electrical solar cable installation",
    localImage: "https://images.unsplash.com/photo-1767514536575-82aaf8b0afc4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "general-merchandise",
    name: "General Merchandise & Equipment Supply",
    shortDescription: "Supply of solar, telecom, and electrical equipment and components.",
    description:
      "Beyond installation, we supply solar panels, inverters, batteries, cables, CCTV equipment, and related components directly — for contractors, resellers, and businesses sourcing equipment at scale.",
    icon: "shopping",
    benefits: [
      "Direct supply of panels, inverters, batteries, and cabling",
      "CCTV and security equipment available",
      "Bulk and trade pricing for contractors and resellers",
      "Sourcing support for hard-to-find components",
    ],
    process: [
      { title: "Enquiry", description: "Tell us what equipment or quantity you need." },
      { title: "Quotation", description: "We provide pricing and availability." },
      { title: "Supply", description: "Equipment delivered or ready for pickup." },
    ],
    image: "solar equipment warehouse supplies",
    localImage: "/images/services/inverter-room-commercial.jpg",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
