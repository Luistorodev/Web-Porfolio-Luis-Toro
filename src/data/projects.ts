export interface Project {
  title: string;
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
  { title: "Ontop App Dark mode adaptations", company: "ONTOP LLC", year: "2026", slug: slugify("Ontop App Dark mode adaptations"), image: "/assets/Ontop-dark-mode-cover.png", disabled: true },
  { title: "Ontop Design System", company: "ONTOP LLC", year: "2024", slug: slugify("Ontop Design System"), image: "/assets/work/ontop-design-system/Cover.png" },
  { title: "Platzi Calendar", company: "Platzi", year: "2022", slug: slugify("Platzi Calendar"), image: "/assets/work/platzi-calendar/cover.png" },
  { title: "Canva Design System", company: "SCOTIABANK", year: "2022", slug: slugify("Canva Design System"), image: "/assets/Scotiabank-Cover.png" },
  { title: "Fanbase App", company: "Budweiser", year: "2021", slug: slugify("Fanbase App"), image: "/assets/Fanbase-cover.png" },
  { title: "Legal Tech UI", company: "Phylo Legal Tech", year: "2020", slug: slugify("Legal Tech UI"), image: "/assets/phylo-legal-cover.png" },
];

export const rightColumn: Project[] = [
  { title: "Ontop App Redesign", company: "ONTOP LLC", year: "2026", slug: slugify("Ontop App Redesign"), image: "/assets/work/ontop-app-revamp/Cover.png" },
  { title: "Application redesign", company: "Circulo de Credito", year: "2024", slug: slugify("Application redesign"), image: "/assets/work/application-redesign/cover.png" },
  { title: "Product request revamp", company: "SCOTIABANK", year: "2022", slug: slugify("Product request revamp"), image: "/assets/work/product-request-revamp/cover.png" },
  { title: "Bud66 Studio", company: "Budweiser", year: "2020", slug: slugify("Bud66 Studio"), image: "/assets/Bud66-Cover.png" },
  { title: "100+ Accelerator", company: "ABInbev", year: "2020", slug: slugify("100+ Accelerator"), image: "/assets/100-Accelerator-cover.png" },
];

export const allProjects: Project[] = [...leftColumn, ...rightColumn];
