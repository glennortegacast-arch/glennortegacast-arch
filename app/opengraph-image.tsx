import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const [first, ...rest] = site.name.trim().split(/\s+/);
  const last = rest.join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ecede9",
          padding: 80,
          color: "#181a1d",
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
              color: "#9c560f",
            }}
          >
            Creative Producer
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                display: "flex",
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#9c560f",
              }}
            />
            <div
              style={{
                display: "flex",
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#2a6285",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 700, lineHeight: 1 }}>
            <div style={{ display: "flex", color: "#9c560f" }}>{first}</div>
            {last && (
              <div style={{ display: "flex", color: "#2a6285", marginLeft: 26 }}>
                {last}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              color: "#5c6064",
              maxWidth: 920,
            }}
          >
            {site.hero.positioning}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#5c6064", letterSpacing: 1 }}>
          Marca · Eventos corporativos · Workflows con AI · Audiovisual
        </div>
      </div>
    ),
    { ...size },
  );
}
