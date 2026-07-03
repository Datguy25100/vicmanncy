import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(value: number, currency = "NGN") {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Rough solar savings estimate used by the calculator widget.
 * Not a substitute for a full site survey — used to give homeowners
 * a directional number before they request a formal quote.
 */
export function estimateSolarSavings(input: {
  monthlyBillNgn: number;
  roofSizeSqft: number;
  sunHoursPerDay?: number;
}) {
  const { monthlyBillNgn, roofSizeSqft, sunHoursPerDay = 5.5 } = input;

  // Assume solar can realistically offset up to 85% of the bill,
  // capped by how much roof area is available for panels.
  const maxSystemCoverage = Math.min(1, roofSizeSqft / 500); // ~500 sqft covers a typical full offset
  const offsetRatio = Math.min(0.85, 0.4 + maxSystemCoverage * 0.45);

  const monthlySavingsNgn = Math.round(monthlyBillNgn * offsetRatio);
  const annualSavingsNgn = monthlySavingsNgn * 12;

  return {
    monthlySavingsNgn,
    annualSavingsNgn,
    offsetRatio,
    sunHoursPerDay,
  };
}
