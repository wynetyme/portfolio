"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { heroTerminalLines } from "@/lib/data";

const CHAR_MS = 55;
const OUTPUT_DELAY_MS = 320;
const LINE_GAP_MS = 550;

type RenderedLine = {
  command: string;
  output: string | null;
};

/**
 * Terminal window that "types" each command, then prints its output —
 * rendered fully static when reduced motion is preferred.
 */
export default function TerminalCard() {
  const prefersReducedMotion = useReducedMotion();
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };

    let t = 600;
    heroTerminalLines.forEach((line, lineIdx) => {
      for (let c = 1; c <= line.command.length; c++) {
        const partial = line.command.slice(0, c);
        schedule(() => {
          setLines((prev) => {
            const next = [...prev];
            next[lineIdx] = { command: partial, output: null };
            return next;
          });
        }, t);
        t += CHAR_MS;
      }
      t += OUTPUT_DELAY_MS;
      schedule(() => {
        setLines((prev) => {
          const next = [...prev];
          next[lineIdx] = { command: line.command, output: line.output };
          return next;
        });
        if (lineIdx === heroTerminalLines.length - 1) setDone(true);
      }, t);
      t += LINE_GAP_MS;
    });

    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  const staticRender = prefersReducedMotion;
  const shown: RenderedLine[] = staticRender
    ? heroTerminalLines.map((l) => ({ command: l.command, output: l.output }))
    : lines;

  return (
    <div className="rounded-xl border border-line bg-surface/90 font-mono text-sm shadow-[0_0_40px_rgba(34,211,238,0.07)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 text-xs text-muted">andrew@portfolio:~</span>
      </div>
      {/* Fixed min height so the card doesn't grow while typing */}
      <div className="min-h-[13.5rem] space-y-3 px-4 py-4" aria-live="off">
        {shown.map(
          (line, i) =>
            line && (
              <div key={heroTerminalLines[i].command}>
                <p className="text-foreground">
                  <span className="text-status">$</span> {line.command}
                  {!staticRender && line.output === null && (
                    <span className="terminal-cursor ml-1" />
                  )}
                </p>
                {line.output !== null && <p className="text-muted">{line.output}</p>}
              </div>
            )
        )}
        {(staticRender || done) && (
          <p aria-hidden="true">
            <span className="text-status">$</span>{" "}
            <span className="terminal-cursor" />
          </p>
        )}
      </div>
    </div>
  );
}
