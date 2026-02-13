"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BasePathImage } from "@/components/shared/base-path-image";
import { NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-gold/20 bg-dark-brown/95 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <BasePathImage
            src="/images/logo/LogoIcon.png"
            alt="ВМ-Торг логотип"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-gold font-serif text-xl font-bold tracking-wider">ВМ-ТОРГ</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                active === href.slice(1) ? "text-gold" : "text-cream/70 hover:text-cream"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="text-cream md:hidden" aria-label="Открыть меню">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-gold/20 w-72 bg-[#2c2218]">
            <SheetTitle className="sr-only">Навигация</SheetTitle>
            <SheetDescription className="sr-only">Навигация по разделам сайта</SheetDescription>
            <nav className="mt-8 flex flex-col gap-6 px-2">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    active === href.slice(1) ? "text-gold" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
