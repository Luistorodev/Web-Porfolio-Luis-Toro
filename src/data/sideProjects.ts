export interface SideProject {
  title: string;
  description?: string;
  year?: string;
  slug: string;
  image?: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const leftColumn: SideProject[] = [
  { title: "Personal Finance Manager", description: "A budgeting and expense tracking tool", year: "2026", slug: slugify("Personal Finance Manager") },
  { title: "Community Resource Hub", description: "Directory of free resources for underserved communities", year: "2025", slug: slugify("Community Resource Hub") },
  { title: "Open Source Component Library", description: "Reusable React components with accessibility built-in", year: "2025", slug: slugify("Open Source Component Library") },
  { title: "Design Token Generator", description: "CLI tool to sync design tokens across platforms", year: "2024", slug: slugify("Design Token Generator") },
  { title: "Accessibility Audit Tool", description: "Automated WCAG compliance checker for web apps", year: "2024", slug: slugify("Accessibility Audit Tool") },
  { title: "Micro-interaction Playground", description: "Interactive gallery of UI animations and transitions", year: "2023", slug: slugify("Micro-interaction Playground") },
];

export const rightColumn: SideProject[] = [
  { title: "Code Snippet Manager", description: "Save and organize reusable code snippets", year: "2026", slug: slugify("Code Snippet Manager") },
  { title: "Design Critique Platform", description: "Peer review platform for UI/UX designers", year: "2025", slug: slugify("Design Critique Platform") },
  { title: "Color Palette Explorer", description: "Generate and test accessible color combinations", year: "2024", slug: slugify("Color Palette Explorer") },
  { title: "Responsive Tester", description: "Multi-device preview tool for responsive design", year: "2023", slug: slugify("Responsive Tester") },
  { title: "Typography Scale Builder", description: "Visual typography system generator for designers", year: "2023", slug: slugify("Typography Scale Builder") },
];

export const allSideProjects: SideProject[] = [...leftColumn, ...rightColumn];
