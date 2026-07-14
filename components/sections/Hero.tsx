"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroTerminalLines, site, socials } from "@/lib/data";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="dot-grid relative flex min-h-screen items-center pt-16"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <motion.div
          variants={prefersReducedMotion ? undefined : container}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={prefersReducedMotion ? undefined : item}
            className="font-mono text-sm text-accent"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={prefersReducedMotion ? undefined : item}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            {site.name}.
          </motion.h1>

          <motion.h2
            variants={prefersReducedMotion ? undefined : item}
            className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl"
          >
            {site.role} in the making.
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? undefined : item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline} Computer Science at the University of Houston, with
            production experience keeping AI-powered fleet systems reliable in the
            field.
          </motion.p>

          {/* Terminal card */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="mt-10 max-w-xl rounded-xl border border-line bg-surface font-mono text-sm shadow-[0_0_40px_rgba(34,211,238,0.05)]"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-2 text-xs text-muted">andrew@portfolio:~</span>
            </div>
            <div className="space-y-3 px-4 py-4">
              {heroTerminalLines.map((line) => (
                <div key={line.command}>
                  <p className="text-foreground">
                    <span className="text-status">{line.prompt}</span> {line.command}
                  </p>
                  <p className="text-muted">{line.output}</p>
                </div>
              ))}
              <p aria-hidden="true">
                <span className="text-status">$</span>{" "}
                <span className="terminal-cursor" />
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-accent px-6 py-3 font-mono text-sm font-semibold text-accent transition-colors hover:bg-accent-dim"
            >
              Get in Touch
            </a>
            <div className="flex items-center gap-4 sm:ml-2">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
