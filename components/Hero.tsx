import { site } from "@/content/site";

export function Hero() {
  const {
    eyebrow,
    headline,
    positioning,
    supporting,
    tags,
    primaryCta,
    secondaryCta,
  } = site.hero;

  // Firma "temperatura de color": primer nombre cálido (tungsteno), resto frío (daylight).
  const words = headline.trim().split(/\s+/);
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative scroll-mt-24">
      {/* Glow dual: cálido (tungsteno) + frío (daylight) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-ember/15 blur-3xl" />
        <div className="absolute -left-40 top-44 h-96 w-96 rounded-full bg-daylight/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28 md:pb-28 md:pt-36">
        <p
          className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-ember"
          style={{ animationDelay: "0ms" }}
        >
          {eyebrow}
        </p>

        <h1
          id="hero-title"
          className="animate-fade-up mt-5 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "60ms" }}
        >
          <span className="text-ember">{firstWord}</span>
          {restWords && <span className="text-daylight"> {restWords}</span>}
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-balance text-xl leading-relaxed text-stone md:text-2xl"
          style={{ animationDelay: "120ms" }}
        >
          {positioning}
        </p>

        {supporting && (
          <p
            className="animate-fade-up mt-4 font-mono text-xs uppercase tracking-wider text-stone/80"
            style={{ animationDelay: "160ms" }}
          >
            {supporting}
          </p>
        )}

        <div
          className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href={primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ember-600"
          >
            {primaryCta.label}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-cloud"
          >
            {secondaryCta.label}
          </a>
        </div>

        <ul
          className="animate-fade-up mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-stone"
          style={{ animationDelay: "260ms" }}
        >
          {tags.map((tag, i) => (
            <li key={tag} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-ember/70">
                  •
                </span>
              )}
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
