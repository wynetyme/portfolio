import type { Metadata } from "next";
import Link from "next/link";
import {
  resumeClubs,
  resumeEducation,
  resumeExperience,
  resumeMeta,
  resumeProjects,
  resumeSkills,
} from "@/lib/resume";
import SocialIcon from "@/components/ui/SocialIcon";
import TechTag from "@/components/ui/TechTag";

export const metadata: Metadata = {
  title: "Resume — Andrew Andari",
  description:
    "Software Engineer resume for Andrew Andari — Computer Science at the University of Houston. Full-stack projects, production experience, and skills.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </h2>
  );
}

function EntryHeader({
  title,
  meta,
  subtitle,
}: {
  title: string;
  meta: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-3">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {title}
        </h3>
        <p className="shrink-0 font-mono text-xs text-muted">{meta}</p>
      </div>
      {subtitle ? (
        <p className="mt-0.5 text-sm text-muted">{subtitle}</p>
      ) : null}
    </header>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  return (
    <div className="dot-grid relative min-h-screen">
      <div className="aurora" aria-hidden="true" />

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md print:hidden">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between gap-4 px-6">
          <Link
            href="/"
            className="font-mono text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            <span className="text-accent">←</span> back to portfolio
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={resumeMeta.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-accent"
            >
              <SocialIcon icon="github" className="h-4.5 w-4.5" />
            </a>
            <a
              href={resumeMeta.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-accent"
            >
              <SocialIcon icon="linkedin" className="h-4.5 w-4.5" />
            </a>
            <a
              href={resumeMeta.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 rounded-md border border-accent px-3 py-2 font-mono text-xs font-semibold text-accent transition-colors hover:bg-accent-dim sm:px-4 sm:text-sm"
            >
              <SocialIcon icon="resume" className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Document shell */}
        <article className="rounded-xl border border-line bg-surface/80 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)] backdrop-blur sm:p-10">
          {/* Identity */}
          <header className="border-b border-line pb-8 text-center">
            <p className="font-mono text-xs text-accent">resume · software engineer</p>
            <h1 className="gradient-text mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              {resumeMeta.name}
            </h1>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted sm:text-sm">
              <a
                href={`tel:${resumeMeta.phone.replace(/-/g, "")}`}
                className="transition-colors hover:text-accent"
              >
                {resumeMeta.phone}
              </a>
              <span aria-hidden="true" className="text-line">
                ·
              </span>
              <a
                href={`mailto:${resumeMeta.email}`}
                className="transition-colors hover:text-accent"
              >
                {resumeMeta.email}
              </a>
              <span aria-hidden="true" className="text-line">
                ·
              </span>
              <span>{resumeMeta.location}</span>
            </p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted sm:text-sm">
              <a
                href={resumeMeta.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {resumeMeta.linkedin.label}
              </a>
              <span aria-hidden="true" className="text-line">
                ·
              </span>
              <a
                href={resumeMeta.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {resumeMeta.github.label}
              </a>
            </p>
          </header>

          {/* Education */}
          <section className="mt-10">
            <SectionLabel>Education</SectionLabel>
            <EntryHeader
              title={resumeEducation.school}
              meta={`${resumeEducation.location} · ${resumeEducation.period}`}
              subtitle={resumeEducation.degree}
            />
            <p className="font-mono text-xs text-status">
              Honors: {resumeEducation.honors.join(" · ")}
            </p>
          </section>

          {/* Experience */}
          <section className="mt-10">
            <SectionLabel>Experience</SectionLabel>
            <div className="space-y-8">
              {resumeExperience.map((job) => (
                <div key={`${job.company}-${job.role}`}>
                  <EntryHeader
                    title={job.role}
                    meta={`${job.location} · ${job.period}`}
                    subtitle={job.company}
                  />
                  <BulletList items={job.bullets} />
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-10">
            <SectionLabel>Projects</SectionLabel>
            <div className="space-y-8">
              {resumeProjects.map((project) => (
                <div key={project.name}>
                  <EntryHeader
                    title={project.name}
                    meta={project.period}
                  />
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                  <BulletList items={project.bullets} />
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mt-10">
            <SectionLabel>Skills</SectionLabel>
            <div className="space-y-5">
              {resumeSkills.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 font-mono text-xs text-foreground">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechTag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Clubs */}
          <section className="mt-10">
            <SectionLabel>Clubs</SectionLabel>
            <div className="space-y-8">
              {resumeClubs.map((club) => (
                <div key={club.org}>
                  <EntryHeader
                    title={`${club.org} · ${club.role}`}
                    meta={club.period}
                    subtitle={club.school}
                  />
                  <BulletList items={club.bullets} />
                </div>
              ))}
            </div>
          </section>
        </article>

        <p className="mt-8 text-center font-mono text-xs text-muted print:hidden">
          Prefer the original file?{" "}
          <a
            href={resumeMeta.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            Download the PDF
          </a>
        </p>
      </main>
    </div>
  );
}
