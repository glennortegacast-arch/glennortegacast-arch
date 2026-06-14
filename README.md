# Glenn Ortega — Portfolio

Portafolio personal de **Ariel Glenn Ortega Castillo** (Creative Producer): sistemas de marca, producción de eventos corporativos y workflows asistidos por AI, con base en producción audiovisual.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Estático / SSG — listo para [Vercel](https://vercel.com)
- Fuentes self-hosted con `next/font` (Space Grotesk · Inter · JetBrains Mono)

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts:

```bash
npm run build    # build de producción
npm run start    # sirve el build de producción
npm run lint     # ESLint
```

## Estructura

```text
app/
  layout.tsx           # fuentes, metadata/SEO + Open Graph, Nav + Footer
  page.tsx             # home: Hero + Sobre mí + Capacidades + Trabajo + Contacto
  globals.css          # tokens de diseño (paleta + tipografía) y animaciones
  trabajo/[slug]/      # páginas de detalle de cada case study (SSG)
  opengraph-image.tsx  # imagen OG generada (1200x630)
  icon.svg             # favicon de marca
  sitemap.ts, robots.ts, not-found.tsx
components/            # Hero, About, Capabilities, Work, Contact, Nav, Footer, MediaFrame, Reveal...
content/
  site.ts              # textos, navegación, contacto y enlaces
  projects.ts          # case studies (texto + imágenes)
legacy/                # archivos previos no relacionados con el portafolio
```

## Cómo editarlo (sin tocar la UI)

1. **Textos y enlaces** -> `content/site.ts` (hero, sobre mí, capacidades, contacto, LinkedIn).
2. **Proyectos** -> `content/projects.ts` (problema, rol, proceso, resultado, métricas).
3. **Imágenes** -> ponlas en `/public` (p. ej. `/public/trabajo/evento-1.jpg`) y escribe esa ruta en `thumbnail.src` / `gallery[].src`. Sin imagen, se muestra un placeholder elegante.
4. **Dominio** -> actualiza `site.url` en `content/site.ts` tras desplegar (afecta SEO, OG y sitemap).

## Desplegar en Vercel

1. [vercel.com](https://vercel.com) -> New Project -> importa el repo.
2. Framework: Next.js (autodetectado), sin variables de entorno.
3. Deploy -> tu portafolio queda en vivo.

## Diseño

- Paleta **"Studio Paper"**: papel cálido + tinta + acento terracota (Ember `#c2502e`).
- Tipografía: **Space Grotesk** (display) · **Inter** (cuerpo) · **JetBrains Mono** (etiquetas).
- Animaciones de entrada sutiles, respetando `prefers-reduced-motion`.
- Accesible (semántica, contraste AA, foco por teclado, skip-link) y responsive.
