import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import ParticleBackground from './components/ParticleBackground';
import ScanlineEffect from './components/ScanlineEffect';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Effects */}
      <ParticleBackground />
      <ScanlineEffect />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>

      {/* Interactive Effects */}
      <CursorTrail />
      <ScrollProgress />
    </div>
  );
}

export default App;
