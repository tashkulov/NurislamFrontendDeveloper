import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-destructive transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage indicator */}
      <div className="fixed bottom-8 right-8 z-50 pixel-border bg-card px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary animate-pulse" />
          <span className="text-pixel text-xs text-primary">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
