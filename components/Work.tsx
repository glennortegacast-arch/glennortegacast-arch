import Link from "next/link";
import { projects } from "@/content/projects";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Work() {
  return (
    <section
      id="trabajo"
      aria-labelledby="trabajo-title"
      className="scroll-mt-24 border-t border-line/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            id="trabajo"
            eyebrow="03 — Trabajo seleccionado"
            title="Trabajo seleccionado"
          />
        </Reveal>

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 2) * 80}>
                <Link href={`/trabajo/${p.slug}`} className="group block">
                  <MediaFrame
                    src={p.thumbnail.src}
                    alt={p.thumbnail.alt}
                    label={p.category}
                    className="aspect-[16/10]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                        {p.category}
                      </p>
                      {p.year && (
                        <span className="font-mono text-[11px] text-stone/50">
                          {p.year}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-ember">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone">{p.role}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-stone/70"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
