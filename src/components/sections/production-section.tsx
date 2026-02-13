import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionLabel } from "@/components/shared/section-label";
import { StatCard } from "@/components/shared/stat-card";
import { stats } from "@/data/stats";

export function ProductionSection() {
  return (
    <AnimatedSection id="production" className="bg-dark-brown px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <SectionLabel className="text-gold/70">О производстве</SectionLabel>
        <h2 className="text-cream mt-4 font-serif text-3xl font-bold md:text-4xl">
          Цифры, за которыми стоит мастерство
        </h2>
        <div className="bg-gold mx-auto mt-4 h-1 w-16" />

        <p className="text-cream/70 mx-auto mt-6 max-w-2xl leading-relaxed">
          Собственное производство площадью 2 000 м² в Беларуси, оснащённое современным
          оборудованием из Германии и Италии. Полный цикл — от сушки древесины до финишной отделки.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
