import React from 'react';
import type { Contact } from '../types';

import { motion } from 'framer-motion';

interface HeaderProps {
  name: string;
  title: string;
  contact: Contact;
}

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block align-middle"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block align-middle"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block align-middle"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block align-middle"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
);


export const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="bg-gray-50 p-8 md:p-12 border-b border-gray-200">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">{name}</h1>
        <img src="/imagem_perfil.png" alt="Profile" className="w-32 h-32 rounded-full mx-auto mt-6 mb-6" />
        <p className="text-xl md:text-2xl text-gray-600 mt-2">{title}</p>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <motion.a 
          href={`mailto:${contact.email}`}
          className="hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
        >
            <MailIcon/> {contact.email}
        </motion.a>
        <motion.a 
          href={`tel:${contact.phone}`}
          className="hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
        >
            <PhoneIcon/> {contact.phone}
        </motion.a>
        <motion.a 
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
        >
            <LinkedinIcon/> LinkedIn
        </motion.a>
        <motion.a 
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
        >
            <GithubIcon/> GitHub
        </motion.a>
      </div>
    </header>
  );
};