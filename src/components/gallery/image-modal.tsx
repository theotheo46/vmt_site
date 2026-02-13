"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { BasePathImage } from "@/components/shared/base-path-image";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/80 transition-colors hover:text-white"
        aria-label="Закрыть"
      >
        <X className="h-8 w-8" />
      </button>
      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <BasePathImage
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="max-h-[90vh] w-auto object-contain"
          sizes="90vw"
        />
      </div>
    </div>
  );
}
