import { Card } from '@/components/ui/card';
import { Code2, Rocket, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'CLEAN CODE',
      description: 'Writing maintainable, scalable code following best practices',
      color: 'text-primary'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'PERFORMANCE',
      description: 'Optimizing applications for speed and efficiency',
      color: 'text-accent'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'INNOVATION',
      description: 'Building AI-scale products and real-time features with WebSockets',
      color: 'text-destructive'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'COLLABORATION',
      description: 'Working effectively with cross-functional teams',
      color: 'text-secondary'
    }
  ];

  const stats = [
    { value: '6M+', label: 'Monthly users on the AI platform', color: 'text-accent' },
    { value: '~35%', label: 'Fewer redundant API requests', color: 'text-primary' },
    { value: '15', label: 'Steps in the credit workflow built', color: 'text-destructive' },
    { value: '10+', label: 'Concurrent A/B experiments stabilized', color: 'text-accent' }
  ];

  return (
    <section id="about" className="py-20 px-4 pixel-grid relative scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-card px-6 py-3 mb-6">
            <h2 className="text-pixel text-xl md:text-2xl text-primary">
              &lt; ABOUT ME /&gt;
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Summary Card */}
          <Card className="pixel-border pixel-border-hover bg-card p-6 md:p-8">
            <h3 className="text-pixel text-sm md:text-base text-accent mb-6">
              // SUMMARY
            </h3>
            <div className="space-y-4 text-mono text-sm leading-relaxed text-foreground/90">
              <p>
                <span className="text-primary font-bold">const</span> developer = {'{'}
              </p>
              <p className="pl-4">
                <span className="text-accent">name:</span> <span className="text-destructive">"Nurislam Tashkulov"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">role:</span> <span className="text-destructive">"Software Engineer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">experience:</span> <span className="text-destructive">"5+ years"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">location:</span> <span className="text-destructive">"Warsaw, Poland"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">passion:</span> <span className="text-destructive">"End-to-end solutions"</span>
              </p>
              <p>{'};'}</p>
            </div>
          </Card>

          {/* Stats Card */}
          <Card className="pixel-border pixel-border-hover bg-card p-6 md:p-8">
            <h3 className="text-pixel text-sm md:text-base text-accent mb-6">
              // ACHIEVEMENTS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="pixel-border bg-background p-4 text-center">
                  <p className={`text-pixel text-xl md:text-2xl mb-3 ${stat.color}`}>{stat.value}</p>
                  <p className="text-mono text-xs text-foreground/70 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="pixel-border pixel-border-hover bg-card p-6 text-center hover:scale-105 transition-transform"
            >
              <div className={`${item.color} mb-4 flex justify-center animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                {item.icon}
              </div>
              <h4 className="text-pixel text-xs mb-3 text-foreground">
                {item.title}
              </h4>
              <p className="text-mono text-xs text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
