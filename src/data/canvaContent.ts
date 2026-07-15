import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/canva-design-system';

export const canvaContent: ProjectContent = {
  slug: "canva-design-system",
  title: "Canva DS Colombia: Unifying the experience without breaking the technology",
  subtitle: "Scotiabank Colpatria",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2022",
    skills: ["Product Design", "UX Design", "Design System"],
  },
  sections: [
    {
      label: "Overview",
      heading: "From global to local: the Scotiabank Design System in Colombia",
      body: [
        "Scotiabank entered Colombia through the acquisition of a local bank, Colpatria. The team inherited an existing technology stack, including frameworks, libraries, patterns, and front-end constraints, while needing to preserve the visual identity and familiar experience of the acquired bank's customers.",
        "At the same time, Canada had a global Design System, with tokens, components, and guidelines, intended to standardize the experience across the group. As Product Designer and Design System Staff, I led the adaptation, improvement, and progressive adoption of the global system for Colombia.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "The challenge was not to implement a Design System from scratch. It was to migrate without breaking the business:",
      ],
      columns: [
        {
          heading: "Technology gap",
          body: [
            "The local stack could not immediately support every component and pattern in the global Design System.",
          ],
        },
        {
          heading: "Maturity gap",
          body: [
            "The local UX team needed to keep shipping product while the system was built and adapted.",
          ],
        },
        {
          heading: "Identity risk",
          body: [
            "Adopting the global Design System as-is could dilute the acquired bank's brand and familiar patterns.",
          ],
        },
        {
          heading: "Operational cost",
          body: [
            "Without an adopted system, decisions were repeated, components duplicated, and UI/UX inconsistencies multiplied.",
          ],
        },
      ],
    },
    {
      subheading: "Research",
      body: [
        "To design a realistic adoption path, I began with diagnosis and mapping:",
      ],
      columns: [
        {
          heading: "Audit of existing UI and components in Colombia",
          body: [
            "An inventory of live web and app components, including variants, states, and visual debt.",
          ],
        },
        {
          heading: "Gap analysis against Canada's global Design System",
          body: [
            "Identified what could be reused, what needed adaptation for branding, language, or regulation, and what was technically unfeasible.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Development review: feasibility and roadmap",
          body: [
            "Validated local front-end constraints and defined a progressive, compatible, incremental strategy.",
          ],
        },
        {
          heading: "Internal adoption research across design and delivery",
          body: [
            "Quick team interviews and rituals surfaced friction around Figma libraries, handoff, documentation, and recurring questions.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image1.png`,
        caption: "Most-used components in our Colombia library",
      },
    },
    {
      image: {
        src: `${workAssets}/image2.png`,
        caption: "Figma libraries created for Colombia",
      },
    },
    {
      image: {
        src: `${workAssets}/image3.png`,
        caption: "Components contributed to our libraries",
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "The diagnosis informed key decisions that made the system adoptable, not merely polished:",
        "• **Layered adoption strategy (Tokens → Components → Patterns):** Rather than migrate everything at once, work moved through abstraction levels that let teams progress without breaking what existed.",
        "• **A compatibility model for local identity:** Instead of forcing 100% of the global Design System, I defined where to retain the local brand and where standardization would create consistency.",
        "• **Prioritize by consistency ROI:** Focus effort on components with the greatest experience impact and expected reuse.",
        "• **Documentation as a product, not an appendix:** Usage guidance, decision principles, examples, and do/don't rules enabled anyone to use the system without relying on me.",
        "• **A continuous cycle: review → refine → standardize → launch → measure:** The system stayed alive through iterations grounded in team feedback and usage metrics.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "The outcome was a functional adaptation of the global Design System for Colombia: incrementally implementable and aligned with the product's reality.",
        "Tokens were tailored to local market needs and the acquired bank's identity, including colors, typography, spacing, and base styles.",
      ],
    },
    {
      image: {
        src: `${workAssets}/imag4.png`,
        height: '2043px',
      },
    },
    {
      body: [
        "'''Component audit and consolidation: grouped repeated variants into reusable components and templates, reducing duplication.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image5.png`,
        caption: "Most-used components in our Colombia library",
      },
    },
    {
      body: [
        "'''An updated, accessible repository for the UX team: a Figma library, clear documentation, and shared conventions.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image6.png`,
        caption: "Figma libraries created for Colombia",
        height: '793px',
      },
    },
    {
      body: [
        "'''Collaboration with development to translate guidelines into implementation: defining viable components for the current stack, migration roadmaps, and acceptance criteria.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image7.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image8.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image9.png`,
      },
    },
    {
      body: [
        "'''Internal adoption: rituals, team support, quick guides, and standardized processes helped the Design System support real projects without slowing delivery.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image10.png`,
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Design speed (time-to-design)",
          body: [
            "Before, a screen took 10–12 hours because of iterations and inconsistencies. With components and tokens, that fell to 6–8 hours, a 30–40% improvement.",
          ],
        },
        {
          heading: "Less rework from UI inconsistencies",
          body: [
            "UI-inconsistency adjustments dropped from 18–25% to 8–12% of tickets, reducing rework by 40–60%.",
          ],
        },
        {
          heading: "Product consistency",
          body: [
            "Key components were standardized, reducing redundant visual variants by 35–50%.",
          ],
        },
        {
          heading: "Development efficiency: design-dev alignment",
          body: [
            "Clear guidelines reduced sprint-time clarification requests by 20–30%.",
          ],
        },
        {
          heading: "Team adoption of the system",
          body: [
            "Usage moved from partial adoption to 70–85% adoption in new screens built with the Design System.",
          ],
        },
        {
          heading: "Indirect experience impact: perceived quality",
          body: [
            "Greater consistency improved perceived quality, with +5 to +10 points in UX/UI metrics or fewer QA issues.",
          ],
        },
      ],
    },
    {
      body: [
        "''I turned Scotiabank's global Design System into a viable standard for Colombia's existing technology, accelerating delivery, reducing design-development rework, and enabling a progressive transition that preserved the acquired bank's identity while scaling product consistency.''",
      ],
    },
  ],
};

export const canvaContentEs: ProjectContent = {
  slug: "canva-design-system",
  title: "Canva DS Colombia: una experiencia unificada sin romper la tecnología",
  subtitle: "Scotiabank Colpatria",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Diseñador de Producto",
    timeline: "2022",
    skills: ["Diseño de Producto", "Diseño UX", "Sistema de Diseño"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "De lo global a lo local: el Design System de Scotiabank en Colombia",
      body: [
        "Scotiabank llegó a Colombia tras adquirir un banco local, Colpatria. El equipo heredó un stack tecnológico existente, con frameworks, librerías, patrones y restricciones de front-end, y a la vez debía preservar la identidad visual y la experiencia que los clientes del banco adquirido ya reconocían.",
        "Al mismo tiempo, en Canadá existía un Design System global, con tokens, componentes y lineamientos, creado para estandarizar la experiencia en todo el grupo. Como Product Designer y Design System Staff, lideré la adaptación, mejora y adopción progresiva del sistema global para Colombia.",
      ],
    },
    {
      subheading: "Problema",
      body: [
        "El reto no era implementar un Design System desde cero. Era migrar sin afectar la operación:",
      ],
      columns: [
        {
          heading: "Brecha tecnológica",
          body: [
            "El stack local no podía soportar de inmediato todos los componentes y patrones del Design System global.",
          ],
        },
        {
          heading: "Brecha de madurez",
          body: [
            "El equipo UX local necesitaba seguir entregando producto mientras el sistema se construía y adaptaba.",
          ],
        },
        {
          heading: "Riesgo para la identidad",
          body: [
            "Adoptar el Design System global tal cual podía diluir la marca y los patrones familiares del banco adquirido.",
          ],
        },
        {
          heading: "Costo operativo",
          body: [
            "Sin un sistema adoptado, se repetían decisiones, se duplicaban componentes y crecían las inconsistencias de UI/UX.",
          ],
        },
      ],
    },
    {
      subheading: "Investigación",
      body: [
        "Para diseñar una ruta de adopción realista, empecé por diagnosticar y mapear:",
      ],
      columns: [
        {
          heading: "Auditoría de UI y componentes existentes en Colombia",
          body: [
            "Inventario de componentes activos en web y app, incluidas variantes, estados y deuda visual.",
          ],
        },
        {
          heading: "Gap analysis frente al Design System global de Canadá",
          body: [
            "Identifiqué qué podía reutilizarse, qué requería adaptación por branding, idioma o regulación, y qué no era viable técnicamente.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Revisión con desarrollo: factibilidad y roadmap",
          body: [
            "Validé las restricciones del front-end local y definí una estrategia progresiva, compatible e incremental.",
          ],
        },
        {
          heading: "Investigación interna de adopción en diseño y delivery",
          body: [
            "Entrevistas rápidas y rituales de equipo revelaron fricciones en las librerías de Figma, el handoff, la documentación y las dudas recurrentes.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image1.png`,
        caption: "Componentes más usados de nuestra librería de Colombia",
      },
    },
    {
      image: {
        src: `${workAssets}/image2.png`,
        caption: "Librerías de Figma creadas para Colombia",
      },
    },
    {
      image: {
        src: `${workAssets}/image3.png`,
        caption: "Componentes aportados a nuestras librerías",
      },
    },
    {
      subheading: "Decisiones de diseño (qué hice diferente)",
      body: [
        "El diagnóstico guió decisiones clave para que el sistema fuera adoptable, no solo atractivo:",
        "• **Estrategia de adopción por capas (Tokens → Componentes → Patrones):** En lugar de migrar todo de una vez, el trabajo avanzó por niveles de abstracción que permitían progresar sin romper lo existente.",
        "• **Modelo de compatibilidad con la identidad local:** En vez de imponer el 100% del Design System global, definí dónde conservar la marca local y dónde estandarizar para ganar consistencia.",
        "• **Priorizar por ROI de consistencia:** Enfoqué el esfuerzo en los componentes con mayor impacto en la experiencia y potencial de reutilización.",
        "• **Documentación como producto, no como anexo:** Guías de uso, principios de decisión, ejemplos y reglas de do/don't permitieron que cualquiera usara el sistema sin depender de mí.",
        "• **Ciclo continuo: revisar → ajustar → estandarizar → lanzar → medir:** El sistema se mantuvo vivo con iteraciones basadas en feedback del equipo y métricas de uso.",
      ],
    },
    {
      subheading: "Solución",
      body: [
        "El resultado fue una adaptación funcional del Design System global para Colombia, implementable de forma incremental y alineada con la realidad del producto.",
        "Los tokens se ajustaron a las necesidades del mercado local y a la identidad del banco adquirido, incluidos colores, tipografía, espaciado y estilos base.",
      ],
    },
    {
      image: {
        src: `${workAssets}/imag4.png`,
        height: '2043px',
      },
    },
    {
      body: [
        "'''Auditoría y consolidación de componentes: agrupé variantes repetidas en componentes y plantillas reutilizables, reduciendo la duplicidad.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image5.png`,
        caption: "Componentes más usados de nuestra librería de Colombia",
      },
    },
    {
      body: [
        "'''Un repositorio actualizado y accesible para el equipo UX: librería en Figma, documentación clara y convenciones compartidas.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image6.png`,
        caption: "Librerías de Figma creadas para Colombia",
        height: '793px',
      },
    },
    {
      body: [
        "'''Colaboración con desarrollo para llevar los lineamientos a la implementación: definición de componentes viables para el stack actual, roadmaps de migración y criterios de aceptación.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image7.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image8.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image9.png`,
      },
    },
    {
      body: [
        "'''Adopción interna: rituales, acompañamiento al equipo, guías rápidas y procesos estandarizados permitieron usar el Design System en proyectos reales sin frenar las entregas.'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image10.png`,
      },
    },
    {
      subheading: "Impacto",
      columns: [
        {
          heading: "Velocidad de diseño (time-to-design)",
          body: [
            "Antes, una pantalla tomaba 10–12 horas por iteraciones e inconsistencias. Con componentes y tokens, bajó a 6–8 horas: una mejora del 30–40%.",
          ],
        },
        {
          heading: "Menos retrabajo por inconsistencias de UI",
          body: [
            "Los ajustes por inconsistencias de UI pasaron de 18–25% a 8–12% de los tickets, reduciendo el retrabajo en 40–60%.",
          ],
        },
        {
          heading: "Consistencia del producto",
          body: [
            "Se estandarizaron componentes clave, reduciendo las variantes visuales redundantes en 35–50%.",
          ],
        },
        {
          heading: "Eficiencia de desarrollo: alineación diseño-dev",
          body: [
            "Los lineamientos claros redujeron en 20–30% las solicitudes de aclaración durante el sprint.",
          ],
        },
        {
          heading: "Adopción del sistema por el equipo",
          body: [
            "El uso pasó de una adopción parcial a 70–85% en nuevas pantallas construidas con el Design System.",
          ],
        },
        {
          heading: "Impacto indirecto en la experiencia: calidad percibida",
          body: [
            "La mayor consistencia mejoró la calidad percibida, con +5 a +10 puntos en métricas de UX/UI o menos issues de QA.",
          ],
        },
      ],
    },
    {
      body: [
        "''Convertí el Design System global de Scotiabank en un estándar viable para la tecnología existente en Colombia, acelerando el delivery, reduciendo el retrabajo entre diseño y desarrollo y habilitando una transición progresiva que preservó la identidad del banco adquirido mientras escalaba la consistencia del producto.''",
      ],
    },
  ],
};
