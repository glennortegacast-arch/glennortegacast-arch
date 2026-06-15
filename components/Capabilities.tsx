import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Capabilities() {
  const { eyebrow, title, items } = site.capabilities;

  return (
    <section
      id="capacidades"
      aria-labelledby="capacidades-title"
      className="scroll-mt-24 border-t border-line/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading id="capacidades" eyebrow={eyebrow} title={title} />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const isCool = item.accent === "cool";
            return (
              <li key={item.title}>
                <Reveal delay={i * 80} className="h-full">
                  <article
                    className={`group flex h-full flex-col gap-4 rounded-xl border border-line bg-cloud p-7 transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper md:p-8 ${
                      isCool ? "hover:border-daylight/40" : "hover:border-ember/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      {/* Punto de temperatura: cálido (tungsteno) o frío (daylight = AI) */}
                      <span
                        aria-hidden="true"
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          isCool ? "bg-daylight" : "bg-ember"
                        }`}
                      />
                      <span
                        aria-hidden="true"
                        className={`font-mono text-sm text-stone/40 transition-colors ${
                          isCool ? "group-hover:text-daylight" : "group-hover:text-ember"
                        }`}
                      >
                        ↗
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone">
                      {item.description}
                    </p>
                    {item.deliverables && item.deliverables.length > 0 && (
                      <ul className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 font-mono text-[11px] uppercase tracking-wider text-stone/70">
                        {item.deliverables.map((d, j) => (
                          <li key={d} className="flex items-center gap-2">
                            {j > 0 && (
                              <span aria-hidden="true" className="text-line">
                                ·
                              </span>
                            )}
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
