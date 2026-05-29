import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#193435",
          color: "#f0f0e5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Arial Black, Impact, sans-serif"
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#d6b36c"
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            lineHeight: 0.92,
            textTransform: "uppercase",
            maxWidth: 900
          }}
        >
          Reset. Rebuild. Rise.
        </div>

        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(240,240,229,0.65)",
            letterSpacing: "0.04em"
          }}
        >
          Movement-first physiotherapy, performance &amp; recovery · Ahmedabad
        </div>
      </div>
    ),
    size
  );
}
