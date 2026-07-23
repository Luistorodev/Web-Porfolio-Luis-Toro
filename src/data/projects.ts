import type { ImageMetadata } from 'astro';
import type { Language } from './i18n';

import coverOntopDarkMode from '../assets/covers/ontop-dark-mode.png';
import coverOntopDesignSystem from '../assets/work/ontop-design-system/Cover.png';
import coverPlatziCalendar from '../assets/work/platzi-calendar/cover.png';
import coverScotiabank from '../assets/covers/scotiabank.png';
import coverFanbase from '../assets/covers/fanbase.png';
import coverPhyloLegal from '../assets/covers/phylo-legal.png';
import coverOntopRedesign from '../assets/work/ontop-app-revamp/Cover.png';
import coverApplicationRedesign from '../assets/work/application-redesign/cover.png';
import coverProductRequest from '../assets/work/product-request-revamp/cover.png';
import coverBud66 from '../assets/covers/bud66.png';
import coverAccelerator from '../assets/covers/100-accelerator.png';

export interface Project {
  title: Record<Language, string>;
  company: string;
  year: string;
  slug: string;
  image?: ImageMetadata;
  disabled?: boolean;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const leftColumn: Project[] = [
  { title: { en: "Adapting Ontop Wallet for dark mode", es: "Adaptando Ontop Wallet al modo oscuro" }, company: "ONTOP LLC", year: "2026", slug: slugify("Ontop App Dark mode adaptations"), image: coverOntopDarkMode, disabled: true },
  { title: { en: "Building Ontop's design system", es: "Construyendo el Design System de Ontop" }, company: "ONTOP LLC", year: "2024", slug: "ontop-design-system", image: coverOntopDesignSystem },
  { title: { en: "Improving live event discovery", es: "Mejorando el descubrimiento de eventos en vivo" }, company: "Platzi", year: "2022", slug: "platzi-calendar", image: coverPlatziCalendar },
  { title: { en: "Scaling Scotiabank's design system", es: "Escalando el Design System de Scotiabank" }, company: "SCOTIABANK", year: "2022", slug: "scotiabank-design-system", image: coverScotiabank },
  { title: { en: "Designing a football fan experience", es: "Diseñando una experiencia para aficionados al fútbol" }, company: "Budweiser", year: "2021", slug: "fanbase-app", image: coverFanbase },
  { title: { en: "Building a LegalTech design system", es: "Construyendo un Design System para LegalTech" }, company: "Phylo Legal Tech", year: "2020", slug: "legal-tech-ui", image: coverPhyloLegal },
];

export const rightColumn: Project[] = [
  { title: { en: "Redesigning Ontop Wallet", es: "Rediseñando Ontop Wallet" }, company: "ONTOP LLC", year: "2026", slug: "ontop-app-redesign", image: coverOntopRedesign },
  { title: { en: "Simplifying credit decisions", es: "Simplificando las decisiones de crédito" }, company: "Circulo de Credito", year: "2024", slug: "application-redesign", image: coverApplicationRedesign },
  { title: { en: "Simplifying loan applications", es: "Simplificando las solicitudes de crédito" }, company: "SCOTIABANK", year: "2022", slug: "product-request-revamp", image: coverProductRequest },
  { title: { en: "Turning films into a social experience", es: "Transformando un concurso de cine en una experiencia social" }, company: "Budweiser", year: "2020", slug: "bud66-studio", image: coverBud66 },
  { title: { en: "Designing a startup accelerator", es: "Diseñando una aceleradora de startups" }, company: "ABInbev", year: "2020", slug: "100-accelerator", image: coverAccelerator },
];

export const allProjects: Project[] = [...leftColumn, ...rightColumn];
