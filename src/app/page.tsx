import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"
import Navigation from "@/components/Navigation"
import ScrollToTop from "@/components/ScrollToTop"
import ParticleBackground from "@/components/ParticleBackground"
import FloatingElements from "@/components/FloatingElements"
import CursorGlow from "@/components/CursorGlow"

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <FloatingElements />
      <CursorGlow />
      <Navigation />
      <main className="min-h-screen relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}
