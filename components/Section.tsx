import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-line/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
            {eyebrow}
          </p>
        )}
        <h2
          id={`${id}-title`}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
