import React from 'react';
import type { Education, Experience, Language, Project, SkillCategory } from './types';
import { RESUME_DATA } from './constants';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';

import ScrollToTopButton from './components/ScrollToTopButton';

import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-4 sm:p-6 md:p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div 
        className="max-w-4xl mx-auto bg-gray-100 shadow-2xl rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header 
          name={RESUME_DATA.name}
          title={RESUME_DATA.title}
          contact={RESUME_DATA.contact}
        />
        <div className="p-8 md:p-12 space-y-12">
          <Section title="Resumo Profissional">
            <div className="space-y-2 text-gray-700">
              {RESUME_DATA.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section title="Experiência">
            {RESUME_DATA.experience.map((exp, index) => (
              <ExperienceItem key={index} item={exp} />
            ))}
          </Section>

          <Section title="Formação">
            {RESUME_DATA.education.map((edu, index) => (
              <EducationItem key={index} item={edu} />
            ))}
          </Section>
          
          <Section title="Cursos">
            <div className="space-y-4">
            {RESUME_DATA.courses.map((course, index) => (
              <CourseItem key={index} item={course} />
            ))}
            </div>
          </Section>

          <Section title="Skills">
            <div className="space-y-6">
              {RESUME_DATA.skills.map((category, index) => (
                <SkillCategoryItem key={index} category={category} />
              ))}
            </div>
          </Section>

          <Section title="Projetos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RESUME_DATA.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Section>
          
          <Section title="Idiomas">
              {RESUME_DATA.languages.map((lang, index) => (
                <LanguageItem key={index} language={lang} />
              ))}
          </Section>
        </div>
         <footer className="text-center p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-500">
          </p>
        </footer>
      </motion.div>
      <ScrollToTopButton />
    </main>
  );
};

const ExperienceItem: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="mb-6">
    <div className="flex justify-between items-baseline">
      <h3 className="text-lg font-semibold text-black">{item.title}</h3>
      <div className="text-sm text-gray-500 font-medium">{item.period}</div>
    </div>
    <div className="flex justify-between items-baseline mb-2">
      <p className="text-md text-gray-600 font-medium">{item.company}</p>
      <p className="text-sm text-gray-500">{item.location}</p>
    </div>
    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
      {item.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
    </ul>
  </div>
);

const EducationItem: React.FC<{ item: Education }> = ({ item }) => (
    <div className="mb-6">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold text-black">{item.degree}</h3>
        <p className="text-sm text-gray-500 font-medium">{item.period}</p>
      </div>
       <div className="flex justify-between items-baseline mb-2">
        <p className="text-md text-gray-600 font-medium">{item.institution}</p>
        <p className="text-sm text-gray-500">{item.location}</p>
      </div>
      {item.details && (
         <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm text-gray-600">
            {item.details.map((detail, i) => <li key={i} className="before:content-['›'] before:mr-2">{detail}</li>)}
         </ul>
      )}
    </div>
);

const CourseItem: React.FC<{ item: Education }> = ({ item }) => (
  <div>
    <div className="flex justify-between items-baseline">
      <h3 className="text-md font-semibold text-black">{item.degree}</h3>
      <p className="text-sm text-gray-500">{item.period}</p>
    </div>
    <p className="text-sm text-gray-600">{item.institution}</p>
  </div>
);


const SkillCategoryItem: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div>
    <h4 className="font-semibold text-md mb-2 text-black">{category.name}</h4>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, i) => <SkillBadge key={i} text={skill} />)}
    </div>
  </div>
);

const LanguageItem: React.FC<{ language: Language }> = ({ language }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <h4 className="font-semibold text-md text-black">{language.name}</h4>
      <p className="text-sm text-gray-500">{language.level}</p>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-gray-600 h-2.5 rounded-full" 
        style={{ width: `${language.proficiency}%` }}
      ></div>
    </div>
  </div>
);

export default App;