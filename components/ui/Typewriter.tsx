"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterProps = {
  words: string[];
  className?: string;
};

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 2100;

/** Cycles through words with a type/delete effect. Static first word under reduced motion. */
export default function Typewriter({ words, className }: TypewriterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const word = words[index % words.length];

    let delay: number;
    if (!deleting && text === word) {
      delay = HOLD_MS;
    } else if (deleting && text === "") {
      delay = 300;
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className} aria-label={words.join(", ")}>
      <span aria-hidden="true">
        {text}
        <span className="terminal-cursor ml-1" />
      </span>
    </span>
  );
}
