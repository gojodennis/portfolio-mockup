import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Branding Design",
    client: "Artisan Coffee Co.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=2400",
    category: "Brand Identity"
  },
  {
    id: 2,
    title: "Digital Experience",
    client: "Modern Gallery",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2400",
    category: "Web Design"
  },
  {
    id: 3,
    title: "Art Direction",
    client: "Urban Fashion",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?auto=format&fit=crop&q=80&w=2400",
    category: "Creative Direction"
  },
  {
    id: 4,
    title: "Visual Identity",
    client: "Tech Startup",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&q=80&w=2400",
    category: "Brand Identity"
  }
];

function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-lg font-light tracking-wide">JANE DESIGNER</h1>
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="text-sm font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            {showInfo ? 'CLOSE' : 'INFO'}
          </button>
        </div>
      </header>

      {/* Info Overlay */}
      {showInfo && (
        <div className="fixed inset-0 bg-white z-40 overflow-auto">
          <div className="max-w-[1800px] mx-auto px-6 pt-32 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-2xl font-light mb-8">About</h2>
                <p className="text-lg font-light leading-relaxed text-gray-700 mb-6">
                  Jane Designer is a multidisciplinary designer focusing on branding, art direction, and digital experiences. 
                  Based in New York, working globally.
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  Creating meaningful design solutions through thoughtful research, strategic thinking, and beautiful execution.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-light mb-8">Contact</h2>
                <div className="space-y-4">
                  <a href="mailto:hello@example.com" className="block text-lg font-light hover:opacity-60 transition-opacity">
                    hello@example.com
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-lg font-light hover:opacity-60 transition-opacity">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-lg font-light hover:opacity-60 transition-opacity">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-light">{project.title}</h2>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-light text-gray-500">
                    {project.client} — {project.year}
                  </p>
                  <p className="text-sm font-light text-gray-500">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm z-40">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <p className="text-sm font-light text-gray-500">
            © {new Date().getFullYear()} Jane Designer. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;