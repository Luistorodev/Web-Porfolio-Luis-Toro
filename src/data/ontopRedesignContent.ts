import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/ontop-app-revamp';

export const ontopRedesignContent: ProjectContent = {
  slug: "ontop-app-redesign",
  title: "Rediseño E2E de Ontop Wallet",
  subtitle: "Ontop LLC",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2025",
    skills: ["Product Design", "UX Design", "Gamification"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Una experiencia más simple, confiable y rápida",
      body: [
        "Ontop es una wallet dentro del ecosistema de GetOntop que permite a miles de personas recibir pagos internacionales, almacenar saldo en USD y mover dinero (transferencias, tarjeta, retiros).",
        "En el momento del proyecto, la app servía a +17.000 usuarios, pero su experiencia se estaba quedando atrás frente al estándar del mercado: patrones visuales desactualizados, flujos poco consistentes y una sensación general de fricción que impactaba directamente el negocio.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "La app tenía tres síntomas claros que se conectaban entre sí:",
        "• **Baja percepción de calidad y confianza**",
        "En una wallet, la confianza es parte del producto. La experiencia \"vieja\" y los dead-ends transmitían inseguridad, especialmente en momentos críticos como retirar, transferir o confirmar transacciones.",
        "• **Fricción en tareas clave (activación y transacciones)**",
        "El home y la navegación priorizaban demasiadas opciones a la vez. La gente tardaba en entender \"qué hacer\" y \"por dónde empezar\", lo que afectaba conversiones en flujos como P2P y otros journeys de movimiento de dinero.",
        "• **Impacto visible en métricas públicas y operativas**",
        "Se venía acumulando presión por calificaciones en stores, y por métricas de soporte donde se repetían los mismos puntos de dolor: confusión, errores, procesos largos, y abandonos en pasos intermedios.",
      ],
    },
    {
      subheading: "Research",
      body: [
        "Para diseñar con precisión (y rápido), el research se centró en evidencia de fricción real:",
      ],
      columns: [
        {
          heading: "Revisión cualitativa y cuantitativa de tickets de soporte",
          body: [
            "Análisis de patrones recurrentes para identificar los puntos de dolor más frecuentes y su impacto en la experiencia.",
          ],
        },
        {
          heading: "Identificación de dead-ends y puntos de no retorno",
          body: [
            "Mapeo de momentos del journey donde los usuarios abandonaban sin completar la acción.",
          ],
        },
        {
          heading: "Lectura de señales de mercado",
          body: [
            "Evaluación de tendencias fintech para alinear la experiencia con los estándares actuales.",
          ],
        },
      ],
    },
    {
      body: [
        "''El mayor problema no era que el usuario no pudiera completar el flujo. Era que no tenía suficiente confianza para hacerlo.''",
      ],
    },
    {
      body: [
        "'''Hallazgos clave'''",
        "El home era \"un menú grande\" más que un punto de inicio: muchas funciones, poca guía. Formularios pedían más de lo necesario y mezclaban información operativa con decisiones del usuario. Faltaban señales de progreso y confirmación, aumentando la ansiedad (\"¿sí se envió?\" / \"¿en qué estado está?\").",
      ],
    },
    {
      image: {
        src: `${workAssets}/image01.png`,
        contain: true,
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Tomé (y defendí) decisiones que habilitaran un cambio real sin quebrar el producto:",
      ],
      columns: [
        {
          heading: "Preparación del Design System antes del rediseño",
          body: [
            "Construir la base de componentes y tokens primero para que el rediseño se apoyara en un sistema sólido desde el día uno.",
          ],
        },
        {
          heading: "Rediseño incremental por secciones críticas",
          body: [
            "En lugar de un big-bang, priorizar las pantallas de mayor impacto para entregar valor rápido.",
          ],
        },
        {
          heading: "Home simplificado y orientado a acciones",
          body: [
            "De \"un menú grande\" a un dashboard con acciones principales visibles, saldo destacado y accesos rápidos.",
          ],
        },
        {
          heading: "Reducción de fricción en formularios",
          body: [
            "Menos campos, validaciones en tiempo real y microcopy que guía al usuario en cada paso.",
          ],
        },
        {
          heading: "Microinteracciones con intención (no decoración)",
          body: [
            "Cada animación y feedback visual comunica estado, progreso o confirmación.",
          ],
        },
        {
          heading: "Testing rápido con DEV, UX y Producto",
          body: [
            "Iteraciones semanales con el equipo para validar decisiones antes de comprometer desarrollo.",
          ],
        },
      ],
    },
    {
      subheading: "Solution",
      body: [
        "El resultado fue un rediseño E2E que modernizó la experiencia y ordenó el producto alrededor de claridad, confianza y velocidad:",
      ],
    },
    {
      body: [
        "'''Nuevo sistema visual alineado a estándares fintech (jerarquía, accesibilidad, consistencia).'''",
      ],
    },
    {
      image: {
        src: `${workAssets}/image02.png`,
        contain: true,
      },
    },
    {
      body: [
        "'''Arquitectura de información más clara'''",
        "Navegación y home diseñados para \"encontrar y hacer\" en menos pasos.",
      ],
      image: {
        src: `${workAssets}/image03.png`,
        contain: true,
      },
      layout: 'side-text-right',
    },
    {
      body: [
        "'''Flujos críticos optimizados'''",
        "Menos pantallas redundantes, CTAs más claros, estados y confirmaciones robustas.",
      ],
      image: {
        src: `${workAssets}/image04.png`,
        contain: true,
      },
      layout: 'side-text-left',
    },
    {
      body: [
        "'''Base preparada para crecimiento'''",
        "La app quedó lista para soportar mejoras incrementales futuras (nuevas divisas/productos) sin re-trabajar todo.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image05.png`,
        contain: true,
      },
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
      subheading: "Impact",
      columns: [
        {
          heading: "+32% MAU (18.8k → 24.8k)",
          body: [
            "Tras el rediseño E2E, la app incrementó significativamente sus usuarios activos mensuales.",
          ],
        },
        {
          heading: "+11% sesiones por usuario (11.1 → 12.3)",
          body: [
            "La gente abrió la app con más frecuencia, señal de que el home y los flujos principales quedaron más claros y \"accionables\".",
          ],
        },
        {
          heading: "+9% duración de sesión (~110s → ~120s)",
          body: [
            "Las sesiones se volvieron ligeramente más largas, consistente con una experiencia más fluida.",
          ],
        },
        {
          heading: "+60% eventos mensuales (~2.1M → ~3.4M)",
          body: [
            "Aumentó el volumen total de interacciones dentro de la app.",
          ],
        },
        {
          heading: "10% a 18% conversión a 1ª transacción",
          body: [
            "Con menos pasos y mejor guía en CTAs del home y journeys críticos, más usuarios completan su primera acción de valor.",
          ],
        },
        {
          heading: "Del 20% al 12% drop‑off en flujos críticos",
          body: [
            "La reducción de campos, validaciones más claras y feedback de progreso disminuyen el abandono en pasos intermedios de transferencias/retiros.",
          ],
        },
      ],
    },
    {
      body: [
        "''Rediseñamos Ontop Wallet de punta a punta para que mover tu dinero sea más simple, más confiable y más rápido, y los números lo confirmaron.''",
      ],
    },
  ],
};
