import Image from "next/image";

type MediaFrameProps = {
  src?: string;
  alt: string;
  /** Texto del placeholder cuando aún no hay imagen. */
  label?: string;
  /** Clases del contenedor (define el aspect ratio). */
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Marco de imagen con relación de aspecto. Si `src` está vacío, muestra un
 * placeholder editorial para rellenar después sin romper el layout.
 */
export function MediaFrame({
  src,
  alt,
  label = "Imagen",
  className = "aspect-[16/10]",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-cloud ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(45deg,transparent,transparent_11px,rgba(26,24,20,0.025)_11px,rgba(26,24,20,0.025)_22px)] text-stone/45"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
