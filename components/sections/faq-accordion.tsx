"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

function groupByCategory(items: FaqItem[]) {
  const groups: Record<string, FaqItem[]> = {};
  for (const item of items) {
    groups[item.category] = groups[item.category] ?? [];
    groups[item.category]!.push(item);
  }
  return groups;
}

export function FaqAccordion() {
  const groups = groupByCategory(faqs);
  const [open, setOpen] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <div className="space-y-12">
      {Object.entries(groups).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-display-md mb-6 font-bold">{category}</h2>
          <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {items.map((item) => {
              const isOpen = open === item.question;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpen(isOpen ? null : item.question)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="font-semibold">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-primary transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-ink-muted sm:px-6">{item.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
