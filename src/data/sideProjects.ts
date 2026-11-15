import type { ImageMetadata } from 'astro';
import type { Language } from './i18n';
import deepdenScreen from '../assets/side-projects/deepden-screen.png';
import nodinotesScreen from '../assets/side-projects/nodinotes-screen.png';
import alternumScreen from '../assets/side-projects/alternum-screen.png';

export interface SideProject {
  title: Record<Language, string>;
  description?: Record<Language, string>;
  year?: string;
  slug: string;
  image?: ImageMetadata;
  externalUrl?: string;
  disabled?: boolean;
  featured?: boolean;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// One ordered source for every viewport. The first two preserve the current curation.
// TODO(luis): confirm the final featured subset and add external URLs or case-study pages for any new clickable item.
export const allSideProjects: SideProject[] = [
  { title: { en: 'Nodi Notes', es: 'Nodi Notes' }, description: { en: 'An AI infinite canvas for notes and research, with answers that cite their sources', es: 'Un canvas infinito con IA para notas e investigación, con respuestas que citan sus fuentes' }, year: '2026', slug: slugify('Nodi Notes'), image: nodinotesScreen, externalUrl: 'https://nodinotes.app/', featured: true },
  { title: { en: 'Alternum', es: 'Alternum' }, description: { en: 'A curated directory of open-source and AI tools, with trust signals explained', es: 'Un directorio curado de herramientas open source y de IA, con señales de confianza explicadas' }, year: '2026', slug: slugify('Alternum'), image: alternumScreen, externalUrl: 'https://alternum.site/', featured: true },
  { title: { en: 'DeepDen', es: 'DeepDen' }, description: { en: 'A focus timer with immersive scenes and lo-fi music to get into deep work', es: 'Un temporizador de enfoque con escenas inmersivas y música lo-fi para el trabajo profundo' }, year: '2026', slug: slugify('DeepDen'), image: deepdenScreen, externalUrl: 'https://deepden.app/', featured: true },
  { title: { en: 'Community Resource Hub', es: 'Hub de recursos comunitarios' }, description: { en: 'A directory of free resources for underserved communities', es: 'Un directorio de recursos gratuitos para comunidades con acceso limitado' }, year: '2025', slug: slugify('Community Resource Hub') },
  { title: { en: 'Code Snippet Manager', es: 'Gestor de fragmentos de código' }, description: { en: 'Save and organize reusable code snippets', es: 'Guarda y organiza fragmentos de código reutilizables' }, year: '2026', slug: slugify('Code Snippet Manager') },
  { title: { en: 'Open Source Component Library', es: 'Librería de componentes open source' }, description: { en: 'Reusable React components with accessibility built in', es: 'Componentes reutilizables de React con accesibilidad integrada' }, year: '2025', slug: slugify('Open Source Component Library') },
  { title: { en: 'Design Critique Platform', es: 'Plataforma de crítica de diseño' }, description: { en: 'A peer-review space for UI and UX designers', es: 'Un espacio de revisión entre pares para diseñadores de UI y UX' }, year: '2025', slug: slugify('Design Critique Platform') },
  { title: { en: 'Design Token Generator', es: 'Generador de design tokens' }, description: { en: 'A CLI for syncing design tokens across platforms', es: 'Una CLI para sincronizar design tokens entre plataformas' }, year: '2024', slug: slugify('Design Token Generator') },
  { title: { en: 'Color Palette Explorer', es: 'Explorador de paletas de color' }, description: { en: 'Generate and test accessible color combinations', es: 'Genera y prueba combinaciones de color accesibles' }, year: '2024', slug: slugify('Color Palette Explorer') },
  { title: { en: 'Accessibility Audit Tool', es: 'Herramienta de auditoría de accesibilidad' }, description: { en: 'An automated WCAG checker for web applications', es: 'Un verificador automatizado de WCAG para aplicaciones web' }, year: '2024', slug: slugify('Accessibility Audit Tool') },
  { title: { en: 'Responsive Tester', es: 'Probador responsive' }, description: { en: 'A multi-device preview tool', es: 'Una herramienta de vista previa multidispositivo' }, year: '2023', slug: slugify('Responsive Tester') },
  { title: { en: 'Micro-interaction Playground', es: 'Laboratorio de microinteracciones' }, description: { en: 'An interactive gallery of UI animations and transitions', es: 'Una galería interactiva de animaciones y transiciones de interfaz' }, year: '2023', slug: slugify('Micro-interaction Playground') },
  { title: { en: 'Typography Scale Builder', es: 'Creador de escalas tipográficas' }, description: { en: 'A visual typography-system generator for designers', es: 'Un generador visual de sistemas tipográficos para diseñadores' }, year: '2023', slug: slugify('Typography Scale Builder') },
];
