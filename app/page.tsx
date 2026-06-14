import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Placeholders — se completan en fases siguientes. La navegación ya ancla aquí. */}
      <Section id="sobre" eyebrow="01 — Sobre mí" title="Sobre mí">
        <p className="max-w-2xl text-stone">
          2–3 párrafos sobre cómo combinas marca, eventos, AI y audiovisual.{" "}
          <span className="text-stone/70">Contenido en construcción — Fase 2.</span>
        </p>
      </Section>

      <Section id="capacidades" eyebrow="02 — Capacidades" title="Capacidades">
        <p className="max-w-2xl text-stone">
          Sistemas de marca · Eventos corporativos · Workflows con AI · Producción
          audiovisual.{" "}
          <span className="text-stone/70">Cuatro bloques — Fase 2.</span>
        </p>
      </Section>

      <Section id="trabajo" eyebrow="03 — Trabajo seleccionado" title="Trabajo seleccionado">
        <p className="max-w-2xl text-stone">
          Grid de case studies con páginas de detalle.{" "}
          <span className="text-stone/70">Fase 2–3.</span>
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
          <span className="text-stone/70">— sección completa en la fase final.</span>
        </p>
      </Section>
    </>
  );
}
