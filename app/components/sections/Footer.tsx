import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { FlaFlaLogo } from "@/app/components/brand/FlaFlaLogo";
import { footerLinks } from "@/app/data/navigation";
import { siteConfig, buildWhatsAppUrl } from "@/app/data/site";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: MessageCircle, href: buildWhatsAppUrl("Olá! Quero saber mais sobre os produtos Fla Fla."), label: "WhatsApp" },
  ];

  return (
    <footer className="w-full bg-[var(--flafla-dark-brown)] px-5 py-8 md:px-10 md:py-10 lg:px-20 lg:py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <FlaFlaLogo className="h-[50px] w-[88px] md:h-[55px] md:w-[96px] lg:h-[63px] lg:w-[110px]" />

          <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-6 lg:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-[13px] font-normal text-white/60 transition-colors hover:text-white md:text-[14px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/60 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p className="font-inter text-[11px] text-white/40 md:text-[12px]">
            © 2025 Fla Fla — Bolachas Artesanais de Moçambique
          </p>
          <p className="font-inter text-[11px] text-white/40 md:text-[12px]">
            Feito com amor em Maputo
          </p>
        </div>
      </div>
    </footer>
  );
}
