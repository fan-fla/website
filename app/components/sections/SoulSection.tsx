import { Globe, Droplets, HandHeart, Leaf } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Ingredientes\nMoçambicanos",
    color: "#f46535",
    bgColor: "#f4653520",
  },
  {
    icon: Droplets,
    title: "Sem Açúcar\nRefinado",
    color: "#E8A832",
    bgColor: "#E8A83220",
  },
  {
    icon: HandHeart,
    title: "Feitos\nà Mão",
    color: "#f46535",
    bgColor: "#f4653520",
  },
  {
    icon: Leaf,
    title: "100%\nNatural",
    color: "#3F8C4A",
    bgColor: "#3F8C4A20",
  },
];

export function SoulSection() {
  return (
    <section className="w-full bg-[var(--bg-cream)] px-5 py-16 md:px-10 md:py-20 lg:px-[200px] lg:py-[100px]">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-10 md:gap-12 lg:gap-[60px]">
        <p className="text-center font-poppins text-[16px] italic leading-[1.8] text-[var(--text-dark)] md:text-[18px] lg:text-[22px]">
          Castanha de caju colhida à mão. Coco fresco ralado na hora. Mel puro
          do campo. Cada cookie Fla Fla é uma homenagem aos sabores da nossa
          terra moçambicana. Sem açúcar refinado. Sem conservantes. Só o que a
          natureza nos deu — transformado em algo irresistível.
        </p>

        <div className="grid w-full grid-cols-2 gap-3 md:gap-6 lg:flex lg:justify-center lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-4 rounded-2xl bg-[#FDF5EC] px-4 py-6 shadow-[0_4px_16px_rgba(45,27,20,0.06)] md:gap-5 md:px-6 md:py-8 lg:w-[260px] lg:gap-[18px] lg:px-6 lg:pb-7 lg:pt-8"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full md:h-[72px] md:w-[72px] lg:h-20 lg:w-20"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon
                    className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
                    style={{ color: feature.color }}
                  />
                </div>
                <p className="whitespace-pre-line text-center font-inter text-[14px] font-semibold leading-[1.4] text-[var(--text-dark)] md:text-[15px] lg:text-[16px]">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
