import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/application-redesign';

export const circuloContent: ProjectContent = {
  slug: "application-redesign",
  title: "Rediseñando la experiencia de Círculo de Crédito",
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
      heading: "Un rediseño enfocado en claridad radical para transformar fricción en acción",
      body: [
        "Círculo de Crédito es una de las principales entidades en México enfocadas en ofrecer productos de análisis financiero como perfil crediticio, monitoreo y herramientas de seguridad. A pesar de su posicionamiento en el mercado, su ecosistema digital (web + app) no reflejaba ese liderazgo. La experiencia se había quedado atrás frente a nuevos estándares de productos fintech: procesos largos, interfaces poco claras y una arquitectura fragmentada.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "La experiencia obligaba al usuario a pensar demasiado. ¿Qué producto elegir? ¿Qué significa cada opción? ¿Qué pasa después? En lugar de guiar, el producto generaba dudas. Y en productos financieros, cada duda se convierte en fricción… y cada fricción, en abandono.",
      ],
    },
    {
      subheading: "Research",
      body: [
        "Más que empezar con métodos, empecé con una pregunta simple. ¿Dónde exactamente estamos perdiendo a los usuarios y por qué?",
      ],
      columns: [
        {
          heading: "Entendiendo el comportamiento real",
          body: [
            "Al revisar los funnels, había un patrón claro: Caídas fuertes justo después de ver los productos. Abandono en el primer tercio del onboarding. Usuarios que regresaban varias veces… pero no compraban. No era falta de intención. Era falta de claridad.",
          ],
        },
        {
          heading: "Lo que vimos en sesiones reales",
          body: [
            "Al observar sesiones y tests rápidos (no moderados), aparecieron fricciones muy concretas: Usuarios comparaban productos sin entender realmente la diferencia. Dudaban antes de hacer clic en \"continuar\" (micro pausas constantes). Había confusión con términos financieros y naming poco claro.",
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
        "''El mayor problema no era que el usuario no pudiera completar el flujo. Era que no tenía suficiente confianza para hacerlo.''",
      ],
    },
    {
      body: [
        "'''Auditoría interna'''",
        "Al mapear la experiencia completa entre web y app, se hizo evidente que el producto había evolucionado de forma desordenada. Los flujos no respondían a una estructura clara, sino que eran el resultado de múltiples iteraciones acumuladas en el tiempo (parches sobre parches) que terminaron afectando la coherencia general. Esto se reflejaba en inconsistencias entre plataformas, donde una misma acción podía sentirse distinta dependiendo del dispositivo.",
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
        "Se redefinió la experiencia separando exploración y decisión, evitando que el usuario tuviera que entender el producto mientras ya estaba comprando. Se priorizó la claridad en cada pantalla, reduciendo opciones y enfocando la atención en una sola acción a la vez. El rediseño se abordó desde mobile-first para simplificar flujos y eliminar fricción innecesaria. Finalmente, se estructuró todo bajo un sistema de diseño, asegurando consistencia y escalabilidad entre web y app.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "El rediseño se centró en eliminar la incertidumbre del usuario y convertir la exploración en decisión:",
      ],
    },
    {
      body: [
        "'''Nueva arquitectura de información'''",
        "Agrupación clara de productos y jerarquía basada en intención (explorar vs comprar).",
      ],
      image: {
        src: `${workAssets}/image04.png`,
        contain: true,
      },
      layout: 'side-text-right',
    },
    {
      body: [
        "'''Simplificación del onboarding'''",
        "Reducción de pasos, Inputs progresivos y Feedback en tiempo real.",
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
        "Value proposition clara, comparación entre planes y CTAs visibles y accionables.",
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
          heading: "+28% en conversión de compra",
          body: [
            "Incremento en la finalización de compra de productos principales gracias a una experiencia más clara y enfocada en decisión.",
          ],
        },
        {
          heading: "-35% en abandono de onboarding",
          body: [
            "Reducción significativa en la deserción durante los primeros pasos del flujo, eliminando fricción y simplificando inputs.",
          ],
        },
        {
          heading: "+18% en retención (30 días)",
          body: [
            "Mejora en la recurrencia de uso, impulsada por una experiencia más comprensible y confiable.",
          ],
        },
        {
          heading: "+25% en interacción con productos secundarios",
          body: [
            "Aumento en el cross-sell gracias a una mejor organización y claridad en la oferta de productos.",
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
        "''Simplifiqué el acceso a información financiera en un entorno históricamente confuso.''",
      ],
    },
  ],
};
