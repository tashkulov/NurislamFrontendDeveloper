"use client"

import { Card } from "@/components/ui/card"
import { Code, Layers, Database, Globe, Languages, GraduationCap } from "lucide-react"
import { skillCategories, languages } from "@/lib/constants"
import AnimatedSection from "@/components/AnimatedSection"

const iconMap: Record<string, React.ReactNode> = {
  FRONTEND: <Code className="w-6 h-6" />,
  BACKEND: <Layers className="w-6 h-6" />,
  WEB3: <Database className="w-6 h-6" />,
  "OTHER LANGUAGES": <Globe className="w-6 h-6" />,
}

const colorMap: Record<string, string> = {
  FRONTEND: "text-primary",
  BACKEND: "text-accent",
  WEB3: "text-destructive",
  "OTHER LANGUAGES": "text-secondary",
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 pixel-grid relative" aria-labelledby="skills-title">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block pixel-border bg-card px-6 py-3 mb-6 shimmer">
            <h2 id="skills-title" className="text-pixel text-xl md:text-2xl text-primary">
              &lt; SKILLS /&gt;
            </h2>
          </div>
        </AnimatedSection>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
              <Card className="pixel-border pixel-border-hover bg-card p-6 card-glow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`${colorMap[category.title]} animate-float`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    aria-hidden="true"
                  >
                    {iconMap[category.title]}
                  </div>
                  <h3 className="text-pixel text-sm text-accent">// {category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="pixel-border bg-background px-3 py-2 text-xs text-mono text-foreground hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Languages & Education Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <AnimatedSection direction="left" delay={400}>
            <Card className="pixel-border pixel-border-hover bg-card p-6 card-glow h-full">
              <div className="flex items-center gap-3 mb-6">
                <Languages className="w-6 h-6 text-primary animate-float" aria-hidden="true" />
                <h3 className="text-pixel text-sm text-accent">// LANGUAGES</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-mono text-sm text-foreground">{lang.name}</span>
                      <span className="text-pixel text-xs text-primary">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-background pixel-border w-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: lang.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection direction="right" delay={500}>
            <Card className="pixel-border pixel-border-hover bg-card p-6 card-glow h-full">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap
                  className="w-6 h-6 text-accent animate-float"
                  style={{ animationDelay: "0.3s" }}
                  aria-hidden="true"
                />
                <h3 className="text-pixel text-sm text-accent">// EDUCATION</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-mono text-sm font-bold text-primary mb-2">
                    Kyrgyz-German Institute for Applied Informatics
                  </h4>
                  <p className="text-mono text-xs text-foreground/80 mb-2">B.Sc. in Computer Science</p>
                  <p className="text-mono text-xs text-secondary mb-3">
                    <time>Sep 2021 - May 2025</time>
                  </p>
                  <div className="pixel-border bg-background px-3 py-2 inline-block neon-glow">
                    <span className="text-pixel text-xs text-accent">GPA: 4.40 / 4.85</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-border">
                  <p className="text-pixel text-xs text-destructive mb-3">// KEY COURSES:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Algorithms & Data Structures", "Databases", "Machine Learning", "Web Development"].map(
                      (course, i) => (
                        <span
                          key={i}
                          className="pixel-border bg-background px-2 py-1 text-xs text-mono text-foreground/80 hover:bg-destructive/20 hover:border-destructive transition-all cursor-default"
                        >
                          {course}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Additional Info */}
        <AnimatedSection delay={600} className="mt-8">
          <Card className="pixel-border bg-card/50 p-6 text-center shimmer">
            <p className="text-mono text-sm text-foreground/80">
              <span className="text-primary font-bold">const</span> yearsOfExperience ={" "}
              <span className="text-accent">5</span>+;{" "}
              <span className="text-primary font-bold">const</span> modulesBuilt ={" "}
              <span className="text-accent">15</span>+;{" "}
              <span className="text-primary font-bold">const</span> passionLevel ={" "}
              <span className="text-destructive">&apos;&#8734;&apos;</span>;
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
