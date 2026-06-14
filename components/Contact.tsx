import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { CopyEmail } from "@/components/CopyEmail";

export function Contact() {
  const { eyebrow, title, text, availability, cta } = site.contact;
  const linkedin = site.socials.find((s) =>
    s.label.toLowerCase().includes("linkedin"),
  );

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="scroll-mt-24 bg-ink text-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
            {eyebrow}
          </p>
          <h2
            id="contacto-title"
            className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
            {text}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={`mailto:${site.email}`}
                className="font-display text-2xl font-medium tracking-tight text-paper underline decoration-ember/50 underline-offset-[6px] transition-colors hover:text-ember md:text-3xl"
              >
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cta.href}
                className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ember-600"
              >
                {cta.label}
              </a>
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
                >
                  {linkedin.label}
                </a>
              )}
            </div>

            <p className="mt-8 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-paper/50">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-ember"
              />
              {availability}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
