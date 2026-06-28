import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://miguel-sierra-alonso.dev'),
  title: 'Miguel Sierra Alonso | Squad Lead & Senior Software Engineer',
  description:
    'Portfolio profesional de Miguel Sierra Alonso, Senior Software Engineer, Squad Lead y especialista en backend, arquitectura y cloud.',
  keywords: [
    'Miguel Sierra Alonso',
    'Senior Software Engineer',
    'Squad Lead',
    'Backend',
    'Java',
    'Spring Boot',
    'Arquitectura de software',
    'Cloud',
  ],
  openGraph: {
    title: 'Miguel Sierra Alonso | Squad Lead & Senior Software Engineer',
    description:
      'Portfolio profesional de Miguel Sierra Alonso, especialista en backend, arquitectura y liderazgo técnico.',
    url: 'https://miguel-sierra-alonso.dev',
    siteName: 'Miguel Sierra Alonso',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Sierra Alonso | Squad Lead & Senior Software Engineer',
    description:
      'Portfolio profesional de Miguel Sierra Alonso, especialista en backend, arquitectura y cloud.',
  },
  alternates: {
    canonical: 'https://miguel-sierra-alonso.dev',
  },
};

export const viewport = {
  themeColor: '#020617',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[#020617] text-slate-50 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
