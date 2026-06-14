import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const { eyebrow, title, lead, paragraphs, pillars } = site.about;

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="scroll-mt-24 border-t border-line/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Columna izquierda: encabezado + pilares */}
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading id="sobre" eyebrow={eyebrow} title={title} />
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-8 space-y-2.5 font-mono text-xs uppercase tracking-[0.15em] text-stone">
                {pillars.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-6 bg-ember" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Columna derecha: lead + párrafos */}
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <p className="text-balance text-xl leading-relaxed text-ink md:text-2xl">
                {lead}
              </p>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone">
              {paragraphs.map((para, i) => (
                <Reveal key={i} delay={140 + i * 70}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
