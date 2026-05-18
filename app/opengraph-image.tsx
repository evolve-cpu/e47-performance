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
          background: "#f6f2ea",
          color: "#111827",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ fontSize: 34, color: "#355070" }}>{siteConfig.name}</div>
        <div style={{ fontSize: 74, lineHeight: 1.05, maxWidth: 860 }}>
          SEO-ready performance website foundation
        </div>
        <div style={{ fontSize: 28, color: "#4b5563" }}>{siteConfig.url}</div>
      </div>
    ),
    size
  );
}
