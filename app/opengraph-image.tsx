import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";
export const runtime = "nodejs";

export default function Image() {
  const svgRaw = readFileSync(join(process.cwd(), "app/icon.svg"));
  const logoSrc = `data:image/svg+xml;base64,${svgRaw.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#193435",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          fontFamily: "Arial Black, Impact, sans-serif"
        }}
      >
        <img src={logoSrc} width={240} height={240} alt="E47 Performance logo" style={{ objectFit: "contain" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#d6b36c"
            }}
          >
            E47 PERFORMANCE
          </div>
          <div
            style={{
              fontSize: 17,
              color: "rgba(240,240,229,0.55)",
              letterSpacing: "0.05em"
            }}
          >
            Physiotherapy · Performance · Recovery · Ahmedabad
          </div>
        </div>
      </div>
    ),
    size
  );
}
