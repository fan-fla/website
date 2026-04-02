import { MessageCircle } from "lucide-react";
import { ResponsiveImage } from "@/app/components/ui/ResponsiveImage";
import { buildWhatsAppUrl } from "@/app/data/site";

export function GiftSection() {
  return (
    <section
      id="presente"
      className="flex w-full flex-col bg-[#483832] lg:flex-row-reverse"
    >
      <div className="relative h-[250px] w-full md:h-[300px] lg:h-auto lg:w-1/2">
        <ResponsiveImage
          basePath="/cookies/GiftImage.png"
          alt="Caixa presente"
          fill
        />
      </div>

      <div className="flex flex-col gap-6 px-5 py-10 md:gap-7 md:px-10 md:py-12 lg:w-1/2 lg:justify-center lg:gap-7 lg:px-16 lg:py-16">
        <span className="font-inter text-[11px] font-semibold uppercase tracking-[3px] text-[#E8A832] md:text-[12px]">
          EMBALAGENS & PRESENTES
        </span>

        <h2 className="font-poppins text-[24px] font-bold leading-[1.2] text-[var(--text-cream)] md:text-[32px] lg:text-[36px]">
          As nossas embalagens
        </h2>

        <div className="h-[3px] w-[60px] rounded-sm bg-[#E8A832]" />

        <p className="font-inter text-[14px] leading-[1.7] text-white/80 md:text-[15px] lg:text-[16px]">
          Qualidade que se reflete não apenas no produto, também como é
          apresentado. As embalagens são ecológicas, resistentes e de fecho
          fácil, incluem informações claras sobre modo de conservação, tempo de
          consumo e lista de ingredientes.
        </p>

        <p className="font-inter text-[14px] font-semibold italic text-[#E8A832] md:text-[15px] lg:text-[16px]">
          Também temos opções especiais para presente — ideais para
          aniversários, agradecimentos ou qualquer ocasião.
        </p>

        <a
          href={buildWhatsAppUrl("Olá! Gostaria de encomendar uma embalagem para presente. Podem ajudar-me?")}
          className="flex w-fit items-center gap-2.5 rounded-[30px] bg-[var(--flafla-dark-brown)] px-8 py-4 font-inter text-[14px] font-bold text-white transition-transform hover:scale-105 md:text-[15px]"
        >
          <MessageCircle className="h-5 w-5" />
          Encomendar no WhatsApp
        </a>
      </div>
    </section>
  );
}
