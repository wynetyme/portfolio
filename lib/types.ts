export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "resume";
};

export type QuickFact = {
  label: string;
  value: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};
