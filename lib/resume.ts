export const resumeMeta = {
  name: "Andrew Andari",
  phone: "832-903-1038",
  email: "andrewandari96@gmail.com",
  location: "Houston, TX",
  linkedin: { label: "linkedin.com/in/andelu", href: "https://linkedin.com/in/andelu" },
  github: { label: "github.com/wynetyme", href: "https://github.com/wynetyme" },
  pdfHref: "/Andrew_Andari_Resume.pdf",
};

export const resumeEducation = {
  school: "University of Houston",
  location: "Houston, TX",
  degree: "Bachelor of Science in Computer Science",
  period: "Aug. 2023 – May 2027",
  honors: ["Dean's List"],
};

export const resumeProjects = [
  {
    name: "Pickup Basketball Coordination Platform",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Mapbox API"],
    period: "Spring 2025",
    bullets: [
      "Built a production-deployed full-stack web application for organizing pickup basketball sessions with group coordination, court discovery, real-time RSVPs, and automated team generation.",
      "Designed a scalable Next.js + React + TypeScript architecture using Supabase for authentication, relational data modeling, real-time updates, and secure data access.",
      "Implemented fine-grained Row Level Security (RLS) policies enforcing group-scoped permissions across sessions, RSVPs, teams, and notifications.",
      "Integrated Mapbox APIs for court search, geocoding, and reusable location management; deployed and maintained the app on Vercel.",
    ],
  },
  {
    name: "WasteFlow: Circular Exchange Platform",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Tailwind CSS"],
    period: "Fall 2025",
    bullets: [
      "Developed a full-stack industrial symbiosis prototype enabling companies to match waste outputs with material demands to support circular economy workflows.",
      "Built a modular Next.js + React frontend with AI-driven compatibility insights, backed by a lightweight FastAPI REST service.",
      "Implemented responsive, accessible UI components using Tailwind CSS and modern component libraries for cross-device usability.",
    ],
  },
  {
    name: "Weather Application",
    tech: ["React Native", "TypeScript", "Expo", "OpenWeather API"],
    period: "Fall 2024",
    bullets: [
      "Built a cross-platform mobile weather application using React Native and TypeScript with real-time data retrieval via external APIs.",
      "Implemented robust error handling and optimized asynchronous requests to ensure reliability and low-latency performance.",
      "Applied clean architecture principles with reusable components and strict typing to improve maintainability and scalability.",
    ],
  },
];

export const resumeExperience = [
  {
    company: "Safe Fleet Coban Technologies",
    location: "Houston, TX",
    role: "Applications Engineer (Production Associate)",
    period: "Jan. 2025 – Dec. 2025",
    bullets: [
      "Partner with engineering and operations to optimize production workflows using software-driven solutions; improved throughput and reliability across configured systems.",
      "Diagnose hardware/software integration issues; document fixes and standard operating procedures to reduce repeat incidents.",
      "Execute QA testing and data-driven process improvements that decreased defects and accelerated delivery timelines.",
      "Support internal stakeholders and customers with technical troubleshooting, ensuring on-time deployments and strong satisfaction.",
    ],
  },
];

export const resumeSkills = [
  {
    label: "Programming Languages",
    items: [
      "TypeScript",
      "Python",
      "C++",
      "Java",
      "C#",
      "JavaScript",
      "HTML/CSS",
      "R",
    ],
  },
  {
    label: "Technical",
    items: [
      "React",
      "React Native",
      "GitHub",
      "Git",
      "Unity Engine",
      "REST APIs",
      "Asynchronous Programming",
      "State Management",
      "Troubleshooting",
      "QA Testing",
      "Process Optimization",
    ],
  },
  {
    label: "Languages",
    items: ["English (fluent)", "Arabic (fluent)", "Spanish (proficient)"],
  },
];

export const resumeClubs = [
  {
    org: "CougarCS",
    school: "University of Houston",
    role: "Member",
    period: "Fall 2024 – Spring 2025",
    bullets: [
      "Participated in technical workshops covering Git/GitHub version control, game testing, and introductory UI/UX design.",
      "Engaged in deep-dive sessions on Large Language Models (LLMs) and collaborated with peers to strengthen teamwork, software engineering skills, and industry readiness.",
    ],
  },
];
