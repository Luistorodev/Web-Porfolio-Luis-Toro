import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/100-accelerator';

export const acceleratorContent: ProjectContent = {
  slug: "100-accelerator",
  title: "UX/UI for startup web and app experiences (2021)",
  subtitle: "100+ Accelerator",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2020",
    skills: ["Design System", "Product Design", "Prototyping"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Building the Foundations",
      body: [
        "AB-InBev launched 100+ Accelerator, an initiative that attracts and accelerates startups with high-impact solutions. The challenge was to turn a complex program (applications, selection, cohorts, partners, FAQs, and news) into a clear, reliable experience across web and app.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image1.png`,
      },
    },
    {
      subheading: "The Challenge",
      body: [
        "The program served multiple audiences (startups, partners, and the internal team) across many sections, creating three common risks:",
        "• Information overload: too many pages and content that was difficult to scan.",
        "• Unclear journey: startups lacked a clear path to understand \"what it is\" and \"what to do next.\"",
        "• Web/app inconsistency: disconnected experiences that undermined trust and adoption.",
      ],
    },
    {
      subheading: "Design Goal",
      body: [
        "Create an experience that:",
        "• Explains the program in seconds (what it is, who it's for, and its benefits).",
        "• Guides startups through a clear flow from discovery → evaluation → participation.",
        "• Establishes a reusable UI foundation (components) that scales across content (cohorts, news, partners, FAQs).",
        "• Maintains a corporate yet innovative tone aligned with AB-InBev.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image-2.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/project-image3.png`,
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Clear content hierarchy: each section answers a question (\"what is it?\", \"how does it work?\", \"who's behind it?\").",
        "• Card-based content for cohorts and news: reduces friction and supports exploration.",
        "• Consistent web/app navigation and layout patterns: build familiarity and trust.",
        "• Credibility-led design: make partners, team, and history visible to reduce uncertainty (key for startups evaluating programs).",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image4.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/Project-image5.png`,
      },
    },
  ],
};

export const acceleratorContentEs: ProjectContent = {
  slug: "100-accelerator",
  title: "UX/UI para experiencias web y app de startups (2021)",
  subtitle: "100+ Accelerator",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Diseño de producto",
    timeline: "2020",
    skills: ["Sistema de diseño", "Diseño de producto", "Prototipado"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Construyendo las bases",
      body: [
        "AB-InBev lanzó 100+ Accelerator, una iniciativa que atrae y acelera startups con soluciones de alto impacto. El reto fue convertir un programa complejo (postulaciones, selección, cohortes, socios, preguntas frecuentes y noticias) en una experiencia clara y confiable en web y app.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image1.png`,
      },
    },
    {
      subheading: "El reto",
      body: [
        "El programa atendía a varias audiencias (startups, aliados y equipo interno) en muchas secciones, lo que generaba tres riesgos comunes:",
        "• Sobrecarga de información: demasiadas páginas y contenido difícil de explorar rápidamente.",
        "• Recorrido poco claro: las startups no tenían una ruta clara para entender \"qué es\" y \"qué hacer después\".",
        "• Inconsistencia entre web y app: experiencias desconectadas que afectaban la confianza y la adopción.",
      ],
    },
    {
      subheading: "Objetivo de diseño",
      body: [
        "Crear una experiencia que:",
        "• Explique el programa en segundos (qué es, para quién es y sus beneficios).",
        "• Guíe a las startups en un flujo claro de descubrimiento → evaluación → participación.",
        "• Establezca una base de UI reutilizable (componentes) que escale el contenido (cohortes, noticias, socios, preguntas frecuentes).",
        "• Mantenga un tono corporativo e innovador alineado con AB-InBev.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image-2.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/project-image3.png`,
      },
    },
    {
      subheading: "Decisiones de diseño (lo que hice diferente)",
      body: [
        "Jerarquía de contenido clara: cada sección responde una pregunta (\"¿qué es?\", \"¿cómo funciona?\", \"¿quién está detrás?\").",
        "• Contenido en tarjetas para cohorts y noticias: reduce la fricción y facilita la exploración.",
        "• Navegación y patrones de diseño consistentes entre web y app: generan familiaridad y confianza.",
        "• Diseño enfocado en credibilidad: mostrar socios, equipo e historia reduce la incertidumbre (clave para startups que evalúan programas).",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image4.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/Project-image5.png`,
      },
    },
  ],
};
