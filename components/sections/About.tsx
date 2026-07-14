import { about } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading index="01" label="about" title="About Me" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="h-fit rounded-xl border border-line bg-surface p-6">
              <p className="mb-4 font-mono text-xs text-accent" aria-hidden="true">
                {"// quick facts"}
              </p>
              {about.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-b-0"
                >
                  <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
