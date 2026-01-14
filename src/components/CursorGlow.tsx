"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/50"
        style={{
          boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))",
        }}
      />
    </div>
  )
}
