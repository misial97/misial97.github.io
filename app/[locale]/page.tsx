import { notFound } from 'next/navigation';
import { PortfolioPage } from '@/components/portfolio-page';
import { isLocale } from '@/lib/i18n';

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioPage locale={locale} />;
}
