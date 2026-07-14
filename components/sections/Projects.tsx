import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading index="03" label="projects" title="Things I've Built" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
