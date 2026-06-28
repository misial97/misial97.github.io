import { type Locale } from '@/lib/i18n';

type TimelineItemProps = {
  item: {
    company: string;
    roles: Array<{
      role: string;
      period: string;
      description: string;
      tags: string[];
    }>;
  };
  locale: Locale;
};

export function TimelineItem({ item, locale }: TimelineItemProps) {
  const label = locale === 'en' ? 'Multiple roles' : 'Múltiples roles';

  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border border-sky-400/40 bg-sky-400/80 shadow-[0_0_0_6px_rgba(15,23,42,0.9)]" />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-sky-400/20 hover:bg-white/8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">{item.company}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.3em] text-slate-400">
              {item.roles.length > 1 ? label : locale === 'en' ? 'Experience' : 'Experiencia'}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {item.roles.map((roleItem) => (
            <div key={`${item.company}-${roleItem.role}`} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-medium text-sky-300">{roleItem.role}</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">{roleItem.description}</p>
                </div>
                <p className="shrink-0 whitespace-nowrap text-sm font-medium text-slate-400 sm:mt-0.5">
                  {roleItem.period}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {roleItem.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
