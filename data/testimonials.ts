export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Chidinma Okafor",
    role: "Homeowner, Lekki Lagos",
    quote:
      "We used to budget for diesel every week. Since the install, the generator only comes on maybe twice a month. That alone paid for a chunk of the system.",
    rating: 5,
    location: "Lekki, Lagos",
  },
  {
    id: "t2",
    name: "Priya Raman",
    role: "Operations Lead, Fairview Logistics",
    quote:
      "We run a 40,000 sq ft warehouse and were skeptical about payback timelines. Vicmanny modeled it out honestly, including the slow months, and the numbers held up.",
    rating: 5,
    location: "Agbara, Ogun State",
  },
  {
    id: "t3",
    name: "David Adeyemi",
    role: "Homeowner, Maitama Abuja",
    quote:
      "The consultation team told us our roof had too much shade for a good return and recommended we hold off. Came back a year later after clearing the trees and they were right.",
    rating: 5,
    location: "Maitama, Abuja",
  },
  {
    id: "t4",
    name: "Renee Falade",
    role: "Homeowner, Magodo Lagos",
    quote:
      "Battery backup kept our fridge and home office running through a full day of national grid outage last quarter. Worth it for that alone.",
    rating: 5,
    location: "Magodo, Lagos",
  },
];
