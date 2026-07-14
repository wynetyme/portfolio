import { skillGroups } from "@/lib/data";

/** Infinite scrolling strip of every technology — pure CSS animation, pauses on hover. */
export default function TechMarquee() {
  const allSkills = skillGroups.flatMap((group) => group.skills);
  // Duplicated list makes the -50% translate loop seamless
  const track = [...allSkills, ...allSkills];

  return (
    <div className="marquee overflow-hidden py-2" aria-hidden="true">
      <div className="marquee-track">
        {track.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="text-accent">▸</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
