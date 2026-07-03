export type Project = {
  id: string;
  title: string;
  category: "residential" | "commercial";
  location: string;
  systemSize: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Star Times Estate Residence",
    category: "residential",
    location: "Star Times Estate, Ago Palace Way, Lagos",
    systemSize: "5.2 kW",
    summary: "Rooftop solar array installed for a family home, cutting daily reliance on grid and generator power.",
    image: "/images/projects/star-times-estate.jpg",
  },
  {
    id: "p2",
    title: "Commercial Rooftop Array",
    category: "commercial",
    location: "Lagos",
    systemSize: "40+ panel array",
    summary: "Large-scale rooftop installation across a commercial building, sized for heavy daytime facility load.",
    image: "/images/projects/commercial-rooftop-array.jpg",
  },
  {
    id: "p3",
    title: "Residential Install with Water Tank Support",
    category: "residential",
    location: "Lagos",
    systemSize: "6.4 kW",
    summary: "Full rooftop array installed alongside the home's elevated water storage system.",
    image: "/images/projects/residential-with-tank.jpg",
  },
  {
    id: "p4",
    title: "Hybrid Inverter & Battery Backup Install",
    category: "residential",
    location: "Lagos",
    systemSize: "Deye hybrid inverter + dual battery bank",
    summary: "Wall-mounted hybrid inverter and battery bank providing seamless backup power during outages.",
    image: "/images/services/inverter-battery-wall.jpg",
  },
  {
    id: "p5",
    title: "Commercial Inverter Room Build-Out",
    category: "commercial",
    location: "Lagos",
    systemSize: "Dual inverter + battery setup",
    summary: "A dedicated power room built out with dual inverters and battery banks for a commercial facility.",
    image: "/images/services/inverter-room-commercial.jpg",
  },
  {
    id: "p6",
    title: "Rooftop Installation In Progress",
    category: "residential",
    location: "Lagos",
    systemSize: "In-progress install",
    summary: "Our technicians on-site mounting and wiring a residential rooftop solar array.",
    image: "/images/hero/installers-on-roof.jpg",
  },
];
