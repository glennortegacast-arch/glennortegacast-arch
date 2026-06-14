"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin acceso al portapapeles: el enlace mailto sigue funcionando.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copiado" : `Copiar email ${email}`}
      className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper/70 transition-colors hover:border-paper/60 hover:text-paper"
    >
      <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}
