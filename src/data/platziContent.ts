import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/platzi-calendar';

export const platziContent: ProjectContent = {
  slug: "platzi-calendar",
  title: "Platzi Calendar Redesign",
  subtitle: "PLATZI",
  cover: {
    src: `${workAssets}/cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2023",
    skills: ["Product Design", "UX Design", "Gamification"],
  },
  sections: [
    {
      label: "Overview",
      heading: "De una agenda confusa a una experiencia clara que impulsa asistencia y retención.",
      body: [
        "Platzi vive de su comunidad y de la constancia: todas las semanas publica contenido en vivo y grabado (mentoring, open talks, lanzamientos de cursos) y, sobre todo, Platzi LIVE cada jueves de 3 a 5 PM (CST). Para organizar ese volumen (≈150 eventos al mes), la agenda/calendario público era una pieza clave del journey: ayudaba a descubrir contenido, a volver semana a semana y a convertir curiosos en estudiantes.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "La agenda estaba generando una fricción crítica: usuarios reportaban que no entendían qué había en el calendario (qué era en vivo vs grabado, qué valía la pena ver, dónde acceder, en qué horario), lo que elevaba el bounce rate y hacía que muchas personas se perdieran eventos relevantes. El producto había sido diseñado para un problema \"más pequeño\", pero el calendario escaló (más formatos, más volumen, más simultaneidad) y la UI/jerarquía visual se quedó atrás, manteniendo un estilo legacy que ya no soportaba las necesidades actuales.",
      ],
    },
    {
      subheading: "Research",
      body: [
        "Para asegurar que el rediseño atacara el problema real (y no solo \"se viera mejor\"), enfoqué la investigación en entender por qué la gente no comprendía la agenda y qué información necesitaba para decidir:",
      ],
      columns: [
        {
          heading: "Revisión de feedback y señales de comportamiento",
          body: [
            "Entradas rápidas y salidas rápidas (lectura superficial), clicks sin conversión a \"ver evento\", y reintentos (volver a la agenda varias veces sin completar una acción).",
          ],
        },
        {
          heading: "Análisis del contenido y complejidad del sistema",
          body: [
            "Muchísimos eventos al mes y una parte importante repetitiva (≈35% ocurre en el mismo horario semanal). Distintos tipos de \"eventos\" (en vivo, releases, grabados 24/7, Zoom) y distintos niveles de acceso (contenido para suscripción anual / Master / eventos especiales).",
          ],
        },
      ],
    },
    {
      body: [
        "'''Pruebas rápidas de comprensión (guerrilla)'''",
        "Preguntas de tarea: \"encuentra el próximo Platzi LIVE\", \"encuentra algo para ver hoy\", \"entiende si esto es en vivo o grabado\". Hallazgos recurrentes: falta de señales de estado, poca claridad de CTA, y poca ayuda para filtrar sin perderse.",
      ],
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Con los hallazgos, tomé decisiones de producto/diseño orientadas a reducir la carga cognitiva y aumentar la intención:",
        "• **Diseñar para mobile-first:** gran parte de usuarios conecta por móvil, así que la experiencia debía funcionar primero en pantallas pequeñas.",
        "• **Separar claramente \"explorar\" vs \"decidir\":** dos momentos distintos en la experiencia del usuario.",
        "• **Estados claros:** En vivo / Próximo / Grabado / Recurrente / Especial.",
        "• **Reducir el ruido con filtros y agrupación:** filtros por tipo y relevancia + agrupación de eventos.",
        "• **Definir métricas desde el diseño:** cada decisión mide: comprensión, interacción, conversión y retorno.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "Rediseñé la agenda como una experiencia enfocada en claridad y acción, no solo en listar eventos:",
      ],
    },
    {
      columns: [
        {
          heading: "Vista de agenda con jerarquía fuerte",
          body: [
            "Priorización del \"evento destacado\" (ej. Platzi LIVE cuando aplica) y módulos para \"Hoy / Esta semana\".",
          ],
        },
        {
          heading: "Soporte para eventos recurrentes",
          body: [
            "Presentación más compacta y predecible para patrones semanales.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Filtros rápidos + búsqueda ligera",
          body: [
            "Para navegar 150+ eventos/mes sin perder contexto.",
          ],
        },
        {
          heading: "Estados y microcopy orientado a comprensión",
          body: [
            "Lenguaje simple (\"En vivo\", \"Grabado\", \"Empieza en X\") para reducir interpretación.",
          ],
        },
      ],
    },
    {
      body: [
        "'''Tarjetas de evento con información mínima pero suficiente'''",
        "Tipo de evento (badge), hora clara, dónde verlo (Platzi / Zoom), y CTA directo (\"Ver en vivo\", \"Ver grabación\", \"Recordármelo\").",
      ],
    },
    {
      image: {
        src: `${workAssets}/image01.png`,
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Reducción de Bounce Rate",
          body: [
            "25% al 18% en bounce rate en la página de agenda (vs baseline previo).",
          ],
        },
        {
          heading: "Aumento de \"Event Detail / Click-through\"",
          body: [
            "+30% a +45% en clicks hacia detalle del evento o acción principal (\"ver / unirse\").",
          ],
        },
      ],
    },
  ],
};
