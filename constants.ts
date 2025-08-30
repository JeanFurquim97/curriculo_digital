
import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: 'Jean Carlos Furquim de Oliveira',
  title: 'Estagiário de TI',
  contact: {
    phone: '+55(15)997175519',
    email: 'jeancarlosfurquimoliveira@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jeanoliveira-dev/',
    github: 'https://github.com/jeanpk12',
  },
  summary: [
    'Tenho experiência em Python, JavaScript, Inteligência Artificial (IA), automação de processos e desenvolvimento de sistemas web. Atuei em projetos práticos de destaque, como:',
    '• Automação de cortes de vídeos criativos com potencial de viralização em plataformas de vídeos verticais (TikTok, Reels, Shorts) utilizando IA.',
    '• Desenvolvimento de chatbot para a Prefeitura de Salto de Pirapora, utilizando Python e integração de APIs.',
    '• Implementação de solução com IA para busca, análise e extração de informações-chave em processos judiciais de usucapião, reduzindo tempo de análise em centenas de páginas e aumentando a eficiência do fluxo jurídico.',
    'Possuo interesse em aplicar tecnologias de automação, machine learning e análise de dados para gerar eficiência e inovação em ambientes corporativos.',
  ],
  experience: [
    {
      title: 'Estagiário de TI',
      company: 'Prefeitura Municipal de Salto de Pirapora',
      period: '12/2022 - 08/2025',
      location: 'Salto de Pirapora, Brazil',
      responsibilities: [
        'Suporte e Configuração de Computadores, Notebooks e Impressoras',
        'Manutenções de Hardware Preventivas e Corretivas',
        'Cabeamento estruturado',
        'Suporte aos usuários',
        'Automação de tarefas',
        'Modernização de processos com IA',
        'Auxiliei a equipe de TI na formulação e implementação de um chatbot institucional utilizando a API do Gemini da google e n8n',
        'Automatizei rotinas de análise e extração de dados de processos judiciais de centenas de páginas com IA',
      ],
    },
  ],
  projects: [
    {
      title: 'Simplificador de Textos Técnicos',
      period: 'Recente',
      location: 'Projeto Pessoal',
      description:
        'Desenvolvimento de uma aplicação web voltada à tradução de textos altamente técnicos (techniquês) para linguagem clara e acessível, com foco em usabilidade e escalabilidade. O sistema combina práticas modernas de frontend e backend, envolvendo recursos de renderização híbrida e integração com IA generativa.',
      link: 'https://simplifica-ai.vercel.app/',
      techStack: ['Next.js', 'TailwindCSS', 'Lucide React', 'Google Gemini API'],
    },
    {
      title: 'llama-infinite-quiz',
      period: '08/2024',
      location: 'Salto de Pirapora, Brazil',
      description: 'Quiz em Vue.js que utiliza uma API de IA para gerar questões dinâmicas com base em temas definidos pelo usuário.',
      link: 'https://llama-infinite-quiz.vercel.app/',
      techStack: ['Vue.js', 'API Llama 3 via groq', 'Canvas Confeti'],
    },
    {
      title: 'todo_list_com_flask_e_vue',
      period: 'Projeto Acadêmico',
      location: 'GitHub',
      description:
        'Aplicação de Lista de Afazeres com Flask e Vue.js. Implementação de API REST em Flask para operações CRUD. Criação de interface interativa e reativa para gerenciamento de tarefas usando Vue.js. Comunicação entre frontend e backend feita com axios. Utilização de banco de dados em memória, uma implementação simples para fins de demonstração.',
      link: 'https://github.com/jeanpk12/todo_list_com_flask_e_vue',
      techStack: ['Flask', 'Vue.js', 'Axios', 'Python'],
    },
  ],
  education: [
    {
      degree: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Anhanguera Educacional',
      period: 'Conclusão em 06/2026',
      location: 'Sorocaba, Brazil',
      details: [
        'Programação (Python, JavaScript, entre outras)',
        'Modelagem de dados',
        'Bancos de dados',
        'Engenharia de Software',
        'Administração de redes e sistemas',
        'Sistemas operacionais',
        'Segurança da informação',
        'Computação em nuvem',
        'Desenvolvimento web/mobile',
        'Inteligência artificial',
      ]
    },
  ],
  courses: [
    {
        degree: 'Linguagem de Programação Python',
        institution: 'Fundação Bradesco',
        period: '01/2024 - 03/2025',
        location: 'Sorocaba, Brazil',
    },
    {
        degree: 'Formação Python Backend Developer',
        institution: 'Digital Innovation One',
        period: '01/2024 - 03/2025',
        location: 'Sorocaba, Brazil',
    },
    {
        degree: 'Front-end em React',
        institution: 'Digital Innovation One',
        period: '01/2024 - 03/2025',
        location: 'Sorocaba, Brazil',
    },
  ],
  skills: [
    { name: 'Linguagens', skills: ['Python', 'JavaScript'] },
    { name: 'Frameworks & Bibliotecas', skills: ['React', 'Vue.js', 'Flask', 'Next.js'] },
    { name: 'Ferramentas & Plataformas', skills: ['Docker', 'GitHub', 'n8n', 'Google Gemini API'] },
    { name: 'Áreas', skills: ['Automação', 'Big Data', 'Suporte Técnico', 'Manutenção de Hardware'] },
  ],
  languages: [
    { name: 'Inglês', level: 'B1 - Intermediário', proficiency: 60 },
    { name: 'Espanhol', level: 'A2 - Básico', proficiency: 40 },
  ],
};
