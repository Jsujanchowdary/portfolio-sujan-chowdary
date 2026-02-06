import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Work Experience */}
      <div>
        <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-blue-400" /> Work Experience
        </h3>
        <div className="space-y-8 pl-4 border-l-2 border-white/10 ml-3">
            {EXPERIENCE.map((exp, idx) => (
            <motion.div 
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
            >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-deep-950 border-2 border-blue-500" />
                <div className="glass-card p-6 rounded-xl hover:border-blue-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                            <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 text-right">
                             <div className="flex items-center gap-2 text-sm text-gray-400 sm:justify-end">
                                <Calendar size={14} /> {exp.period}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 sm:justify-end mt-1">
                                <MapPin size={14} /> {exp.location}
                            </div>
                        </div>
                    </div>
                    <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-400 text-sm leading-relaxed list-disc list-inside marker:text-blue-500">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-purple-400" /> Education
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 rounded-xl border-l-4 border-l-purple-500"
                 >
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-300 mb-4">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-gray-400 border-t border-white/10 pt-4">
                        <span>{edu.period}</span>
                        <span className="font-semibold text-white">{edu.grade}</span>
                    </div>
                 </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;