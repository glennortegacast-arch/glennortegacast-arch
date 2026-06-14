import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cloud">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-ink">
            {site.name}
            <span className="text-ember">.</span>
          </p>
          <p className="mt-1 text-sm text-stone">
            {site.role} · © {new Date().getFullYear()}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {site.socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-stone transition-colors hover:text-ember"
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
    </footer>
  );
}
