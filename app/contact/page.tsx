import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Vicmanny Integrated team by phone, email, or WhatsApp — or send a message directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your roof"
        description="Reach out with questions, or send a message and we'll follow up within one business day."
      />

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${SITE.phoneHref}`} className="block text-ink-muted hover:text-primary">
                    {SITE.phone}
                  </a>
                  <a href={`tel:${SITE.phoneSecondaryHref}`} className="block text-ink-muted hover:text-primary">
                    {SITE.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-primary"
                  >
                    Click to chat
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-ink-muted hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-ink-muted">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-ink-muted">{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Vicmanny Integrated office location"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Alaba+International+Market,Lagos&output=embed"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
