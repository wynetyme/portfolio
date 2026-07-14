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
  email: "andrewandari96@gmail.com",
  location: "Houston, TX",
  availability: "Open to SWE / SRE internships & new-grad roles",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/wynetyme" },
  { label: "LinkedIn", href: "https://linkedin.com/in/andelu" },
];

export const heroTerminalLines = [
  { prompt: "$", command: "whoami", output: "andrew.andari — CS @ University of Houston" },
  { prompt: "$", command: "cat focus.txt", output: "software engineering · site reliability · full-stack" },
  { prompt: "$", command: "uptime", output: "shipping since 2023 — load: reliability-first" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science student at the University of Houston (Dean's List) with a bias toward the unglamorous work that keeps software alive in production: integration, testing, observability, and process. I got my start in engineering not by building toy apps, but by keeping real hardware and software running together in the field.",
    "At Safe Fleet Coban Technologies I worked at the intersection of AI-powered devices and the production pipelines that ship them — diagnosing hardware/software integration issues on license-plate detection systems and body cameras, documenting fixes into standard operating procedures, and executing QA testing that measurably decreased defects. That experience shaped how I write code: instrument it, test it, and assume it will fail in interesting ways.",
    "Outside of work I ship full-stack products end to end — from a production-deployed pickup basketball coordination platform on Supabase and Mapbox, to an AI-assisted circular-economy exchange prototype. I'm now targeting Software Engineering and Site Reliability Engineering roles where I can build systems that are fast, observable, and hard to break.",
  ],
  quickFacts: [
    { label: "Location", value: "Houston, TX" },
    { label: "Degree", value: "B.A. Computer Science" },
    { label: "School", value: "University of Houston" },
    { label: "Graduation", value: "May 2027" },
    { label: "Honors", value: "Dean's List" },
    { label: "Languages", value: "English · Arabic · Spanish" },
    { label: "Focus", value: "SWE · SRE · Full-Stack" },
  ] satisfies QuickFact[],
};

export const experience: ExperienceEntry[] = [
  {
    role: "Applications Engineer (Production Associate)",
    company: "Safe Fleet Coban Technologies",
    companyUrl: "https://www.safefleet.net",
    period: "Jan 2025 — Dec 2025",
    location: "Houston, TX",
    bullets: [
      "Partnered with engineering and operations to optimize production workflows using software-driven solutions, improving throughput and reliability across configured systems.",
      "Diagnosed hardware/software integration issues on AI license-plate detection systems and body cameras; documented fixes and standard operating procedures to reduce repeat incidents.",
      "Executed QA testing and data-driven process improvements that decreased defects and accelerated delivery timelines.",
      "Supported internal stakeholders and customers with technical troubleshooting, ensuring on-time deployments and strong satisfaction.",
    ],
    tags: ["QA Testing", "Hardware/Software Integration", "AI Detection Systems", "Process Optimization", "Reliability"],
  },
  {
    role: "B.A. Computer Science",
    company: "University of Houston",
    companyUrl: "https://www.uh.edu",
    period: "Aug 2023 — May 2027",
    location: "Houston, TX",
    bullets: [
      "Dean's List honoree.",
      "CougarCS member (Fall 2024 — Spring 2025): technical workshops on Git/GitHub version control, game testing, and introductory UI/UX design.",
      "Deep-dive sessions on Large Language Models (LLMs), collaborating with peers to strengthen teamwork and software engineering practices.",
    ],
    tags: ["C++", "Python", "Java", "Data Structures", "CougarCS"],
  },
];

export const projects: Project[] = [
  {
    name: "WHoops",
    description:
      "Production-deployed full-stack platform for organizing pickup basketball: group coordination, court discovery, real-time RSVPs, and automated team generation. Supabase handles auth, relational modeling, and real-time updates, with fine-grained Row Level Security enforcing group-scoped permissions across sessions, RSVPs, teams, and notifications. Mapbox powers court search and geocoding; deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Mapbox"],
    live: "https://whoops-theta.vercel.app",
  },
  {
    name: "WasteFlow: Circular Exchange Platform",
    description:
      "Full-stack industrial symbiosis prototype that matches companies' waste outputs with material demands to support circular-economy workflows. A modular Next.js + React frontend delivers AI-driven compatibility insights, backed by a lightweight FastAPI REST service, with responsive and accessible Tailwind UI components for cross-device usability.",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Tailwind CSS"],
  },
  {
    name: "Weather Application",
    description:
      "Cross-platform mobile weather app built with React Native and TypeScript, retrieving real-time data from the OpenWeather API. Robust error handling and optimized asynchronous requests keep it reliable and low-latency, with clean architecture, reusable components, and strict typing for maintainability.",
    tech: ["React Native", "TypeScript", "Expo", "OpenWeather API"],
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
    skills: ["TypeScript", "Python", "C++", "Java", "C#", "JavaScript", "SQL", "R", "HTML/CSS"],
  },
  {
    label: "Frameworks & Platforms",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Expo",
      "Unity Engine",
      "Vercel",
    ],
  },
  {
    label: "Engineering Practices",
    skills: [
      "REST APIs",
      "Asynchronous Programming",
      "State Management",
      "Git & GitHub",
      "QA Testing",
      "Troubleshooting",
      "Process Optimization",
    ],
  },
  {
    label: "Reliability & Systems",
    skills: [
      "Hardware/Software Integration",
      "AI Detection Systems",
      "Defect Reduction",
      "SOP Documentation",
      "Production Workflows",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
