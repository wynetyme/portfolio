"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Soft radial glow that trails the pointer across the whole page.
 * Rendered only on fine-pointer devices and skipped for reduced motion.
 */
export default function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: PointerEvent) => {
      // Mount the glow lazily on first pointer movement
      setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [prefersReducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(34,211,238,0.07) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
      }}
    />
  );
}
