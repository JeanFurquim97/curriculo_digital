import React from 'react';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  text: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ text }) => {
  return (
    <motion.span 
      className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
      whileHover={{ scale: 1.1 }}
    >
      {text}
    </motion.span>
  );
};