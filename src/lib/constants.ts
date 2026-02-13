const isProd = process.env.NODE_ENV === "production";

export const basePath = isProd ? "/vmt_site" : "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}

export const NAV_ITEMS = [
  { label: "Философия", href: "#philosophy" },
  { label: "О производстве", href: "#production" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Образцы", href: "#gallery" },
  { label: "О компании", href: "#contact" },
] as const;

export const SECTION_IDS = ["philosophy", "production", "process", "gallery", "contact"] as const;

export const CONTACT = {
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "info@vm-torg.ru",
  address: "Москва, Россия",
} as const;
