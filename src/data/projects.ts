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
    summary: 'AI-powered customer support platform serving real-time messaging across WhatsApp channels.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Rails'],
    links: [
      { label: 'GitHub', url: 'https://github.com/octovalents' },
    ],
    featured: true,
  },
  {
    title: 'go-whatsapp-web-multidevice',
    summary: 'Multi-device WhatsApp Web API gateway built for high-throughput message routing.',
    tags: ['Go', 'Fiber', 'whatsmeow'],
    links: [
      { label: 'GitHub', url: 'https://github.com/octovalents' },
    ],
  },
  {
    title: 'Chatwoot (Custom Fork)',
    summary: 'Extended open-source customer engagement suite with AI agent integrations.',
    tags: ['Rails', 'Vue.js', 'PostgreSQL', 'Sidekiq'],
    links: [
      { label: 'GitHub', url: 'https://github.com/octovalents' },
    ],
  },
  {
    title: 'Portfolio',
    summary: 'This site — a fast, accessible single-page portfolio built for recruiters.',
    tags: ['React', 'TypeScript', 'Tailwind v4'],
    links: [
      { label: 'GitHub', url: 'https://github.com/octovalents/octovalents.github.io' },
      { label: 'Live', url: 'https://octovalents.github.io' },
    ],
  },
];

export default projects;
