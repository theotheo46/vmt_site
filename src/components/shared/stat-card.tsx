interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="bg-medium-brown/80 rounded-lg px-6 py-8 text-center">
      <p className="text-gold font-serif text-4xl font-bold md:text-5xl">{value}</p>
      <p className="text-cream mt-2 text-lg font-medium">{label}</p>
      {sublabel && <p className="text-cream/60 mt-1 text-sm">{sublabel}</p>}
    </div>
  );
}
