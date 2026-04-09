import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800 }}>CAT Prep</div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 16 }}>Powered by Koydo</div>
      </div>
    ),
    { ...size }
  );
}
