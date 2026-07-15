'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BriefcaseBusiness, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import avatarImage from '@/assets/avatar.png';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { TimelineItem } from '@/components/timeline-item';
import { TechCard } from '@/components/tech-card';
import { type Locale, getDictionary } from '@/lib/i18n';

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const t = getDictionary(locale);

  const experience =
    locale === 'en'
      ? [
          {
            company: 'CaixaBank Tech',
            roles: [
              {
                role: 'Squad Lead',
                period: 'September 2025 - Present',
                description:
                  'Team leadership, technical coordination, backend architecture and continuous quality and scalability improvements.',
                tags: ['Leadership', 'Technical coordination', 'Backend architecture', 'Quality'],
              },
              {
                role: 'Senior Software Engineer',
                period: 'November 2024 - Present',
                description:
                  'Development of high-impact backend solutions with focus on efficiency, maintainability and evolution of critical platforms.',
                tags: ['Backend', 'Java', 'Spring Boot', 'Scalability'],
              },
            ],
          },
          {
            company: 'GOAL Systems',
            roles: [
              {
                role: 'Backend Technical Lead',
                period: 'February 2024 - November 2024',
                description:
                  'Technical direction of backend initiatives, component design and architectural decision support for the team.',
                tags: ['Technical leadership', 'Architecture', 'Microservices'],
              },
              {
                role: 'Software Engineer',
                period: 'January 2024 - February 2024',
                description:
                  'Contribution to software projects oriented to performance, robustness and operational quality.',
                tags: ['Spring Boot', 'Docker', 'Kubernetes'],
              },
            ],
          },
          {
            company: 'Stratio',
            roles: [
              {
                role: 'Software Engineer',
                period: 'May 2022 - December 2023',
                description:
                  'Backend development and support for data and distributed processing platforms with a focus on integration and scalability.',
                tags: ['Java 11', 'Spring Boot', 'Docker', 'Kubernetes', 'Jenkins', 'Nexus', 'Temporal'],
              },
            ],
          },
          {
            company: 'Mercury TFS',
            roles: [
              {
                role: 'Software Engineer',
                period: 'September 2019 - May 2022',
                description:
                  'Implementation of backend services and test automation for high-demand environments.',
                tags: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'JUnit', 'Mockito', 'Cucumber'],
              },
            ],
          },
          {
            company: 'Everis',
            roles: [
              {
                role: 'Full Stack Developer',
                period: 'January 2019 - September 2019',
                description:
                  'Full-stack development in projects focused on quality, deployment and user experience.',
                tags: ['Java', 'Frontend', 'Integration'],
              },
            ],
          },
        ]
      : [
          {
            company: 'CaixaBank Tech',
            roles: [
              {
                role: 'Squad Lead',
                period: 'Septiembre 2025 - Actualidad',
                description:
                  'Liderazgo de equipos, coordinación técnica, arquitectura backend y mejora continua de calidad y escalabilidad.',
                tags: ['Liderazgo', 'Coordinación técnica', 'Arquitectura backend', 'Calidad'],
              },
              {
                role: 'Senior Software Engineer',
                period: 'Noviembre 2024 - Actualidad',
                description:
                  'Desarrollo de soluciones backend de alto impacto con foco en eficiencia, mantenibilidad y evolución de plataformas críticas.',
                tags: ['Backend', 'Java', 'Spring Boot', 'Escalabilidad'],
              },
            ],
          },
          {
            company: 'GOAL Systems',
            roles: [
              {
                role: 'Backend Technical Lead',
                period: 'Febrero 2024 - Noviembre 2024',
                description:
                  'Dirección técnica de iniciativas backend, diseño de componentes y acompañamiento al equipo en decisiones de arquitectura.',
                tags: ['Liderazgo técnico', 'Arquitectura', 'Microservicios'],
              },
              {
                role: 'Software Engineer',
                period: 'Enero 2024 - Febrero 2024',
                description:
                  'Contribución a proyectos de software orientados a rendimiento, robustez y calidad operativa.',
                tags: ['Spring Boot', 'Docker', 'Kubernetes'],
              },
            ],
          },
          {
            company: 'Stratio',
            roles: [
              {
                role: 'Software Engineer',
                period: 'Mayo 2022 - Diciembre 2023',
                description:
                  'Desarrollo backend y soporte a plataformas de datos y procesamiento distribuido con foco en integración y escalabilidad.',
                tags: ['Java 11', 'Spring Boot', 'Docker', 'Kubernetes', 'Jenkins', 'Nexus', 'Temporal'],
              },
            ],
          },
          {
            company: 'Mercury TFS',
            roles: [
              {
                role: 'Software Engineer',
                period: 'Septiembre 2019 - Mayo 2022',
                description:
                  'Implementación de servicios backend y automatización de pruebas para entornos de alta exigencia.',
                tags: ['Java', 'Spring Boot', 'Microservicios', 'Docker', 'Kubernetes', 'JUnit', 'Mockito', 'Cucumber'],
              },
            ],
          },
          {
            company: 'Everis',
            roles: [
              {
                role: 'Full Stack Developer',
                period: 'Enero 2019 - Septiembre 2019',
                description:
                  'Desarrollo full stack en proyectos con enfoque en calidad, despliegue y experiencia de usuario.',
                tags: ['Java', 'Frontend', 'Integración'],
              },
            ],
          },
        ];

  const backendTech = locale === 'en' ? ['Java', 'Spring Boot', 'Spring Integration', 'JPA', 'Microservices'] : ['Java', 'Spring Boot', 'Spring Integration', 'JPA', 'Microservices'];
  const cloudTech = locale === 'en' ? ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'GitHub'] : ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'GitHub'];
  const qualityTech = locale === 'en' ? ['JUnit', 'Mockito', 'Sonar', 'Cucumber'] : ['JUnit', 'Mockito', 'Sonar', 'Cucumber'];
  const systemsTech = locale === 'en' ? ['Linux', 'Ubuntu'] : ['Linux', 'Ubuntu'];

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.16),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#030712_50%,_#020617_100%)]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <section className="mx-auto flex min-h-[84vh] max-w-7xl flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
        <div className="mb-6 flex flex-wrap items-center justify-end gap-3 sm:mb-8">
          <span className="text-sm text-slate-400">{t.navigation.languageLabel}</span>
          <Link href={locale === 'es' ? '/en' : '/es'} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
            {t.navigation.switchTo}
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-400" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">{t.hero.title}</h1>
            <p className="mt-5 text-xl font-medium text-sky-300 sm:text-2xl">{t.hero.subtitle}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{t.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-sky-500/90 px-6 text-white shadow-glow hover:bg-sky-400">
                <Link href="https://www.linkedin.com/in/miguel-sierra-alonso-inginf/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 px-6 text-slate-100 hover:bg-white/10">
                <Link href="https://github.com/misial97" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 px-6 text-slate-100 hover:bg-white/10">
                <Link href="/CV.pdf" className="inline-flex items-center gap-2" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" /> {locale === 'en' ? 'Download CV' : 'Descargar CV'}
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl"
          >
            <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-2">
              <div className="overflow-hidden rounded-[1.4rem] bg-slate-900/80">
                <Image src={avatarImage} alt="Miguel Sierra Alonso" width={900} height={1100} className="h-80 w-full object-cover object-center sm:h-[26rem]" priority />
              </div>
            </div>
            <div className="rounded-2xl border border-sky-400/20 bg-slate-950/70 p-6">
              <div className="mb-8 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{t.hero.currentLabel}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{t.hero.currentTitle}</p>
                </div>
                {/* <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                  {t.hero.availability}
                </div> */}
              </div>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="text-lg">📍</span>
                  <span>{t.hero.location}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="text-lg">☁️</span>
                  <span>{t.hero.focus}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="text-lg">🤖</span>
                  <span>{t.hero.learning}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="text-lg">🇬🇧</span>
                  <span>{t.hero.english}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="mt-2 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-lg leading-8 text-slate-300">{t.about.intro1}</p>
            <p className="mt-4 text-lg leading-8 text-slate-300">{t.about.intro2}</p>
            <p className="mt-4 text-lg leading-8 text-slate-300">{t.about.intro3}</p>
          </div>
          <div className="rounded-3xl border border-sky-400/20 bg-slate-950/60 p-8 shadow-glow">
            <p className="text-lg leading-8 text-slate-300">{t.about.panel}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.about.tags.map((item) => (
                <span key={item} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-sm text-sky-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
        <div className="relative mt-10 space-y-8 before:absolute before:left-[15px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-sky-400/50 before:via-slate-700 before:to-transparent">
          {experience.map((item) => (
            <TimelineItem key={item.company} item={item} locale={locale} />
          ))}
        </div>
      </section>

      <section id="tech" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <TechCard title={t.tech.backendTitle} items={backendTech} />
          <TechCard title={t.tech.cloudTitle} items={cloudTech} />
          <TechCard title={t.tech.qualityTitle} items={qualityTech} />
          <TechCard title={t.tech.systemsTitle} items={systemsTech} />
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3 text-sky-300">
              <BriefcaseBusiness className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">{t.education.universityLabel}</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{t.education.universityName}</h3>
            <p className="mt-2 text-slate-300">{t.education.degree}</p>
            <p className="mt-2 text-sm text-slate-400">2015 - 2020</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3 text-sky-300">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">{t.education.trainingLabel}</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{t.education.trainingName}</h3>
            <p className="mt-2 text-slate-300">{t.education.trainingDescription}</p>
            <p className="mt-2 text-sm text-slate-400">{t.education.trainingDate}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3 text-sky-300">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.3em]">{t.education.masterLabel}</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{t.education.masterName}</h3>
            <p className="mt-2 text-slate-300">{t.education.masterDescription}</p>
            <p className="mt-2 text-sm text-slate-400">{t.education.masterDate}</p>
          </div>
        </div>
      </section>

      <section id="certs" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <SectionHeading eyebrow={t.certs.eyebrow} title={t.certs.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">{t.certs.toeicTitle}</h3>
            <p className="mt-3 text-slate-300">{t.certs.toeicDescription}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">{t.certs.stratioTitle}</h3>
            <p className="mt-3 text-slate-300">{t.certs.stratioDescription}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <p className="text-xl text-slate-300">{t.projects.description}</p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="rounded-full bg-sky-500/90 px-6 text-white shadow-glow hover:bg-sky-400">
              <Link href="https://github.com/misial97" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> {t.projects.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 px-6 py-10 text-sm text-slate-400 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-md">
          <p className="text-base font-medium text-white">Miguel Sierra Alonso</p>
          <p className="mt-2">{t.footer.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="mailto:miguelsierra-11@hotmail.com" className="transition hover:text-sky-300">
            {t.footer.email}
          </Link>
          <Link href="https://www.linkedin.com/in/miguel-sierra-alonso-inginf/" target="_blank" rel="noreferrer" className="transition hover:text-sky-300">
            {t.footer.linkedin}
          </Link>
          <Link href="https://github.com/misial97" target="_blank" rel="noreferrer" className="transition hover:text-sky-300">
            {t.footer.github}
          </Link>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          <p className="text-xs italic text-slate-400">
            {t.footer.tagline}
          </p>
        </div>
      </footer>
    </main>
  );
}
