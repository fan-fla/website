import { ProductCard } from "@/app/components/ui/ProductCard";
import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { barrinhas } from "@/app/data/products";

export function BarrinhasSection() {
  return (
    <section>
      <CapulanaStrip />
      <div className="w-full bg-[var(--bg-cream)] px-5 py-10 md:px-10 md:py-12 lg:px-20 lg:py-[60px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:gap-10 lg:gap-[60px]">
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[2px] text-[#f47f56] md:text-[12px]">
              BARRINHAS & PRODUTOS NATURAIS
            </span>
            <h2 className="text-center font-poppins text-[24px] font-bold text-[var(--text-dark)] md:text-[32px] lg:text-[42px]">
              Energia e Sabores de Moçambique
            </h2>
            <p className="text-center font-inter text-[14px] font-normal text-[var(--text-body)] md:text-[16px] lg:text-[17px]">
              Do mel puro de Manica às barrinhas nutritivas e snacks de caju
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {barrinhas.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
