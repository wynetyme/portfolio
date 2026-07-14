import { experience } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading index="02" label="experience" title="Where I've Been" />
        </Reveal>

        <ol className="max-w-3xl">
          {experience.map((entry, i) => (
            <Reveal key={`${entry.role}-${entry.company}`} delay={i * 0.1}>
              <TimelineItem entry={entry} isLast={i === experience.length - 1} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
