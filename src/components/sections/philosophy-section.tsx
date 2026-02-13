import { TreePine, Gem, Settings } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionLabel } from "@/components/shared/section-label";
import { BasePathImage } from "@/components/shared/base-path-image";
import { sectionImages } from "@/data/generated/gallery-images";

const PILLARS = [
  {
    icon: TreePine,
    title: "Натуральные материалы",
    text: "Массив дуба, ясеня, бука и ценных экзотических пород",
  },
  {
    icon: Gem,
    title: "Ручная работа",
    text: "Резьба, инкрустация и патинирование — мастера с 15-летним опытом",
  },
  {
    icon: Settings,
    title: "Индивидуальный проект",
    text: "Каждое изделие проектируется под ваше пространство",
  },
] as const;

export function PhilosophySection() {
  return (
    <AnimatedSection id="philosophy" className="bg-cream px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <SectionLabel className="text-gold">Философия</SectionLabel>
          <h2 className="text-near-black mt-4 font-serif text-3xl font-bold md:text-4xl">
            Каждый проект — уникален
          </h2>
          <div className="bg-gold mt-4 h-1 w-16" />
          <p className="text-medium-brown mt-6 leading-relaxed">
            Мы не производим серийную мебель. Каждый проект начинается с диалога — с изучения вашего
            пространства, стиля и пожеланий. Результат — мебель, которая становится продолжением
            архитектуры.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center sm:text-left">
                <div className="bg-dark-green/10 mx-auto flex h-12 w-12 items-center justify-center rounded-full sm:mx-0">
                  <Icon className="text-dark-green h-5 w-5" />
                </div>
                <h3 className="text-near-black mt-3 text-sm font-semibold">{title}</h3>
                <p className="text-medium-brown mt-1 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <BasePathImage
            src={sectionImages.philosophy.src}
            alt={sectionImages.philosophy.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
