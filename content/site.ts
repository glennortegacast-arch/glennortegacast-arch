// =============================================================================
// Contenido del sitio — edita SOLO este archivo para cambiar textos y enlaces.
// La UI lee de aquí, así que no necesitas tocar componentes para actualizar copy.
// =============================================================================

export type NavItem = { label: string; href: string };
export type Cta = { label: string; href: string };
export type SocialLink = { label: string; href: string; handle?: string };

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
