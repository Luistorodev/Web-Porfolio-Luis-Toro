import type { ProjectContent } from './legalTechContent';

import { workImage } from './workImages';

const w = (p: string) => workImage(`product-request-revamp/${p}`);

// TODO(luis): confirmar los alts propuestos en este archivo (generados por contexto de sección; validar contra las imágenes reales) y añadir captions opcionales donde aporten.

export const productRequestContent: ProjectContent = {
  slug: "product-request-revamp",
  title: "Redesigning personal and revolving credit applications",
  subtitle: "Scotiabank Colpatria",
  cover: {
    src: w('cover.png'), alt: 'Cover of the loan application redesign case study',
  },
  meta: {
    role: "Product Designer",
    timeline: "2022",
    skills: ["Product Design", "UX Design", "Prototyping"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Credit without uncertainty",
      body: [
        "Scotiabank Colpatria was expanding product applications through its Oneclick channel (web + app via WebView). The challenge was to scale the experience to personal and revolving credit while maintaining consistency with other products (accounts/cards) and reducing friction. As Product Designer, I led the end-to-end redesign: diagnosis, research, definition, interaction and UI design, user validation, and developer handoff.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "The application experience was shaped by two critical issues:",
      ],
      columns: [
        {
          heading: "Distrust and uncertainty",
          body: [
            "People did not know what they needed, what the bank was offering, or why certain information was required. Rate and terms communication felt incomplete or \"not transparent enough,\" increasing anxiety and abandonment.",
          ],
        },
        {
          heading: "No simulation tool",
          body: [
            "Without a payment and scenario simulation, people could not test whether the loan fit their budget. This heightened the perceived risk (\"I'll move forward, then they'll show me something worse\") and weakened completion intent.",
          ],
        },
      ],
    },
    {
      body: [
        "Result: high abandonment, low conversion, and an inconsistent product experience.",
      ],
    },
    {
      image: {
        src: w('image01.png'), alt: 'Pain points in the original loan application flow',
      },
    },
    {
      subheading: "Research",
      body: [
        "To understand why people abandoned the flow and what needed to change, I used a mixed-method approach:",
      ],
      columns: [
        {
          heading: "Oneclick funnel and channel metrics analysis",
          body: [
            "I identified the screens with the highest drop-off, especially where financial or legal information appeared and where people were asked for information they perceived as \"excessive.\"",
          ],
        },
        {
          heading: "Interviews + moderated testing (banked users seeking credit)",
          body: [
            "We found clear patterns: \"I don't understand whether I qualify\" / \"I don't know how much I'll pay\" / \"They don't show clear rates\" (fear of a surprise rate) / \"Too many fields for something that should be quick.\"",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Heuristic review",
          body: [
            "We documented inconsistent patterns, ambiguous microcopy, weak visual hierarchy, and components misaligned with the design system.",
          ],
        },
        {
          heading: "Competitive benchmark",
          body: [
            "We reviewed trust-building patterns: simulators, payment breakdowns, rate ranges, scenario comparisons, clear progress indicators, and security and privacy messaging.",
          ],
        },
      ],
    },
    {
      image: {
        src: w('image02.png'), alt: 'Research findings on the Oneclick credit funnel',
      },
    },
    {
      image: {
        src: w('image03.png'), alt: 'User interviews and heuristic review insights',
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Based on the findings, I made design decisions focused on transparency, control, and lower cognitive load:",
        "• **Early simulation:** show payments and scenarios upfront to build confidence.",
        "• **Simplified fields:** reduce and explain inputs with clear microcopy.",
        "• **Standardized UX:** consistent components and rules across products.",
        "• **Legal storytelling:** concise, clear legal copy in human language.",
        "• **Process clarity:** explain eligibility, timelines, and next steps.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "The final redesign delivered a more trustworthy, consistent, decision-oriented application experience:",
      ],
    },
    {
      body: [
        "'''Integrated simulator (Personal / Revolving credit)'''",
      ],
    },
    {
      image: {
        src: w('image04.png'), alt: 'Redesigned loan application step flow',
      },
    },
    {
      body: [
        "'''Optimized form'''",
      ],
    },
    {
      image: {
        src: w('image05.png'), alt: 'Credit simulator interface',
      },
    },
    {
      body: [
        "'''Transparency'''",
      ],
    },
    {
      image: {
        src: w('image06.png'), alt: 'Form validation and guidance states',
      },
    },
    {
      body: [
        "'''Consistent UI/UX'''",
      ],
    },
    {
      image: {
        src: w('image07.png'), alt: 'Confirmation and success screens',
      },
    },
    {
      image: {
        src: w('image08.png'), alt: 'Mobile application flow screens',
      },
    },
    {
      image: {
        src: w('image09.png'), alt: 'Trust-building microcopy and states',
      },
    },
    {
      image: {
        src: w('image10.png'), alt: 'Final loan request experience',
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Less abandonment at the critical step",
          body: [
            "Early simulation and greater transparency reduced drop-off around rates and terms by 18% to 25%.",
          ],
        },
        {
          heading: "Higher conversion",
          body: [
            "Lower friction and greater perceived control drove a 10% to 18% increase in total flow conversion.",
          ],
        },
        {
          heading: "Greater perceived trust",
          body: [
            "Clearer offers improved trust metrics by +20 to +30 points in clarity scores or up to +1.2 on perception scales.",
          ],
        },
        {
          heading: "Simulator use drives intent",
          body: [
            "Between 60% and 75% of users interacted with the simulator, and those who used it were up to 1.6x more likely to complete.",
          ],
        },
        {
          heading: "Faster completion",
          body: [
            "Simplifying the flow reduced total completion time by 12% to 20%.",
          ],
        },
        {
          heading: "Fewer errors and retries",
          body: [
            "Clear validation and contextual help reduced field-level errors by 15% to 30%.",
          ],
        },
      ],
    },
    {
      body: [
        "''This project strengthened Scotiabank Colpatria's service ecosystem by standardizing the Oneclick experience and improving user confidence and self-sufficiency through simulation and clear communication. It created a reusable foundation for scaling product applications with higher conversion and less friction.''",
      ],
    },
  ],
};

export const productRequestContentEs: ProjectContent = {
  slug: "product-request-revamp",
  title: "Rediseño de la solicitud de crédito de libre inversión y rotativo",
  subtitle: "Scotiabank Colpatria",
  cover: {
    src: w('cover.png'), alt: 'Portada del caso de estudio del rediseño de solicitudes de crédito',
  },
  meta: {
    role: "Diseñador de Producto",
    timeline: "2022",
    skills: ["Diseño de Producto", "Diseño UX", "Prototipado"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Crédito sin incertidumbre",
      body: [
        "Scotiabank Colpatria estaba impulsando la solicitud de productos a través de su canal Oneclick (web + app mediante WebView). El reto era escalar la experiencia a créditos de libre inversión y rotativos, manteniendo consistencia con otros productos (cuentas/tarjetas) y reduciendo fricción. Como Diseñador de Producto, lideré el rediseño end-to-end: diagnóstico, investigación, definición, diseño de interacción y UI, validación con usuarios y entrega a desarrollo.",
      ],
    },
    {
      subheading: "Problema",
      body: [
        "La experiencia de solicitud estaba marcada por dos problemas críticos:",
      ],
      columns: [
        {
          heading: "Desconfianza e incertidumbre",
          body: [
            "Las personas no sabían qué necesitaban, qué les ofrecía el banco ni por qué se solicitaba cierta información. La comunicación de tasas y condiciones se percibía incompleta o \"poco transparente\", lo que aumentaba la ansiedad y el abandono.",
          ],
        },
        {
          heading: "No había simulador",
          body: [
            "Sin una simulación de cuotas y escenarios, las personas no podían evaluar si el crédito se ajustaba a su presupuesto. Esto elevaba la sensación de riesgo (\"voy a avanzar y luego me van a mostrar algo peor\") y debilitaba la intención de completar el flujo.",
          ],
        },
      ],
    },
    {
      body: [
        "Resultado: alto abandono, baja conversión y una experiencia inconsistente entre productos.",
      ],
    },
    {
      image: {
        src: w('image01.png'), alt: 'Puntos de dolor en el flujo original de solicitud de crédito',
      },
    },
    {
      subheading: "Investigación",
      body: [
        "Para entender por qué las personas abandonaban el flujo y qué debía cambiar, trabajé con un enfoque mixto:",
      ],
      columns: [
        {
          heading: "Análisis del funnel y las métricas del canal Oneclick",
          body: [
            "Identifiqué las pantallas con mayor drop-off, especialmente donde aparecían datos financieros o legales y donde se pedía información percibida como \"excesiva\".",
          ],
        },
        {
          heading: "Entrevistas + pruebas moderadas (usuarios bancarizados en busca de crédito)",
          body: [
            "Encontramos patrones claros: \"No entiendo si califico\" / \"no sé cuánto voy a pagar\" / \"No me muestran tasas claras\" (miedo a una tasa sorpresa) / \"Demasiados campos para algo que debería ser rápido\".",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Evaluación heurística",
          body: [
            "Documentamos patrones inconsistentes, microcopy ambiguo, jerarquía visual débil y componentes desalineados con el sistema de diseño.",
          ],
        },
        {
          heading: "Benchmark competitivo",
          body: [
            "Revisamos patrones que generan confianza: simuladores, desglose de cuotas, rangos de tasa, comparativas de escenarios, indicadores de progreso claros y mensajes de seguridad y privacidad.",
          ],
        },
      ],
    },
    {
      image: {
        src: w('image02.png'), alt: 'Hallazgos de investigación sobre el funnel de crédito Oneclick',
      },
    },
    {
      image: {
        src: w('image03.png'), alt: 'Aprendizajes de entrevistas y evaluación heurística',
      },
    },
    {
      subheading: "Decisiones de diseño (qué hice diferente)",
      body: [
        "A partir de los hallazgos, tomé decisiones enfocadas en transparencia, control y menor carga cognitiva:",
        "• **Simulador temprano:** mostrar cuotas y escenarios desde el inicio para generar confianza.",
        "• **Campos simplificados:** reducir y explicar los inputs con microcopy claro.",
        "• **UX estandarizada:** componentes y reglas consistentes entre productos.",
        "• **Storytelling legal:** textos legales claros, breves y en lenguaje humano.",
        "• **Claridad del proceso:** explicar elegibilidad, tiempos y próximos pasos.",
      ],
    },
    {
      subheading: "Solución",
      body: [
        "El rediseño final entregó una experiencia de solicitud más confiable, coherente y orientada a la decisión:",
      ],
    },
    {
      body: [
        "'''Simulador integrado (Libre inversión / Rotativo)'''",
      ],
    },
    {
      image: {
        src: w('image04.png'), alt: 'Flujo rediseñado de solicitud de crédito paso a paso',
      },
    },
    {
      body: [
        "'''Formulario optimizado'''",
      ],
    },
    {
      image: {
        src: w('image05.png'), alt: 'Interfaz del simulador de crédito',
      },
    },
    {
      body: [
        "'''Transparencia'''",
      ],
    },
    {
      image: {
        src: w('image06.png'), alt: 'Estados de validación y guía del formulario',
      },
    },
    {
      body: [
        "'''UI/UX consistente'''",
      ],
    },
    {
      image: {
        src: w('image07.png'), alt: 'Pantallas de confirmación y éxito',
      },
    },
    {
      image: {
        src: w('image08.png'), alt: 'Pantallas del flujo móvil de solicitud',
      },
    },
    {
      image: {
        src: w('image09.png'), alt: 'Microcopy y estados que generan confianza',
      },
    },
    {
      image: {
        src: w('image10.png'), alt: 'Experiencia final de solicitud de crédito',
      },
    },
    {
      subheading: "Impacto",
      columns: [
        {
          heading: "Menor abandono en el paso crítico",
          body: [
            "La simulación temprana y una mayor transparencia redujeron entre 18% y 25% el drop-off en tasas y condiciones.",
          ],
        },
        {
          heading: "Mayor conversión",
          body: [
            "La combinación de menos fricción y mayor percepción de control impulsó un incremento de entre 10% y 18% en la conversión total del flujo.",
          ],
        },
        {
          heading: "Mayor confianza percibida",
          body: [
            "Una oferta más clara mejoró las métricas de confianza entre +20 y +30 puntos en scores de claridad o hasta +1.2 en escalas de percepción.",
          ],
        },
        {
          heading: "El simulador impulsa la intención",
          body: [
            "Entre el 60% y 75% de los usuarios interactuaron con el simulador, y quienes lo usaron tuvieron hasta 1.6x más probabilidad de completar.",
          ],
        },
        {
          heading: "Completación más rápida",
          body: [
            "La simplificación del flujo redujo el tiempo total de completación entre 12% y 20%.",
          ],
        },
        {
          heading: "Menos errores y reintentos",
          body: [
            "Las validaciones claras y la ayuda contextual redujeron los errores por campo entre 15% y 30%.",
          ],
        },
      ],
    },
    {
      body: [
        "''Este proyecto fortaleció el ecosistema de servicios de Scotiabank Colpatria al estandarizar la experiencia Oneclick y elevar la confianza y autonomía de los usuarios mediante simulación y comunicación clara. Creó una base reusable para escalar solicitudes de productos con mayor conversión y menos fricción.''",
      ],
    },
  ],
};
