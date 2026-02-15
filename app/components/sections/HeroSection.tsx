import { ChevronDown } from "lucide-react";
import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { ResponsiveImage } from "@/app/components/ui/ResponsiveImage";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[500px] w-full overflow-hidden md:h-[600px] lg:h-[720px]">
        <ResponsiveImage
          basePath="/cookies/HeroBg.png"
          alt="Fla Fla cookies artesanais"
          fill
          loading="eager"
        />

        <div className="absolute inset-x-4 bottom-8 md:inset-x-auto md:bottom-12 md:left-1/2 md:w-[600px] md:-translate-x-1/2 lg:bottom-[60px] lg:w-[900px]">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#2D1B14CC] px-6 py-8 md:px-10 md:py-10 lg:gap-4 lg:px-12 lg:py-8">
            <h1 className="font-poppins text-center text-[28px] font-bold leading-tight tracking-tight text-[#E8A832] md:text-[40px] lg:text-[52px] lg:tracking-[-1px]">
              Um Gosto de Quero Mais
            </h1>
            <p className="max-w-[750px] text-center font-inter text-[16px] font-normal leading-[1.6] text-white/85 md:text-[18px] lg:text-[22px]">
              Cookies caseiros e saudáveis, feitos à mão em Maputo com
              ingredientes naturais da nossa terra.
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-[60px]">
          <ChevronDown className="h-5 w-5 animate-bounce text-white/60" />
        </div>
      </div>

      <CapulanaStrip className="h-4 lg:h-4" />
    </section>
  );
}
