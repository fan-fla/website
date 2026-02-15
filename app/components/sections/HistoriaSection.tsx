import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { ResponsiveImage } from "@/app/components/ui/ResponsiveImage";

export function HistoriaSection() {
  return (
    <section id="historia">
      <CapulanaStrip />
      <div className="flex w-full flex-col bg-white lg:flex-row">
        <div className="relative h-[250px] w-full md:h-[300px] lg:h-auto lg:w-1/2">
          <ResponsiveImage
            basePath="/cookies/HistoriaImage.png"
            alt="A nossa história"
            fill
          />
        </div>

        <div className="flex flex-col gap-5 px-5 py-10 md:gap-6 md:px-10 md:py-12 lg:w-1/2 lg:justify-center lg:gap-6 lg:px-16 lg:py-16">
          <span className="font-inter text-[11px] font-semibold uppercase tracking-[3px] text-[var(--flafla-orange)] md:text-[12px]">
            A NOSSA HISTÓRIA
          </span>

          <h2 className="font-poppins text-[24px] font-bold leading-[1.2] text-[var(--text-dark)] md:text-[32px] lg:text-[36px]">
            Nascido em Maputo,{"\n"}Feito com Alma
          </h2>

          <div className="h-[3px] w-[60px] rounded-sm bg-[#E8A832]" />

          <p className="font-inter text-[14px] leading-[1.7] text-[var(--text-body)] md:text-[15px] lg:text-[16px]">
            Tudo começou pelo vicio em assistir canais de culinária e perceber
            que a cozinha permite nos viajar, deslumbrar e transformar.
          </p>

          <p className="font-inter text-[14px] leading-[1.7] text-[var(--text-body)] md:text-[15px] lg:text-[16px]">
            Do tradicional ao que era possível transformar, queríamos o doce mas
            queríamos o saudável também, decidimos brincar com os diferentes
            alimentos que o nosso vasto Moçambique tem, banana, batata doce,
            mandioca, amendoim castanha, sementes.
          </p>

          <p className="font-inter text-[14px] italic leading-[1.7] text-[var(--text-body)] md:text-[15px] lg:text-[16px]">
            Antes para a nossa família, hoje para o mundo, nasce a FAN FLA com
            cookies e barrinhas que sabem a cuidado, casa, tradição e
            simplesmente o amor de dar amor.
          </p>
        </div>
      </div>
    </section>
  );
}
