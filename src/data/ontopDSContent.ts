import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/ontop-design-system';

export const ontopDSContent: ProjectContent = {
  slug: "ontop-design-system",
  title: "Ontop Design System",
  subtitle: "ONTOP LLC",
  cover: { src: `${workAssets}/Cover.png`, contain: true },
  meta: {
    role: "Product Designer",
    timeline: "2024 — Present",
    skills: ["Product Design", "UX Design", "Design System"],
  },
  sections: [
    {
      label: "Overview",
      heading: "A visual and component language that unifies Ontop products",
      body: ["Ontop was growing into an ecosystem of products for distinct segments. That growth exposed a problem: each platform was evolving with different visual and interaction criteria, affecting consistency, scalability, and delivery speed. The goal was to build a design system that aligned products, teams, and technologies around one shared language."],
    },
    { image: { src: `${workAssets}/image01.png`, contain: true } },
    {
      subheading: "The Challenge",
      body: ["The core challenge was creating a design system that could serve products for different segments within one ecosystem, while preserving cross-platform cohesion and raising the visual and functional standard."],
      columns: [
        { heading: "Inconsistency across 3 platforms and technologies", body: ["Each Ontop product used different visual criteria and interaction patterns, creating a fragmented user experience and duplicating design and development effort."] },
        { heading: "Low readiness for dark mode migration", body: ["The lack of semantic tokens and a normalized color palette made a consistent dark mode migration unfeasible, despite growing user demand."] },
        { heading: "System restructuring while Marketing redefined the brand", body: ["The design system had to evolve as Marketing redefined Ontop's visual identity, requiring a cross-functional update to every component and token."] },
      ],
    },
    { image: { src: `${workAssets}/image02.png`, contain: true } },
    {
      subheading: "Process",
      body: ["To create an adoption path grounded in reality, the work began with diagnosis and mapping:"],
      columns: [
        { heading: "Audit (diagnosis)", body: ["Created an inventory of existing components to identify inconsistencies in UI, tokens, behavior, and accessibility, then prioritized standardization by product impact and use."] },
        { heading: "Foundations (tokens + rules)", body: ["Defined the design system's foundations, including typography, a semantic color palette, spacing and grid scales, elevation, shadows, radii, and borders."] },
      ],
    },
    {
      columns: [
        { heading: "Componentization (UI kit)", body: ["Built the system's core components and patterns, defining their variants, states, and usage guidelines to ensure consistent implementation."] },
        { heading: "QA and testing (the differentiator)", body: ["Conducted internal validation and testing in real environments to ensure component consistency and performance, then iterated from the feedback received."] },
      ],
    },
    { image: { src: `${workAssets}/image03.png`, contain: true } },
    { image: { src: `${workAssets}/image04.png`, contain: true } },
    { image: { src: `${workAssets}/image05.png`, contain: true } },
    { subheading: "Solution", body: ["The result was a functional design system, ready for incremental implementation and grounded in the product's reality:"] },
    { image: { src: `${workAssets}/image06.png`, contain: true } },
    { image: { src: `${workAssets}/image07.png`, contain: true } },
    { image: { src: `${workAssets}/image08.png`, contain: true } },
    { image: { src: `${workAssets}/image09.png`, contain: true } },
    { image: { src: `${workAssets}/image10.png`, contain: true } },
    {
      subheading: "Impact",
      columns: [
        { heading: "Design speed (time to design)", body: ["Previously, a screen took 10–12 hours because of iteration and inconsistency. With components and tokens, this dropped to 6–8 hours, a 30–40% improvement."] },
        { heading: "Less rework from UI inconsistencies", body: ["Adjustments for UI inconsistencies dropped from 18–25% to 8–12% of tickets, reducing rework by 40–60%."] },
        { heading: "Product consistency", body: ["Standardized key components, reducing redundant visual variants by 35–50%."] },
        { heading: "Development efficiency (design-engineering alignment)", body: ["Clear guidelines reduced sprint-time clarifications by 20–30%."] },
        { heading: "Team adoption of the system", body: ["Use evolved from partial adoption to 70–85% adoption across new screens through the design system."] },
        { heading: "Indirect experience impact (perceived quality)", body: ["Greater consistency improved perceived quality, with +5 to +10 points in UX/UI metrics or fewer QA issues."] },
      ],
    },
    { body: ["''This design system became the foundation for building and scaling the Ontop ecosystem with consistency, speed, and readiness for the future (dark mode and new fintech standards).''"] },
  ],
};

export const ontopDSContentEs: ProjectContent = {
  slug: "ontop-design-system",
  title: "Design System de Ontop",
  subtitle: "ONTOP LLC",
  cover: { src: `${workAssets}/Cover.png`, contain: true },
  meta: {
    role: "Diseñador de producto",
    timeline: "2024 — Actualidad",
    skills: ["Diseño de producto", "Diseño UX", "Design System"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Un lenguaje visual y de componentes para unificar los productos de Ontop",
      body: ["Ontop crecía como un ecosistema de productos para segmentos distintos. Ese crecimiento hizo visible un problema: cada plataforma avanzaba con criterios visuales y de interacción diferentes, afectando la consistencia, escalabilidad y velocidad de entrega. El objetivo fue construir un Design System que alineara productos, equipos y tecnologías bajo un mismo lenguaje."],
    },
    { image: { src: `${workAssets}/image01.png`, contain: true } },
    {
      subheading: "El reto",
      body: ["El reto principal fue crear un Design System que funcionara para productos dirigidos a segmentos diferentes dentro de un mismo ecosistema, manteniendo cohesión entre plataformas y elevando el estándar visual y funcional."],
      columns: [
        { heading: "Inconsistencia entre 3 plataformas y tecnologías", body: ["Cada producto de Ontop usaba criterios visuales y patrones de interacción distintos, creando una experiencia fragmentada y duplicando el esfuerzo de diseño y desarrollo."] },
        { heading: "Baja preparación para migrar a modo oscuro", body: ["La falta de tokens semánticos y una paleta de color normalizada hacía inviable una migración consistente a modo oscuro, pese a la creciente demanda de los usuarios."] },
        { heading: "Reestructura del sistema mientras Marketing redefinía la marca", body: ["El Design System tuvo que evolucionar mientras Marketing redefinía la identidad visual de Ontop, lo que exigió actualizar de forma transversal todos los componentes y tokens."] },
      ],
    },
    { image: { src: `${workAssets}/image02.png`, contain: true } },
    {
      subheading: "Proceso",
      body: ["Para diseñar una adopción aterrizada, el trabajo comenzó con diagnóstico y mapeo:"],
      columns: [
        { heading: "Auditoría (diagnóstico)", body: ["Inventarié los componentes existentes para detectar inconsistencias en UI, tokens, comportamiento y accesibilidad, y prioricé su estandarización según su impacto y uso en el producto."] },
        { heading: "Fundamentos (tokens + reglas)", body: ["Definí los fundamentos del sistema: tipografía, una paleta de color semántica, escalas de espaciado y grid, elevaciones, sombras, radios y bordes."] },
      ],
    },
    {
      columns: [
        { heading: "Componentización (UI kit)", body: ["Construí los componentes y patrones base del sistema, definiendo variantes, estados y lineamientos de uso para asegurar una implementación consistente."] },
        { heading: "QA y testing (el diferencial)", body: ["Realicé validaciones internas y pruebas en entornos reales para asegurar la consistencia y el funcionamiento de los componentes, e iteré a partir del feedback recibido."] },
      ],
    },
    { image: { src: `${workAssets}/image03.png`, contain: true } },
    { image: { src: `${workAssets}/image04.png`, contain: true } },
    { image: { src: `${workAssets}/image05.png`, contain: true } },
    { subheading: "Solución", body: ["El resultado fue un Design System funcional, listo para implementarse de forma incremental y alineado con la realidad del producto:"] },
    { image: { src: `${workAssets}/image06.png`, contain: true } },
    { image: { src: `${workAssets}/image07.png`, contain: true } },
    { image: { src: `${workAssets}/image08.png`, contain: true } },
    { image: { src: `${workAssets}/image09.png`, contain: true } },
    { image: { src: `${workAssets}/image10.png`, contain: true } },
    {
      subheading: "Impacto",
      columns: [
        { heading: "Velocidad de diseño (time to design)", body: ["Antes, una pantalla tomaba 10–12 horas por iteraciones e inconsistencias. Con componentes y tokens, bajó a 6–8 horas: una mejora del 30–40%."] },
        { heading: "Menos retrabajo por inconsistencias de UI", body: ["Los ajustes por inconsistencias de UI pasaron de 18–25% a 8–12% de los tickets, reduciendo el retrabajo en 40–60%."] },
        { heading: "Consistencia del producto", body: ["Estandaricé componentes clave y reduje las variantes visuales redundantes en 35–50%."] },
        { heading: "Eficiencia de desarrollo (alineación diseño-engineering)", body: ["Con lineamientos claros, las aclaraciones durante el sprint se redujeron en 20–30%."] },
        { heading: "Adopción del sistema por el equipo", body: ["El uso pasó de ser parcial a una adopción de 70–85% en nuevas pantallas mediante el Design System."] },
        { heading: "Impacto indirecto en la experiencia (calidad percibida)", body: ["Una mayor consistencia mejoró la calidad percibida, con +5 a +10 puntos en métricas UX/UI o menos incidencias en QA."] },
      ],
    },
    { body: ["''Este Design System se convirtió en la base para construir y escalar el ecosistema Ontop con consistencia, velocidad y preparación para el futuro (modo oscuro y nuevos estándares fintech).''"] },
  ],
};
