import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/ontop-app-revamp';

export const ontopRedesignContent: ProjectContent = {
  slug: "ontop-app-redesign",
  title: "Ontop Wallet: End-to-End Redesign",
  subtitle: "Ontop LLC",
  cover: { src: `${workAssets}/Cover.png` },
  meta: {
    role: "Product Designer",
    timeline: "2025",
    skills: ["Product Design", "UX Design", "Gamification"],
  },
  sections: [
    {
      label: "Overview",
      heading: "A simpler, more reliable, faster experience",
      body: [
        "Ontop is a wallet within the GetOntop ecosystem that lets thousands of people receive international payments, hold USD balances, and move money through transfers, a card, and withdrawals.",
        "At the time, the app served 17,000+ users, but its experience lagged behind market expectations. Outdated visual patterns, inconsistent flows, and pervasive friction were directly affecting the business.",
      ],
    },
    {
      subheading: "The Problem",
      body: [
        "The app showed three connected symptoms:",
        "• **Low perceived quality and trust**",
        "Trust is part of the product in a wallet. An outdated experience and dead ends created uncertainty, especially during critical moments such as withdrawing, transferring, or confirming a transaction.",
        "• **Friction in key tasks (activation and transactions)**",
        "The home screen and navigation surfaced too many options at once. People struggled to understand what to do and where to start, hurting conversion in P2P and other money-movement journeys.",
        "• **Clear impact on public and operational metrics**",
        "Store-rating pressure was mounting, while support metrics repeated the same pain points: confusion, errors, lengthy processes, and abandonment midway through a flow.",
      ],
    },
    {
      subheading: "Research",
      body: ["To design precisely and quickly, research focused on evidence of real-world friction:"],
      columns: [
        { heading: "Qualitative and quantitative review of support tickets", body: ["Analyzed recurring patterns to identify the most common pain points and their impact on the experience."] },
        { heading: "Identifying dead ends and points of no return", body: ["Mapped journey moments where users dropped off without completing their task."] },
        { heading: "Reading market signals", body: ["Evaluated fintech trends to align the experience with current standards."] },
      ],
    },
    { body: ["''The biggest issue was not that users could not complete a flow. It was that they did not have enough confidence to do it.''"] },
    {
      body: [
        "'''Key Findings'''",
        "The home screen functioned more like a large menu than a starting point: many features, little guidance. Forms asked for more than necessary and mixed operational information with user decisions. Progress and confirmation cues were missing, increasing anxiety (\"Did it go through?\" / \"What is its status?\").",
      ],
    },
    { image: { src: `${workAssets}/image01.png`, contain: true } },
    {
      subheading: "Design Decisions",
      body: ["I made and advocated for decisions that enabled meaningful change without disrupting the product:"],
      columns: [
        { heading: "Design system foundations before the redesign", body: ["Built the component and token foundation first so the redesign could rely on a robust system from day one."] },
        { heading: "Incremental redesign of critical areas", body: ["Rather than a big-bang release, prioritized the highest-impact screens to deliver value quickly."] },
        { heading: "A simplified, action-oriented home screen", body: ["Shifted from a large menu to a dashboard with visible primary actions, a prominent balance, and quick access."] },
        { heading: "Reduced form friction", body: ["Used fewer fields, real-time validation, and microcopy that guides people through each step."] },
        { heading: "Purposeful microinteractions, not decoration", body: ["Every animation and visual response communicates status, progress, or confirmation."] },
        { heading: "Rapid testing with Engineering, UX, and Product", body: ["Ran weekly team iterations to validate decisions before committing development effort."] },
      ],
    },
    { subheading: "Solution", body: ["The result was an end-to-end redesign that modernized the experience and organized the product around clarity, trust, and speed:"] },
    { body: ["'''A new visual system aligned with fintech standards (hierarchy, accessibility, consistency).'''"] },
    { image: { src: `${workAssets}/image02.png`, contain: true } },
    { body: ["'''Clearer information architecture'''", "Navigation and home were designed to help people find and do more in fewer steps."], image: { src: `${workAssets}/image03.png`, contain: true }, layout: 'side-text-right' },
    { body: ["'''Optimized critical flows'''", "Fewer redundant screens, clearer CTAs, and robust states and confirmations."], image: { src: `${workAssets}/image04.png`, contain: true }, layout: 'side-text-left' },
    { body: ["'''A foundation built for growth'''", "The app is ready to support future incremental improvements, including new currencies and products, without reworking everything."] },
    { image: { src: `${workAssets}/image05.png`, contain: true } },
    { image: { src: `${workAssets}/image06.png`, contain: true } },
    { image: { src: `${workAssets}/image07.png`, contain: true } },
    { image: { src: `${workAssets}/image08.png`, contain: true } },
    {
      subheading: "Impact",
      columns: [
        { heading: "+32% MAU (18.8k → 24.8k)", body: ["Following the end-to-end redesign, the app significantly increased monthly active users."] },
        { heading: "+11% sessions per user (11.1 → 12.3)", body: ["People opened the app more often, signaling that the home screen and core flows became clearer and more actionable."] },
        { heading: "+9% session duration (~110s → ~120s)", body: ["Sessions became slightly longer, consistent with a smoother experience."] },
        { heading: "+60% monthly events (~2.1M → ~3.4M)", body: ["The total volume of in-app interactions increased."] },
        { heading: "10% to 18% conversion to first transaction", body: ["With fewer steps and better guidance in home CTAs and critical journeys, more users completed their first value-driving action."] },
        { heading: "Critical-flow drop-off from 20% to 12%", body: ["Fewer fields, clearer validation, and progress feedback reduced abandonment in the middle of transfer and withdrawal flows."] },
      ],
    },
    { body: ["''We redesigned Ontop Wallet end to end so moving your money would be simpler, more reliable, and faster. The numbers confirmed it.''"] },
  ],
};

export const ontopRedesignContentEs: ProjectContent = {
  slug: "ontop-app-redesign",
  title: "Ontop Wallet: rediseño de punta a punta",
  subtitle: "Ontop LLC",
  cover: { src: `${workAssets}/Cover.png` },
  meta: {
    role: "Diseñador de producto",
    timeline: "2025",
    skills: ["Diseño de producto", "Diseño UX", "Gamificación"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Una experiencia más simple, confiable y rápida",
      body: [
        "Ontop es una wallet dentro del ecosistema GetOntop que permite a miles de personas recibir pagos internacionales, mantener saldo en USD y mover dinero mediante transferencias, tarjeta y retiros.",
        "En ese momento, la app atendía a más de 17.000 usuarios, pero su experiencia ya no respondía al estándar del mercado. Patrones visuales desactualizados, flujos inconsistentes y fricción generalizada impactaban directamente al negocio.",
      ],
    },
    {
      subheading: "El problema",
      body: [
        "La app presentaba tres síntomas conectados:",
        "• **Baja percepción de calidad y confianza**",
        "En una wallet, la confianza es parte del producto. Una experiencia desactualizada y los callejones sin salida transmitían inseguridad, especialmente al retirar, transferir o confirmar una transacción.",
        "• **Fricción en tareas clave (activación y transacciones)**",
        "El inicio y la navegación mostraban demasiadas opciones a la vez. Las personas no tenían claro qué hacer ni por dónde empezar, afectando la conversión en P2P y otros flujos de movimiento de dinero.",
        "• **Impacto visible en métricas públicas y operativas**",
        "La presión por las calificaciones en las tiendas crecía, y las métricas de soporte repetían los mismos puntos de dolor: confusión, errores, procesos largos y abandono a mitad del flujo.",
      ],
    },
    {
      subheading: "Investigación",
      body: ["Para diseñar con precisión y velocidad, la investigación se centró en evidencia de fricción real:"],
      columns: [
        { heading: "Revisión cualitativa y cuantitativa de tickets de soporte", body: ["Analicé patrones recurrentes para identificar los principales puntos de dolor y su impacto en la experiencia."] },
        { heading: "Identificación de callejones sin salida y puntos de no retorno", body: ["Mapeé los momentos del journey donde las personas abandonaban sin completar la acción."] },
        { heading: "Lectura de señales de mercado", body: ["Evalué tendencias fintech para alinear la experiencia con los estándares actuales."] },
      ],
    },
    { body: ["''El mayor problema no era que las personas no pudieran completar un flujo. Era que no tenían suficiente confianza para hacerlo.''"] },
    {
      body: [
        "'''Hallazgos clave'''",
        "El inicio funcionaba más como un menú extenso que como un punto de partida: muchas funciones, poca guía. Los formularios pedían más información de la necesaria y mezclaban datos operativos con decisiones del usuario. Faltaban señales de progreso y confirmación, aumentando la ansiedad (\"¿Se envió?\" / \"¿Cuál es su estado?\").",
      ],
    },
    { image: { src: `${workAssets}/image01.png`, contain: true } },
    {
      subheading: "Decisiones de diseño",
      body: ["Tomé y defendí decisiones que permitieran un cambio significativo sin desestabilizar el producto:"],
      columns: [
        { heading: "Base del Design System antes del rediseño", body: ["Construí primero la base de componentes y tokens para que el rediseño partiera de un sistema robusto desde el día uno."] },
        { heading: "Rediseño incremental de áreas críticas", body: ["En vez de un lanzamiento de golpe, prioricé las pantallas de mayor impacto para entregar valor rápido."] },
        { heading: "Inicio simplificado y orientado a la acción", body: ["Pasé de un menú extenso a un dashboard con acciones principales visibles, saldo destacado y accesos rápidos."] },
        { heading: "Menos fricción en formularios", body: ["Usé menos campos, validación en tiempo real y microcopy que guía en cada paso."] },
        { heading: "Microinteracciones con propósito, no decorativas", body: ["Cada animación y respuesta visual comunica estado, avance o confirmación."] },
        { heading: "Testing rápido con Engineering, UX y Producto", body: ["Realicé iteraciones semanales con el equipo para validar decisiones antes de comprometer esfuerzo de desarrollo."] },
      ],
    },
    { subheading: "Solución", body: ["El resultado fue un rediseño de punta a punta que modernizó la experiencia y organizó el producto alrededor de claridad, confianza y velocidad:"] },
    { body: ["'''Un nuevo sistema visual alineado con estándares fintech (jerarquía, accesibilidad y consistencia).'''"] },
    { image: { src: `${workAssets}/image02.png`, contain: true } },
    { body: ["'''Arquitectura de información más clara'''", "El inicio y la navegación se diseñaron para encontrar y hacer más en menos pasos."], image: { src: `${workAssets}/image03.png`, contain: true }, layout: 'side-text-right' },
    { body: ["'''Flujos críticos optimizados'''", "Menos pantallas redundantes, CTAs más claros y estados y confirmaciones robustos."], image: { src: `${workAssets}/image04.png`, contain: true }, layout: 'side-text-left' },
    { body: ["'''Una base preparada para crecer'''", "La app quedó lista para incorporar mejoras incrementales, nuevas monedas y productos sin tener que rehacer todo."] },
    { image: { src: `${workAssets}/image05.png`, contain: true } },
    { image: { src: `${workAssets}/image06.png`, contain: true } },
    { image: { src: `${workAssets}/image07.png`, contain: true } },
    { image: { src: `${workAssets}/image08.png`, contain: true } },
    {
      subheading: "Impacto",
      columns: [
        { heading: "+32% MAU (18.8k → 24.8k)", body: ["Después del rediseño de punta a punta, la app incrementó significativamente sus usuarios activos mensuales."] },
        { heading: "+11% sesiones por usuario (11.1 → 12.3)", body: ["Las personas abrieron la app con más frecuencia, señal de que el inicio y los flujos principales eran más claros y accionables."] },
        { heading: "+9% duración de sesión (~110s → ~120s)", body: ["Las sesiones fueron ligeramente más largas, consistente con una experiencia más fluida."] },
        { heading: "+60% eventos mensuales (~2.1M → ~3.4M)", body: ["Aumentó el volumen total de interacciones dentro de la app."] },
        { heading: "10% a 18% de conversión a la primera transacción", body: ["Con menos pasos y mejor guía en los CTAs de inicio y flujos críticos, más usuarios completaron su primera acción de valor."] },
        { heading: "Abandono en flujos críticos del 20% al 12%", body: ["Menos campos, validaciones más claras y feedback de progreso redujeron el abandono a mitad de los flujos de transferencias y retiros."] },
      ],
    },
    { body: ["''Rediseñamos Ontop Wallet de punta a punta para que mover tu dinero fuera más simple, confiable y rápido. Los números lo confirmaron.''"] },
  ],
};
