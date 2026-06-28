export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  if (locale === 'en') {
    return {
      navigation: {
        languageLabel: 'Language',
        switchTo: 'Ver en español',
      },
      hero: {
        badge: 'Senior Software Engineer • Squad Lead • Backend Specialist',
        title: 'Miguel Sierra Alonso',
        subtitle: 'Squad Lead & Senior Software Engineer',
        description:
          'Computer engineer specializing in backend development, software architecture and technical leadership. I currently lead development teams at CaixaBank Tech and bring experience in banking, Big Data and high-demand cloud platforms.',
        currentLabel: 'Currently',
        currentTitle: 'Working at CaixaBank Tech',
        availability: 'Open to new challenges',
        location: 'Aranjuez, Madrid',
        focus: 'Backend & Cloud specialization',
        learning: 'Exploring AI applied to development',
        english: 'Professional English B2',
      },
      about: {
        eyebrow: 'About me',
        title: 'Engineer with a solid trajectory in backend, architecture and leadership',
        intro1: 'I am a Computer Engineer graduated from Universidad Rey Juan Carlos.',
        intro2:
          'Over more than seven years, I have worked on software development for sectors such as banking, Big Data and cloud platforms, evolving from full-stack development roles to technical leadership and team management positions.',
        intro3:
          'My specialization focuses on backend development with Java and the Spring ecosystem, scalable architecture design and cloud platform development.',
        panel:
          'I am currently exploring new ways to improve development productivity through Artificial Intelligence and software agents.',
        tags: ['Backend', 'Architecture', 'Cloud', 'Leadership', 'Applied AI'],
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Professional trajectory in high-demand environments',
        multipleRoles: 'Multiple roles',
        experienceLabel: 'Experience',
      },
      tech: {
        eyebrow: 'Technologies',
        title: 'Stack and tools I work with',
        backendTitle: 'Backend',
        cloudTitle: 'Cloud & DevOps',
        qualityTitle: 'Quality',
        systemsTitle: 'Systems',
      },
      education: {
        eyebrow: 'Education',
        title: 'Education and continuous training',
        universityLabel: 'University',
        universityName: 'Universidad Rey Juan Carlos',
        degree: 'Bachelor’s degree in Computer Engineering',
        trainingLabel: 'Training',
        trainingName: 'BIG School',
        trainingDescription: 'Introduction to AI Development: Agent-Based Program',
      },
      certs: {
        eyebrow: 'Certifications',
        title: 'Recognitions and certifications',
        toeicTitle: 'TOEIC Reading & Writing B2',
        toeicDescription: 'Professional competence in English for technical and business contexts.',
        stratioTitle: 'Stratio Augmented Data Fabric Basics Certification',
        stratioDescription: 'Certification in the fundamentals of advanced data platforms and architectures.',
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Building public projects in software and AI',
        description:
          'I am currently building public projects related to software development and Artificial Intelligence.',
        button: 'View GitHub',
      },
      footer: {
        role: 'Computer Engineer • Backend • Cloud • Technical leadership',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        tagline: 'Built with coffee, code, and an AI that never sleeps.',
      },
    };
  }

  return {
    navigation: {
      languageLabel: 'Idioma',
      switchTo: 'Switch to English',
    },
    hero: {
      badge: 'Ingeniero de Software Senior • Squad Lead • Especialista Backend',
      title: 'Miguel Sierra Alonso',
      subtitle: 'Squad Lead & Senior Software Engineer',
      description:
        'Ingeniero Informático especializado en desarrollo backend, arquitectura de software y liderazgo técnico. Actualmente lidero equipos de desarrollo en CaixaBank Tech y cuento con experiencia en banca, Big Data y plataformas cloud de alta exigencia.',
      currentLabel: 'Actualmente',
      currentTitle: 'Trabajando en CaixaBank Tech',
      availability: 'Disponible para retos',
      location: 'Aranjuez, Madrid',
      focus: 'Especialización Backend & Cloud',
      learning: 'Aprendiendo IA aplicada al desarrollo',
      english: 'Inglés profesional B2',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Ingeniero con una trayectoria sólida en backend, arquitectura y liderazgo',
      intro1: 'Soy Ingeniero Informático graduado por la Universidad Rey Juan Carlos.',
      intro2:
        'Durante más de siete años he trabajado en el desarrollo de software para sectores como banca, Big Data y plataformas cloud, evolucionando desde posiciones de desarrollo full stack hasta roles de liderazgo técnico y gestión de equipos.',
      intro3:
        'Mi especialización se centra en el desarrollo backend con Java y el ecosistema Spring, diseño de arquitecturas escalables y construcción de plataformas cloud.',
      panel:
        'Actualmente exploro nuevas formas de mejorar la productividad del desarrollo mediante Inteligencia Artificial y agentes software.',
      tags: ['Backend', 'Arquitectura', 'Cloud', 'Liderazgo', 'IA aplicada'],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Trayectoria profesional en entornos de alta exigencia',
      multipleRoles: 'Múltiples roles',
      experienceLabel: 'Experiencia',
    },
    tech: {
      eyebrow: 'Tecnologías',
      title: 'Stack y herramientas con las que trabajo',
      backendTitle: 'Backend',
      cloudTitle: 'Cloud & DevOps',
      qualityTitle: 'Quality',
      systemsTitle: 'Systems',
    },
    education: {
      eyebrow: 'Formación',
      title: 'Educación y formación continua',
      universityLabel: 'Universidad',
      universityName: 'Universidad Rey Juan Carlos',
      degree: 'Grado en Ingeniería Informática',
      trainingLabel: 'Formación',
      trainingName: 'BIG School',
      trainingDescription: 'Iniciación al Desarrollo con IA: Programa con Agentes',
    },
    certs: {
      eyebrow: 'Certificaciones',
      title: 'Reconocimientos y certificaciones',
      toeicTitle: 'TOEIC Reading & Writing B2',
      toeicDescription: 'Competencia profesional en inglés para contextos técnicos y de negocio.',
      stratioTitle: 'Stratio Augmented Data Fabric Basics Certification',
      stratioDescription: 'Certificación en fundamentos de plataformas y arquitecturas de datos avanzadas.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Construyendo proyectos públicos en software e IA',
      description:
        'Actualmente estoy construyendo proyectos públicos relacionados con desarrollo de software e Inteligencia Artificial.',
      button: 'Ver GitHub',
    },
    footer: {
      role: 'Ingeniero Informático • Backend • Cloud • Liderazgo técnico',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      tagline: 'Hecho con café, código y una IA que no para de ayudar.',
    },
  };
}
