"use client";

import { useMemo, useState } from "react";
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/field";
import { estimateSolarSavings, formatCurrency } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

// Sun-arc: the sun's marker position along a half-circle traces how much
// of the day (and how much of the bill) solar can realistically cover —
// a small nod to the actual physics the site is selling.
function SunArc({ ratio }: { ratio: number }) {
  const angleDeg = 180 - ratio * 180; // 180 = horizon left, 0 = horizon right
  const angleRad = (angleDeg * Math.PI) / 180;
  const r = 90;
  const cx = 100;
  const cy = 100;
  const sunX = cx + r * Math.cos(angleRad);
  const sunY = cy - r * Math.sin(angleRad);

  return (
    <svg viewBox="0 0 200 115" className="w-full max-w-xs">
      <path
        d="M 10 100 A 90 90 0 0 1 190 100"
        fill="none"
        stroke="#E7EFE9"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 10 100 A 90 90 0 0 1 190 100"
        fill="none"
        stroke="url(#arcGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${ratio * 283} 283`}
      />
      <defs>
        <linearGradient id="arcGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F2A93B" />
          <stop offset="100%" stopColor="#2FA66B" />
        </linearGradient>
      </defs>
      <line x1="10" y1="100" x2="190" y2="100" stroke="#1B2A24" strokeOpacity="0.15" strokeWidth="2" />
      <circle cx={sunX} cy={sunY} r="12" fill="#F2A93B" className="transition-all duration-500 ease-out" />
      <foreignObject x={sunX - 9} y={sunY - 9} width="18" height="18">
        <Sun size={18} color="white" strokeWidth={2.5} />
      </foreignObject>
    </svg>
  );
}

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(80000);
  const [roofSize, setRoofSize] = useState(600);

  const result = useMemo(
    () => estimateSolarSavings({ monthlyBillNgn: monthlyBill, roofSizeSqft: roofSize }),
    [monthlyBill, roofSize]
  );

  return (
    <section className="bg-surface-tint py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Estimate your savings"
          title="See what solar could save you"
          description="A directional estimate based on your bill and roof size. Your formal quote will be more precise."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-card">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-7">
              <div>
                <Label htmlFor="bill">Average monthly electricity bill</Label>
                <div className="flex items-center gap-4">
                  <input
                    id="bill"
                    type="range"
                    min={10000}
                    max={400000}
                    step={5000}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="h-2 w-full flex-1 cursor-pointer appearance-none rounded-full bg-ink/10 accent-primary"
                  />
                  <span className="w-28 shrink-0 text-right text-lg font-bold text-primary">
                    {formatCurrency(monthlyBill)}
                  </span>
                </div>
              </div>

              <div>
                <Label htmlFor="roof">Usable roof area (sq ft)</Label>
                <div className="flex items-center gap-4">
                  <input
                    id="roof"
                    type="range"
                    min={150}
                    max={2000}
                    step={50}
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    className="h-2 w-full flex-1 cursor-pointer appearance-none rounded-full bg-ink/10 accent-primary"
                  />
                  <span className="w-20 shrink-0 text-right text-lg font-bold text-primary">
                    {roofSize} ft²
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="rounded-xl bg-surface-tint p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Est. monthly savings
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary">
                    {formatCurrency(result.monthlySavingsNgn)}
                  </p>
                </div>
              </div>

              <Button href="/contact" className="w-full sm:w-fit">
                Get My Formal Quote
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-tint p-6">
              <SunArc ratio={result.offsetRatio} />
              <p className="mt-2 text-3xl font-bold text-ink">{Math.round(result.offsetRatio * 100)}%</p>
              <p className="text-sm text-ink-muted">of your bill potentially offset</p>
              <p className="mt-6 text-center text-xs text-ink-muted">
                Equipment pricing changes with the market, so we quote every system
                individually — this is a savings estimate, not a cost quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
