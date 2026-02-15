"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useFocusTrap } from "@/app/hooks/useFocusTrap";
import { useReturnFocus } from "@/app/hooks/useReturnFocus";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const focusTrapRef = useFocusTrap<HTMLDivElement>(isOpen);

  // Restore focus to previous element when modal closes
  useReturnFocus(isOpen);

  // ESC key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus close button when modal opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={focusTrapRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem ampliada: ${imageAlt}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Fechar"
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <div
        className="relative max-h-[90vh] max-w-[90vw] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <picture>
          <source
            srcSet={imageSrc.replace(/\.(png|jpg|jpeg)$/i, ".webp")}
            type="image/webp"
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
          />
        </picture>
      </div>
    </div>
  );
}
