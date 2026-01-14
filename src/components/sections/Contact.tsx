"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Send, Mail, Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import AnimatedSection from "@/components/AnimatedSection"

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "EMAIL",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    color: "text-primary",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "PHONE",
    value: "+996 554 179 179",
    href: `tel:${siteConfig.links.phone}`,
    color: "text-accent",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "LOCATION",
    value: "Bishkek, Kyrgyzstan",
    href: "#",
    color: "text-destructive",
  },
]

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: siteConfig.links.github,
    color: "bg-card hover:bg-primary/20 border-primary",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    color: "bg-card hover:bg-accent/20 border-accent",
  },
  {
    icon: <Send className="w-6 h-6" />,
    label: "Telegram",
    href: siteConfig.links.telegram,
    color: "bg-card hover:bg-destructive/20 border-destructive",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 pixel-grid relative" aria-labelledby="contact-title">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block pixel-border bg-card px-6 py-3 mb-6 shimmer">
            <h2 id="contact-title" className="text-pixel text-xl md:text-2xl text-primary">
              &lt; CONTACT /&gt;
            </h2>
          </div>
          <p className="text-mono text-sm text-foreground/70 max-w-2xl mx-auto">
            Let&apos;s build something amazing together! Feel free to reach out for collaborations, opportunities, or
            just to say hello.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Card */}
          <AnimatedSection direction="left" delay={100}>
            <Card className="pixel-border pixel-border-hover bg-card p-8 card-glow h-full">
              <h3 className="text-pixel text-sm text-accent mb-6">// GET IN TOUCH</h3>
              <address className="space-y-6 not-italic">
                {contactLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="block group"
                    {...(contact.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <div className="flex items-start gap-4 p-4 bg-background pixel-border hover:border-primary hover:scale-[1.02] transition-all">
                      <div
                        className={`${contact.color} mt-1 animate-float`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                        aria-hidden="true"
                      >
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-pixel text-xs text-secondary mb-1">{contact.label}</p>
                        <p className="text-mono text-sm text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </address>
            </Card>
          </AnimatedSection>

          {/* Social Links & CTA */}
          <AnimatedSection direction="right" delay={200}>
            <Card className="pixel-border pixel-border-hover bg-card p-8 card-glow h-full">
              <h3 className="text-pixel text-sm text-accent mb-6">// CONNECT WITH ME</h3>

              <nav className="space-y-4 mb-8" aria-label="Social media links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      className={`w-full pixel-border pixel-border-hover ${social.color} text-foreground gap-3 justify-start text-mono text-sm h-auto py-4 hover:scale-[1.02] transition-transform`}
                    >
                      <div className="animate-float" style={{ animationDelay: `${index * 0.2}s` }} aria-hidden="true">
                        {social.icon}
                      </div>
                      <span>{social.label}</span>
                    </Button>
                  </a>
                ))}
              </nav>

              {/* Status Card */}
              <div className="pixel-border bg-background p-4 neon-glow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" aria-hidden="true"></div>
                  <p className="text-pixel text-xs text-accent">CURRENTLY AVAILABLE</p>
                </div>
                <p className="text-mono text-xs text-foreground/70 leading-relaxed">
                  Open to new opportunities and exciting projects. Let&apos;s create something great!
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Fun Terminal-style Message */}
        <AnimatedSection delay={300}>
          <Card className="pixel-border bg-card/50 p-6 card-glow">
            <div className="text-mono text-sm space-y-2">
              <p className="text-primary">
                <span className="text-accent">~/contact</span> $ cat message.txt
              </p>
              <p className="text-foreground/80 pl-4">
                Thanks for visiting my portfolio! <span className="animate-blink">_</span>
              </p>
              <p className="text-foreground/80 pl-4">
                If you&apos;re looking for a dedicated fullstack developer who loves clean code,
              </p>
              <p className="text-foreground/80 pl-4">pixel-perfect designs, and innovative solutions - let&apos;s talk!</p>
              <p className="text-primary mt-4">
                <span className="text-accent">~/contact</span> $ <span className="animate-blink">_</span>
              </p>
            </div>
          </Card>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={400}>
          <footer className="text-center mt-12">
            <div className="inline-block pixel-border bg-card px-6 py-3 hover:scale-105 transition-transform">
              <p className="text-mono text-xs text-foreground/60">
                Made with <span className="text-destructive animate-pulse">&#10084;</span> by Nurislam Tashkulov &copy; {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </AnimatedSection>
      </div>
    </section>
  )
}
