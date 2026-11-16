import { useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contact', label: 'CONTACT' }
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(l => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      className={`fixed top-1 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-3xl pixel-border bg-card/95 backdrop-blur px-3 py-2 flex justify-center gap-1 md:gap-4 overflow-x-auto">
        {links.map(l => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`text-pixel text-[10px] md:text-xs px-2 py-2 whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
              active === l.id ? 'text-accent' : 'text-foreground/70 hover:text-primary'
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
