type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
};

/** Encabezado de sección reutilizable: eyebrow en mono + título display. */
export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
          {eyebrow}
        </p>
      )}
      <h2
        id={`${id}-title`}
        className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
