interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`text-xs font-semibold tracking-[0.3em] uppercase ${className}`}>{children}</p>
  );
}
