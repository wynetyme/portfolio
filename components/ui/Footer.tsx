import { site, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <p className="inline-flex items-center gap-2 font-mono text-xs text-status">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-status"
          />
          all systems operational
        </p>
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · Built with Next.js, Tailwind CSS &
          Framer Motion
        </p>
      </div>
    </footer>
  );
}
