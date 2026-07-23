export type Language = 'en' | 'es';

export const ui = {
  en: {
    locale: 'en' as const,
    brandDescriptor: 'PRODUCT DESIGNER + AI BUILDER',
    nav: { work: 'MY WORK', sideProjects: 'SIDE PROJECTS', about: 'ABOUT', cv: 'CV' },
    languageSwitch: 'ES',
    languageSwitchLabel: 'View this page in Spanish',
    themeDark: 'Activate dark mode',
    themeLight: 'Activate light mode',
    menu: 'Menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    navPrimary: 'Primary navigation',
    projectsSection: 'Projects',
    caseStudyNav: {
      label: 'Case study navigation',
      previous: 'Previous project',
      next: 'Next project',
      back: 'Back to work',
    },
    hero: {
      title: "Hi, I'm Luis Toro.",
      description: 'Product Designer with 6+ years of experience and a background in FinTech, Healthcare, EdTech, and E-commerce, creating meaningful experiences with the highest standards of design craft.',
      location: 'Barranquilla, Colombia',
      locationAlt: 'Location',
      trustedBy: 'Companies that trust my work',
    },
    footer: 'Designed and built by Luis Toro',
    about: {
      title: 'Designing products. Exploring the world. Building what is next.',
      description: 'I am a curious creator drawn to technology, finance, gaming, travel, and entrepreneurship. Lately, I have been exploring where digital products meet the physical world through 3D printing and maker culture.',
    },
    sideProjects: {
      title: 'Building products, exploring code, and empowering communities',
      description: 'I build tools for communities, experiment with front-end development, and explore what software can make simpler. I am currently building a personal finance manager.',
    },
    cv: {
      title: 'Curriculum Vitae',
      experience: 'Experience',
      education: 'Education',
      download: 'Download CV',
      present: 'Present',
      graphicDesign: 'Graphic Design',
    },
    projectMeta: { role: 'Role', timeline: 'Timeline', skills: 'Skills' },
    emptyProject: 'This case study is currently being prepared.',
    seo: {
      home: { title: 'Luis Toro | Product Designer', description: 'Portfolio of Luis Toro, a Product Designer focused on thoughtful digital products and scalable design systems.' },
      about: { title: 'About | Luis Toro', description: 'Learn about Luis Toro, a Product Designer and curious maker.' },
      sideProjects: { title: 'Side Projects | Luis Toro', description: 'Independent products and experiments by Luis Toro.' },
      cv: { title: 'CV | Luis Toro', description: 'Professional experience and education of Luis Toro, Product Designer.' },
    },
  },
  es: {
    locale: 'es' as const,
    brandDescriptor: 'PRODUCT DESIGNER + CREADOR CON IA',
    nav: { work: 'MI TRABAJO', sideProjects: 'PROYECTOS PERSONALES', about: 'SOBRE MÍ', cv: 'CV' },
    languageSwitch: 'EN',
    languageSwitchLabel: 'Ver esta página en inglés',
    themeDark: 'Activar modo oscuro',
    themeLight: 'Activar modo claro',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    skipToContent: 'Saltar al contenido',
    navPrimary: 'Navegación principal',
    projectsSection: 'Proyectos',
    caseStudyNav: {
      label: 'Navegación entre casos de estudio',
      previous: 'Proyecto anterior',
      next: 'Proyecto siguiente',
      back: 'Volver a proyectos',
    },
    hero: {
      title: 'Hola, soy Luis Toro.',
      description: 'Product Designer con más de 6 años creando experiencias claras y de alta calidad en FinTech, salud, EdTech y comercio electrónico.',
      location: 'Barranquilla, Colombia',
      locationAlt: 'Ubicación',
      trustedBy: 'Empresas que confían en mi trabajo',
    },
    footer: 'Diseñado y desarrollado por Luis Toro',
    about: {
      title: 'Diseño productos. Exploro el mundo. Construyo lo que sigue.',
      description: 'Soy un creador curioso, atraído por la tecnología, las finanzas, los videojuegos, los viajes y el emprendimiento. Últimamente exploro cómo los productos digitales se encuentran con el mundo físico a través de la impresión 3D y la cultura maker.',
    },
    sideProjects: {
      title: 'Construyo productos, exploro código e impulso comunidades',
      description: 'Creo herramientas para comunidades, experimento con desarrollo front-end y exploro cómo el software puede simplificar lo complejo. Actualmente estoy construyendo un gestor de finanzas personales.',
    },
    cv: {
      title: 'Hoja de vida',
      experience: 'Experiencia',
      education: 'Educación',
      download: 'Descargar CV',
      present: 'Actualidad',
      graphicDesign: 'Diseño gráfico',
    },
    projectMeta: { role: 'Rol', timeline: 'Periodo', skills: 'Habilidades' },
    emptyProject: 'Este caso de estudio está en preparación.',
    seo: {
      home: { title: 'Luis Toro | Product Designer', description: 'Portafolio de Luis Toro, Product Designer enfocado en productos digitales claros y sistemas de diseño escalables.' },
      about: { title: 'Sobre mí | Luis Toro', description: 'Conoce a Luis Toro, Product Designer y creador curioso.' },
      sideProjects: { title: 'Proyectos personales | Luis Toro', description: 'Productos y experimentos independientes de Luis Toro.' },
      cv: { title: 'CV | Luis Toro', description: 'Experiencia profesional y formación de Luis Toro, Product Designer.' },
    },
  },
} as const;

export const projectCopy = {
  'ontop-app-dark-mode-adaptations': {
    en: { title: "Adapting Ontop Wallet for dark mode", subtitle: 'A more comfortable visual system for low-light financial workflows.' },
    es: { title: 'Adaptando Ontop Wallet al modo oscuro', subtitle: 'Un sistema visual más cómodo para flujos financieros en ambientes de poca luz.' },
  },
  'ontop-design-system': {
    en: { title: "Building Ontop's design system", subtitle: 'A shared foundation that helps teams deliver consistent experiences across platforms.' },
    es: { title: 'Construyendo el Design System de Ontop', subtitle: 'Una base compartida para crear experiencias consistentes en todas las plataformas.' },
  },
  'ontop-app-redesign': {
    en: { title: 'Redesigning Ontop Wallet', subtitle: 'A clearer wallet experience that gives workers confidence in every financial decision.' },
    es: { title: 'Rediseñando Ontop Wallet', subtitle: 'Una experiencia de billetera más clara para tomar decisiones financieras con confianza.' },
  },
  'scotiabank-design-system': {
    en: { title: "Scaling Scotiabank's design system", subtitle: 'A local design system that brought consistency to complex financial journeys.' },
    es: { title: 'Escalando el Design System de Scotiabank', subtitle: 'Un sistema local que llevó consistencia a recorridos financieros complejos.' },
  },
  'application-redesign': {
    en: { title: 'Simplifying credit decisions', subtitle: 'A clearer product experience for understanding and acting on credit information.' },
    es: { title: 'Simplificando las decisiones de crédito', subtitle: 'Una experiencia más clara para entender y actuar sobre la información crediticia.' },
  },
  'fanbase-app': {
    en: { title: 'Designing a football fan experience', subtitle: 'A seasonal product that turned matchday engagement into repeat participation.' },
    es: { title: 'Diseñando una experiencia para aficionados al fútbol', subtitle: 'Un producto de temporada que convirtió cada partido en participación recurrente.' },
  },
  'bud66-studio': {
    en: { title: 'Turning films into a social experience', subtitle: 'A digital contest that made discovery, participation, and sharing feel connected.' },
    es: { title: 'Transformando un concurso de cine en una experiencia social', subtitle: 'Un concurso digital que conectó descubrimiento, participación y conversación.' },
  },
  '100-accelerator': {
    en: { title: 'Designing a startup accelerator', subtitle: 'A digital experience that made innovation programs easier to discover and join.' },
    es: { title: 'Diseñando una aceleradora de startups', subtitle: 'Una experiencia digital que facilitó descubrir y sumarse a programas de innovación.' },
  },
  'legal-tech-ui': {
    en: { title: 'Building a LegalTech design system', subtitle: 'A scalable product foundation that made complex legal services feel approachable.' },
    es: { title: 'Construyendo un Design System para LegalTech', subtitle: 'Una base escalable que hizo más accesibles servicios legales complejos.' },
  },
  'platzi-calendar': {
    en: { title: 'Improving live event discovery', subtitle: 'A calendar experience that helped learners find the sessions most relevant to them.' },
    es: { title: 'Mejorando el descubrimiento de eventos en vivo', subtitle: 'Una experiencia de calendario para encontrar las sesiones más relevantes.' },
  },
  'product-request-revamp': {
    en: { title: 'Simplifying loan applications', subtitle: 'A guided application flow designed to reduce friction and build applicant confidence.' },
    es: { title: 'Simplificando las solicitudes de crédito', subtitle: 'Un flujo guiado para reducir fricción y dar más confianza a cada solicitante.' },
  },
} as const;

export function getLocalizedPath(path: string, language: Language): string {
  const normalizedPath = path.replace(/^\/es(?=\/|$)/, '') || '/';
  return language === 'es' ? `/es${normalizedPath === '/' ? '' : normalizedPath}` : normalizedPath;
}
