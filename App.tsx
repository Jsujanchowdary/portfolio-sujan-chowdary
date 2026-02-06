
import React from 'react';
import Navbar from './components/Navbar';
import BackgroundMesh from './components/BackgroundMesh';
import { PERSONAL_INFO, SKILLS, CERTIFICATES, AWARDS, EXPERIENCE, EDUCATION, PROJECTS } from './constants';
import SkillCard from './components/SkillCard';
import ProjectGrid from './components/ProjectGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
// Added Sparkles to the imported icons from lucide-react
import { ArrowRight, Download, Mail, Linkedin, Github, MapPin, Award, Layers, Cpu, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const content = [
        `Name: ${PERSONAL_INFO.name}`,
        `Role: ${PERSONAL_INFO.role}`,
        `Email: ${PERSONAL_INFO.email}`,
        `Phone: ${PERSONAL_INFO.phone}`,
        `LinkedIn: ${PERSONAL_INFO.linkedin}`,
        `GitHub: ${PERSONAL_INFO.github}`,
        `Location: ${PERSONAL_INFO.location}`,
        `\nOBJECTIVE\n${PERSONAL_INFO.objective}`,
        `\nEXPERIENCE\n${EXPERIENCE.map(exp => `${exp.role} at ${exp.company} (${exp.period})\n${exp.location}\n${exp.description.map(d => `- ${d}`).join('\n')}`).join('\n\n')}`,
        `\nEDUCATION\n${EDUCATION.map(edu => `${edu.degree}\n${edu.institution}, ${edu.location}\n${edu.period} | ${edu.grade}`).join('\n\n')}`,
        `\nSKILLS\n${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}`,
        `\nPROJECTS\n${PROJECTS.map(p => `${p.title} (${p.type}) - ${p.period}\nTech: ${p.tech.join(', ')}\n${p.description.map(d => `- ${d}`).join('\n')}`).join('\n\n')}`,
        `\nAWARDS\n${AWARDS.map(a => `${a.title} (${a.year}): ${a.description}`).join('\n')}`,
        `\nCERTIFICATIONS\n${CERTIFICATES.map(c => `- ${c}`).join('\n')}`
    ].join('\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sujan_Chowdary_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-100 selection:bg-blue-500/30 overflow-x-hidden">
      <BackgroundMesh />
      <Navbar />

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Available for Opportunities
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
                  Building <span className="text-gradient">Intelligent</span> Cloud.
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
                  I'm <span className="text-white font-medium">Sujan Chowdary</span>, a {PERSONAL_INFO.role} bridging the gap between <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-4">Cloud Native</span> and <span className="text-purple-400 underline decoration-purple-500/30 underline-offset-4">AI Automation</span>.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
                  <a 
                    href="#projects" 
                    onClick={(e) => handleNavClick(e, '#projects')}
                    className="group relative bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">View Work</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="#" 
                    onClick={handleDownloadResume}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 backdrop-blur-md"
                  >
                    Resume <Download size={20} />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* Decorative Blobs */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-[60px] animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 blur-[60px] animate-pulse"></div>
                    
                    <div className="relative z-10 glass-card p-10 rounded-[3rem] border border-white/10 h-full flex flex-col justify-center gap-8 shadow-2xl backdrop-blur-2xl">
                        <div className="flex justify-between items-center">
                             <div className="flex -space-x-3">
                                {[Layers, Cpu, Globe].map((Icon, i) => (
                                  <div key={i} className="w-12 h-12 rounded-2xl bg-deep-800 border border-white/10 flex items-center justify-center text-blue-400 shadow-xl">
                                    <Icon size={24} />
                                  </div>
                                ))}
                             </div>
                             <div className="text-right">
                                 <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Performance</div>
                                 <div className="text-3xl font-display font-black text-white">Top 5%</div>
                             </div>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-400 font-bold uppercase tracking-widest">
                                  <span>Cloud Architecture</span>
                                  <span>95%</span>
                                </div>
                                <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-400 font-bold uppercase tracking-widest">
                                  <span>AI Engineering</span>
                                  <span>90%</span>
                                </div>
                                <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 2, delay: 0.7 }} className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-5 rounded-2xl bg-black/40 border border-white/5 font-mono text-sm">
                            <div className="flex gap-2 mb-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <p className="text-blue-300">class <span className="text-purple-400">Engineer</span> &#123;</p>
                            <p className="pl-4 text-gray-400">status = <span className="text-green-400">'innovating'</span>;</p>
                            <p className="text-blue-300">&#125;</p>
                        </div>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="max-w-4xl"
                >
                    <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Background</h2>
                    <h3 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-10 leading-tight">
                        Passionate about <span className="text-gradient">Automation</span> & Data.
                    </h3>
                    <div className="relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block" />
                        <p className="text-2xl text-gray-400 leading-relaxed font-light">
                            {PERSONAL_INFO.objective}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                        {[
                          { label: 'Experience', val: '2+ Internships' },
                          { label: 'Projects', val: '10+ Global' },
                          { label: 'Research', val: '2 Publications' },
                          { label: 'Focus', val: 'Cloud Native' }
                        ].map((stat, i) => (
                          <div key={i} className="space-y-1">
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                            <div className="text-xl font-bold text-white">{stat.val}</div>
                          </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-32 relative bg-white/5 backdrop-blur-3xl scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.3em] mb-4">Stack</h2>
                    <h3 className="text-5xl font-display font-extrabold text-white">Technical Arsenal</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS.map((category, idx) => (
                        <SkillCard key={category.category} data={category} index={idx} />
                    ))}
                </div>
            </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 scroll-mt-24">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
                        <h3 className="text-5xl font-display font-extrabold text-white mb-6">Innovative Ventures</h3>
                        <p className="text-xl text-gray-500 font-light">
                            A curated collection of research, publications, and enterprise-grade automation solutions.
                        </p>
                    </div>
                    <a 
                        href={PERSONAL_INFO.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center gap-3 font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        See more on GitHub <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>
                
                <ProjectGrid />
             </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="py-32 relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-20"
                 >
                    <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.3em] mb-4">Timeline</h2>
                    <h3 className="text-5xl font-display font-extrabold text-white">Career & Learning</h3>
                 </motion.div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <ExperienceTimeline />
                    </div>
                    
                    <div className="space-y-12">
                        <div>
                             <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-3">
                                <Award className="text-yellow-400" /> Professional Certificates
                            </h3>
                            <div className="space-y-4">
                                {CERTIFICATES.map((cert, idx) => (
                                    <motion.div 
                                      key={idx} 
                                      whileHover={{ x: 5 }}
                                      className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-white/10 transition-all cursor-default"
                                    >
                                        <p className="text-sm font-bold text-gray-200">{cert}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                             <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-3">
                                <Sparkles className="text-purple-400" /> Key Achievements
                            </h3>
                            <div className="space-y-6">
                                {AWARDS.map((award, idx) => (
                                    <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50 group-hover:h-full transition-all duration-500" />
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-bold text-white text-lg leading-tight">{award.title}</h4>
                                            <span className="text-[10px] font-black text-gray-500 bg-black/40 px-2 py-1 rounded-md uppercase tracking-tighter">{award.year}</span>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">{award.description}</p>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="pt-32 pb-16 border-t border-white/5 bg-black/80 backdrop-blur-3xl scroll-mt-24 overflow-hidden relative">
            {/* Dynamic Light Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-10 tracking-tight">
                    Let's Build the <span className="text-gradient">Future</span>.
                  </h2>
                  <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Currently open to opportunities in <span className="text-white">Cloud Engineering</span> and <span className="text-white">AI/ML</span>.
                  </p>
                  
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="inline-flex items-center gap-4 bg-white text-black font-black text-lg px-12 py-5 rounded-3xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all mb-20 group"
                  >
                    Send an Email <Mail className="group-hover:rotate-12 transition-transform" />
                  </motion.a>
                </motion.div>

                <div className="flex justify-center gap-10 mb-20">
                     {[
                       { icon: Linkedin, href: PERSONAL_INFO.linkedin, color: 'hover:bg-blue-600' },
                       { icon: Github, href: PERSONAL_INFO.github, color: 'hover:bg-gray-800' },
                       { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, color: 'hover:bg-red-500' }
                     ].map((social, i) => (
                       <motion.a 
                          key={i}
                          whileHover={{ y: -5 }}
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`p-4 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-all border border-white/5 ${social.color}`}
                       >
                          <social.icon size={28} />
                       </motion.a>
                     ))}
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest">
                    <p>&copy; 2025 Sujan Chowdary</p>
                    <p className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> {PERSONAL_INFO.location}</p>
                    <p>Designed for Innovation</p>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
