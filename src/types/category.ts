export interface CategoryImage {
  src: string;
  alt: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  mainImage: CategoryImage | null;
  secondaryImages: CategoryImage[];
}
