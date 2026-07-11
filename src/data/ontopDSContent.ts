import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/ontop-design-system';

export const ontopDSContent: ProjectContent = {
  slug: "ontop-design-system",
  title: "Ontop Design System",
  subtitle: "ONTOP LLC",
  cover: {
    src: `${workAssets}/Cover.png`,
    contain: true,
  },
  meta: {
    role: "Product Designer",
    timeline: "2024 — Currently",
    skills: ["Product Design", "UX Design", "Design System"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Un lenguaje visual y de componentes para unificar productos de Ontop",
      body: [
        "Ontop estaba creciendo como ecosistema con productos para segmentos distintos. Eso hizo visible un problema: cada plataforma avanzaba con criterios visuales y de interacción diferentes, lo que afectaba consistencia, escalabilidad y velocidad de entrega. El objetivo fue construir un Design System que alineara productos, equipos y tecnologías bajo un mismo lenguaje.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image01.png`,
        contain: true,
      },
    },
    {
      subheading: "El reto (Challenge) — el \"por qué dolía\"",
      body: [
        "El principal reto fue articular un sistema de diseño que funcionara para productos de segmentos diferentes dentro del mismo ecosistema, manteniendo cohesión cross‑platform y elevando el estándar visual/funcional.",
      ],
      columns: [
        {
          heading: "Inconsistencia entre 3 plataformas/tecnologías",
          body: [
            "Cada producto de Ontop estaba construido con criterios visuales y patrones de interacción distintos, generando una experiencia fragmentada para los usuarios y duplicando el esfuerzo de diseño y desarrollo.",
          ],
        },
        {
          heading: "Baja preparación para migración a dark mode",
          body: [
            "La falta de tokens semánticos y una paleta de colores no normalizada hacían inviable una migración consistente a dark mode, un requisito cada vez más demandado por los usuarios.",
          ],
        },
        {
          heading: "Reestructura del sistema mientras marketing redefinía identidad de marca",
          body: [
            "El design system tuvo que evolucionar al mismo tiempo que marketing redefinía la identidad visual de Ontop, lo que implicó un cambio transversal en todos los componentes y tokens.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image02.png`,
        contain: true,
      },
    },
    {
      subheading: "Proceso",
      body: [
        "Para diseñar una adopción realista, el trabajo inició con diagnóstico y mapeo:",
      ],
      columns: [
        {
          heading: "Auditoría (Diagnóstico)",
          body: [
            "Se realizó un inventario de los componentes existentes para identificar inconsistencias en la interfaz, los tokens, el comportamiento y la accesibilidad, priorizando su estandarización según su impacto y uso en el producto.",
          ],
        },
        {
          heading: "Fundaciones (Tokens + reglas)",
          body: [
            "Se definieron los fundamentos del sistema de diseño, incluyendo la tipografía, la paleta de colores con su semántica, la escala de espaciado y grid, así como las elevaciones, sombras, radios y bordes.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Componentización (UI Kit)",
          body: [
            "Se construyeron los componentes base y patrones del sistema de diseño, definiendo sus variantes, estados y lineamientos de uso para garantizar consistencia en su implementación.",
          ],
        },
        {
          heading: "QA y Testing (la parte diferencial)",
          body: [
            "Se realizaron validaciones internas y pruebas en entornos reales para asegurar la consistencia y el correcto funcionamiento de los componentes, iterando su diseño a partir del feedback obtenido.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image03.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image04.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image05.png`,
        contain: true,
      },
    },
    {
      subheading: "Solution",
      body: [
        "El resultado fue un design system funcional, implementable de forma incremental y alineado a la realidad del producto:",
      ],
    },
    {
      image: {
        src: `${workAssets}/image06.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image07.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image08.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image09.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image10.png`,
        contain: true,
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Velocidad de diseño (time-to-design)",
          body: [
            "Antes, una pantalla tomaba 10–12 horas por iteraciones e inconsistencias; después, con componentes y tokens, bajó a 6–8 horas, logrando una mejora del 30–40%.",
          ],
        },
        {
          heading: "Reducción de retrabajo por inconsistencias UI",
          body: [
            "Los ajustes por inconsistencias UI pasaron de 18–25% a 8–12% de los tickets, reduciendo el retrabajo en un 40–60%.",
          ],
        },
        {
          heading: "Consistencia del producto",
          body: [
            "Se estandarizaron componentes clave, reduciendo en 35–50% las variantes visuales redundantes.",
          ],
        },
        {
          heading: "Eficiencia de desarrollo (alineación diseño-dev)",
          body: [
            "Con lineamientos claros, se redujeron en 20–30% las aclaraciones durante el sprint.",
          ],
        },
        {
          heading: "Adopción del sistema por el equipo",
          body: [
            "El uso pasó de ser parcial a 70–85% de adopción en nuevas pantallas mediante el design system.",
          ],
        },
        {
          heading: "Impacto indirecto en experiencia (calidad percibida)",
          body: [
            "La mayor consistencia mejoró la calidad percibida, con +5 a +10 puntos en métricas UX/UI o menos issues en QA.",
          ],
        },
      ],
    },
    {
      body: [
        "''Este Design System se convirtió en la base para construir y escalar el ecosistema Ontop con consistencia, velocidad y preparación para el futuro (dark mode y nuevos estándares fintech).''",
      ],
    },
  ],
};
