"use client";

import { useState } from "react";
import type { Category } from "@/types/category";
import { BasePathImage } from "@/components/shared/base-path-image";
import { ImageModal } from "./image-modal";

interface CategoryBlockProps {
  category: Category;
  reverse?: boolean;
}

export function CategoryBlock({ category, reverse }: CategoryBlockProps) {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  const { mainImage, secondaryImages } = category;

  return (
    <>
      <div className="mb-6">
        <h3 className="text-near-black font-serif text-2xl font-bold">{category.title}</h3>
        <p className="text-medium-brown mt-2 max-w-2xl text-sm leading-relaxed">
          {category.description}
        </p>
      </div>

      <div
        className={`grid gap-4 ${
          mainImage
            ? "md:grid-cols-2"
            : secondaryImages.length === 1
              ? "md:max-w-lg md:grid-cols-1"
              : "md:grid-cols-2"
        } ${reverse && mainImage ? "direction-rtl" : ""}`}
      >
        {/* Main image — large */}
        {mainImage && (
          <button
            onClick={() => setModal(mainImage)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            aria-label={`Открыть ${mainImage.alt}`}
          >
            <BasePathImage
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
        )}

        {/* Secondary images stack */}
        <div
          className={`grid gap-4 ${secondaryImages.length <= 2 ? "grid-cols-1" : "grid-cols-2"}`}
        >
          {secondaryImages.map((img) => (
            <button
              key={img.src}
              onClick={() => setModal(img)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              aria-label={`Открыть ${img.alt}`}
            >
              <BasePathImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      </div>

      {modal && <ImageModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
    </>
  );
}
