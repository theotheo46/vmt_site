import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { assetPath } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ВМ-Торг — Эксклюзивная мебель на заказ",
  description:
    "Эксклюзивный представитель «Мобили Концепт» в России. " +
    "Кабинеты, залы заседаний, лестницы, двери — мебель премиум-класса из массива.",
  icons: {
    icon: assetPath("/images/logo/LogoIcon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
