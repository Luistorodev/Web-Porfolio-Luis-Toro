import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/fanbase-app';

export const fanbaseContent: ProjectContent = {
  slug: "fanbase-app",
  title: "Fanbase App - Designing Seasonal Engagement for UK Football Fans",
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
      heading: "Building stronger fan connections",
      body: [
        "Budweiser wanted to strengthen its connection with UK football fans through more than content: a digital experience that felt like \"being part of the team.\" The result was a gamified app where people could choose a team, play mini-games, earn points, and compete for brand-defined prizes, alongside social features such as chat and watch parties in bars and restaurants during matches.",
      ],
    },
    {
      body: [
        "''In the UK, football brings people together, creates communities, and strengthens friendships around a shared passion. Abi saw an opportunity to take that connection further, turning following the sport into a more participatory and rewarding experience.''",
      ],
    },
    {
      subheading: "Problem",
      body: [
        "The challenge was not to make a \"fun app,\" but to design a system that could sustain engagement throughout the season:",
        "• How might we turn fandom, emotion, rivalry, and match-day rituals into repeatable game mechanics?",
        "• How might we encourage people to return without making the experience feel repetitive or purely \"promotional\"?",
        "• How might we connect digital and real-world watch parties without fragmenting the experience?",
        "• How might we make points and prizes clear, fair, and motivating?",
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
        "To reduce uncertainty, I ran research focused on testing hypotheses and understanding real motivations:",
        "• User profiling, needs, and pain points with stakeholders to define who we were designing for and the app's \"job\": compete, demonstrate knowledge, belong, and win.",
        "• Validation of two core questions: 1) Which mini-game formats are most compelling for football fans? 2) How can healthy competition drive consistent participation?",
        "• A review of gamification and sports experiences to identify patterns in progression, rewards, live challenges, and social dynamics.",
      ],
    },
    {
      subheading: "Design Decisions",
      body: [
        "Based on those findings, I made product and UX decisions that supported clarity, motivation, and scale:",
        "• A simple, repeatable core loop: choose a team → play → earn points → progress → redeem or compete.",
        "• MVP feature prioritization: first the habit-forming layer of gameplay, points, and progress; then chat and watch parties as a community layer.",
        "• An information architecture that clearly separated games and challenges, progress, points and rewards, and community events such as watch parties.",
        "• A component system (UI kit) that maintained consistency, accelerated iteration, and allowed mini-games to grow without redesigning the entire experience.",
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
        "The final product connected fans with the brand and each other, using gamification to build an active community. The platform rested on three pillars:",
        "• Play and competition: varied mini-games that sustained daily and weekly participation.",
        "• Progression and rewards: points and rankings that encouraged repeat play.",
        "• Community and events: watch parties, chat, and social dynamics in bars and restaurants during matches.",
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
          heading: "Adoption and activation",
          body: [
            "**Onboarding completion rate:** 62% (users who complete onboarding and choose a team).",
            "**Activation rate:** 35% (first mini-game completed in the first 24h).",
          ],
        },
        {
          heading: "Engagement (core loop)",
          body: [
            "**Mini-games per active user/day:** 1.6 (median ~1; power users lift the average).",
            "**Sessions per active user/day:** 1.4.",
            "**Average session duration:** 3m 40s (short mini-games + checking points/rewards).",
          ],
        },
        {
          heading: "Retention",
          body: [
            "**D1 retention:** 24%.",
            "**D7 retention:** 9%.",
            "**D30 retention:** 3%.",
          ],
        },
      ],
    },
    {
      heading: "\"Match-day\" effect",
      body: [
        "''On match days, active users complete +30% more mini-games vs. non-match days.''",
        "The 2-3-hour window around a match accounts for ~45% of daily activity.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Image08.png`,
      },
    },
    {
      body: [
        "''The project exceeded initial expectations. By driving sustained participation, encouraging user interaction, and extending the experience beyond the digital environment, Fanbase App was recognized by ~~Budweiser as the app of the year~~, an award for the product with the highest engagement in its ecosystem.''",
      ],
    },
  ],
};

export const fanbaseContentEs: ProjectContent = {
  slug: "fanbase-app",
  title: "Fanbase App - Diseñando engagement de temporada para fans de fútbol en UK",
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
      heading: "Construyendo conexiones más fuertes con los fans",
      body: [
        "Budweiser quería fortalecer su conexión con los fans de fútbol en UK con algo más que contenido: una experiencia digital que se sintiera como \"ser parte del equipo\". El resultado fue una app gamificada donde las personas podían elegir un equipo, jugar mini-juegos, ganar puntos y competir por premios definidos por la marca, junto con funciones sociales como chat y watch parties en bares y restaurantes durante los partidos.",
      ],
    },
    {
      body: [
        "''En el Reino Unido, el fútbol une a las personas, crea comunidades y fortalece amistades alrededor de una pasión compartida. Abi vio la oportunidad de llevar esa conexión más lejos, transformando el seguimiento del deporte en una experiencia más participativa y gratificante.''",
      ],
    },
    {
      subheading: "Problema",
      body: [
        "El reto no era crear una \"app divertida\", sino diseñar un sistema capaz de sostener el engagement durante toda la temporada:",
        "• ¿Cómo convertir el fandom, la emoción, la rivalidad y los rituales de partido en mecánicas de juego repetibles?",
        "• ¿Cómo lograr que las personas regresaran sin que la experiencia se sintiera repetitiva o puramente \"promocional\"?",
        "• ¿Cómo conectar las watch parties digitales y presenciales sin fragmentar la experiencia?",
        "• ¿Cómo hacer que los puntos y premios fueran claros, justos y motivadores?",
      ],
    },
    {
      image: {
        src: `${workAssets}/Problem.png`,
        contain: true,
      },
    },
    {
      subheading: "Investigación",
      body: [
        "Para reducir la incertidumbre, realicé una investigación enfocada en validar hipótesis y entender las motivaciones reales:",
        "• Perfilamiento de usuarios, necesidades y pain points junto con stakeholders para definir para quién diseñábamos y qué \"job\" debía resolver la app: competir, demostrar conocimiento, pertenecer y ganar.",
        "• Validación de dos preguntas centrales: 1) ¿Qué formatos de mini-juegos resultan más atractivos para los fans de fútbol? 2) ¿Cómo puede la competencia saludable impulsar una participación constante?",
        "• Revisión de experiencias de gamificación y deporte para identificar patrones de progresión, recompensas, retos en vivo y dinámicas sociales.",
      ],
    },
    {
      subheading: "Decisiones de diseño",
      body: [
        "A partir de estos hallazgos, tomé decisiones de producto y UX para asegurar claridad, motivación y escalabilidad:",
        "• Un loop principal simple y repetible: elige un equipo → juega → gana puntos → progresa → canjea o compite.",
        "• Priorización de funcionalidades para el MVP: primero la capa que genera hábito, con juego, puntos y progreso; después chat y watch parties como capa de comunidad.",
        "• Una arquitectura de información que separaba con claridad juegos y retos, progreso, puntos y recompensas, y eventos de comunidad como las watch parties.",
        "• Un sistema de componentes (UI kit) para mantener la consistencia, acelerar iteraciones y permitir que los mini-juegos crecieran sin rediseñar toda la experiencia.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Image02.png`,
        height: '504px',
      },
    },
    {
      subheading: "Solución",
      body: [
        "El producto final conectó a los fans con la marca y entre sí, usando la gamificación para construir una comunidad activa. La plataforma se apoyó en tres pilares:",
        "• Juego y competencia: mini-juegos variados que sostienen la participación diaria y semanal.",
        "• Progresión y recompensas: puntos y rankings que impulsan la repetición.",
        "• Comunidad y eventos: watch parties, chat y dinámicas sociales en bares y restaurantes durante los partidos.",
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
      subheading: "Impacto",
      columns: [
        {
          heading: "Adopción y activación",
          body: [
            "**Tasa de finalización del onboarding:** 62% (usuarios que completan el onboarding y eligen un equipo).",
            "**Tasa de activación:** 35% (primer mini-juego completado en las primeras 24h).",
          ],
        },
        {
          heading: "Engagement (loop principal)",
          body: [
            "**Mini-juegos por usuario activo/día:** 1.6 (mediana ~1; los power users elevan el promedio).",
            "**Sesiones por usuario activo/día:** 1.4.",
            "**Duración promedio de sesión:** 3m 40s (mini-juegos cortos + revisión de puntos/recompensas).",
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
        "''En días de partido, los usuarios activos completan +30% más mini-juegos vs. días sin partido.''",
        "La ventana de 2-3 horas alrededor del partido concentra ~45% de la actividad diaria.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Image08.png`,
      },
    },
    {
      body: [
        "''El proyecto superó las expectativas iniciales. Al impulsar una participación sostenida, fomentar la interacción entre usuarios y extender la experiencia más allá del entorno digital, Fanbase App fue reconocida por ~~Budweiser como la app del año~~, un premio otorgado al producto con mayor engagement dentro de su ecosistema.''",
      ],
    },
  ],
};
