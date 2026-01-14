"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#contact", label: "Contact", icon: Mail },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 50)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-destructive transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-1 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex items-center justify-between px-4 py-2 transition-all duration-300",
              isScrolled ? "pixel-border bg-card/95 backdrop-blur-sm" : "bg-transparent"
            )}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#home")
              }}
              className="text-pixel text-xs md:text-sm text-primary hover:text-accent transition-colors"
            >
              &lt;NT/&gt;
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-mono text-xs transition-all duration-200",
                      isActive
                        ? "text-accent pixel-border bg-accent/10"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <Icon className="w-3 h-3" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden pixel-border p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isMobileMenuOpen ? "max-h-96 mt-2" : "max-h-0"
            )}
          >
            <div className="pixel-border bg-card/95 backdrop-blur-sm p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-mono text-sm transition-all duration-200",
                      isActive
                        ? "text-accent pixel-border bg-accent/10"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
