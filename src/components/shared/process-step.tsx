import type { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ProcessStep({ step, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-dark-green text-cream flex h-14 w-14 items-center justify-center rounded-full">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-dark-green mt-3 text-xs font-semibold tracking-wider">ШАГ {step}</span>
      <h3 className="text-near-black mt-1 font-serif text-lg font-semibold">{title}</h3>
      <p className="text-medium-brown mt-2 max-w-[200px] text-sm">{description}</p>
    </div>
  );
}
