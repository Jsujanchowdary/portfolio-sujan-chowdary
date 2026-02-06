
import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative flex flex-col p-8 rounded-[2rem] bg-deep-900 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden"
        >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                  project.type === 'Publication' 
                    ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                    : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                }`}>
                    {project.type}
                </div>
                <div className="flex gap-3">
                    {project.link ? (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all"
                        >
                            <ExternalLink size={18} />
                        </motion.a>
                    ) : (
                         <div className="p-2 bg-white/5 rounded-full text-gray-700 cursor-not-allowed">
                           <Github size={18} />
                         </div>
                    )}
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-xs font-mono text-blue-500/80 mb-5">
                <Code size={14} /> {project.period}
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {desc}
                    </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tech.map(tech => (
                      <span key={tech} className="text-[10px] font-bold text-gray-500 bg-white/5 px-2.5 py-1 rounded-md uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                          {tech}
                      </span>
                  ))}
              </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 rounded-br-[2rem]" />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
