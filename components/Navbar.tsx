"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, site, socials } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>
          {site.name.toLowerCase().replace(" ", "-")}
        </a>

        <div className="flex items-center gap-5">
          {/* Desktop links */}
          <ul className="hidden items-center gap-7 sm:flex">
            {navLinks.map((link, i) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-mono text-xs transition-colors hover:text-accent ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  <span className="text-accent">0{i + 1}.</span> {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    aria-hidden="true"
                    className="absolute -bottom-[1.4rem] left-0 right-0 h-[2px] bg-accent"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                  />
                )}
              </li>
            );
          })}
          </ul>

          <div aria-hidden="true" className="hidden h-4 w-px bg-line sm:block" />

          {/* Always-visible social links */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} profile (opens in new tab)`}
                title={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-accent"
              >
                <SocialIcon icon={social.icon} className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground sm:hidden"
          >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-background sm:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 font-mono text-sm transition-colors hover:text-accent ${
                      active === link.href ? "text-accent" : "text-muted"
                    }`}
                  >
                    <span className="text-accent">0{i + 1}.</span> {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-3 border-t border-line pt-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <SocialIcon icon={social.icon} className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
