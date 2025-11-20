import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Recardme',
      role: 'Frontend Developer',
      period: 'Sep 2024 - Present',
      location: 'Remote',
      achievements: [
        'Developed admin panel with Next.js & TypeScript, reducing load times by 15%',
        'Designed referral program, increasing user acquisition by 20%',
        'Revamped UI improving user satisfaction by 15%'
      ],
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
    },
    {
      company: 'Impact Digital Lab',
      role: 'Frontend Developer',
      period: 'Nov 2023 - Aug 2024',
      location: 'Remote',
      achievements: [
        'Implemented WebSocket real-time updates, boosting responsiveness by 25%',
        'Integrated multilingual support (RU, EN, CN) for global market',
        'Optimized build pipeline with Vite, reducing bundle sizes by 30%'
      ],
      technologies: ['React', 'Vue 3', 'Vite', 'WebSocket', 'i18n']
    },
    {
      company: 'Snowflakes',
      role: 'Full Stack Developer',
      period: 'Aug 2022 - Oct 2023',
      location: 'Kyrgyzstan',
      achievements: [
        'Applied Feature-Sliced Design architecture, reducing dependencies by 35%',
        'Developed 15+ functional modules increasing user satisfaction by 30%',
        'Engineered caching system improving page load speed by 40%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'FSD']
    },
    {
      company: 'Inclusive Technology',
      role: 'Full Stack Developer',
      period: 'Jan 2022 - Jul 2022',
      location: 'Kyrgyzstan',
      achievements: [
        'Developed full-stack applications using Node.js and Vue 3',
        'Migrated legacy system from React to Vue 3, improving usability by 30%',
        'Optimized workflows with service-based architecture by 10%'
      ],
      technologies: ['Vue 3', 'Node.js', 'PostgreSQL', 'REST API']
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 pixel-grid relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-card px-6 py-3 mb-6">
            <h2 className="text-pixel text-xl md:text-2xl text-primary">
              &lt; EXPERIENCE /&gt;
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center z-10">
                  <div className="w-4 h-4 bg-primary border-2 border-background animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 w-full">
                  <Card className="pixel-border pixel-border-hover bg-card p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-accent" />
                        <h3 className="text-pixel text-sm md:text-base text-accent">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-mono text-sm text-primary font-bold mb-2">
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-foreground/70">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <p className="text-pixel text-xs text-destructive mb-3">
                        // ACHIEVEMENTS:
                      </p>
                      <ul className="space-y-2 text-mono text-xs text-foreground/80">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-pixel text-xs text-secondary mb-3">
                        // TECH STACK:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="pixel-border bg-background px-3 py-1 text-xs text-mono text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Empty space for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
