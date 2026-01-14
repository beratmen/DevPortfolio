import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Globe, Clock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/beratmen',
      color: 'hover:bg-gray-800',
      username: '@beratmen'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/beratmen/',
      color: 'hover:bg-blue-700',
      username: 'Berat MEN'
    },
    {
      name: 'Website',
      icon: <Globe className="w-5 h-5" />,
      url: 'https://beratmen-com.vercel.app/',
      color: 'hover:bg-emerald-600',
      username: 'beratmen'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info & Socials */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium text-sm">Email Me</h4>
                    <p className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors">hello@example.com</p>
                  </div>
                </a>
                
                <a href="tel:+1234567890" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium text-sm">Call Me</h4>
                    <p className="text-slate-400 text-sm group-hover:text-cyan-400 transition-colors">+1 (234) 567-890</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium text-sm">Location</h4>
                    <p className="text-slate-400 text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-all duration-300 group ${link.color} hover:border-transparent`}
                  >
                    <div className="text-slate-400 group-hover:text-white mb-2 transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
               <div className="flex items-center gap-3 mb-2">
                 <Clock className="w-5 h-5 text-slate-400" />
                 <h3 className="text-sm font-bold text-white">Response Time</h3>
               </div>
               <p className="text-slate-400 text-sm pl-8">
                 I usually respond within 24 hours.
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all resize-none placeholder:text-slate-600"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-800">
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-slate-500 text-xs mt-4 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Your data is safe. I never spam.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
