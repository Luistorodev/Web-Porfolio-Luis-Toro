import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/bud66-studio';

export const bud66Content: ProjectContent = {
  slug: "bud66-studio",
  title: "Bud 66 Studio - A Community Film Contest",
  subtitle: "Budweiser",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2021",
    skills: ["Product Design", "UX Design", "Gamification"],
  },
  sections: [
    {
      label: "Overview",
      heading: "When the community became the director",
      body: [
        "Bud 66 Films extended a one-off Budweiser event into a digital contest where the community created films around a brand-defined theme. As the end-to-end Product Designer, I designed a web platform and PWA where people could submit, discover, watch, and vote for each other's films: a \"streaming\"-inspired experience powered by UGC and community voting.",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "The challenge was not simply to create a \"beautiful landing page,\" but to build a product that resolved several critical tensions:",
        "• **UGC, moderation, and trust:** people needed to feel safe watching and voting on films, not as if they were navigating an uncurated repository.",
        "• **Fast discovery:** with abundant content and little time, users had to find compelling films in seconds.",
        "• **Participation conversion:** the contest relied on moving people from browsing to watching, voting, and, for contestants, submitting a film without friction.",
        "• **Mobile-first context:** much of the traffic came from social channels and activation QR codes, requiring a fast, lightweight, \"app-like\" PWA experience.",
      ],
    },
    {
      image: {
        src: `${workAssets}/image1.png`,
      },
    },
    {
      subheading: "Research",
      body: [
        "With a limited delivery window, I focused research on the signals with the highest product impact:",
      ],
      columns: [
        {
          heading: "Streaming pattern benchmarking",
          body: [
            "Catalog structure (cards), information hierarchy, loading states, and key \"decision points\": play, pause, vote, and share.",
          ],
        },
        {
          heading: "Viewer and contestant journey mapping",
          body: [
            "Viewer: arrive → explore → play → vote → share → keep watching. Contestant: understand the rules → submit → confirm status → invite votes.",
          ],
        },
        {
          heading: "Assumptions tested with heuristics and quick checks",
          body: [
            "Slow video or unclear progress drives abandonment. If \"voting\" feels unclear or biased, participation drops.",
          ],
        },
      ],
    },
    {
      subheading: "Design Decisions",
      body: [
        "The core UX and UI decisions reduced friction while increasing engagement:",
        "• **\"Catalog\"-led architecture:** a home screen organized around featured, recent, and trending films so users understood what to do within five seconds.",
        "• **High-signal cards:** thumbnail, title, creator, and status where relevant. Each card had to make people feel it was \"worth pressing play.\"",
        "• **\"Player\"-led detail pages:** playback took priority, with a persistent Vote CTA placed close to the player without competing with the film. Post-vote feedback confirmed the action and status immediately.",
        "• **A PWA that supported performance and habit:** fast navigation, \"app-like\" behavior, and mobile-first loading, skeleton, and empty states.",
        "• **Alignment with the existing brand:** I reused and adapted assets from Budweiser's previous app to accelerate delivery while maintaining a cohesive visual system and reusable components.",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "The result was a complete content-led contest experience:",
      ],
    },
    {
      image: {
        src: `${workAssets}/image2.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image3.png`,
        height: '2142px',
      },
    },
    {
      image: {
        src: `${workAssets}/image4.png`,
        height: '893px',
      },
    },
    {
      image: {
        src: `${workAssets}/image5.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image6.png`,
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Adoption and activation",
          body: [
            "**Onboarding completion rate:** 62% (users who complete onboarding and choose a team).",
            "**Activation rate (first vote in <24h):** 48%. Nearly 1 in 2 users moved from viewer to active participant on day one.",
          ],
        },
        {
          heading: "Engagement (core loop)",
          body: [
            "**Votes per session:** 0.85. The voting flow stayed short and \"penalty-free,\" with no unnecessary steps.",
            "**Early drop-off (first 10s):** 19%. Clearer flows and stronger perceived performance reduced early exits.",
            "**Average session duration:** 3m 40s (short mini-games + checking points/rewards).",
          ],
        },
        {
          heading: "Retention",
          body: [
            "**Video completion rate (≥ 90%):** 44%. More people watched through because the content and experience \"held up.\"",
            "**PWA return rate (returning users):** 42%. The \"app-like\" experience became part of users' campaign habits.",
          ],
        },
      ],
    },
    {
      body: [
        "''This project turned a contest into a genuine community experience: a stage for people to share their stories, discover others' talent, and feel part of something bigger through their vote.''",
      ],
    },
  ],
};

export const bud66ContentEs: ProjectContent = {
  slug: "bud66-studio",
  title: "Bud 66 Studio - Un concurso de cortometrajes para la comunidad",
  subtitle: "Budweiser",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Diseñador de Producto",
    timeline: "2021",
    skills: ["Diseño de Producto", "Diseño UX", "Gamificación"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Cuando la comunidad se convirtió en directora",
      body: [
        "Bud 66 Films llevó un evento puntual de Budweiser al entorno digital con un concurso donde la comunidad creaba cortometrajes a partir de una temática definida por la marca. Como diseñador de producto end-to-end, diseñé una plataforma web y PWA para que las personas enviaran, descubrieran, vieran y votaran los cortometrajes de otras personas: una experiencia inspirada en el \"streaming\", impulsada por UGC y votación comunitaria.",
      ],
    },
    {
      subheading: "Problema",
      body: [
        "El reto no era solo crear una \"landing atractiva\", sino construir un producto que resolviera tensiones clave:",
        "• **UGC, moderación y confianza:** las personas debían sentirse seguras al ver y votar cortometrajes, no como si navegaran un repositorio sin curaduría.",
        "• **Descubrimiento rápido:** con mucho contenido y poco tiempo, los usuarios tenían que encontrar cortometrajes interesantes en segundos.",
        "• **Conversión a participación:** el concurso dependía de llevar a las personas de explorar a ver, votar y, en el caso de los participantes, subir su cortometraje sin fricción.",
        "• **Contexto mobile-first:** gran parte del tráfico llegaba desde redes sociales y códigos QR en activaciones, por lo que se necesitaba una PWA rápida, ligera y con sensación \"tipo app\".",
      ],
    },
    {
      image: {
        src: `${workAssets}/image1.png`,
      },
    },
    {
      subheading: "Investigación",
      body: [
        "Con un plazo de entrega limitado, enfoqué la investigación en las señales con mayor impacto en el producto:",
      ],
      columns: [
        {
          heading: "Benchmark de patrones de streaming",
          body: [
            "Estructura de catálogo (cards), jerarquía de información, estados de carga y \"momentos de decisión\" clave: reproducir, pausar, votar y compartir.",
          ],
        },
        {
          heading: "Mapeo del journey de espectadores y participantes",
          body: [
            "Espectador: entrar → explorar → reproducir → votar → compartir → seguir viendo. Participante: entender las reglas → subir → confirmar estado → invitar a votar.",
          ],
        },
        {
          heading: "Supuestos validados con heurísticas y quick checks",
          body: [
            "Un video lento o sin progreso claro aumenta el abandono. Si \"votar\" no se entiende o parece sesgado, la participación cae.",
          ],
        },
      ],
    },
    {
      subheading: "Decisiones de diseño",
      body: [
        "Las decisiones centrales de UX y UI redujeron la fricción y aumentaron el engagement:",
        "• **Arquitectura tipo \"catálogo\":** una home organizada por cortometrajes destacados, recientes y en tendencia para que las personas entendieran qué hacer en cinco segundos.",
        "• **Cards de alta señal:** thumbnail, título, creador y estado cuando aplicaba. Cada card debía comunicar que \"valía la pena reproducirla\".",
        "• **Páginas de detalle tipo \"player\":** la reproducción tenía prioridad, con un CTA persistente para votar cerca del player sin competir con el video. La confirmación posterior al voto comunicaba la acción y el estado de inmediato.",
        "• **Una PWA para performance y hábito:** navegación rápida, comportamiento \"tipo app\" y estados mobile-first de carga, skeleton y vacío.",
        "• **Coherencia con la marca existente:** reutilicé y adapté recursos de la app anterior de Budweiser para acelerar la entrega sin perder un sistema visual consistente ni componentes reutilizables.",
      ],
    },
    {
      subheading: "Solución",
      body: [
        "El resultado fue una experiencia completa de concurso centrada en contenido:",
      ],
    },
    {
      image: {
        src: `${workAssets}/image2.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image3.png`,
        height: '2142px',
      },
    },
    {
      image: {
        src: `${workAssets}/image4.png`,
        height: '893px',
      },
    },
    {
      image: {
        src: `${workAssets}/image5.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/image6.png`,
      },
    },
    {
      subheading: "Impacto",
      columns: [
        {
          heading: "Adopción y activación",
          body: [
            "**Tasa de finalización del onboarding:** 62% (usuarios que completan el onboarding y eligen un equipo).",
            "**Tasa de activación (primer voto en <24h):** 48%. Casi 1 de cada 2 usuarios pasó de espectador a participante activo el primer día.",
          ],
        },
        {
          heading: "Engagement (loop principal)",
          body: [
            "**Votos por sesión:** 0.85. El flujo de votación se mantuvo corto y \"sin castigo\", sin pasos innecesarios.",
            "**Abandono temprano (primeros 10s):** 19%. Flujos más claros y una mejor percepción de performance redujeron las salidas tempranas.",
            "**Duración promedio de sesión:** 3m 40s (mini-juegos cortos + revisión de puntos/recompensas).",
          ],
        },
        {
          heading: "Retención",
          body: [
            "**Tasa de finalización de video (≥ 90%):** 44%. Más personas vieron los videos completos porque el contenido y la experiencia \"se sostenían\".",
            "**Tasa de regreso a la PWA (usuarios recurrentes):** 42%. La experiencia \"tipo app\" se volvió parte del hábito de las personas durante la campaña.",
          ],
        },
      ],
    },
    {
      body: [
        "''Este proyecto convirtió un concurso en una experiencia de comunidad real: un escenario para que las personas compartieran sus historias, descubrieran el talento de otros y se sintieran parte de algo más grande a través de su voto.''",
      ],
    },
  ],
};
