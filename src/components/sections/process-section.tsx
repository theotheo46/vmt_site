"use client";

import { MessageSquare, Ruler, Factory, Truck, ShieldCheck, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionLabel } from "@/components/shared/section-label";
import { ProcessStep } from "@/components/shared/process-step";
import { processSteps } from "@/data/process-steps";

const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquare,
  Ruler,
  Factory,
  Truck,
  ShieldCheck,
};

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="bg-cream px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <SectionLabel className="text-gold">Как мы работаем</SectionLabel>
        <h2 className="text-near-black mt-4 font-serif text-3xl font-bold md:text-4xl">
          От идеи до установки
        </h2>
        <div className="bg-gold mx-auto mt-4 h-1 w-16" />

        <div className="mt-14 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4 lg:gap-6">
          {processSteps.map((stepData, i) => (
            <div key={stepData.step} className="flex items-center gap-4 md:gap-2 lg:gap-4">
              <ProcessStep
                step={stepData.step}
                title={stepData.title}
                description={stepData.description}
                icon={ICON_MAP[stepData.iconName]}
              />
              {i < processSteps.length - 1 && (
                <ChevronRight className="text-dark-green/40 hidden h-5 w-5 shrink-0 md:block" />
              )}
            </div>
          ))}
        </div>

        <p className="text-medium-brown mt-12 text-sm italic">
          Средний срок реализации проекта — от 6 до 12 недель
        </p>
      </div>
    </AnimatedSection>
  );
}
