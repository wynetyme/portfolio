type TechTagProps = {
  label: string;
};

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent">
      {label}
    </span>
  );
}
