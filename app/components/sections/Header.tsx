"use client";

import { MessageCircle, Menu, X, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FlaFlaLogo } from "@/app/components/brand/FlaFlaLogo";
import { navLinks } from "@/app/data/navigation";
import { siteConfig, buildWhatsAppUrl } from "@/app/data/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (atBottom) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId) setActiveSection(lastId);
        return;
      }

      const offset = window.innerHeight * 0.3;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_16px_rgba(45,27,20,0.12)]">
      <div className="flex h-[70px] items-center justify-between px-5 md:h-[80px] md:px-10 xl:h-[90px] xl:px-[60px]">
        <FlaFlaLogo className="h-[50px] w-[88px] md:h-[55px] md:w-[96px] xl:h-[63px] xl:w-[110px]" />

        {/* Desktop Navigation - only show at xl (1280px+) where everything fits */}
        <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`whitespace-nowrap font-inter text-[13px] font-medium transition-colors hover:text-black xl:text-[14px] ${
                  isActive ? "text-black" : "text-black/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA - visible only on xl+ */}
        <a
          href={buildWhatsAppUrl("Olá! Quero saber mais sobre as bolachas Fla Fla. Podem ajudar-me?")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-3xl bg-[var(--flafla-dark-brown)] px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-colors hover:bg-[#3d2a22] xl:flex"
        >
          <MessageCircle className="h-4 w-4" />
          Pedir no WhatsApp
        </a>

        {/* Tablet/Mobile: CTA button + hamburger (below xl) */}
        <div className="flex items-center gap-3 xl:hidden">
          {/* Tablet CTA - visible on md to xl */}
          <a
            href={buildWhatsAppUrl("Olá! Quero saber mais sobre as bolachas Fla Fla. Podem ajudar-me?")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-3xl bg-[var(--flafla-dark-brown)] px-5 py-2 font-inter text-[12px] font-semibold text-white transition-colors hover:bg-[#3d2a22] md:flex"
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

      {/* Mobile/Tablet Menu (below xl) */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg xl:hidden">
          <nav className="flex flex-col items-center px-5 py-8 md:py-10">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <div key={link.label} className="flex w-full flex-col items-center">
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`py-4 font-poppins text-[16px] font-semibold md:text-[18px] ${
                      isActive
                        ? "text-[var(--flafla-orange)]"
                        : "text-[var(--text-dark)]"
                    }`}
                  >
                    {link.label}
                  </a>
                  {index < navLinks.length - 1 && (
                    <div className="h-px w-[200px] bg-black/10 md:w-[300px]" />
                  )}
                </div>
              );
            })}

            {/* Social icons - mobile only */}
            <div className="mt-8 flex items-center gap-6 md:hidden">
              <a
                href={siteConfig.social.instagram}
                className="text-[var(--text-dark)]/60 transition-colors hover:text-[var(--text-dark)]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a
                href={siteConfig.social.facebook}
                className="text-[var(--text-dark)]/60 transition-colors hover:text-[var(--text-dark)]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a> */}
              <a
                href={buildWhatsAppUrl("Olá! Quero saber mais sobre as bolachas Fla Fla. Podem ajudar-me?")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-dark)]/60 transition-colors hover:text-[var(--text-dark)]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            {/* WhatsApp CTA - mobile only */}
            <a
              href={buildWhatsAppUrl("Olá! Quero saber mais sobre as bolachas Fla Fla. Podem ajudar-me?")}
              target="_blank"
              rel="noopener noreferrer"
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
