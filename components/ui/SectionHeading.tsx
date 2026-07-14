type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
};

export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="font-mono text-sm text-accent mb-2" aria-hidden="true">
        {"// "}
        {index}. {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent" aria-hidden="true" />
    </div>
  );
}
