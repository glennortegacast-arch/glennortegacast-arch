import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
        Error 404
      </p>
      <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        Esta página se fue de set.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-stone">
        La URL que buscas no existe o se movió. Volvamos a un lugar conocido.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ember-600"
        >
          Ir al inicio
        </Link>
        <Link
          href="/#trabajo"
          className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-cloud"
        >
          Ver trabajo
        </Link>
      </div>
    </div>
  );
}
