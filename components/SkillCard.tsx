
import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

interface Props {
  data: SkillCategory;
  index: number;
}

const SkillCard: React.FC<Props> = ({ data, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        type: "spring",
        bounce: 0.3
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className="glass-card p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
        <span className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
        {data.category}
      </h3>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {data.skills.map((skill) => (
          <motion.span 
            key={skill} 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-sm rounded-xl bg-deep-800/50 border border-white/10 text-gray-300 group-hover:border-blue-500/40 group-hover:text-white hover:bg-blue-500/10 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
