import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { testimonials } from "@/app/data/testimonials";

export function TestimonialsSection() {
  return (
    <section>
      <CapulanaStrip />
      <div className="w-full bg-white px-5 py-12 md:px-10 md:py-14 lg:px-20 lg:py-[50px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:gap-12 lg:gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[2px] text-[var(--flafla-orange)] md:text-[12px]">
              TESTEMUNHOS
            </span>
            <h2 className="text-center font-poppins text-[20px] font-bold text-[var(--text-dark)] md:text-[26px] lg:text-[32px]">
              O Que Dizem os Nossos Fãs
            </h2>
            <div className="h-[3px] w-[60px] rounded-sm bg-[var(--flafla-orange)]" />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl bg-[#483832] p-6 shadow-[0_8px_32px_rgba(45,27,20,0.16)] md:p-7"
              >
                <p className="font-inter text-[14px] italic leading-[1.6] text-white md:text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-inter text-[14px] font-semibold text-white">
                      {testimonial.name}
                    </span>
                    <span className="font-inter text-[12px] text-white/60">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
