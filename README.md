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
app/            # App Router
  layout.tsx    # fuentes, metadata/SEO + Open Graph, Nav + Footer
  page.tsx      # home: Hero + secciones ancladas
  globals.css   # tokens de diseño (paleta + tipografía) y animaciones
components/     # Nav, Hero, Section, Footer (reutilizables)
content/
  site.ts       # EDITA AQUI textos y enlaces (sin tocar la UI)
legacy/         # archivos previos no relacionados con el portafolio
```

## Editar contenido

Todo el copy del Hero, la navegación y los enlaces sociales viven en
[`content/site.ts`](content/site.ts). Cambia texto y enlaces ahí sin tocar componentes.

## Diseño

- Paleta **"Studio Paper"**: papel cálido + tinta + acento terracota (Ember `#c2502e`).
- Tipografía: **Space Grotesk** (display) · **Inter** (cuerpo) · **JetBrains Mono** (etiquetas).
- Animaciones de entrada sutiles, respetando `prefers-reduced-motion`.

---

En construcción por fases. **Fase 1**: layout base, navegación y Hero.
