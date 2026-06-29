export interface ProjectSection {
  label?: string;
  heading?: string;
  subheading?: string;
  body?: string[];
  image?: ProjectImage;
}

export interface ProjectImage {
  src: string;
  tall?: boolean;
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
  title: "Building a scalable design system for a LegalTech startup",
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
        "A fast-growing LegalTech startup needed a consistent digital foundation to support the evolution of its product and marketing presence. As the sole designer leading the initiative, I was responsible for creating a Design System from scratch and designing the UI for the company's website and blog.",
        "The goal was to establish a unified visual language that could scale across future products while creating a trustworthy and professional experience for potential customers.",
      ],
    },
    {
      subheading: "The Challenge",
      body: [
        "As the company expanded, visual inconsistencies began to appear across different touchpoints. Components were being recreated multiple times, spacing patterns varied between pages, and there was no centralized source of truth for designers or developers.",
      ],
    },
    {
      image: {
        src: `${workAssets}/f08f003e9ae66e36b07489c0c3397e0c630575f7.png`,
      },
    },
    {
      body: [
        "At the same time, the startup needed a modern website and blog capable of communicating complex legal concepts in a simple and approachable way.",
        "The challenge was twofold:",
        "• Create a scalable Design System that could support future growth.",
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
        src: `${workAssets}/297ca85a5424ddb65dc723c250a3f2e5261ef7db.png`,
        overlay: {
          src: `${workAssets}/34c14e47d0b5a9944fe966972e3f7f3cf47b0220.png`,
          opacity: "0.33",
        },
        composites: [
          {
            src: `${workAssets}/c63991145e736f8a7a5636d43dcda29abd592675.png`,
            width: "208px",
            top: "36px",
            left: "25px",
          },
          {
            src: `${workAssets}/c63991145e736f8a7a5636d43dcda29abd592675.png`,
            width: "208px",
            top: "-295px",
            left: "281px",
          },
          {
            src: `${workAssets}/b724dc87e4b925d5d3e72279cef1606158c92351.png`,
            width: "208px",
            top: "-362px",
            left: "537px",
          },
        ],
      },
    },
  ],
};
