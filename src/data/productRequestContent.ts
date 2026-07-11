import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/product-request-revamp';

export const productRequestContent: ProjectContent = {
  slug: "product-request-revamp",
  title: "Rediseño de la solicitud de Libre Inversión y Rotativo",
  subtitle: "Scotiabank Colpatria",
  cover: {
    src: `${workAssets}/cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2022",
    skills: ["Product Design", "UX Design", "Prototyping"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Crédito sin incertidumbre",
      body: [
        "Scotiabank Colpatria venía impulsando la solicitud de productos por su canal Oneclick (web + app vía WebView). El reto era escalar esa experiencia para créditos de libre inversión y créditos rotativos, manteniendo consistencia con otros productos (cuentas/tarjetas) y reduciendo fricción. Mi rol fue Product Designer, liderando el rediseño end-to-end de la experiencia: diagnóstico, investigación, definición, diseño de interacción y UI, validación con usuarios y entrega para desarrollo.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "La experiencia de solicitud estaba afectada por dos factores críticos:",
      ],
      columns: [
        {
          heading: "Desconfianza y desconocimiento",
          body: [
            "Las personas no tenían claridad sobre qué necesitaban, qué les ofrecía el banco y por qué se pedía cierta información. La comunicación de tasas/condiciones se percibía incompleta o \"poco transparente\", elevando la ansiedad y el abandono.",
          ],
        },
        {
          heading: "No existía simulación",
          body: [
            "Sin una simulación de cuotas/escenarios, la gente no podía \"probar\" si el crédito encajaba con su presupuesto. Esto aumentaba la sensación de riesgo (\"voy a avanzar y luego me van a mostrar algo peor\") y debilitaba la intención de completar.",
          ],
        },
      ],
    },
    {
      body: [
        "Resultado: alto abandono, baja conversión y experiencia inconsistente entre productos.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image01.png`,
      },
    },
    {
      subheading: "Research",
      body: [
        "Para entender el \"por qué\" detrás del abandono y qué debía cambiar, trabajé con un enfoque mixto:",
      ],
      columns: [
        {
          heading: "Análisis de funnel y métricas del canal Oneclick",
          body: [
            "Identificación de pantallas con mayor drop-off (especialmente donde aparecen datos financieros/legales y donde se solicita información percibida como \"excesiva\").",
          ],
        },
        {
          heading: "Entrevistas + pruebas moderadas (usuarios bancarizados que buscaban un crédito)",
          body: [
            "Detectamos patrones claros: \"No entiendo si califico\" / \"no sé cuánto voy a pagar\" / \"No me dicen tasas claras\" (miedo a una tasa sorpresa) / \"Demasiados campos para algo que debería ser rápido\".",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Heuristic review",
          body: [
            "Se documentaron problemas de consistencia, microcopy ambiguos, falta de jerarquía visual, y componentes desalineados con el sistema de diseño.",
          ],
        },
        {
          heading: "Benchmark competitivo",
          body: [
            "Revisión de patrones de confianza: simuladores, breakdown de cuota, rangos de tasa, comparativas de escenarios, progresos claros y mensajes de seguridad/privacidad.",
          ],
        },
      ],
    },
    {
      image: {
        src: `${workAssets}/image02.png`,
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
        "A partir de los hallazgos, tomé decisiones de diseño enfocadas en transparencia + control + reducción de carga cognitiva:",
        "• **Simulador temprano:** mostrar cuotas y escenarios desde el inicio para generar confianza.",
        "• **Simplificar campos:** reducir y explicar inputs con microcopy claro.",
        "• **Estandarizar UX:** componentes y reglas consistentes entre productos.",
        "• **Storytelling legal:** legal claro, breve y en lenguaje humano.",
        "• **Claridad de proceso:** explicar elegibilidad, tiempos y siguientes pasos.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "El rediseño final entregó una experiencia de solicitud más confiable, coherente y orientada a decisión:",
      ],
    },
    {
      body: [
        "'''Simulador integrado (Libre inversión / Rotativo)'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image04.png`,
      },
    },
    {
      body: [
        "'''Formulario optimizado'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image05.png`,
      },
    },
    {
      body: [
        "'''Transparencia'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image06.png`,
      },
    },
    {
      body: [
        "'''Consistencia UI/UX'''",
      ],
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
      image: {
        src: `${workAssets}/image10.png`,
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Reducción de abandono en el paso crítico",
          body: [
            "Al introducir simulación temprana y mayor transparencia, el drop-off en tasas/condiciones se reduce entre 18% y 25%.",
          ],
        },
        {
          heading: "Aumento de conversión",
          body: [
            "La combinación de menor fricción y mayor percepción de control impulsa un incremento del 10% al 18% en la conversión total del flujo.",
          ],
        },
        {
          heading: "Mejora en confianza percibida",
          body: [
            "La claridad en la oferta eleva métricas de confianza con +20 a +30 puntos en scores de claridad o hasta +1.2 en escalas de percepción.",
          ],
        },
        {
          heading: "Uso del simulador como driver de intención",
          body: [
            "Entre el 60% y 75% de usuarios interactúan con el simulador, y quienes lo usan tienen hasta 1.6x más probabilidad de completar.",
          ],
        },
        {
          heading: "Reducción de tiempo de completación",
          body: [
            "La simplificación del flujo disminuye el tiempo total entre un 12% y 20%.",
          ],
        },
        {
          heading: "Menos errores y reintentos",
          body: [
            "Validaciones claras y ayudas contextuales reducen errores por campo entre un 15% y 30%.",
          ],
        },
      ],
    },
    {
      body: [
        "''Este proyecto fortaleció el ecosistema de servicios de Scotiabank Colpatria al estandarizar la experiencia Oneclick y elevar la confianza y autosuficiencia del usuario mediante simulación y comunicación clara, creando una base reusable para escalar solicitudes de productos con más conversión y menos fricción.''",
      ],
    },
  ],
};
