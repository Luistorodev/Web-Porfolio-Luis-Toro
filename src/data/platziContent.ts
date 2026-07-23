import type { ProjectContent } from './legalTechContent';

import { workImage } from './workImages';

const w = (p: string) => workImage(`platzi-calendar/${p}`);

// TODO(luis): confirmar los alts propuestos en este archivo (generados por contexto de sección; validar contra las imágenes reales) y añadir captions opcionales donde aporten.

export const platziContent: ProjectContent = {
  slug: "platzi-calendar",
  title: "Platzi Calendar Redesign",
  subtitle: "PLATZI",
  cover: {
    src: w('cover.png'), alt: 'Cover of the Platzi live events calendar case study',
  },
  meta: {
    role: "Product Designer",
    timeline: "2023",
    skills: ["Product Design", "UX Design", "Gamification"],
  },
  sections: [
    {
      label: "Overview",
      heading: "From a confusing schedule to a clear experience that drives attendance and retention.",
      body: [
        "Platzi is built on community and consistency. Every week it publishes live and on-demand content, including mentoring sessions, open talks, and course launches, as well as Platzi LIVE every Thursday from 3 to 5 PM (CST). With ≈150 events each month, the public schedule was a critical part of the journey: helping people discover content, return week after week, and turn curiosity into learning.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "The schedule created critical friction. Users could not tell what was on the calendar, what was live versus recorded, what was worth watching, where to join, or when it started. This increased bounce rate and caused people to miss relevant events. The product had been designed for a smaller use case, but the calendar had scaled with more formats, volume, and simultaneous events while its legacy UI and visual hierarchy had not kept pace.",
      ],
    },
    {
      subheading: "Research",
      body: [
        "To make sure the redesign solved the real problem, not just the visual one, I focused research on why people struggled to understand the schedule and what they needed to make a decision:",
      ],
      columns: [
        {
          heading: "Feedback and behavioral-signal review",
          body: [
            "Quick entries and exits suggested shallow scanning, alongside clicks that did not convert to event views and repeat visits to the schedule without completing an action.",
          ],
        },
        {
          heading: "Content and system-complexity analysis",
          body: [
            "The calendar handled a high monthly event volume, with a significant recurring share (≈35% at the same weekly time). It also covered multiple event types, including live sessions, releases, 24/7 recordings, and Zoom events, across different access levels: annual subscription, Master, and special events.",
          ],
        },
      ],
    },
    {
      body: [
        "'''Quick guerrilla comprehension tests'''",
        "Task prompts included: \"find the next Platzi LIVE,\" \"find something to watch today,\" and \"tell whether this is live or recorded.\" Recurring findings included missing status cues, unclear CTAs, and little support for filtering without getting lost.",
      ],
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Based on the findings, I made product and design decisions to reduce cognitive load and strengthen intent:",
        "• **Mobile-first by design:** A large share of users connect from mobile, so the experience had to work on small screens first.",
        "• **Clearly separate exploration from decision-making:** These are two distinct moments in the user journey.",
        "• **Clear states:** Live / Upcoming / Recorded / Recurring / Special.",
        "• **Reduce noise with filters and grouping:** Filter by type and relevance, then group related events.",
        "• **Define metrics through design:** Every decision tracks comprehension, engagement, conversion, and return visits.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "I redesigned the schedule as an experience built for clarity and action, not simply an event list:",
      ],
    },
    {
      columns: [
        {
          heading: "Schedule view with strong hierarchy",
          body: [
            "Prioritized the featured event, such as Platzi LIVE when relevant, with dedicated Today and This Week modules.",
          ],
        },
        {
          heading: "Support for recurring events",
          body: [
            "A more compact, predictable presentation for weekly patterns.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Quick filters and lightweight search",
          body: [
            "Made it easier to navigate 150+ events/month without losing context.",
          ],
        },
        {
          heading: "States and microcopy designed for understanding",
          body: [
            "Simple language, such as \"Live,\" \"Recorded,\" and \"Starts in X,\" reduces interpretation.",
          ],
        },
      ],
    },
    {
      body: [
        "'''Event cards with only the information users need'''",
        "Event type (badge), a clear time, viewing location (Platzi / Zoom), and a direct CTA: \"Watch live,\" \"Watch recording,\" or \"Remind me.\"",
      ],
    },
    {
      image: {
        src: w('image01.png'), alt: 'Redesigned schedule view with filters and event detail',
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Lower bounce rate",
          body: [
            "Bounce rate on the schedule page fell from 25% to 18% versus the previous baseline.",
          ],
        },
        {
          heading: "Higher event-detail click-through",
          body: [
            "+30% to +45% more clicks to event details or the primary action (\"watch / join\").",
          ],
        },
      ],
    },
  ],
};

export const platziContentEs: ProjectContent = {
  slug: "platzi-calendar",
  title: "Rediseño del Calendario de Platzi",
  subtitle: "PLATZI",
  cover: {
    src: w('cover.png'), alt: 'Portada del caso de estudio del calendario de eventos en vivo de Platzi',
  },
  meta: {
    role: "Diseñador de Producto",
    timeline: "2023",
    skills: ["Diseño de Producto", "Diseño UX", "Gamificación"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "De una agenda confusa a una experiencia clara que impulsa la asistencia y la retención.",
      body: [
        "Platzi se sostiene en su comunidad y en la constancia. Cada semana publica contenido en vivo y bajo demanda, como mentorías, open talks y lanzamientos de cursos, además de Platzi LIVE todos los jueves de 3 a 5 PM (CST). Con ≈150 eventos al mes, la agenda pública era una pieza clave del recorrido: ayudaba a descubrir contenido, volver semana a semana y convertir la curiosidad en aprendizaje.",
      ],
    },
    {
      subheading: "Problema",
      body: [
        "La agenda generaba una fricción crítica. Las personas no lograban entender qué había en el calendario, qué era en vivo o grabado, qué valía la pena ver, dónde ingresar ni a qué hora empezaba. Esto elevaba el bounce rate y hacía que se perdieran eventos relevantes. El producto se diseñó para un caso de uso menor, pero el calendario creció en formatos, volumen y eventos simultáneos mientras su UI legacy y jerarquía visual no evolucionaban al mismo ritmo.",
      ],
    },
    {
      subheading: "Investigación",
      body: [
        "Para asegurar que el rediseño resolviera el problema real y no solo el visual, enfoqué la investigación en entender por qué las personas tenían dificultades con la agenda y qué necesitaban para decidir:",
      ],
      columns: [
        {
          heading: "Revisión de feedback y señales de comportamiento",
          body: [
            "Las entradas y salidas rápidas evidenciaban una exploración superficial, junto con clics que no llevaban a ver el evento y visitas repetidas a la agenda sin completar una acción.",
          ],
        },
        {
          heading: "Análisis de contenido y complejidad del sistema",
          body: [
            "El calendario manejaba un alto volumen mensual de eventos, con una proporción importante de recurrencia (≈35% en el mismo horario semanal). También reunía varios tipos de evento, como sesiones en vivo, lanzamientos, grabaciones 24/7 y eventos por Zoom, con distintos niveles de acceso: suscripción anual, Master y eventos especiales.",
          ],
        },
      ],
    },
    {
      body: [
        "'''Pruebas rápidas de comprensión tipo guerrilla'''",
        "Las tareas fueron: \"encuentra el próximo Platzi LIVE\", \"encuentra algo para ver hoy\" y \"define si esto es en vivo o grabado\". Los hallazgos recurrentes fueron falta de señales de estado, CTAs poco claros y poca ayuda para filtrar sin perderse.",
      ],
    },
    {
      subheading: "Decisiones de diseño (qué hice diferente)",
      body: [
        "A partir de los hallazgos, tomé decisiones de producto y diseño para reducir la carga cognitiva y reforzar la intención:",
        "• **Diseño mobile-first:** Una gran parte de las personas se conecta desde el celular, así que la experiencia debía funcionar primero en pantallas pequeñas.",
        "• **Separar con claridad explorar de decidir:** Son dos momentos distintos dentro del recorrido.",
        "• **Estados claros:** En vivo / Próximo / Grabado / Recurrente / Especial.",
        "• **Reducir el ruido con filtros y agrupación:** Filtros por tipo y relevancia, con eventos relacionados agrupados.",
        "• **Definir métricas desde el diseño:** Cada decisión mide comprensión, interacción, conversión y retorno.",
      ],
    },
    {
      subheading: "Solución",
      body: [
        "Rediseñé la agenda como una experiencia enfocada en la claridad y la acción, no solo en listar eventos:",
      ],
    },
    {
      columns: [
        {
          heading: "Vista de agenda con jerarquía clara",
          body: [
            "Priorización del evento destacado, como Platzi LIVE cuando aplica, con módulos específicos de Hoy y Esta semana.",
          ],
        },
        {
          heading: "Soporte para eventos recurrentes",
          body: [
            "Una presentación más compacta y predecible para los patrones semanales.",
          ],
        },
      ],
    },
    {
      columns: [
        {
          heading: "Filtros rápidos y búsqueda ligera",
          body: [
            "Facilita navegar 150+ eventos/mes sin perder el contexto.",
          ],
        },
        {
          heading: "Estados y microcopy diseñados para entender",
          body: [
            "Lenguaje simple, como \"En vivo\", \"Grabado\" y \"Empieza en X\", reduce la interpretación.",
          ],
        },
      ],
    },
    {
      body: [
        "'''Tarjetas de evento con solo la información necesaria'''",
        "Tipo de evento (badge), hora clara, dónde verlo (Platzi / Zoom) y un CTA directo: \"Ver en vivo\", \"Ver grabación\" o \"Recordármelo\".",
      ],
    },
    {
      image: {
        src: w('image01.png'), alt: 'Vista de agenda rediseñada con filtros y detalle de evento',
      },
    },
    {
      subheading: "Impacto",
      columns: [
        {
          heading: "Menor bounce rate",
          body: [
            "El bounce rate de la página de agenda bajó de 25% a 18% frente al baseline anterior.",
          ],
        },
        {
          heading: "Mayor click-through hacia el detalle del evento",
          body: [
            "+30% a +45% más clics hacia el detalle del evento o la acción principal (\"ver / unirse\").",
          ],
        },
      ],
    },
  ],
};
