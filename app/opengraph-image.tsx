import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f4ef",
          padding: 80,
          color: "#1a1814",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c2502e",
            }}
          >
            Creative Producer
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 26,
              color: "#6b6157",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#c2502e",
              }}
            />
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, lineHeight: 1 }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              color: "#6b6157",
              maxWidth: 920,
            }}
          >
            {site.hero.positioning}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#6b6157", letterSpacing: 1 }}>
          Marca · Eventos corporativos · Workflows con AI · Audiovisual
        </div>
      </div>
    ),
    { ...size },
  );
}
