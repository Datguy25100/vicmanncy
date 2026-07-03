"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { quoteSchema, type QuoteFormValues } from "@/lib/schemas";
import { Input, Label, ErrorText, Select } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = ["Property", "Energy Usage", "Contact Info"] as const;

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onBlur",
  });

  const stepFields: (keyof QuoteFormValues)[][] = [
    ["propertyType", "location"],
    ["monthlyBill", "notes"],
    ["name", "email", "phone"],
  ];

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto text-secondary" size={40} />
        <h3 className="mt-4 text-xl font-bold">Request received</h3>
        <p className="mt-2 text-ink-muted">
          A member of our team will reach out within one business day with your quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                i <= step ? "bg-primary text-white" : "bg-surface-tint text-ink-muted"
              )}
            >
              {i + 1}
            </div>
            <span className={cn("hidden text-sm font-medium sm:block", i === step ? "text-ink" : "text-ink-muted")}>
              {label}
            </span>
            {i < steps.length - 1 && <div className="h-px flex-1 bg-ink/10" />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <div>
            <Label htmlFor="propertyType">Property type</Label>
            <Select id="propertyType" {...register("propertyType")}>
              <option value="">Select one</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </Select>
            <ErrorText>{errors.propertyType?.message}</ErrorText>
          </div>
          <div>
            <Label htmlFor="location">City or area</Label>
            <Input id="location" placeholder="Lekki, Lagos" {...register("location")} />
            <ErrorText>{errors.location?.message}</ErrorText>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <Label htmlFor="monthlyBill">Average monthly energy bill (₦)</Label>
            <Input id="monthlyBill" type="number" min={1} placeholder="80000" {...register("monthlyBill")} />
            <ErrorText>{errors.monthlyBill?.message}</ErrorText>
          </div>
          <div>
            <Label htmlFor="notes">Anything else we should know? (optional)</Label>
            <Input id="notes" placeholder="Roof age, shading, timeline..." {...register("notes")} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Jane Doe" {...register("name")} />
            <ErrorText>{errors.name?.message}</ErrorText>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="jane@email.com" {...register("email")} />
            <ErrorText>{errors.email?.message}</ErrorText>
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="0801 234 5678" {...register("phone")} />
            <ErrorText>{errors.phone?.message}</ErrorText>
          </div>
        </div>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-600">
          Something went wrong sending your request. Please try again.
        </p>
      )}

      <div className="mt-8 flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          className={cn(step === 0 && "invisible")}
        >
          <ChevronLeft size={16} /> Back
        </Button>

        {step < steps.length - 1 ? (
          <Button type="button" onClick={next}>
            Next <ChevronRight size={16} />
          </Button>
        ) : (
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
