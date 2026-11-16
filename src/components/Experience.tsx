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

const metricPattern = /(15-step|~?\d+(?:[-–]\d+)?[M%]?\+?%?(?![A-Za-z\d]))/g;

const highlight = (text: string) =>
  text.split(metricPattern).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-accent font-bold">{part}</strong>
    ) : (
      part
    )
  );

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Ruby Labs',
      role: 'Software Engineer',
      period: 'Apr 2026 - Aug 2026',
      location: 'Remote',
      achievements: [
        'Developed full-stack features for a flagship AI application serving 6M+ monthly users',
        'Co-developed the product-wide design system: reusable UI patterns, typography, spacing, colors, layout',
        'Eliminated race conditions in A/B experiment tracking across 10+ concurrent experiments',
        'Implemented real-time features with WebSockets: live data streaming and event-driven UI updates'
      ],
      technologies: ['Node.js', 'Express', 'Next.js', 'TypeScript', 'WebSockets', 'GrowthBook', 'Mixpanel']
    },
    {
      company: 'Rocket Tech',
      role: 'Full-Stack Engineer',
      period: 'Apr 2024 - Mar 2026',
      location: 'Remote',
      achievements: [
        'Contributed to architecture of a large-scale fintech platform with complex financial workflows',
        'Engineered a 15-step credit application workflow with conditional logic, document processing and validation',
        'Built credit application management, banking offers, RBAC and financial reporting',
        'Standardized REST API integration patterns and reduced redundant requests across financial modules',
        'Led refactoring: 30-35% of sprint capacity on tech debt, major improvements done in two sprints'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB']
    },
    {
      company: 'Recardme',
      role: 'Software Engineer',
      period: 'Aug 2022 - Apr 2024',
      location: 'Remote',
      achievements: [
        'Developed a B2B2C SaaS loyalty platform: cashback programs, digital loyalty cards, customer management',
        'Built loyalty workflows with referral systems and QR-based interactions',
        'Integrated REST APIs across loyalty transactions, booking systems and business analytics',
        'Optimized API consumption and caching, reducing redundant requests by ~35%',
        'Built configurable catalogs for restaurants, retail, real estate and service providers'
      ],
      technologies: ['Next.js', 'TypeScript', 'React', 'REST API', 'Tailwind CSS']
    },
    {
      company: 'Snowflakes',
      role: 'Frontend Engineer',
      period: 'Feb 2022 - Aug 2022',
      location: 'Kyrgyzstan',
      achievements: [
        'Delivered 15+ production features across multiple client applications',
        'Built reusable modules, complex forms and API-driven workflows with validation and error handling',
        'Reduced redundant API requests by up to 30% via caching, component reuse and rendering improvements'
      ],
      technologies: ['React', 'TypeScript', 'REST API', 'FSD']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 pixel-grid relative scroll-mt-16">
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
                        {index === 0 && (
                          <span className="ml-auto pixel-border bg-background px-2 py-1 text-pixel text-[10px] text-accent">
                            LATEST
                          </span>
                        )}
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
                            <span>{highlight(achievement)}</span>
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
