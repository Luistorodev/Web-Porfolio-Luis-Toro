import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/fanbase-app';

export const fanbaseContent: ProjectContent = {
  slug: "fanbase-app",
  title: "Fanbase App - Diseñando engagement de temporada para fans de fútbol en UK",
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
      heading: "Connections with fans",
      body: [
        "Budweiser quería fortalecer la conexión con su comunidad de fans de fútbol en UK con algo más que contenido: una experiencia digital que se sintiera como \"ser parte del equipo\". La apuesta fue una app de gamificación donde las personas pudieran elegir sus equipos, participar en mini‑juegos, ganar puntos y competir por premios definidos por la marca, mientras se activaban dinámicas sociales como chat y watch parties en bares/restaurantes durante partidos.",
      ],
    },
    {
      body: [
        "''En el Reino Unido, el fútbol tiene la capacidad de unir personas, crear comunidades y fortalecer amistades alrededor de una pasión compartida. Abi identificó la oportunidad de llevar esa conexión un paso más allá, transformando el seguimiento del deporte en una experiencia más participativa y gratificante.''",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "El reto no era \"hacer una app divertida\", sino diseñar un sistema que sostuviera el engagement durante toda la temporada:",
        "• ¿Cómo convertir el fandom (emoción, rivalidad, rituales de partido) en mecánicas jugables repetibles?",
        "• ¿Cómo lograr que las personas volvieran sin que se sintiera repetitivo o solo \"promocional\"?",
        "• ¿Cómo conectar lo digital con lo real (watch parties) sin romper la experiencia?",
        "• ¿Cómo hacer que los premios y puntos fueran claros, justos y motivadores?",
      ],
    },
    {
      image: {
        src: `${workAssets}/Problem.png`,
        contain: true,
      },
    },
    {
      subheading: "Research",
      body: [
        "Para reducir incertidumbre, trabajé una fase de investigación enfocada en validar hipótesis y entender motivaciones reales:",
        "• Perfilamiento de usuario + necesidades y pain points, junto con stakeholders, para definir a quién diseñábamos y qué \"job\" cumplía la app (competir, demostrar conocimiento, pertenecer, ganar).",
        "• Validación de dos preguntas clave: 1) Qué tipos de mini‑juegos resultan más atractivos para fans de fútbol. 2) Cómo crear competitividad saludable para impulsar participación constante.",
        "• Revisión de referencias de gamificación y experiencias deportivas para detectar patrones: progresión, recompensas, retos en vivo y dinámicas sociales.",
      ],
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Con lo aprendido, tomé decisiones de producto/UX para asegurar claridad, motivación y escalabilidad:",
        "• Loop principal simple y repetible: elige equipo → juega → gana puntos → progresa → canjea/compite.",
        "• Priorización de features para el MVP: primero lo que sostiene el hábito (juego + puntos + progreso), luego lo social (chat/watch parties) como capa de comunidad.",
        "• Arquitectura de información que separara claramente: Juego y retos, Progreso/puntos/recompensas, Comunidad y eventos (watch parties).",
        "• Sistema de componentes (UI kit) para mantener consistencia, acelerar iteraciones y permitir crecimiento de mini‑juegos sin rediseñar todo.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Image02.png`,
        height: '504px',
      },
    },
    {
      subheading: "Solution",
      body: [
        "El resultado final fue una app que conecta a los fans con la marca y entre ellos, usando la gamificación para crear una comunidad activa. La plataforma se construyó sobre tres pilares:",
        "• Juego y competencia: mini‑juegos variados que sostienen la participación diaria y semanal.",
        "• Progresión y recompensas: sistema de puntos y rankings que motiva la repetición.",
        "• Comunidad y eventos: watch parties, chat y dinámicas sociales en bares/restaurantes durante partidos.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Image03.png`,
        height: '462px',
      },
    },
    {
      image: {
        src: `${workAssets}/Image04.png`,
        height: '462px',
      },
    },
    {
      image: {
        src: `${workAssets}/Image05.png`,
        height: '462px',
      },
    },
    {
      image: {
        src: `${workAssets}/Image06.png`,
        height: '462px',
      },
    },
    {
      image: {
        src: `${workAssets}/Image07.png`,
        height: '462px',
      },
    },
    {
      subheading: "Impact",
      columns: [
        {
          heading: "Adopción y activación",
          body: [
            "**Onboarding completion rate:** 62% (usuarios que terminan el onboarding y eligen equipo).",
            "**Activation rate:** 35% (primer mini-juego completado en primeras 24h).",
          ],
        },
        {
          heading: "Engagement (core loop)",
          body: [
            "**Mini-juegos por usuario activo/día:** 1.6 (mediana ~1; power users suben el promedio).",
            "**Sesiones por usuario activo/día:** 1.4.",
            "**Duración promedio de sesión:** 3m 40s (mini-juegos cortos + revisar puntos/recompensas).",
          ],
        },
        {
          heading: "Retención",
          body: [
            "**Retención D1:** 24%.",
            "**Retención D7:** 9%.",
            "**Retención D30:** 3%.",
          ],
        },
      ],
    },
    {
      heading: "Efecto \"match day\"",
      body: [
        "''En días de partido, los usuarios activos generan +30% más mini-juegos completados vs. días sin partido.''",
        "El pico horario de 2-3 horas alrededor del partido concentra ~45% de la actividad diaria.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Image08.png`,
      },
    },
    {
      body: [
        "''El impacto del proyecto superó las expectativas iniciales. Gracias a su capacidad para generar participación constante, fomentar la interacción entre usuarios y extender la experiencia más allá del entorno digital, Fanbase App fue reconocida por ~~Budweiser como la mejor aplicación del año~~, un reconocimiento otorgado al producto con el mayor nivel de engagement dentro de su ecosistema.''",
      ],
    },
  ],
};
