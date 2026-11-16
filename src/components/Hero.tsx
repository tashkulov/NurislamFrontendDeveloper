import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Send, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'NURISLAM TASHKULOV';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pixel-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-primary animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-accent animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-destructive animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-8 h-8 border-2 border-secondary animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main title with typing effect */}
          <div className="mb-8">
            <h1 className="text-pixel text-2xl md:text-4xl lg:text-5xl mb-4 text-primary inline-block">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
            </h1>
          </div>

          {/* Pixel art title badge */}
          <div className="pixel-border bg-card inline-block px-6 py-3 mb-8">
            <p className="text-pixel text-xs md:text-sm text-accent">
              SOFTWARE ENGINEER
            </p>
          </div>

          {/* Description */}
          <div className="pixel-border bg-card p-6 md:p-8 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-mono text-sm md:text-base leading-relaxed text-foreground/90">
              <span className="text-primary">&gt;</span> Software Engineer with <span className="text-accent font-bold">5+ years</span> of commercial experience
              <br />
              <span className="text-primary">&gt;</span> Specializing in <span className="text-accent font-bold">TypeScript</span>, <span className="text-accent font-bold">Node.js</span>, <span className="text-accent font-bold">NestJS</span>, <span className="text-accent font-bold">React</span> + <span className="text-accent font-bold">Next.js</span>
              <br />
              <span className="text-primary">&gt;</span> AI platform (6M+ monthly users), FinTech, SaaS
              <br />
              <span className="text-primary">&gt;</span> Backend services, API design, complex business logic & architecture
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-6">
            <a href="/Nurislam_Tashkulov_Resume.pdf" download>
              <Button
                size="lg"
                className="pixel-border pixel-border-hover bg-accent hover:bg-accent/90 text-accent-foreground gap-3 text-pixel text-xs md:text-sm px-8 py-6 h-auto"
              >
                <Download className="w-5 h-5" />
                DOWNLOAD RESUME (PDF)
              </Button>
            </a>
          </div>

          {/* Secondary links */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <a href="https://github.com/tashkulov" target="_blank" rel="noopener noreferrer">
              <Button
                className="pixel-border pixel-border-hover bg-card hover:bg-card/80 text-foreground gap-2 text-pixel text-xs"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/tashkulov/" target="_blank" rel="noopener noreferrer">
              <Button
                className="pixel-border pixel-border-hover bg-card hover:bg-card/80 text-foreground gap-2 text-pixel text-xs"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </Button>
            </a>

            <a href="https://t.me/sambiokeyko" target="_blank" rel="noopener noreferrer">
              <Button
                className="pixel-border pixel-border-hover bg-card hover:bg-card/80 text-foreground gap-2 text-pixel text-xs"
              >
                <Send className="w-4 h-4" />
                TELEGRAM
              </Button>
            </a>

            <a href="mailto:nurislamtashkulov168@gmail.com">
              <Button
                className="pixel-border pixel-border-hover bg-card hover:bg-card/80 text-foreground gap-2 text-pixel text-xs"
              >
                <Mail className="w-4 h-4" />
                EMAIL
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16">
            <a href="#about" aria-label="Scroll to About" className="animate-bounce inline-block">
              <div className="w-6 h-10 border-2 border-primary rounded-full relative">
                <div className="w-1 h-2 bg-primary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
