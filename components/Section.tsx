import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

/** Sección genérica con encabezado animado. Útil para bloques simples. */
export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-line/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading id={id} eyebrow={eyebrow} title={title} />
          <div className="mt-6">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
