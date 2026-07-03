import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { services } from "@/data/services";

export function Footer() {
  const footerServices = services.slice(0, 5);

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
              <Zap size={18} strokeWidth={2.25} fill="currentColor" />
            </span>
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/70">{SITE.description}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">Explore</h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/85 transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-white/85 transition-colors hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">Services</h3>
          <ul className="space-y-2.5">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/85 transition-colors hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-semibold text-accent hover:text-white">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">Contact</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <span className="flex flex-col">
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-accent">{SITE.phone}</a>
                <a href={`tel:${SITE.phoneSecondaryHref}`} className="hover:text-accent">{SITE.phoneSecondary}</a>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {SITE.legalName} ({SITE.rcNumber}). All rights reserved.</p>
          <p>{SITE.hours}</p>
        </div>
      </div>
    </footer>
  );
}
