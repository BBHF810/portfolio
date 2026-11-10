import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Research } from './components/Research';
import { About } from './components/About';
import { Process } from './components/Process';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // 以前のダークモード設定がブラウザに残っている場合でも明るい表示に統一
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Works onSelectProject={(p) => setSelectedProject(p)} />
        <Research />
        <About />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
