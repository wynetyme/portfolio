"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin gradient progress bar pinned above the navbar. */
export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-violet to-status"
      style={{ scaleX }}
    />
  );
}
