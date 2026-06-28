type TechCardProps = {
  title: string;
  items: string[];
};

export function TechCard({ title, items }: TechCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-sm text-sky-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
