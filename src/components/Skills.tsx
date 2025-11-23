import { Layout, Server, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
