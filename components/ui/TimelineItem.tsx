import type { ExperienceEntry } from "@/lib/types";
import TechTag from "./TechTag";

type TimelineItemProps = {
  entry: ExperienceEntry;
  isLast: boolean;
};

export default function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <li className="relative pl-8 sm:pl-10">
      {/* Timeline rail */}
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-background"
      />
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[10px] top-6 bottom-[-1.5rem] w-px bg-line"
        />
      )}

      <div className="pb-12">
        <p className="font-mono text-sm text-accent">{entry.period}</p>
        <h3 className="mt-1 text-xl font-semibold text-foreground">
          {entry.role}{" "}
          <span className="text-muted font-normal">
            @{" "}
            {entry.companyUrl ? (
              <a
                href={entry.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {entry.company}
              </a>
            ) : (
              entry.company
            )}
          </span>
        </h3>
        <p className="mt-1 font-mono text-xs text-muted">{entry.location}</p>

        <ul className="mt-4 space-y-2.5">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[3px] shrink-0 text-accent">
                ▸
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </li>
  );
}
