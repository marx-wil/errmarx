import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function stapplLogoSrc() {
  const logo = await readFile(join(process.cwd(), "public/stappl-logo.png"));
  return `data:image/png;base64,${logo.toString("base64")}`;
}

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function createOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const logo = await stapplLogoSrc();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d10",
          color: "#f2f3f5",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <img src={logo} alt="" width={220} height={60} />
          <div
            style={{
              display: "flex",
              color: "#c9a45c",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: -2 }}>
            {title}
          </div>
          <div
            style={{
              maxWidth: 860,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#9aa1ab",
              fontFamily: "sans-serif",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
