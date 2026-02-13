"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionLabel } from "@/components/shared/section-label";
import { CategoryBlock } from "@/components/gallery/category-block";
import { CategoryEqual } from "@/components/gallery/category-equal";
import { categories, MEBEL_IDS } from "@/data/gallery";

const EQUAL_LAYOUT_IDS = ["garderobnye", "stoyki-resepshn"];

export function GallerySection() {
  const standalone = categories.filter(
    (c) =>
      !MEBEL_IDS.includes(c.id as (typeof MEBEL_IDS)[number]) && !EQUAL_LAYOUT_IDS.includes(c.id)
  );

  const equalLayout = categories.filter((c) => EQUAL_LAYOUT_IDS.includes(c.id));

  const mebelGroup = categories.filter((c) =>
    MEBEL_IDS.includes(c.id as (typeof MEBEL_IDS)[number])
  );

  return (
    <AnimatedSection id="gallery" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionLabel className="text-gold">Образцы работ</SectionLabel>
          <h2 className="text-near-black mt-4 font-serif text-3xl font-bold md:text-4xl">
            Наши проекты
          </h2>
          <div className="bg-gold mx-auto mt-4 h-1 w-16" />
        </div>

        {/* Standalone categories */}
        <div className="mt-16 space-y-20">
          {standalone.map((cat, i) => (
            <div
              key={cat.id}
              className={`rounded-xl p-6 md:p-8 ${i % 2 === 0 ? "bg-cream/50" : "bg-white"}`}
            >
              <CategoryBlock category={cat} reverse={i % 2 === 1} />
            </div>
          ))}
        </div>

        {/* Мебель group */}
        {mebelGroup.length > 0 && (
          <div className="mt-20">
            <h2 className="text-near-black text-center font-serif text-3xl font-bold md:text-4xl">
              Мебель
            </h2>
            <div className="bg-gold mx-auto mt-4 h-1 w-16" />
            <div className="mt-12 space-y-16">
              {mebelGroup.map((cat, i) => (
                <div
                  key={cat.id}
                  className={`rounded-xl p-6 md:p-8 ${i % 2 === 0 ? "bg-cream/50" : "bg-white"}`}
                >
                  <CategoryBlock category={cat} reverse={i % 2 === 1} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Equal layout categories */}
        {equalLayout.length > 0 && (
          <div className="mt-20 space-y-16">
            {equalLayout.map((cat, i) => (
              <div
                key={cat.id}
                className={`rounded-xl p-6 md:p-8 ${i % 2 === 0 ? "bg-cream/50" : "bg-white"}`}
              >
                <CategoryEqual category={cat} />
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
