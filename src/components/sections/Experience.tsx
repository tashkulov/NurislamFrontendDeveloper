"use client"

import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { experiences } from "@/lib/constants"
import AnimatedSection from "@/components/AnimatedSection"

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 pixel-grid relative" aria-labelledby="experience-title">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block pixel-border bg-card px-6 py-3 mb-6 shimmer">
            <h2 id="experience-title" className="text-pixel text-xl md:text-2xl text-primary">
              &lt; EXPERIENCE /&gt;
            </h2>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-destructive h-full" aria-hidden="true"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
              >
                <article
                  className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center z-10" aria-hidden="true">
                    <div className="w-4 h-4 bg-primary border-2 border-background animate-pulse pulse-ring"></div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 w-full">
                    <Card className="pixel-border pixel-border-hover bg-card p-6 card-glow">
                      {/* Header */}
                      <header className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-accent" aria-hidden="true" />
                          <h3 className="text-pixel text-sm md:text-base text-accent">{exp.company}</h3>
                        </div>
                        <p className="text-mono text-sm text-primary font-bold mb-2">{exp.role}</p>
                        <div className="flex flex-wrap gap-3 text-xs text-foreground/70">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            <time>{exp.period}</time>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>
                      </header>

                      {/* Achievements */}
                      <div className="mb-4">
                        <p className="text-pixel text-xs text-destructive mb-3">// ACHIEVEMENTS:</p>
                        <ul className="space-y-2 text-mono text-xs text-foreground/80">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 hover:text-foreground transition-colors">
                              <span className="text-primary mt-1" aria-hidden="true">&#9654;</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <footer>
                        <p className="text-pixel text-xs text-secondary mb-3">// TECH STACK:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="pixel-border bg-background px-3 py-1 text-xs text-mono text-accent hover:bg-accent/20 hover:border-accent transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </footer>
                    </Card>
                  </div>

                  {/* Empty space for timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
