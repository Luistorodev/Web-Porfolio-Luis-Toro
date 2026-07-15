import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/application-redesign';

export const circuloContent: ProjectContent = {
  slug: "application-redesign",
  title: "Redesigning the Círculo de Crédito experience",
  subtitle: "Círculo de Crédito",
  cover: {
    src: `${workAssets}/cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2023",
    skills: ["Product Design", "UX Design", "Design System"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Radical clarity that turns friction into action",
      body: [
        "Círculo de Crédito is one of Mexico's leading providers of financial insights, including credit profiles, monitoring, and security tools. Despite its market position, its digital ecosystem (web + app) did not reflect that leadership. The experience lagged behind modern fintech standards, with lengthy flows, unclear interfaces, and fragmented architecture.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "The experience made people think too hard. Which product should they choose? What did each option mean? What happened next? Instead of guiding them, the product created doubt. In financial products, every doubt becomes friction, and every friction point leads to abandonment.",
      ],
    },
    {
      subheading: "Research",
      body: [
        "Rather than starting with methods, I began with a simple question: exactly where were we losing users, and why?",
      ],
      columns: [
        {
          heading: "Understanding real behavior",
          body: [
            "Funnel analysis revealed a clear pattern: sharp drop-offs immediately after users viewed products, abandonment in the first third of onboarding, and users returning several times without purchasing. The issue was not intent. It was clarity.",
          ],
        },
        {
          heading: "What we saw in live sessions",
          body: [
            "Session reviews and quick unmoderated tests surfaced specific friction points: users compared products without understanding the differences, hesitated before clicking \"Continue\" (with consistent micro-pauses), and struggled with financial terminology and unclear naming.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image01.png`,
      },
    },
    {
      body: [
        "''The biggest problem was not that users could not complete the flow. It was that they did not feel confident enough to do it.''",
      ],
    },
    {
      body: [
        "'''Internal audit'''",
        "Mapping the end-to-end experience across web and app made it clear that the product had evolved unevenly. Its flows did not follow a clear structure; they were the accumulated result of multiple iterations over time, with patch upon patch eroding overall coherence. This showed up as cross-platform inconsistencies, where the same action could feel different depending on the device.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image02.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image03.png`,
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "I separated exploration from decision-making so users would not have to understand the product while already purchasing it. Each screen prioritized clarity by reducing choices and focusing attention on one action at a time. A mobile-first approach simplified flows and removed unnecessary friction. Everything was then structured within a design system to ensure consistency and scalability across web and app.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "The redesign removed uncertainty and turned exploration into decision-making:",
      ],
    },
    {
      body: [
        "'''New information architecture'''",
        "Clear product grouping and a hierarchy based on intent (explore vs. buy).",
      ],
      image: {
        src: `${workAssets}/image04.png`,
        contain: true,
      },
      layout: 'side-text-right',
    },
    {
      body: [
        "'''Simplified onboarding'''",
        "Fewer steps, progressive inputs, and real-time feedback.",
      ],
      image: {
        src: `${workAssets}/image05.png`,
        contain: true,
      },
      layout: 'side-text-left',
    },
    {
      body: [
        "'''Redesigned product pages'''",
        "A clear value proposition, plan comparisons, and visible, actionable CTAs.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image06.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image07.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image08.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image09.png`,
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "+28% purchase conversion",
          body: [
            "More users completed purchases for core products thanks to a clearer, decision-focused experience.",
          ],
        },
        {
          heading: "-35% onboarding abandonment",
          body: [
            "Early-flow drop-off fell significantly by removing friction and simplifying inputs.",
          ],
        },
        {
          heading: "+18% retention (30 days)",
          body: [
            "Repeat usage improved through a more understandable and trustworthy experience.",
          ],
        },
        {
          heading: "+25% engagement with secondary products",
          body: [
            "Cross-sell increased through clearer product organization and positioning.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image10.png`,
      },
    },
    {
      body: [
        "''I simplified access to financial information in a space that had long been confusing.''",
      ],
    },
  ],
};

export const circuloContentEs: ProjectContent = {
  slug: "application-redesign",
  title: "Rediseño de la experiencia de Círculo de Crédito",
  subtitle: "Círculo de Crédito",
  cover: {
    src: `${workAssets}/cover.png`,
  },
  meta: {
    role: "Diseñador de Producto",
    timeline: "2023",
    skills: ["Diseño de Producto", "Diseño UX", "Sistema de Diseño"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Claridad radical para convertir la fricción en acción",
      body: [
        "Círculo de Crédito es una de las principales entidades de México en productos de análisis financiero, como perfil crediticio, monitoreo y herramientas de seguridad. A pesar de su posición en el mercado, su ecosistema digital (web + app) no reflejaba ese liderazgo. La experiencia estaba rezagada frente a los nuevos estándares fintech: flujos extensos, interfaces poco claras y una arquitectura fragmentada.",
      ],
    },
    {
      subheading: "Problema",
      body: [
        "La experiencia hacía que las personas pensaran demasiado. ¿Qué producto debían elegir? ¿Qué significaba cada opción? ¿Qué seguía después? En vez de guiarlas, el producto generaba dudas. En productos financieros, cada duda se convierte en fricción y cada fricción, en abandono.",
      ],
    },
    {
      subheading: "Investigación",
      body: [
        "En lugar de empezar por los métodos, partí de una pregunta simple: ¿en qué punto perdíamos a los usuarios y por qué?",
      ],
      columns: [
        {
          heading: "Entender el comportamiento real",
          body: [
            "El análisis de funnels reveló un patrón claro: caídas marcadas justo después de ver los productos, abandono en el primer tercio del onboarding y usuarios que regresaban varias veces sin comprar. El problema no era la intención. Era la claridad.",
          ],
        },
        {
          heading: "Lo que vimos en sesiones reales",
          body: [
            "Las revisiones de sesiones y pruebas rápidas no moderadas revelaron fricciones concretas: las personas comparaban productos sin entender las diferencias, dudaban antes de hacer clic en \"Continuar\" (con micro-pausas constantes) y tenían dificultades con términos financieros y nombres poco claros.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image01.png`,
      },
    },
    {
      body: [
        "''El mayor problema no era que los usuarios no pudieran completar el flujo. Era que no tenían suficiente confianza para hacerlo.''",
      ],
    },
    {
      body: [
        "'''Auditoría interna'''",
        "Al mapear la experiencia de punta a punta entre web y app, quedó claro que el producto había evolucionado de forma desordenada. Los flujos no respondían a una estructura clara: eran el resultado acumulado de múltiples iteraciones a lo largo del tiempo, con parches sobre parches que afectaron la coherencia general. Esto se reflejaba en inconsistencias entre plataformas, donde una misma acción podía sentirse distinta según el dispositivo.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image02.png`,
        contain: true,
      },
    },
    {
      image: {
        src: `${workAssets}/image03.png`,
      },
    },
    {
      subheading: "Decisiones de diseño (qué hice diferente)",
      body: [
        "Separé la exploración de la decisión para que las personas no tuvieran que entender el producto mientras ya lo compraban. Cada pantalla priorizó la claridad, reduciendo opciones y enfocando la atención en una sola acción a la vez. El enfoque mobile-first simplificó los flujos y eliminó fricción innecesaria. Finalmente, estructuré todo bajo un sistema de diseño para asegurar consistencia y escalabilidad entre web y app.",
      ],
    },
    {
      subheading: "Solución",
      body: [
        "El rediseño eliminó la incertidumbre y convirtió la exploración en decisión:",
      ],
    },
    {
      body: [
        "'''Nueva arquitectura de información'''",
        "Agrupación clara de productos y jerarquía basada en la intención (explorar vs. comprar).",
      ],
      image: {
        src: `${workAssets}/image04.png`,
        contain: true,
      },
      layout: 'side-text-right',
    },
    {
      body: [
        "'''Onboarding simplificado'''",
        "Menos pasos, inputs progresivos y feedback en tiempo real.",
      ],
      image: {
        src: `${workAssets}/image05.png`,
        contain: true,
      },
      layout: 'side-text-left',
    },
    {
      body: [
        "'''Rediseño de páginas de producto'''",
        "Propuesta de valor clara, comparación de planes y CTAs visibles y accionables.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image06.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image07.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image08.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image09.png`,
      },
    },
    {
      subheading: "Impacto",
      columns: [
        {
          heading: "+28% en conversión de compra",
          body: [
            "Más personas completaron la compra de productos principales gracias a una experiencia más clara y enfocada en la decisión.",
          ],
        },
        {
          heading: "-35% en abandono del onboarding",
          body: [
            "El abandono en los primeros pasos cayó de forma significativa al eliminar fricción y simplificar los inputs.",
          ],
        },
        {
          heading: "+18% en retención (30 días)",
          body: [
            "El uso recurrente mejoró gracias a una experiencia más comprensible y confiable.",
          ],
        },
        {
          heading: "+25% en interacción con productos secundarios",
          body: [
            "El cross-sell creció gracias a una organización y presentación de la oferta más claras.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image10.png`,
      },
    },
    {
      body: [
        "''Simplifiqué el acceso a información financiera en un espacio que históricamente había sido confuso.''",
      ],
    },
  ],
};
