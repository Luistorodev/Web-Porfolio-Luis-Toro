import { ui, type Language } from './i18n';

export interface Experience {
  role: string;
  company: string;
  period: string;
}

export function getExperience(lang: Language): Experience[] {
  const es = lang === 'es';
  return [
    { role: 'Product Design Engineer & Design System Lead', company: 'Ontop LLC', period: `2024 — ${ui[lang].cv.present}` },
    { role: 'Product Designer', company: es ? 'Círculo de Crédito' : 'Circulo de Credito', period: '2023 — 2024' },
    { role: 'AI Product Designer', company: 'Kmeleon Tech', period: '2023' },
    { role: 'Product Designer', company: 'Scotiabank Colpatria', period: '2022 — 2023' },
    { role: es ? 'Consultor UX/UI' : 'UX/UI Consultant', company: 'Serempre', period: '2021' },
    { role: es ? 'Diseñador UX/UI Junior' : 'Junior UX/UI Designer', company: 'Finsocial', period: '2020' },
  ];
}
