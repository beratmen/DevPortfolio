import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop interface, and team workspaces.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application providing detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-slate-900 text-blue-400 text-xs rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
