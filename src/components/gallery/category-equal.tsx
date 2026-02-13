"use client";

import { useState } from "react";
import type { Category } from "@/types/category";
import { BasePathImage } from "@/components/shared/base-path-image";
import { ImageModal } from "./image-modal";

interface CategoryEqualProps {
  category: Category;
}

export function CategoryEqual({ category }: CategoryEqualProps) {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  const allImages = [
    ...(category.mainImage ? [category.mainImage] : []),
    ...category.secondaryImages,
  ];

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
          allImages.length === 1 ? "max-w-lg md:grid-cols-1" : "md:grid-cols-2"
        }`}
      >
        {allImages.map((img) => (
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
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {modal && <ImageModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
    </>
  );
}
