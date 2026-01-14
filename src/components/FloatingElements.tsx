"use client"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Glowing orbs */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          top: "60%",
          right: "-5%",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--destructive)) 0%, transparent 70%)",
          bottom: "20%",
          left: "30%",
          animation: "float 18s ease-in-out infinite",
          animationDelay: "-5s",
        }}
      />

      {/* Geometric shapes */}
      <div
        className="absolute w-20 h-20 border-2 border-primary/20 rotate-45"
        style={{
          top: "15%",
          right: "15%",
          animation: "spin 30s linear infinite",
        }}
      />
      <div
        className="absolute w-12 h-12 border-2 border-accent/20"
        style={{
          bottom: "25%",
          left: "10%",
          animation: "spin 25s linear infinite reverse",
        }}
      />
      <div
        className="absolute w-16 h-16 border-2 border-destructive/20 rotate-12"
        style={{
          top: "45%",
          left: "5%",
          animation: "float 12s ease-in-out infinite",
        }}
      />

      {/* Pixel dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/30"
          style={{
            top: `${15 + i * 10}%`,
            left: `${85 + (i % 3) * 5}%`,
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * -2}s`,
          }}
        />
      ))}

      {/* Code brackets decoration */}
      <div
        className="absolute text-primary/10 text-pixel text-6xl"
        style={{
          top: "30%",
          left: "2%",
          animation: "float 10s ease-in-out infinite",
        }}
      >
        {"<"}
      </div>
      <div
        className="absolute text-accent/10 text-pixel text-6xl"
        style={{
          bottom: "30%",
          right: "2%",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      >
        {"/>"}
      </div>
    </div>
  )
}
