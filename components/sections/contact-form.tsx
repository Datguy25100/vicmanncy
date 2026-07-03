"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { Input, Textarea, Label, ErrorText } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
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
        <h3 className="mt-4 text-xl font-bold">Message sent</h3>
        <p className="mt-2 text-ink-muted">We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl bg-white p-6 shadow-card sm:p-8">
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
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" type="tel" placeholder="0801 234 5678" {...register("phone")} />
        <ErrorText>{errors.phone?.message}</ErrorText>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="How can we help?" {...register("message")} />
        <ErrorText>{errors.message?.message}</ErrorText>
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
