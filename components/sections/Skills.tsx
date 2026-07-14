import { skillGroups } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechTag from "@/components/ui/TechTag";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading index="04" label="skills" title="Technical Competencies" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line bg-surface p-6">
                <h3 className="mb-4 font-mono text-sm text-accent">
                  {"// "}
                  {group.label.toLowerCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechTag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
