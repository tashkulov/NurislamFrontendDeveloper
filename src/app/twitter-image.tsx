import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/constants"

export const runtime = "edge"

export const alt = "Nurislam Tashkulov - Fullstack Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 60,
            width: 80,
            height: 80,
            border: "3px solid #60a5fa",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 60,
            width: 60,
            height: 60,
            border: "3px solid #4ade80",
            opacity: 0.3,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            border: "4px solid #334155",
            background: "rgba(15, 23, 42, 0.8)",
            boxShadow: "8px 8px 0px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#60a5fa",
              marginBottom: 20,
              letterSpacing: "-2px",
            }}
          >
            NURISLAM TASHKULOV
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#4ade80",
              marginBottom: 30,
              padding: "8px 24px",
              border: "2px solid #4ade80",
            }}
          >
            FULLSTACK DEVELOPER
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              fontSize: 20,
              color: "#94a3b8",
            }}
          >
            <span>React</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Vue</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Next.js</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Node.js</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Web3</span>
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 30,
            fontSize: 18,
            color: "#64748b",
          }}
        >
          <span>5+ years experience</span>
          <span style={{ color: "#475569" }}>|</span>
          <span>FinTech & SaaS</span>
          <span style={{ color: "#475569" }}>|</span>
          <span>{siteConfig.links.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
