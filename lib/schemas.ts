import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number").optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  propertyType: z.enum(["residential", "commercial"], {
    errorMap: () => ({ message: "Select a property type" }),
  }),
  location: z.string().min(2, "Enter your city or zip code"),
  monthlyBill: z.coerce.number().min(1, "Enter your average monthly bill"),
  notes: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
