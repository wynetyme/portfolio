import { site, socials } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-6">
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
              I&apos;m actively looking for software engineering teams to build
              with. The fastest way to see what I do is my GitHub and the projects
              above — and if something clicks, my inbox is open.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-line bg-background p-4 text-left transition-colors hover:border-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface text-foreground transition-colors group-hover:text-accent">
                    <SocialIcon icon={social.icon} className="h-5.5 w-5.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      {social.label}
                    </span>
                    <span className="block truncate font-mono text-xs text-muted">
                      {social.handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block rounded-md bg-accent px-8 py-3.5 font-mono text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Say Hello
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
