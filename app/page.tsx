import { PortfolioPage } from '@/components/portfolio-page';
import { defaultLocale } from '@/lib/i18n';

export default function Home() {
  return <PortfolioPage locale={defaultLocale} />;
}
