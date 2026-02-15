import Image from "next/image";
import { siteConfig } from "@/app/data/site";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function ProductCard({
  name,
  description,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(45,27,20,0.16)] lg:h-[450px] lg:w-[380px]">
      <div className="relative h-[180px] w-full overflow-hidden md:h-[200px] lg:h-[220px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 md:gap-4 md:p-6 lg:p-6">
        <h3 className="font-poppins text-[18px] font-bold text-[var(--text-dark)] md:text-[20px] lg:text-[22px]">
          {name}
        </h3>
        <p className="line-clamp-3 flex-1 font-inter text-[13px] leading-[1.5] text-[var(--text-body)] md:text-[14px]">
          {description}
        </p>
        <p className="font-inter text-[12px] font-medium text-[#888888] md:text-[13px]">
          {price}
        </p>
        <a
          href={siteConfig.whatsapp.url}
          className="font-inter text-[14px] font-bold text-[var(--flafla-orange)] transition-colors hover:text-[#D4451A] md:text-[15px]"
        >
          Quero este →
        </a>
      </div>
    </div>
  );
}
