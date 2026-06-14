import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Work } from "@/components/Work";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Work />

      {/* Placeholder — Contacto completo en la Fase 4. */}
      <Section id="contacto" eyebrow="04 — Contacto" title="Hablemos">
        <p className="max-w-2xl text-stone">
          <a
            href={`mailto:${site.email}`}
            className="text-ink underline decoration-ember/40 underline-offset-4 transition-colors hover:text-ember"
          >
            {site.email}
          </a>{" "}
          <span className="text-stone/70">— sección completa en la Fase 4.</span>
        </p>
      </Section>
    </>
  );
}
