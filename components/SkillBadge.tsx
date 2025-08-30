import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const colors = [
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-yellow-100 text-yellow-800',
  'bg-red-100 text-red-800',
  'bg-indigo-100 text-indigo-800',
  'bg-purple-100 text-purple-800',
  'bg-pink-100 text-pink-800',
];

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const [colorClass, setColorClass] = React.useState('');

  React.useEffect(() => {
    if (typeof skill === 'object' && skill.color) {
      setColorClass('');
    } else {
      setColorClass(colors[Math.floor(Math.random() * colors.length)]);
    }
  }, [skill]);

  const style = typeof skill === 'object' && skill.color ? { backgroundColor: skill.color, color: 'white' } : {};
  const text = typeof skill === 'object' ? skill.name : skill;

  return (
    <motion.span
      className={`text-xs font-medium px-3 py-1 rounded-full ${colorClass}`}
      style={style}
      whileHover={{ scale: 1.1 }}
    >
      {text}
    </motion.span>
  );
};