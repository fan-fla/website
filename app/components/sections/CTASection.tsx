import { MessageCircle } from "lucide-react";
import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { buildWhatsAppUrl } from "@/app/data/site";

export function CTASection() {
  return (
    <section id="contacto">
      <CapulanaStrip />
      <div className="flex w-full flex-col items-center gap-6 bg-[var(--accent-terracotta)] px-5 py-10 md:px-10 md:py-12 lg:px-20 lg:py-10">
        <h2 className="text-center font-poppins text-[20px] font-bold text-white md:text-[28px] lg:text-[32px]">
          Prova o sabor da Terra
        </h2>

        <p className="max-w-[500px] text-center font-inter text-[13px] leading-[1.6] text-white/80 md:text-[14px] lg:text-[15px]">
          Encomenda pelo WhatsApp, entregamos em Maputo e Matola.
        </p>

        <a
          href={buildWhatsAppUrl("Olá! Quero fazer uma encomenda de bolachas Fla Fla. Podem ajudar?")}
          className="flex items-center gap-2.5 rounded-[35px] bg-[var(--flafla-dark-brown)] px-7 py-4 font-inter text-[13px] font-bold text-white shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 md:text-[14px]"
        >
          <MessageCircle className="h-5 w-5" />
          Fazer Encomenda no WhatsApp
        </a>
      </div>
    </section>
  );
}
