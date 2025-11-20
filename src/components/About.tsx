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
      description: 'Implementing cutting-edge Web3 and real-time technologies',
      color: 'text-destructive'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'COLLABORATION',
      description: 'Working effectively with cross-functional teams',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 pixel-grid relative">
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
                <span className="text-accent">role:</span> <span className="text-destructive">"Middle Frontend Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">experience:</span> <span className="text-destructive">"3+ years"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">location:</span> <span className="text-destructive">"Bishkek, Kyrgyzstan"</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">passion:</span> <span className="text-destructive">"Building amazing UX"</span>
              </p>
              <p>{'};'}</p>
            </div>
          </Card>

          {/* Stats Card */}
          <Card className="pixel-border pixel-border-hover bg-card p-6 md:p-8">
            <h3 className="text-pixel text-sm md:text-base text-accent mb-6">
              // ACHIEVEMENTS
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-mono text-sm text-foreground/80">Load Time Reduction</span>
                <span className="text-pixel text-xs text-accent">-40%</span>
              </div>
              <div className="h-2 bg-background pixel-border w-full">
                <div className="h-full bg-accent" style={{ width: '40%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mono text-sm text-foreground/80">User Satisfaction</span>
                <span className="text-pixel text-xs text-primary">+30%</span>
              </div>
              <div className="h-2 bg-background pixel-border w-full">
                <div className="h-full bg-primary" style={{ width: '30%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mono text-sm text-foreground/80">Bundle Size Optimization</span>
                <span className="text-pixel text-xs text-destructive">-30%</span>
              </div>
              <div className="h-2 bg-background pixel-border w-full">
                <div className="h-full bg-destructive" style={{ width: '30%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mono text-sm text-foreground/80">Projects Completed</span>
                <span className="text-pixel text-xs text-accent">15+</span>
              </div>
              <div className="h-2 bg-background pixel-border w-full">
                <div className="h-full bg-secondary" style={{ width: '85%' }}></div>
              </div>
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
