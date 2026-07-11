import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/canva-design-system';

export const canvaContent: ProjectContent = {
  slug: "canva-design-system",
  title: "Canva DS Colombia: la adopción que unificó la experiencia sin romper la tecnología",
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
      heading: "De global a local: Scotiabank Design System en Colombia",
      body: [
        "Scotiabank aterrizó en Colombia a través de la adquisición de un banco local (Colpatria). Eso significó partir de una infraestructura tecnológica ya existente (frameworks, librerías, patrones, limitaciones de front) y, al mismo tiempo, sostener la identidad visual y la experiencia que los clientes del banco adquirido ya reconocían.",
        "En paralelo, desde Canadá existía un Design System global (tokens, componentes, lineamientos) que buscaba estandarizar la experiencia en todo el grupo. Mi rol fue Product Designer + Design System Staff, liderando la adaptación, mejora y adopción progresiva del sistema global para el contexto colombiano.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "El reto no era \"implementar un DS desde cero\", sino migrar sin romper:",
      ],
      columns: [
        {
          heading: "Brecha tecnológica",
          body: [
            "El stack local no soportaba de inmediato todos los componentes/patrones del DS global.",
          ],
        },
        {
          heading: "Brecha de madurez",
          body: [
            "El equipo UX local necesitaba seguir entregando producto mientras se construía/ajustaba el sistema.",
          ],
        },
        {
          heading: "Riesgo de identidad",
          body: [
            "Adoptar el DS global \"tal cual\" podía diluir la marca y patrones del banco adquirido.",
          ],
        },
        {
          heading: "Costo operativo",
          body: [
            "Sin un sistema adoptado, se repetían decisiones, se duplicaban componentes y aumentaban inconsistencias UI/UX.",
          ],
        },
      ],
    },
    {
      subheading: "Research",
      body: [
        "Para diseñar una adopción realista, el trabajo inició con diagnóstico y mapeo:",
      ],
      columns: [
        {
          heading: "Auditoría de UI y componentes existentes (Colombia)",
          body: [
            "Inventario de componentes reales en producto (web/app), variantes, estados y deudas visuales.",
          ],
        },
        {
          heading: "Gap analysis contra el Design System global (Canadá)",
          body: [
            "Qué se podía reutilizar, qué requería adaptación (branding/idioma/regulación) y qué era inviable por tecnología.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Revisión con desarrollo (factibilidad y roadmap)",
          body: [
            "Validación de restricciones del front local y definición de la estrategia: progresivo + compatible + incremental.",
          ],
        },
        {
          heading: "Research interno de adopción (diseño y delivery)",
          body: [
            "Entrevistas rápidas/rituales con el equipo para entender fricciones: librerías en Figma, handoff, documentación, dudas recurrentes.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image1.png`,
        caption: "Componentes más usados de nuestra librería CO",
      },
    },
    {
      image: {
        src: `${workAssets}/image2.png`,
        caption: "Librerías en Figma creadas para Colombia",
      },
    },
    {
      image: {
        src: `${workAssets}/image3.png`,
        caption: "Componentes aportados a nuestras librerías",
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Con la evidencia del diagnóstico, tomé decisiones clave para que el sistema fuera adoptable (no solo \"bonito\"):",
        "• **Estrategia de adopción por capas (Tokens → Componentes → Patrones):** no migrar todo de golpe, sino por niveles de abstracción que permitieran avanzar sin romper lo existente.",
        "• **Modelo de \"compatibilidad\" con identidad local:** no forzar el 100% del DS global, sino identificar dónde preservar la marca local y dónde estandarizar para ganar consistencia.",
        "• **Priorizar por \"ROI de consistencia\":** enfocar esfuerzos en los componentes con mayor impacto en la experiencia y mayor reutilización esperada.",
        "• **Documentación como producto (no como anexo):** guías de uso, principios de decisión, ejemplos y \"do/don't\" para que cualquiera pudiera usar el sistema sin depender de mí.",
        "• **Ciclo continuo: revisar → ajustar → estandarizar → lanzar → medir:** el sistema se mantuvo vivo con iteraciones basadas en feedback real del equipo y métricas de uso.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "El resultado fue una adaptación funcional del Design System global para Colombia, implementable de forma incremental y alineada a la realidad del producto:",
        "Tokens ajustados a necesidades reales del mercado y a la identidad del banco local (colores, tipografía, spacing, estilos base).",
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
        "'''Auditoría y consolidación de componentes: agrupación de variantes repetidas en componentes reutilizables y plantillas (reducción de duplicidad).'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image5.png`,
        caption: "Componentes más usados de nuestra librería CO",
      },
    },
    {
      body: [
        "'''Repositorio actualizado y accesible para el equipo UX (librería en Figma + documentación clara + convenciones).'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image6.png`,
        caption: "Librerías en Figma creadas para Colombia",
        height: '793px',
      },
    },
    {
      body: [
        "'''Colaboración con desarrollo para aterrizar lineamientos a implementación: definición de componentes viables en el stack actual, roadmaps de migración y criterios de aceptación.'''",
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
        "'''Adopción interna: rituales, soporte al equipo, guías rápidas y estandarización de procesos para que el DS se usara en proyectos reales sin frenar entregas.'''",
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
        "''Convertí el Design System global de Scotiabank en un estándar viable para la tecnología existente en Colombia, acelerando el delivery, disminuyendo el retrabajo entre diseño y desarrollo y asegurando una transición progresiva que mantuvo la identidad del banco adquirido mientras escalaba la consistencia del producto.''",
      ],
    },
  ],
};
