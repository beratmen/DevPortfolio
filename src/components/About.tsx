import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl bg-slate-800 overflow-hidden flex items-center justify-center">
  <img src="./src/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
</div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Passionate about creating modern web applications
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I am a dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies. My journey in web development started with a curiosity for how things work on the internet, which has since evolved into a career building robust and scalable applications.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in the React ecosystem, Node.js, and modern CSS frameworks like Tailwind. I love solving complex problems and turning ideas into reality through clean, efficient code.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="text-blue-400 font-bold text-xl mb-1">2+</h4>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="text-blue-400 font-bold text-xl mb-1">20+</h4>
                <p className="text-slate-400 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
