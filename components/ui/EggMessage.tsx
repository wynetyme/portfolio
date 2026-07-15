"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EGG_MESSAGE = "hey there ;) you found me";
const TYPE_MS = 48;
const DELETE_MS = 28;
const FADE_MS = 320;

type MsgPhase = "idle" | "typing" | "holding" | "fading" | "deleting" | "gone";

type EggMessageProps = {
  /** Start typing when the GIF appears. */
  active: boolean;
  /** Fade, then backspace, once the GIF is leaving. */
  dismiss: boolean;
};

/**
 * Types the easter-egg line as the GIF appears, holds while it shows,
 * then fades and backspaces away after dismiss (GIF leaving).
 */
export default function EggMessage({ active, dismiss }: EggMessageProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<MsgPhase>("idle");
  const [text, setText] = useState("");

  useEffect(() => {
    if (!active) {
      const reset = window.setTimeout(() => {
        setPhase("idle");
        setText("");
      }, 0);
      return () => window.clearTimeout(reset);
    }

    if (prefersReducedMotion) {
      const show = window.setTimeout(() => {
        if (dismiss) {
          setPhase("gone");
          setText("");
        } else {
          setText(EGG_MESSAGE);
          setPhase("holding");
        }
      }, 0);
      return () => window.clearTimeout(show);
    }

    // GIF is leaving — interrupt into fade → backspace.
    if (dismiss && (phase === "typing" || phase === "holding")) {
      const fade = window.setTimeout(() => setPhase("fading"), 0);
      return () => window.clearTimeout(fade);
    }

    if (phase === "idle") {
      const start = window.setTimeout(() => {
        setPhase("typing");
        setText("");
      }, 0);
      return () => window.clearTimeout(start);
    }

    if (phase === "typing") {
      if (text === EGG_MESSAGE) {
        const hold = window.setTimeout(() => setPhase("holding"), 0);
        return () => window.clearTimeout(hold);
      }
      const t = window.setTimeout(() => {
        setText(EGG_MESSAGE.slice(0, text.length + 1));
      }, TYPE_MS);
      return () => window.clearTimeout(t);
    }

    if (phase === "fading") {
      const next = window.setTimeout(() => setPhase("deleting"), FADE_MS);
      return () => window.clearTimeout(next);
    }

    if (phase === "deleting") {
      if (text === "") {
        const done = window.setTimeout(() => setPhase("gone"), 0);
        return () => window.clearTimeout(done);
      }
      const t = window.setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, DELETE_MS);
      return () => window.clearTimeout(t);
    }
  }, [active, dismiss, phase, text, prefersReducedMotion]);

  if (!active || phase === "idle" || phase === "gone") return null;

  const showCursor =
    phase === "typing" || phase === "holding" || phase === "deleting";

  return (
    <motion.p
      role="status"
      aria-label={EGG_MESSAGE}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.9 }}
      animate={
        phase === "fading"
          ? { opacity: 0, y: 4, scale: 0.98 }
          : phase === "deleting"
            ? { opacity: 0.9, y: 0, scale: 1 }
            : { opacity: 1, y: 0, scale: 1 }
      }
      transition={
        phase === "fading"
          ? { duration: FADE_MS / 1000, ease: "easeIn" }
          : phase === "deleting"
            ? { duration: 0.18, ease: "easeOut" }
            : { type: "spring", stiffness: 320, damping: 20 }
      }
      className="absolute -bottom-14 left-1/2 z-10 w-max min-h-[2.25rem] -translate-x-1/2 rounded-full border border-accent/60 bg-surface/95 px-4 py-2 font-mono text-xs text-accent shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur"
    >
      <span aria-hidden="true">
        {text}
        {showCursor ? (
          <span className="terminal-cursor ml-0.5 align-middle" />
        ) : null}
      </span>
    </motion.p>
  );
}
