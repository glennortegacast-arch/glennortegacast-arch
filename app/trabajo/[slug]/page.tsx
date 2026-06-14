import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

function BlockHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Block({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <BlockHeading eyebrow={eyebrow} title={title} />
      <p className="mt-5 leading-relaxed text-stone">{children}</p>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const {
    title,
    category,
    role,
    year,
    client,
    tags,
    summary,
    thumbnail,
    problem,
    myRole,
    process,
    result,
    metrics,
    gallery,
  } = project;

  return (
    <article>
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <Reveal>
          <Link
            href="/#trabajo"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-stone transition-colors hover:text-ember"
          >
            <span aria-hidden="true">←</span> Trabajo
          </Link>
        </Reveal>

        <header className="mt-8 max-w-3xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
              {category}
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-stone">{summary}</p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-wider text-stone/50">Rol</dt>
                <dd className="mt-1 text-ink">{role}</dd>
              </div>
              {year && (
                <div>
                  <dt className="uppercase tracking-wider text-stone/50">Año</dt>
                  <dd className="mt-1 text-ink">{year}</dd>
                </div>
              )}
              {client && (
                <div>
                  <dt className="uppercase tracking-wider text-stone/50">
                    Cliente
                  </dt>
                  <dd className="mt-1 text-ink">{client}</dd>
                </div>
              )}
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-stone/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </header>

        <Reveal delay={120} className="mt-12">
          <MediaFrame
            src={thumbnail.src}
            alt={thumbnail.alt}
            label={category}
            className="aspect-[16/9]"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </Reveal>

        <div className="mt-16 max-w-3xl space-y-14">
          <Block eyebrow="01 — El problema" title="El reto">
            {problem}
          </Block>
          <Block eyebrow="02 — Mi rol" title="Qué hice">
            {myRole}
          </Block>

          <Reveal>
            <BlockHeading eyebrow="03 — Proceso" title="Cómo lo abordé" />
            <ol className="mt-6 space-y-6">
              {process.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="shrink-0 font-mono text-sm text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-stone">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <BlockHeading eyebrow="04 — Resultado" title="El impacto" />
            <p className="mt-6 leading-relaxed text-stone">{result}</p>
            {metrics && metrics.length > 0 && (
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-line bg-cloud p-5"
                  >
                    <dt className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {m.value}
                    </dt>
                    <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-stone/70">
                      {m.label}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>
        </div>

        {gallery && gallery.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <BlockHeading eyebrow="05 — Visuales" title="Galería" />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {gallery.map((img, i) => (
                <Reveal key={`${img.alt}-${i}`} delay={(i % 2) * 80}>
                  <figure>
                    <MediaFrame
                      src={img.src}
                      alt={img.alt}
                      label="Imagen"
                      className="aspect-[4/3]"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    {img.caption && (
                      <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wider text-stone/60">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-line pt-8">
          <Link
            href="/#trabajo"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-stone transition-colors hover:text-ember"
          >
            <span aria-hidden="true">←</span> Volver a Trabajo
          </Link>
        </div>
      </div>
    </article>
  );
}
