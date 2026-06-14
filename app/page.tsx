import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />

      {/* Placeholders — Fase 3 (Trabajo) y Fase 4 (Contacto). La navegación ya ancla aquí. */}
      <Section id="trabajo" eyebrow="03 — Trabajo seleccionado" title="Trabajo seleccionado">
        <p className="max-w-2xl text-stone">
          Grid de case studies con páginas de detalle.{" "}
          <span className="text-stone/70">Próximamente — Fase 3.</span>
        </p>
      </Section>

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
