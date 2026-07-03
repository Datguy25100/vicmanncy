export type FaqItem = {
  question: string;
  answer: string;
  category: "Financing" | "Installation" | "Maintenance" | "Warranties";
};

export const faqs: FaqItem[] = [
  {
    category: "Financing",
    question: "Do I need to pay for my solar system upfront?",
    answer:
      "No — we offer $0-down financing plans alongside cash and loan options. Monthly payments are typically structured to stay below your current utility bill from day one.",
  },
  {
    category: "Financing",
    question: "What incentives or exemptions am I eligible for?",
    answer:
      "Most solar equipment qualifies for VAT exemption, and REA-backed programmes periodically offer additional support for qualifying households and small businesses. We check your specific eligibility during consultation.",
  },
  {
    category: "Financing",
    question: "How does solar compare to my current generator costs?",
    answer:
      "We compare your solar payback timeline directly against your current diesel or petrol spend, not just your utility bill — for most households running a generator regularly, that's where the real savings show up.",
  },
  {
    category: "Installation",
    question: "How long does installation take?",
    answer:
      "Most residential installs take 1–3 days on-site. The full process, including permitting and utility interconnection, typically runs 4–8 weeks from signed design to activation.",
  },
  {
    category: "Installation",
    question: "Will solar panels damage my roof?",
    answer:
      "Properly installed panels shouldn't damage your roof, and in many cases they protect the covered area from weathering. If your roof needs replacing, we'll flag it before installation, not after.",
  },
  {
    category: "Installation",
    question: "What happens if my roof isn't a good fit for solar?",
    answer:
      "We'll tell you. Heavy shading, poor structural condition, or unusual roof geometry can make solar a poor investment, and our consultation is built to catch that before you spend anything.",
  },
  {
    category: "Maintenance",
    question: "How often do panels need to be cleaned?",
    answer:
      "Most homes need cleaning once a year at most — rainfall handles the rest. High-pollen or dusty areas may benefit from a mid-year cleaning.",
  },
  {
    category: "Maintenance",
    question: "What happens if a panel or inverter fails?",
    answer:
      "Panels and inverters are covered under manufacturer warranty for defects. Our maintenance plans include priority diagnostic and repair scheduling if something underperforms.",
  },
  {
    category: "Warranties",
    question: "What warranties come with a Vicmanny install?",
    answer:
      "Panels carry a 25-year performance warranty, inverters 10–12 years depending on model, batteries 10 years, and our own workmanship is warrantied for 10 years.",
  },
  {
    category: "Warranties",
    question: "Does the warranty transfer if I sell my home?",
    answer:
      "Yes — panel, inverter, and workmanship warranties transfer to the new homeowner, which is typically a selling point buyers ask about directly.",
  },
];
