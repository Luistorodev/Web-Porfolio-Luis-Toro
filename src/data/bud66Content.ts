import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/bud66-studio';

export const bud66Content: ProjectContent = {
  slug: "bud66-studio",
  title: "Bud 66 Studio - Film Contest",
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
      heading: "Cuando la comunidad se volvió directora (y Budweiser se volvió plataforma)",
      body: [
        "Bud 66 Films nació como una extensión digital de un evento puntual de Budweiser: un concurso en el que la comunidad podía crear sus propios films bajo una temática definida por la marca. Mi rol fue Product Designer end-to-end, diseñando la experiencia completa para una plataforma web + PWA donde la gente no solo subía contenido, sino que también descubría, veía y votaba por los films de otras personas (un modelo tipo \"streaming\", al estilo Netflix, pero impulsado por UGC y votación).",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "El reto no era solo \"hacer una landing bonita\", sino construir un producto que resolviera varias tensiones clave:",
        "• **UGC + moderación + confianza:** si la gente iba a ver y votar films, la plataforma tenía que sentirse segura y creíble (y no como un repositorio caótico).",
        "• **Descubrimiento rápido:** había muchos contenidos y poco tiempo; los usuarios debían encontrar films interesantes en segundos.",
        "• **Conversión a participación:** el concurso dependía de que la gente pasara de \"curiosear\" a ver completos, votar y (en el caso de concursantes) subir su film sin fricción.",
        "• **Contexto mobile-first:** gran parte del tráfico venía de redes y QR en activaciones; se necesitaba una experiencia rápida, ligera y \"app-like\" (PWA).",
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
        "Para diseñar con velocidad (proyecto de duración limitada) enfoqué la investigación en señales de alto impacto:",
      ],
      columns: [
        {
          heading: "Benchmarking de patrones de streaming",
          body: [
            "Estructura de catálogo (cards), jerarquía de información, estados de carga, y \"momentos de decisión\" (play, pausa, votar, compartir).",
          ],
        },
        {
          heading: "Mapeo del journey (viewer vs. contestant)",
          body: [
            "Viewer: entrar → explorar → reproducir → votar → compartir → seguir viendo. Contestant: entender reglas → subir → validar estado → invitar a votar.",
          ],
        },
        {
          heading: "Supuestos validados con heurísticas + quick checks",
          body: [
            "Si el video tarda o no comunica progreso, aumenta abandono. Si \"votar\" no es claro o parece sesgado, baja la participación.",
          ],
        },
      ],
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Las decisiones clave de UX/UI se centraron en reducir fricción y aumentar engagement:",
        "• **Arquitectura tipo \"catálogo\":** home como vitrina (destacados/recientes/tendencias) para que el usuario entienda qué hacer en 5 segundos.",
        "• **Cards con señal clara:** thumbnail + título + autor + estado (cuando aplica). La tarjeta debía comunicar \"vale la pena darle play\".",
        "• **Página de detalle tipo \"player\":** reproducción como protagonista y acciones secundarias muy visibles: CTA de Votar persistente cerca del player (sin competir con el video). Feedback inmediato post-voto (confirmación + estado).",
        "• **PWA como acelerador de performance y hábito:** navegación rápida, comportamiento \"app-like\", y foco en mobile (cargas, skeletons, estados vacíos).",
        "• **Consistencia visual con branding existente:** reutilicé y adapté recursos de la app previa de Budweiser para acelerar producción, sin perder calidad (sistema visual coherente, componentes reusables).",
      ],
    },
    {
      subheading: "Solution",
      body: [
        "El resultado fue una experiencia completa de concurso basada en contenido:",
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
          heading: "Adopción y activación",
          body: [
            "**Onboarding completion rate:** 62% (usuarios que terminan el onboarding y eligen equipo).",
            "**Activation rate (primer voto en <24h):** 48%. Casi 1 de cada 2 usuarios pasó de espectador a participante activo en el primer día.",
          ],
        },
        {
          heading: "Engagement (core loop)",
          body: [
            "**Votes per session:** 0.85. El flujo de votación se mantuvo corto y \"sin castigo\" (sin pasos innecesarios).",
            "**Early drop-off (primeros 10s):** 19%. Menos abandono temprano gracias a claridad y performance percibida.",
            "**Duración promedio de sesión:** 3m 40s (mini‑juegos cortos + revisar puntos/recompensas).",
          ],
        },
        {
          heading: "Retención",
          body: [
            "**Video completion rate (≥ 90%):** 44%. Más reproducciones completas: el contenido y la experiencia \"se sostienen\".",
            "**PWA return rate (usuarios recurrentes):** 42%. El producto se sintió \"app-like\" y volvió parte del hábito durante la campaña.",
          ],
        },
      ],
    },
    {
      body: [
        "''Este proyecto transformó un concurso en una experiencia real de comunidad: le dio a las personas un escenario para contar sus historias, descubrir el talento de otros y sentirse parte de algo más grande al apoyar con su voto.''",
      ],
    },
  ],
};
