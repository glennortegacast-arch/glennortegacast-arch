// =============================================================================
// Contenido del sitio — edita SOLO este archivo para cambiar textos y enlaces.
// La UI lee de aquí, así que no necesitas tocar componentes para actualizar copy.
// =============================================================================

export type NavItem = { label: string; href: string };
export type Cta = { label: string; href: string };
export type SocialLink = { label: string; href: string; handle?: string };
export type Capability = {
  title: string;
  description: string;
  deliverables?: string[];
};

export type SiteContent = {
  name: string;
  fullName: string;
  role: string;
  email: string;
  /** Meta description para SEO / Open Graph (~155 caracteres). */
  seoDescription: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    positioning: string;
    supporting?: string;
    tags: string[];
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    pillars: string[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: Capability[];
  };
  socials: SocialLink[];
};

export const site: SiteContent = {
  name: "Glenn Ortega",
  fullName: "Ariel Glenn Ortega Castillo",
  role: "Creative Producer",
  email: "glennortegacast@gmail.com",
  seoDescription:
    "Creative Producer: sistemas de marca, producción de eventos corporativos y workflows asistidos por AI, con base en producción audiovisual.",

  nav: [
    { label: "Sobre mí", href: "#sobre" },
    { label: "Capacidades", href: "#capacidades" },
    { label: "Trabajo", href: "#trabajo" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    eyebrow: "Creative Producer",
    headline: "Glenn Ortega",
    positioning:
      "Conecto creatividad visual, producción de eventos y AI aplicada para construir marcas y experiencias que la gente recuerda.",
    supporting: "Comunicación · minor en Producción Audiovisual",
    tags: [
      "Sistemas de marca",
      "Eventos corporativos",
      "Workflows con AI",
      "Producción audiovisual",
    ],
    primaryCta: { label: "Ver trabajo", href: "#trabajo" },
    secondaryCta: { label: "Hablemos", href: "#contacto" },
  },

  about: {
    eyebrow: "01 — Sobre mí",
    title: "Tres mundos, una sola producción",
    lead: "Soy Glenn, Creative Producer con base en comunicación y producción audiovisual. Trabajo justo donde se cruzan tres mundos que casi siempre van por separado: la marca, el evento y la AI.",
    paragraphs: [
      "Vengo del lenguaje audiovisual —encuadre, ritmo, narrativa— y eso define cómo produzco: cada sistema de marca, cada evento y cada flujo asistido por AI se piensa como una pieza que se ve, se siente y funciona. Conecto el concepto creativo con la ejecución operativa para que nada se pierda entre la idea y la realidad.",
      "Me obsesiona que lo bonito también sea eficiente. Diseño procesos —muchas veces con AI en el centro— para que equipos y clientes lleguen a resultados memorables sin fricción, a tiempo y con una estética cuidada.",
    ],
    pillars: ["Creatividad visual", "Producción & eventos", "AI aplicada"],
  },

  capabilities: {
    eyebrow: "02 — Capacidades",
    title: "Qué hago",
    items: [
      {
        title: "Sistemas de marca",
        description:
          "Identidad visual y sistemas escalables que mantienen coherencia en cada punto de contacto, del logo al lenguaje completo.",
        deliverables: ["Identidad", "Guidelines", "Dirección de arte"],
      },
      {
        title: "Eventos corporativos",
        description:
          "Producción integral de eventos temáticos: del concepto creativo y la escenografía a la ejecución impecable en sitio.",
        deliverables: ["Concepto", "Producción", "Contenido en vivo"],
      },
      {
        title: "Workflows con AI",
        description:
          "Diseño de flujos y asistentes con AI que aceleran la producción sin sacrificar criterio ni calidad.",
        deliverables: ["Pipelines AI", "Asistentes a medida", "Automatización"],
      },
      {
        title: "Producción audiovisual",
        description:
          "Dirección y producción de piezas con narrativa y acabado profesional, desde la idea hasta la post.",
        deliverables: ["Dirección", "Video", "Post & motion"],
      },
    ],
  },

  socials: [
    // TODO: reemplaza con tus enlaces reales.
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tu-usuario",
      handle: "/in/tu-usuario",
    },
    {
      label: "Email",
      href: "mailto:glennortegacast@gmail.com",
      handle: "glennortegacast@gmail.com",
    },
  ],
};
