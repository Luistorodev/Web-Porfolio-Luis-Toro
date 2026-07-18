import type { Language } from './i18n';

export interface SideProject {
  title: Record<Language, string>;
  description?: Record<Language, string>;
  year?: string;
  slug: string;
  image?: string;
  externalUrl?: string;
  disabled?: boolean;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const leftColumn: SideProject[] = [
  { title: { en: "DeepDen", es: "DeepDen" }, year: "2026", slug: slugify("DeepDen"), image: "/assets/Deepden-Screen.png", externalUrl: "https://deepden.app/" },
  { title: { en: "Community Resource Hub", es: "Hub de recursos comunitarios" }, description: { en: "A directory of free resources for underserved communities", es: "Un directorio de recursos gratuitos para comunidades con acceso limitado" }, year: "2025", slug: slugify("Community Resource Hub") },
  { title: { en: "Open Source Component Library", es: "Librería de componentes open source" }, description: { en: "Reusable React components with accessibility built in", es: "Componentes reutilizables de React con accesibilidad integrada" }, year: "2025", slug: slugify("Open Source Component Library") },
  { title: { en: "Design Token Generator", es: "Generador de design tokens" }, description: { en: "A CLI for syncing design tokens across platforms", es: "Una CLI para sincronizar design tokens entre plataformas" }, year: "2024", slug: slugify("Design Token Generator") },
  { title: { en: "Accessibility Audit Tool", es: "Herramienta de auditoría de accesibilidad" }, description: { en: "An automated WCAG checker for web applications", es: "Un verificador automatizado de WCAG para aplicaciones web" }, year: "2024", slug: slugify("Accessibility Audit Tool") },
  { title: { en: "Micro-interaction Playground", es: "Laboratorio de microinteracciones" }, description: { en: "An interactive gallery of UI animations and transitions", es: "Una galería interactiva de animaciones y transiciones de interfaz" }, year: "2023", slug: slugify("Micro-interaction Playground") },
];

export const rightColumn: SideProject[] = [
  { title: { en: "Personal Finance Manager", es: "Personal Finance Manager" }, description: { en: "A budgeting and expense-tracking tool", es: "Una herramienta para presupuestos y seguimiento de gastos" }, year: "2026", slug: slugify("Personal Finance Manager"), disabled: true },
  { title: { en: "Code Snippet Manager", es: "Gestor de fragmentos de código" }, description: { en: "Save and organize reusable code snippets", es: "Guarda y organiza fragmentos de código reutilizables" }, year: "2026", slug: slugify("Code Snippet Manager") },
  { title: { en: "Design Critique Platform", es: "Plataforma de crítica de diseño" }, description: { en: "A peer-review space for UI and UX designers", es: "Un espacio de revisión entre pares para diseñadores de UI y UX" }, year: "2025", slug: slugify("Design Critique Platform") },
  { title: { en: "Color Palette Explorer", es: "Explorador de paletas de color" }, description: { en: "Generate and test accessible color combinations", es: "Genera y prueba combinaciones de color accesibles" }, year: "2024", slug: slugify("Color Palette Explorer") },
  { title: { en: "Responsive Tester", es: "Probador responsive" }, description: { en: "A multi-device preview tool for responsive design", es: "Una herramienta de vista previa multidispositivo para diseño responsive" }, year: "2023", slug: slugify("Responsive Tester") },
  { title: { en: "Typography Scale Builder", es: "Creador de escalas tipográficas" }, description: { en: "A visual typography-system generator for designers", es: "Un generador visual de sistemas tipográficos para diseñadores" }, year: "2023", slug: slugify("Typography Scale Builder") },
];

export const allSideProjects: SideProject[] = [...leftColumn, ...rightColumn];
