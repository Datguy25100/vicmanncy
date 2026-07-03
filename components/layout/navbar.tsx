"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-200",
        scrolled ? "shadow-[0_2px_12px_rgba(27,42,36,0.08)]" : "border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/vicmanny-full-logo.png"
            alt="Vicmanny Integrated Technology Services Limited"
            width={304}
            height={77}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-ink transition-colors hover:text-primary",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Get a Free Quote
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-surface-tint hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="mt-4 w-full">
            Get a Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}
