import { site, socials } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading index="05" label="contact" title="Get in Touch" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-2xl rounded-xl border border-line bg-surface p-8 text-center sm:p-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-1.5 font-mono text-xs text-status">
              <span
                aria-hidden="true"
                className="h-2 w-2 animate-pulse rounded-full bg-status"
              />
              {site.availability}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted">
              I&apos;m actively looking for teams building things that need to stay
              up. Whether you have a role in mind, a project to collaborate on, or
              just want to talk systems and reliability — my inbox is open.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block rounded-md bg-accent px-8 py-3.5 font-mono text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Say Hello
            </a>

            <div className="mt-8 flex items-center justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
