import { ProductCard } from "@/app/components/ui/ProductCard";
import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { cookies } from "@/app/data/products";

export function SaboresSection() {
  return (
    <section id="sabores">
      <CapulanaStrip />
      <div className="w-full bg-[#fcfcfc] px-5 py-10 md:px-10 md:py-12 lg:px-20 lg:py-[60px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:gap-10 lg:gap-[60px]">
          <SectionHeader
            label="LINHA DE COOKIES"
            title="Cookies Artesanais de Moçambique"
            subtitle="Cada receita celebra uma região diferente do nosso Moçambique"
          />

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {cookies.map((cookie) => (
              <ProductCard key={cookie.name} {...cookie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
