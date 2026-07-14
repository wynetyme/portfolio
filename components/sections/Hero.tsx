"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site, socials } from "@/lib/data";
import TerminalCard from "@/components/ui/TerminalCard";
import Typewriter from "@/components/ui/Typewriter";

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

const roles = [
  "Software Engineer.",
  "Reliability Engineer.",
  "Full-Stack Builder.",
  "Systems Debugger.",
];

function FloatingBadge({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`absolute z-10 rounded-full border border-line bg-surface/90 px-3.5 py-1.5 font-mono text-xs text-foreground shadow-[0_0_18px_rgba(34,211,238,0.12)] backdrop-blur ${className ?? ""}`}
      animate={prefersReducedMotion ? undefined : { y: [0, -9, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const EGG_THRESHOLD = 5;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [flips, setFlips] = useState(0);
  const foundEgg = flips >= EGG_THRESHOLD;

  return (
    <section id="top" className="dot-grid relative flex min-h-screen items-center pt-16">
      <div className="aurora" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          variants={prefersReducedMotion ? undefined : container}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]"
        >
          {/* Left column: copy + terminal */}
          <div>
            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="font-mono text-sm text-accent"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={prefersReducedMotion ? undefined : item}
              className="gradient-text mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
            >
              {site.name}.
            </motion.h1>

            <motion.h2
              variants={prefersReducedMotion ? undefined : item}
              className="mt-3 min-h-[1.3em] text-2xl font-bold tracking-tight text-muted sm:text-4xl"
            >
              <Typewriter words={roles} className="text-foreground" />
            </motion.h2>

            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {site.tagline} Computer Science at the University of Houston, with
              production experience keeping AI-powered fleet systems reliable in the
              field.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="mt-9"
            >
              <TerminalCard />
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="btn-shimmer rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
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
          </div>

          {/* Right column: portrait */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="relative mx-auto w-fit lg:mx-0 lg:justify-self-center"
          >
            <FloatingBadge className="-left-6 top-6" delay={0}>
              <span className="text-accent">▲</span> SWE / SRE
            </FloatingBadge>
            <FloatingBadge className="-right-4 top-1/3" delay={1.4}>
              <span className="text-status">●</span> UH &apos;27
            </FloatingBadge>
            <FloatingBadge className="-bottom-2 left-4" delay={2.6}>
              <span className="text-violet">◆</span> Houston, TX
            </FloatingBadge>

            <motion.button
              type="button"
              onClick={() => setFlips((f) => f + 1)}
              aria-label="Flip the portrait"
              className="portrait-ring block cursor-pointer select-none"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              animate={prefersReducedMotion ? undefined : { rotateY: flips * 360 }}
              transition={{ duration: 0.7, ease: [0.45, 0, 0.25, 1] }}
              style={{ transformPerspective: 900 }}
            >
              <div className="rounded-full bg-background p-1.5">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Andrew Andari"
                  width={288}
                  height={288}
                  priority
                  draggable={false}
                  className="pointer-events-none h-50 w-50 select-none rounded-full object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                />
              </div>
            </motion.button>

            {/* Coin-flip easter egg */}
            <AnimatePresence>
              {foundEgg && (
                <motion.p
                  role="status"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="absolute -bottom-14 left-1/2 z-10 w-max -translate-x-1/2 rounded-full border border-accent/60 bg-surface/95 px-4 py-2 font-mono text-xs text-accent shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur"
                >
                  hey there ;) you found me
                </motion.p>
              )}
            </AnimatePresence>

            {/* Glow under the portrait */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-3xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent sm:block"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.a>
    </section>
  );
}
