"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site, socials } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";
import EggMessage from "@/components/ui/EggMessage";
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
  "Full-Stack Builder.",
  "Problem Solver.",
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
const EGG_REVEAL_MS = 750;
const EGG_HOVER_MS = 3500;
const EGG_SLAM_MS = 550;

type EggPhase = "idle" | "reveal" | "hover" | "slam" | "done";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [flips, setFlips] = useState(0);
  const [eggPhase, setEggPhase] = useState<EggPhase>("idle");
  const [showEggGif, setShowEggGif] = useState(false);
  const foundEgg = flips >= EGG_THRESHOLD;
  const eggBusy =
    eggPhase === "reveal" || eggPhase === "hover" || eggPhase === "slam";

  useEffect(() => {
    if (eggPhase === "reveal") {
      const t = window.setTimeout(() => setEggPhase("hover"), EGG_REVEAL_MS);
      return () => window.clearTimeout(t);
    }
    if (eggPhase === "hover") {
      const t = window.setTimeout(() => {
        setShowEggGif(false);
        setEggPhase("slam");
      }, EGG_HOVER_MS);
      return () => window.clearTimeout(t);
    }
    if (eggPhase === "slam") {
      const t = window.setTimeout(() => setEggPhase("done"), EGG_SLAM_MS);
      return () => window.clearTimeout(t);
    }
  }, [eggPhase]);

  function handlePortraitClick() {
    if (eggBusy) return;

    setFlips((prev) => {
      const next = prev + 1;
      if (next === EGG_THRESHOLD && eggPhase === "idle") {
        if (prefersReducedMotion) {
          setEggPhase("done");
        } else {
          setShowEggGif(true);
          setEggPhase("reveal");
        }
      }
      return next;
    });
  }

  const portraitAnimate = (() => {
    if (prefersReducedMotion) return undefined;
    if (eggPhase === "reveal") {
      return { rotateY: flips * 360, y: 0, scale: 1 };
    }
    if (eggPhase === "hover") {
      return { rotateY: flips * 360, y: [0, -16, 0], scale: 1 };
    }
    if (eggPhase === "slam") {
      return {
        rotateY: flips * 360,
        y: [-48, 14, -6, 0],
        scale: [1.12, 0.88, 1.06, 1],
      };
    }
    return { rotateY: flips * 360, y: 0, scale: 1 };
  })();

  const portraitTransition = (() => {
    if (eggPhase === "reveal") {
      return { duration: EGG_REVEAL_MS / 1000, ease: [0.45, 0, 0.25, 1] as const };
    }
    if (eggPhase === "hover") {
      return {
        y: { duration: EGG_HOVER_MS / 1000, ease: "easeInOut" as const },
        rotateY: { duration: 0 },
        scale: { duration: 0 },
      };
    }
    if (eggPhase === "slam") {
      return {
        duration: EGG_SLAM_MS / 1000,
        times: [0, 0.4, 0.72, 1],
        ease: [0.2, 0.9, 0.2, 1] as const,
      };
    }
    return { duration: 0.7, ease: [0.45, 0, 0.25, 1] as const };
  })();

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
              production experience shipping and supporting AI-powered fleet
              systems in the field.
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
              {socials.map((social) => {
                const isExternal = social.external ?? true;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-2.5 rounded-md border border-accent px-6 py-3 font-mono text-sm font-semibold text-accent transition-colors hover:bg-accent-dim"
                  >
                    <SocialIcon icon={social.icon} className="h-4.5 w-4.5" />
                    {social.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="font-mono text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right column: portrait */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="relative mx-auto w-fit lg:mx-0 lg:justify-self-center"
          >
            <FloatingBadge className="-left-6 top-6" delay={0}>
              <span className="text-accent">▲</span> SWE
            </FloatingBadge>
            <FloatingBadge className="-right-4 top-1/3" delay={1.4}>
              <span className="text-status">●</span> UH &apos;27
            </FloatingBadge>
            <FloatingBadge className="-bottom-2 left-4" delay={2.6}>
              <span className="text-violet">◆</span> Houston, TX
            </FloatingBadge>

            <motion.button
              type="button"
              onClick={handlePortraitClick}
              aria-label="Flip the portrait"
              className="portrait-ring block cursor-pointer select-none"
              whileHover={
                prefersReducedMotion || eggBusy ? undefined : { scale: 1.03 }
              }
              whileTap={
                prefersReducedMotion || eggBusy ? undefined : { scale: 0.97 }
              }
              animate={portraitAnimate}
              transition={portraitTransition}
              style={{ transformPerspective: 900 }}
            >
              {/* Idle coin-wobble hinting that the portrait is clickable */}
              <motion.div
                className="rounded-full bg-background p-1.5"
                animate={
                  prefersReducedMotion || foundEgg || eggBusy
                    ? undefined
                    : { rotateY: [0, 10, 0, -10, 0] }
                }
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformPerspective: 700 }}
              >
                {showEggGif ? (
                  // Native img so the animated GIF actually plays (next/image freezes GIFs).
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/coin-egg.gif"
                    alt="Easter egg animation"
                    width={288}
                    height={288}
                    draggable={false}
                    className="pointer-events-none h-50 w-50 select-none rounded-full object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                  />
                ) : (
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Andrew Andari"
                    width={288}
                    height={288}
                    priority
                    draggable={false}
                    className="pointer-events-none h-50 w-50 select-none rounded-full object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                  />
                )}
              </motion.div>
            </motion.button>

            {/* Coin-flip easter egg message — types in with the GIF, fades + backspaces out */}
            <EggMessage
              active={eggPhase !== "idle"}
              dismiss={eggPhase === "slam" || eggPhase === "done"}
            />

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
