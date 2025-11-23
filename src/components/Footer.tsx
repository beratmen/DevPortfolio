import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
              DevPortfolio
            </h3>
            <p className="text-slate-400 text-sm">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
