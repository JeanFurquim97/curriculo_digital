import React from 'react';
import type { Project } from '../types';
import { SkillBadge } from './SkillBadge';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1 inline-block"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col hover:border-gray-400 transition-all duration-300" 
      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-black">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {project.title}
              <LinkIcon />
            </a>
          </h3>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-4 font-medium">
          <span>{project.period}</span>
          <span>{project.location}</span>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {project.description}
        </p>
      </div>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <SkillBadge key={index} text={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};