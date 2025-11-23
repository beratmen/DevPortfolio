import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6">
          <h2 className="text-blue-400 font-medium tracking-wide uppercase text-sm sm:text-base animate-fade-in-up">
            Hi, my name is
          </h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight animate-fade-in-up delay-100">
            John Doe
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
              Full Stack Developer
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg sm:text-xl leading-relaxed animate-fade-in-up delay-200">
            I build exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className="text-blue-400">Tech Corp</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up delay-300">
            <a 
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2 border border-slate-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
