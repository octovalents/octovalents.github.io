export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  thumbnail?: string;
  links: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'Jangkau AI',
    summary:
      'AI-powered customer support platform built on LangGraph agent, customized Chatwoot fork, and Go-based WhatsApp gateway — orchestrating real-time messaging across channels.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Rails', 'Vue.js', 'Go', 'PostgreSQL', 'Redis', 'Sidekiq'],
    thumbnail: '/jangkau-ai.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/radyalabs/chatwoot' },
      { label: 'Website', url: 'https://jangkau.ai/en' },
    ],
    featured: true,
  },
  {
    title: 'Portfolio',
    summary: 'This site — a fast, accessible single-page portfolio built for recruiters.',
    tags: ['React', 'TypeScript', 'Tailwind v4'],
    thumbnail: '/portfolio.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/octovalents/octovalents.github.io' },
      { label: 'Website', url: 'https://octovalents.github.io' },
    ],
  },
  {
    title: 'Planville PV App',
    summary:
      'Led the development of a solar panel planning and project management platform for a German energy renovation firm.',
    tags: ['Technical PM', 'Scrum', 'React', 'Python', 'Django'],
    thumbnail: '/pv.png',
    links: [
      { label: 'Company', url: 'https://planville.de' },
    ],
  },
];

export default projects;
