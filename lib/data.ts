import type {
  ExperienceEntry,
  Project,
  QuickFact,
  SkillGroup,
  SocialLink,
} from "./types";

export const site = {
  name: "Andrew Andari",
  role: "Software & Reliability Engineer",
  tagline: "I build resilient systems and hunt down the failures others miss.",
  // TODO: replace with your real contact email
  email: "hello@andrewandari.dev",
  location: "Houston, TX",
  availability: "Open to SWE / SRE internships & new-grad roles",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/wynetyme" },
  { label: "LinkedIn", href: "https://linkedin.com/in/andelu" },
];

export const heroTerminalLines = [
  { prompt: "$", command: "whoami", output: "andrew.andari — CS @ University of Houston" },
  { prompt: "$", command: "cat focus.txt", output: "software engineering · site reliability · systems" },
  { prompt: "$", command: "uptime", output: "shipping since 2023 — load: reliability-first" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science student at the University of Houston with a bias toward the unglamorous work that keeps software alive in production: integration, testing, observability, and process. I got my start in engineering not by building toy apps, but by keeping real hardware and software running together in the field.",
    "At Safe Fleet I worked at the intersection of AI-powered devices and the production pipelines that ship them — troubleshooting hardware/software integration for license-plate detection systems and bodycams, and driving QA improvements that measurably reduced defects. That experience shaped how I write code: instrument it, test it, and assume it will fail in interesting ways.",
    "I'm now targeting Software Engineering and Site Reliability Engineering roles where I can build systems that are fast, observable, and hard to break.",
  ],
  quickFacts: [
    { label: "Location", value: "Houston, TX" },
    { label: "Degree", value: "B.S. Computer Science" },
    { label: "School", value: "University of Houston" },
    { label: "Graduation", value: "2027" },
    { label: "Focus", value: "SWE · SRE · Systems" },
  ] satisfies QuickFact[],
};

export const experience: ExperienceEntry[] = [
  {
    role: "Application Engineer",
    company: "Safe Fleet",
    companyUrl: "https://www.safefleet.net",
    period: "Jan 2025 — Dec 2025",
    location: "Houston, TX",
    bullets: [
      "Optimized production workflows for fleet-safety devices, cutting turnaround time on device provisioning and delivery.",
      "Troubleshot hardware/software integration issues across AI license-plate detection systems and bodycams, improving field reliability.",
      "Drove QA testing and process improvements that reduced defects and accelerated delivery to customers.",
      "Worked across engineering and operations to turn recurring failure patterns into documented, repeatable fixes.",
    ],
    tags: ["QA & Testing", "Hardware/Software Integration", "AI Detection Systems", "Process Improvement", "Reliability"],
  },
  {
    role: "B.S. Computer Science",
    company: "University of Houston",
    companyUrl: "https://www.uh.edu",
    period: "2023 — 2027",
    location: "Houston, TX",
    bullets: [
      "Coursework spanning data structures & algorithms, computer systems, and software engineering.",
      "Building projects that emphasize reliability, tooling, and clean systems design.",
    ],
    tags: ["C++", "Python", "Java", "Data Structures", "Systems"],
  },
];

export const projects: Project[] = [
  {
    name: "OurBudgetApp",
    description:
      "A collaborative budgeting web app for tracking shared expenses and planning spending — built end-to-end with a JavaScript stack and deployed to the cloud.",
    tech: ["JavaScript", "Node.js", "HTML/CSS"],
    github: "https://github.com/andelu/ourbudgetapp",
  },
  {
    name: "FastAI Model Deployment",
    description:
      "Production deployment pipeline for a fastai v3 deep-learning model, serving inference over HTTP on Render — an early exercise in getting ML out of the notebook and into a running service.",
    tech: ["Python", "fastai", "Render", "Docker"],
    github: "https://github.com/andelu/fastai-v3",
  },
  {
    name: "This Portfolio",
    description:
      "The site you're looking at — a fully static, dark-mode developer portfolio built with the Next.js App Router, typed content, and scroll-driven Framer Motion animations, tuned for accessibility and fast loads.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/wynetyme/portfolio",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "C++", "Java", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    label: "Reliability & Systems",
    skills: [
      "QA Testing",
      "Hardware/Software Integration",
      "Troubleshooting",
      "Workflow Optimization",
      "Process Improvement",
      "Debugging",
    ],
  },
  {
    label: "AI & Applied",
    skills: [
      "AI Detection Systems",
      "License-Plate Recognition",
      "ML-Backed Device Integration",
      "Model Deployment",
    ],
  },
  {
    label: "Tools & Frameworks",
    skills: ["Git", "Node.js", "Next.js", "React", "Tailwind CSS", "Linux"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
