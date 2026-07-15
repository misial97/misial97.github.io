type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl sm:mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
