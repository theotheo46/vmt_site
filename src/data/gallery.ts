import type { Category } from "@/types/category";
import { categoryMeta, MEBEL_IDS } from "@/data/categories";
import { galleryImages } from "@/data/generated/gallery-images";

export const categories: Category[] = categoryMeta.map((meta) => ({
  ...meta,
  mainImage: galleryImages[meta.id]?.mainImage ?? null,
  secondaryImages: galleryImages[meta.id]?.secondaryImages ?? [],
}));

export { MEBEL_IDS };
