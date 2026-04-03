"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { CapulanaStrip } from "@/app/components/brand/CapulanaStrip";
import { OptimizedImage } from "@/app/components/ui/OptimizedImage";

const reviews = [
  { src: "/reviews/review0.webp", alt: "Review de cliente" },
  { src: "/reviews/review1.webp", alt: "Review de cliente" },
  { src: "/reviews/review2.webp", alt: "Review de cliente" },
  { src: "/reviews/review3.webp", alt: "Review de cliente" },
  { src: "/reviews/review4.webp", alt: "Review de cliente" },
];

function ReviewModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Fechar"
        autoFocus
      >
        <X size={24} />
      </button>

      <div
        className="relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
        />
      </div>
    </div>,
    document.body
  );
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const hasDragged = useRef(false);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    setScrollProgress(el.scrollLeft / maxScroll);
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      el.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by the visible width of the container so it works on all screen sizes
    const distance = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // Drag handlers using mousedown/mousemove/mouseup for desktop drag
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const el = scrollRef.current;
      if (!el) return;
      const dx = e.clientX - startX.current;
      if (Math.abs(dx) > 5) hasDragged.current = true;
      el.scrollLeft = scrollStart.current - dx;
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const el = scrollRef.current;
      if (el) el.style.cursor = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleCardClick = (review: { src: string; alt: string }) => {
    if (!hasDragged.current) {
      setModalImage(review);
    }
  };

  return (
    <section id="testemunhos">
      <CapulanaStrip />
      <div className="w-full bg-[var(--flafla-dark-brown)] px-5 py-12 md:px-10 md:py-14 lg:px-20 lg:py-[50px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[2px] text-[var(--flafla-orange)] md:text-[12px]">
              TESTEMUNHOS
            </span>
            <h2 className="text-center font-poppins text-[20px] font-bold text-white md:text-[26px] lg:text-[32px]">
              O Que Dizem os Nossos Fãs
            </h2>
            <div className="h-[3px] w-[60px] rounded-sm bg-[var(--flafla-orange)]" />
          </div>

          {/* Slider */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            className="scrollbar-hide flex cursor-grab gap-4 overflow-x-auto select-none md:gap-5"
          >
            {reviews.map((review, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleCardClick(review)}
                className="group relative h-[400px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[450px] md:w-[290px] lg:h-[480px] lg:w-[310px]"
              >
                <OptimizedImage
                  src={review.src}
                  alt={review.alt}
                  fill
                  className="pointer-events-none object-cover"
                />
                {/* Zoom overlay - desktop hover */}
                <div className="absolute inset-0 hidden items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex">
                  <ZoomIn className="text-white" size={36} />
                </div>
              </button>
            ))}
          </div>

          {/* Controls: progress bar left, arrows right */}
          <div className="flex items-center justify-between">
            {/* Progress bar */}
            <div className="h-[3px] w-[120px] overflow-hidden rounded-full bg-white/20 md:w-[180px]">
              <div
                className="h-full rounded-full bg-[var(--flafla-orange)] transition-all duration-300"
                style={{ width: `${20 + scrollProgress * 80}%` }}
              />
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal via portal */}
      {modalImage && (
        <ReviewModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  );
}
