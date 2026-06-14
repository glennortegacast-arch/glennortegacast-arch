// =============================================================================
// Case studies — rellena/edita con tus proyectos reales (texto e imágenes).
// Las imágenes van en /public (p. ej. /public/trabajo/...) y se referencian con
// su ruta absoluta en `src`. Si `src` queda vacío, se muestra un placeholder
// elegante para que el layout no se rompa mientras no haya imagen.
// =============================================================================

export type ProjectImage = { src: string; alt: string; caption?: string };
export type ProcessStep = { title: string; description: string };
export type Metric = { value: string; label: string };

export type Project = {
  /** Identificador para la URL: /trabajo/<slug> */
  slug: string;
  title: string;
  category: string;
  role: string;
  year?: string;
  client?: string;
  tags: string[];
  /** Resumen corto para la tarjeta del grid. */
  summary: string;
  /** Imagen principal (tarjeta del grid + cabecera del detalle). */
  thumbnail: ProjectImage;
  // ---- Detalle ----
  problem: string;
  myRole: string;
  process: ProcessStep[];
  result: string;
  metrics?: Metric[];
  gallery?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "evento-corporativo",
    title: "Lanzamiento inmersivo de marca",
    category: "Evento corporativo",
    role: "Creative Producer · Dirección de evento",
    year: "2025",
    client: "Cliente confidencial",
    tags: ["Producción", "Escenografía", "Dirección creativa"],
    summary:
      "Concepto, producción y dirección de un evento temático para el lanzamiento de una marca ante prensa e invitados.",
    thumbnail: { src: "", alt: "Imagen principal del evento corporativo" },
    problem:
      "La marca necesitaba un lanzamiento memorable que tradujera su nuevo posicionamiento en una experiencia física, con un timing ajustado y varios proveedores trabajando en paralelo.",
    myRole:
      "Lideré el concepto creativo y la producción integral: del guion del evento y la escenografía a la coordinación de proveedores, equipo y la ejecución en sitio el día del montaje.",
    process: [
      {
        title: "Concepto",
        description:
          "Definí la narrativa del evento y el lenguaje visual partiendo del posicionamiento y los objetivos de la marca.",
      },
      {
        title: "Producción",
        description:
          "Coordiné escenografía, audiovisuales, catering y cronograma con todos los proveedores y el equipo interno.",
      },
      {
        title: "Ejecución",
        description:
          "Dirigí el montaje y el flujo del evento en vivo, cuidando que cada momento de la experiencia funcionara.",
      },
    ],
    result:
      "El evento se ejecutó sin contratiempos y reforzó el lanzamiento, con feedback muy positivo de invitados y cliente.",
    metrics: [
      { value: "+200", label: "Invitados" },
      { value: "1 día", label: "Ejecución en sitio" },
      { value: "8", label: "Proveedores" },
    ],
    gallery: [
      { src: "", alt: "Detalle del evento 1", caption: "Reemplaza con tus imágenes" },
      { src: "", alt: "Detalle del evento 2" },
    ],
  },
  {
    slug: "sistema-de-marca",
    title: "Sistema de marca para una empresa",
    category: "Sistema de marca",
    role: "Dirección de arte · Diseño de sistema",
    year: "2024",
    client: "Cliente confidencial",
    tags: ["Identidad", "Guidelines", "Contenido"],
    summary:
      "Diseño de un sistema de marca y contenido para una empresa: del logotipo al lenguaje visual aplicado en cada canal.",
    thumbnail: { src: "", alt: "Imagen principal del sistema de marca" },
    problem:
      "La empresa tenía una identidad inconsistente entre canales y necesitaba un sistema claro, escalable y fácil de aplicar por su propio equipo.",
    myRole:
      "Dirigí el sistema visual de principio a fin: definición de marca, construcción de guidelines y plantillas, y producción de contenido de ejemplo.",
    process: [
      {
        title: "Auditoría",
        description:
          "Revisé los puntos de contacto existentes para detectar inconsistencias y oportunidades.",
      },
      {
        title: "Sistema",
        description:
          "Diseñé los fundamentos (tipografía, color, retícula, componentes) y los documenté en guidelines.",
      },
      {
        title: "Aplicación",
        description:
          "Llevé el sistema a piezas reales y plantillas para que el equipo mantuviera la coherencia.",
      },
    ],
    result:
      "La marca ganó coherencia y velocidad de producción, con un sistema que el equipo interno puede mantener de forma autónoma.",
    metrics: [
      { value: "1", label: "Sistema unificado" },
      { value: "+30", label: "Plantillas" },
      { value: "100%", label: "Coherencia" },
    ],
    gallery: [
      { src: "", alt: "Aplicación de marca 1", caption: "Reemplaza con tus imágenes" },
      { src: "", alt: "Aplicación de marca 2" },
    ],
  },
  {
    slug: "workflow-ai",
    title: "Asistente de producción con AI",
    category: "Workflow con AI",
    role: "Diseño de workflow · Producto",
    year: "2025",
    tags: ["AI", "Automatización", "Pipeline"],
    summary:
      "Diseño de un flujo y un asistente con AI para acelerar una etapa repetitiva de la producción, sin perder criterio ni calidad.",
    thumbnail: { src: "", alt: "Imagen principal del workflow con AI" },
    problem:
      "Una etapa del proceso de producción consumía mucho tiempo manual y generaba cuellos de botella y resultados inconsistentes.",
    myRole:
      "Diseñé el flujo de trabajo y el asistente con AI: definí los pasos, los prompts y los puntos de control humano para mantener la calidad.",
    process: [
      {
        title: "Diagnóstico",
        description:
          "Mapeé el proceso actual para identificar qué pasos automatizar y dónde mantener la decisión humana.",
      },
      {
        title: "Diseño del flujo",
        description:
          "Definí el pipeline asistido por AI, con prompts, plantillas y validaciones en los puntos clave.",
      },
      {
        title: "Implementación",
        description:
          "Puse el asistente en manos del equipo e iteré con su feedback hasta dejarlo fiable.",
      },
    ],
    result:
      "El equipo redujo de forma notable el tiempo de la etapa y ganó consistencia, liberando horas para el trabajo creativo.",
    metrics: [
      { value: "-60%", label: "Tiempo de la etapa" },
      { value: "3x", label: "Volumen procesado" },
      { value: "+", label: "Horas para lo creativo" },
    ],
    gallery: [
      { src: "", alt: "Diagrama del flujo", caption: "Reemplaza con tus imágenes" },
      { src: "", alt: "Captura del asistente" },
    ],
  },
  {
    slug: "pieza-audiovisual",
    title: "Pieza audiovisual dirigida",
    category: "Producción audiovisual",
    role: "Dirección · Producción",
    year: "2024",
    tags: ["Dirección", "Video", "Post"],
    summary:
      "Dirección y producción de una pieza audiovisual con narrativa propia, de la idea al corte final.",
    thumbnail: { src: "", alt: "Frame principal de la pieza audiovisual" },
    problem:
      "Había que contar una historia con identidad propia en un formato corto, con recursos acotados y un acabado profesional.",
    myRole:
      "Dirigí la pieza y coordiné la producción: guion, plan de rodaje, dirección en set y supervisión de la postproducción.",
    process: [
      {
        title: "Preproducción",
        description:
          "Desarrollé el concepto, el guion y el plan de rodaje (locaciones, equipo y cronograma).",
      },
      {
        title: "Rodaje",
        description:
          "Dirigí el set cuidando encuadre, ritmo e interpretación según la narrativa.",
      },
      {
        title: "Postproducción",
        description: "Supervisé montaje, color y sonido hasta el corte final.",
      },
    ],
    result:
      "Una pieza con voz propia y acabado profesional, lista para presentación y distribución.",
    metrics: [
      { value: "1", label: "Pieza dirigida" },
      { value: "HD", label: "Acabado" },
      { value: "0→1", label: "De la idea al corte" },
    ],
    gallery: [
      { src: "", alt: "Frame 1", caption: "Reemplaza con tus imágenes" },
      { src: "", alt: "Frame 2" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
