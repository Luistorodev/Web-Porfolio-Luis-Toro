import type { Language } from './i18n';
import type { ProjectContent } from './legalTechContent';
import { legalTechContent, legalTechContentEs } from './legalTechContent';
import { acceleratorContent, acceleratorContentEs } from './acceleratorContent';
import { fanbaseContent, fanbaseContentEs } from './fanbaseContent';
import { bud66Content, bud66ContentEs } from './bud66Content';
import { canvaContent, canvaContentEs } from './canvaContent';
import { productRequestContent, productRequestContentEs } from './productRequestContent';
import { platziContent, platziContentEs } from './platziContent';
import { circuloContent, circuloContentEs } from './circuloContent';
import { ontopRedesignContent, ontopRedesignContentEs } from './ontopRedesignContent';
import { ontopDSContent, ontopDSContentEs } from './ontopDSContent';

const caseStudies: Record<Language, Record<string, ProjectContent>> = {
  en: {
    'legal-tech-ui': legalTechContent,
    '100-accelerator': acceleratorContent,
    'fanbase-app': fanbaseContent,
    'bud66-studio': bud66Content,
    'scotiabank-design-system': canvaContent,
    'product-request-revamp': productRequestContent,
    'platzi-calendar': platziContent,
    'application-redesign': circuloContent,
    'ontop-app-redesign': ontopRedesignContent,
    'ontop-design-system': ontopDSContent,
  },
  es: {
    'legal-tech-ui': legalTechContentEs,
    '100-accelerator': acceleratorContentEs,
    'fanbase-app': fanbaseContentEs,
    'bud66-studio': bud66ContentEs,
    'scotiabank-design-system': canvaContentEs,
    'product-request-revamp': productRequestContentEs,
    'platzi-calendar': platziContentEs,
    'application-redesign': circuloContentEs,
    'ontop-app-redesign': ontopRedesignContentEs,
    'ontop-design-system': ontopDSContentEs,
  },
};

export function getCaseStudy(slug: string, language: Language) {
  return caseStudies[language][slug];
}
