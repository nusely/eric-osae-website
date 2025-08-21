import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage, icon: Icon }) => {
  return (
    <motion.div 
      className="skill-bar"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="skill-header">
        <Icon size={20} />
        <span>{skill}</span>
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
