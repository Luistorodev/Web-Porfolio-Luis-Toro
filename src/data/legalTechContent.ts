export interface ProjectSection {
  label?: string;
  heading?: string;
  subheading?: string;
  body?: string[];
  columns?: { heading: string; body: string[] }[];
  image?: ProjectImage;
  layout?: 'side-text-right' | 'side-text-left';
}

export interface ProjectImage {
  src: string;
  tall?: boolean;
  height?: string;
  contain?: boolean;
  caption?: string;
  overlay?: {
    src: string;
    opacity?: string;
  };
  logo?: string;
  composites?: {
    src: string;
    width: string;
    top: string;
    left: string;
  }[];
}

export interface ProjectContent {
  slug: string;
  title: string;
  subtitle: string;
  cover: ProjectImage;
  meta: {
    role: string;
    timeline: string;
    skills: string[];
  };
  sections: ProjectSection[];
}

const workAssets = '/assets/work/legal-tech-ui';

export const legalTechContent: ProjectContent = {
  slug: "legal-tech-ui",
  title: "Creating a scalable design system for a LegalTech startup",
  subtitle: "Legal Tech UI",
  cover: {
    src: `${workAssets}/297ca85a5424ddb65dc723c250a3f2e5261ef7db.png`,
    overlay: {
      src: `${workAssets}/34c14e47d0b5a9944fe966972e3f7f3cf47b0220.png`,
      opacity: "0.33",
    },
    logo: `${workAssets}/e6e75576a48596140c2b6d899e5e46cf430557ad.png`,
  },
  meta: {
    role: "UI Designer",
    timeline: "2020",
    skills: ["Design System", "Product Design", "Prototyping"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Building the Foundations",
      body: [
        "A fast-growing LegalTech startup needed a consistent digital foundation for its evolving product and marketing presence. As the sole designer leading the initiative, I created a design system from scratch and designed the UI for the company's website and blog.",
        "The goal was a unified visual language that could scale across future products while delivering a trustworthy, professional experience for prospective customers.",
      ],
    },
    {
      subheading: "The Challenge",
      body: [
        "As the company grew, visual inconsistencies emerged across touchpoints. Components were repeatedly recreated, spacing patterns varied between pages, and designers and developers had no centralized source of truth.",
      ],
    },
    {
      image: {
        src: `${workAssets}/f08f003e9ae66e36b07489c0c3397e0c630575f7.png`,
      },
    },
    {
      body: [
        "At the same time, the startup needed a modern website and blog that could make complex legal concepts clear and approachable.",
        "The challenge was twofold:",
        "• Create a scalable design system to support future growth.",
        "• Design a website and blog experience that balanced trust, clarity, and usability.",
      ],
    },
    {
      image: {
        src: `${workAssets}/d241cc3895f1a8ad199c08143b86ed5b7834fb78.png`,
        tall: true,
      },
    },
    {
      image: {
        src: `${workAssets}/Project-app.png`,
        contain: true,
      },
    },
  ],
};

export const legalTechContentEs: ProjectContent = {
  slug: "legal-tech-ui",
  title: "Creando un sistema de diseño escalable para una startup LegalTech",
  subtitle: "UI para LegalTech",
  cover: {
    src: `${workAssets}/297ca85a5424ddb65dc723c250a3f2e5261ef7db.png`,
    overlay: {
      src: `${workAssets}/34c14e47d0b5a9944fe966972e3f7f3cf47b0220.png`,
      opacity: "0.33",
    },
    logo: `${workAssets}/e6e75576a48596140c2b6d899e5e46cf430557ad.png`,
  },
  meta: {
    role: "Diseño de UI",
    timeline: "2020",
    skills: ["Sistema de diseño", "Diseño de producto", "Prototipado"],
  },
  sections: [
    {
      label: "Resumen",
      heading: "Construyendo las bases",
      body: [
        "Una startup LegalTech en rápido crecimiento necesitaba una base digital coherente para su producto y presencia de marketing en evolución. Como único diseñador a cargo de la iniciativa, creé un sistema de diseño desde cero y diseñé la UI del sitio web y blog de la empresa.",
        "El objetivo era establecer un lenguaje visual unificado que pudiera escalar a futuros productos y ofrecer una experiencia confiable y profesional para clientes potenciales.",
      ],
    },
    {
      subheading: "El reto",
      body: [
        "A medida que la empresa crecía, surgieron inconsistencias visuales entre distintos puntos de contacto. Los componentes se recreaban una y otra vez, los patrones de espaciado variaban entre páginas y diseñadores y desarrolladores no contaban con una fuente única de verdad.",
      ],
    },
    {
      image: {
        src: `${workAssets}/f08f003e9ae66e36b07489c0c3397e0c630575f7.png`,
      },
    },
    {
      body: [
        "Al mismo tiempo, la startup necesitaba un sitio web y blog modernos que hicieran claros y accesibles conceptos legales complejos.",
        "El reto tenía dos frentes:",
        "• Crear un sistema de diseño escalable que respaldara el crecimiento futuro.",
        "• Diseñar una experiencia de sitio web y blog que equilibrara confianza, claridad y facilidad de uso.",
      ],
    },
    {
      image: {
        src: `${workAssets}/d241cc3895f1a8ad199c08143b86ed5b7834fb78.png`,
        tall: true,
      },
    },
    {
      image: {
        src: `${workAssets}/Project-app.png`,
        contain: true,
      },
    },
  ],
};
