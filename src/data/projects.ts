import type { Language } from './i18n';

export interface Project {
  title: Record<Language, string>;
  company: string;
  year: string;
  slug: string;
  image?: string;
  disabled?: boolean;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const leftColumn: Project[] = [
  { title: { en: "Adapting Ontop Wallet for dark mode", es: "Adaptando Ontop Wallet al modo oscuro" }, company: "ONTOP LLC", year: "2026", slug: slugify("Ontop App Dark mode adaptations"), image: "/assets/Ontop-dark-mode-cover.png", disabled: true },
  { title: { en: "Building Ontop's design system", es: "Construyendo el Design System de Ontop" }, company: "ONTOP LLC", year: "2024", slug: "ontop-design-system", image: "/assets/work/ontop-design-system/Cover.png" },
  { title: { en: "Improving live event discovery", es: "Mejorando el descubrimiento de eventos en vivo" }, company: "Platzi", year: "2022", slug: "platzi-calendar", image: "/assets/work/platzi-calendar/cover.png" },
  { title: { en: "Scaling Scotiabank's design system", es: "Escalando el Design System de Scotiabank" }, company: "SCOTIABANK", year: "2022", slug: "canva-design-system", image: "/assets/Scotiabank-Cover.png" },
  { title: { en: "Designing a football fan experience", es: "Diseñando una experiencia para aficionados al fútbol" }, company: "Budweiser", year: "2021", slug: "fanbase-app", image: "/assets/Fanbase-cover.png" },
  { title: { en: "Building a LegalTech design system", es: "Construyendo un Design System para LegalTech" }, company: "Phylo Legal Tech", year: "2020", slug: "legal-tech-ui", image: "/assets/phylo-legal-cover.png" },
];

export const rightColumn: Project[] = [
  { title: { en: "Redesigning Ontop Wallet", es: "Rediseñando Ontop Wallet" }, company: "ONTOP LLC", year: "2026", slug: "ontop-app-redesign", image: "/assets/work/ontop-app-revamp/Cover.png" },
  { title: { en: "Simplifying credit decisions", es: "Simplificando las decisiones de crédito" }, company: "Circulo de Credito", year: "2024", slug: "application-redesign", image: "/assets/work/application-redesign/cover.png" },
  { title: { en: "Simplifying loan applications", es: "Simplificando las solicitudes de crédito" }, company: "SCOTIABANK", year: "2022", slug: "product-request-revamp", image: "/assets/work/product-request-revamp/cover.png" },
  { title: { en: "Turning films into a social experience", es: "Transformando un concurso de cine en una experiencia social" }, company: "Budweiser", year: "2020", slug: "bud66-studio", image: "/assets/Bud66-Cover.png" },
  { title: { en: "Designing a startup accelerator", es: "Diseñando una aceleradora de startups" }, company: "ABInbev", year: "2020", slug: "100-accelerator", image: "/assets/100-Accelerator-cover.png" },
];

export const allProjects: Project[] = [...leftColumn, ...rightColumn];
