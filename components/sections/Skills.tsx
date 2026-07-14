import { skillGroups } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechMarquee from "@/components/ui/TechMarquee";
import TechTag from "@/components/ui/TechTag";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading index="04" label="skills" title="Technical Competencies" />
        </Reveal>
      </div>

      <Reveal>
        <TechMarquee />
      </Reveal>

      <div className="mx-auto mt-10 max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="spotlight-card h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.09)]">
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
