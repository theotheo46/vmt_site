export interface ProcessStepData {
  step: number;
  title: string;
  description: string;
  iconName: "MessageSquare" | "Ruler" | "Factory" | "Truck" | "ShieldCheck";
}

export const processSteps: ProcessStepData[] = [
  {
    step: 1,
    title: "Консультация",
    description: "Обсуждаем ваши пожелания, стиль и бюджет проекта",
    iconName: "MessageSquare",
  },
  {
    step: 2,
    title: "Проектирование",
    description: "Создаём 3D-визуализацию и чертежи с точностью до миллиметра",
    iconName: "Ruler",
  },
  {
    step: 3,
    title: "Производство",
    description: "Изготавливаем мебель на собственном заводе в Беларуси",
    iconName: "Factory",
  },
  {
    step: 4,
    title: "Доставка",
    description: "Бережная транспортировка и профессиональный монтаж",
    iconName: "Truck",
  },
  {
    step: 5,
    title: "Гарантия",
    description: "Предоставляем гарантию и сервисное обслуживание",
    iconName: "ShieldCheck",
  },
];
