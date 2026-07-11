import type { ProjectContent } from './legalTechContent';

const workAssets = '/assets/work/100-accelerator';

export const acceleratorContent: ProjectContent = {
  slug: "100-accelerator",
  title: "UX/UI for web + app of startups (2021)",
  subtitle: "100+ Accelerator",
  cover: {
    src: `${workAssets}/Cover.png`,
  },
  meta: {
    role: "Product Designer",
    timeline: "2020",
    skills: ["Design System", "Product Design", "Prototyping"],
  },
  sections: [
    {
      label: "Overview",
      heading: "Building the Foundations",
      body: [
        "AB-InBev launched 100+ Accelerator, an initiative to attract and accelerate startups with impactful solutions. The challenge was to turn a complex program (application, selection, cohorts, partners, FAQs, and news) into a clear and reliable digital experience on both the website and app.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image1.png`,
      },
    },
    {
      subheading: "The Challenge",
      body: [
        "The program had many sections and audiences (startups, allies, internal team), creating three common risks:",
        "• Information overload: too many pages and hard-to-scan content.",
        "• Unclear journey: startups lacked a clear path to understand \"what it is\" and \"what to do next.\"",
        "• Web/app inconsistency: disconnected experiences that hurt trust and adoption.",
      ],
    },
    {
      subheading: "Design Goal",
      body: [
        "Create an experience that:",
        "• Explains the program in seconds (what it is, who it's for, and benefits).",
        "• Guides startups with a clear flow from discovery → evaluation → participation.",
        "• Standardizes a reusable UI base (components) to scale content (cohorts, news, partners, FAQs).",
        "• Maintains a corporate + innovative tone aligned with AB-InBev.",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image-2.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/project-image3.png`,
      },
    },
    {
      subheading: "Design Decisions (what I did differently)",
      body: [
        "Strong block hierarchy: each section answers a question (\"what is it?\", \"how does it work?\", \"who's behind it?\").",
        "• Card format content for cohorts/news: reduces friction and improves exploration.",
        "• Web/app consistency in navigation and layout patterns: boosts familiarity and trust.",
        "• Credibility-focused design: visible partners/team/history to reduce uncertainty (key for startups evaluating programs).",
      ],
    },
    {
      image: {
        src: `${workAssets}/Project-image4.png`,
      },
    },
    {
      image: {
        src: `${workAssets}/Project-image5.png`,
      },
    },
  ],
};
