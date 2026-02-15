import { Header } from "@/app/components/sections/Header";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { SoulSection } from "@/app/components/sections/SoulSection";
import { SaboresSection } from "@/app/components/sections/SaboresSection";
import { BarrinhasSection } from "@/app/components/sections/BarrinhasSection";
import { HistoriaSection } from "@/app/components/sections/HistoriaSection";
import { GiftSection } from "@/app/components/sections/GiftSection";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { CTASection } from "@/app/components/sections/CTASection";
import { Footer } from "@/app/components/sections/Footer";

export default function FlaFlaPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-cream)]">
      <Header />
      <main>
        <HeroSection />
        <SoulSection />
        <SaboresSection />
        <BarrinhasSection />
        <HistoriaSection />
        <GiftSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
