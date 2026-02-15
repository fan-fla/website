"use client";

import { MessageCircle, Menu, X, Instagram, Facebook } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FlaFlaLogo } from "@/app/components/brand/FlaFlaLogo";
import { navLinks } from "@/app/data/navigation";
import { siteConfig } from "@/app/data/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // ESC key to close mobile menu and return focus
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_16px_rgba(45,27,20,0.12)]">
      <div className="flex h-[70px] items-center justify-between px-5 md:h-[80px] md:px-10 lg:h-[90px] lg:px-[60px]">
        <FlaFlaLogo className="h-[50px] w-[88px] md:h-[55px] md:w-[96px] lg:h-[63px] lg:w-[110px]" />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-inter text-[15px] font-medium transition-colors hover:text-black ${
                link.active ? "text-black" : "text-black/60"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA - visible only on lg+ */}
        <a
          href={siteConfig.whatsapp.url}
          className="hidden items-center gap-2 rounded-3xl bg-[var(--flafla-dark-brown)] px-6 py-2.5 font-inter text-[13px] font-semibold text-white transition-transform hover:scale-105 lg:flex"
        >
          <MessageCircle className="h-4 w-4" />
          Pedir no WhatsApp
        </a>

        {/* Tablet/Mobile: CTA button + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Tablet CTA - visible on md to lg */}
          <a
            href={siteConfig.whatsapp.url}
            className="hidden items-center gap-2 rounded-3xl bg-[var(--flafla-dark-brown)] px-5 py-2 font-inter text-[12px] font-semibold text-white transition-transform hover:scale-105 md:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir no WhatsApp
          </a>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[var(--text-dark)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--text-dark)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col items-center px-5 py-8 md:py-10">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex w-full flex-col items-center">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 font-poppins text-[16px] font-semibold text-[var(--text-dark)] md:text-[18px]"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="h-px w-[200px] bg-black/10 md:w-[300px]" />
                )}
              </div>
            ))}

            {/* Social icons - mobile only */}
            <div className="mt-8 flex items-center gap-6 md:hidden">
              <a
                href={siteConfig.social.instagram}
                className="text-[var(--text-dark)]/60 transition-colors hover:text-[var(--text-dark)]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                className="text-[var(--text-dark)]/60 transition-colors hover:text-[var(--text-dark)]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.whatsapp.url}
                className="text-[var(--text-dark)]/60 transition-colors hover:text-[var(--text-dark)]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            {/* WhatsApp CTA - mobile only */}
            <a
              href={siteConfig.whatsapp.url}
              className="mt-6 flex w-full max-w-[280px] items-center justify-center gap-2 rounded-3xl bg-[var(--flafla-dark-brown)] px-6 py-3.5 font-inter text-[14px] font-semibold text-white md:hidden"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
