import { Card } from '@/components/ui/card';
import { Code, Layers, Database, Globe, Languages, GraduationCap } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'LANGUAGES',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
      color: 'text-primary'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'FRONTEND',
      skills: ['React', 'Vue 3', 'Next.js', 'Tailwind CSS', 'Redux', 'Pinia', 'Zustand'],
      color: 'text-accent'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'BACKEND',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'WebSocket'],
      color: 'text-destructive'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'WEB3 & TOOLS',
      skills: ['TON', 'Solana', 'Vite', 'Webpack', 'Git', 'Docker'],
      color: 'text-secondary'
    }
  ];

  const languages = [
    { name: 'English', level: 'B2', width: '65%' },
    { name: 'German', level: 'B1', width: '50%' },
    { name: 'Japanese', level: 'N2', width: '70%' },
    { name: 'Russian', level: 'Native', width: '100%' },
    { name: 'Kyrgyz', level: 'Native', width: '100%' }
  ];

  return (
    <section className="min-h-screen py-20 px-4 pixel-grid relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-card px-6 py-3 mb-6">
            <h2 className="text-pixel text-xl md:text-2xl text-primary">
              &lt; SKILLS /&gt;
            </h2>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="pixel-border pixel-border-hover bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.color} animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {category.icon}
                </div>
                <h3 className="text-pixel text-sm text-accent">
                  // {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="pixel-border bg-background px-3 py-2 text-xs text-mono text-foreground hover:bg-primary/20 hover:border-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages & Education Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="pixel-border pixel-border-hover bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6 text-primary animate-float" />
              <h3 className="text-pixel text-sm text-accent">
                // LANGUAGES
              </h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-mono text-sm text-foreground">
                      {lang.name}
                    </span>
                    <span className="text-pixel text-xs text-primary">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-2 bg-background pixel-border w-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: lang.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="pixel-border pixel-border-hover bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-accent animate-float" style={{ animationDelay: '0.3s' }} />
              <h3 className="text-pixel text-sm text-accent">
                // EDUCATION
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-mono text-sm font-bold text-primary mb-2">
                  Kyrgyz-German Institute
                </h4>
                <p className="text-mono text-xs text-foreground/80 mb-2">
                  Web Development
                </p>
                <p className="text-mono text-xs text-secondary mb-3">
                  Sep 2021 - May 2025
                </p>
                <div className="pixel-border bg-background px-3 py-2 inline-block">
                  <span className="text-pixel text-xs text-accent">
                    GPA: 4.40 / 4.85
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-border">
                <p className="text-pixel text-xs text-destructive mb-3">
                  // KEY COURSES:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Machine Learning', 'Web Dev', 'Algorithms'].map((course, i) => (
                    <span
                      key={i}
                      className="pixel-border bg-background px-2 py-1 text-xs text-mono text-foreground/80"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <Card className="pixel-border bg-card/50 p-6 text-center">
            <p className="text-mono text-sm text-foreground/80">
              <span className="text-primary font-bold">const</span> yearsOfExperience = <span className="text-accent">3</span>;
              {' '}<span className="text-primary font-bold">const</span> projectsCompleted = <span className="text-accent">15</span>+;
              {' '}<span className="text-primary font-bold">const</span> passionLevel = <span className="text-destructive">'∞'</span>;
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
