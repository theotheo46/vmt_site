export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export const stats: Stat[] = [
  { value: "15", label: "лет опыта", sublabel: "в производстве мебели" },
  { value: "2 000", label: "м² производства", sublabel: "в Беларуси" },
  { value: "21", label: "мастер", sublabel: "в команде" },
  { value: "100+", label: "проектов", sublabel: "реализовано" },
];
