import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cloud">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-base font-semibold tracking-tight text-ink">
              {site.name}
              <span className="text-ember">.</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {site.role} — marca, eventos y AI con base audiovisual.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="flex flex-col gap-2 sm:items-end">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-stone transition-colors hover:text-ember"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-2 sm:items-end">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="text-sm text-stone transition-colors hover:text-ember"
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-stone/60">
            © {year} {site.name}
          </p>
          <a
            href="/#inicio"
            className="font-mono text-[11px] uppercase tracking-wider text-stone/60 transition-colors hover:text-ember"
          >
            ↑ Arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
