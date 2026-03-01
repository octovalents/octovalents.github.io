import { LinkedInIcon, GitHubIcon, KaggleIcon } from '../icons/SocialIcons';

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/benidictusgalihmp/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://github.com/octovalents', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.kaggle.com/benidictusgalihmp', label: 'Kaggle', Icon: KaggleIcon },
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-mesh min-h-screen flex flex-col items-center justify-center px-[5vw] text-center"
    >
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] text-(--accent) font-bold uppercase tracking-[2px] opacity-0 animate-[fade-in_0.8s_ease-out_both] [animation-delay:0.1s]">
        Benidictus Galih
      </h1>

      <p className="text-[clamp(1rem,2vw,1.25rem)] text-(--muted) uppercase tracking-[4px] mt-2 opacity-0 animate-[fade-in_0.8s_ease-out_both] [animation-delay:0.3s]">
        Software Engineer
      </p>

      <p className="text-[clamp(0.95rem,1.5vw,1.125rem)] text-(--muted) max-w-2xl mt-6 leading-relaxed opacity-0 animate-[fade-in_0.8s_ease-out_both] [animation-delay:0.5s]">
        I build reliable end-to-end products for small to medium-sized
        enterprises, specializing in backend systems, AI integrations, and
        real-time messaging.
      </p>

      <div className="flex flex-row gap-4 mt-10 max-sm:flex-col max-sm:w-full max-sm:px-4 opacity-0 animate-[fade-in_0.8s_ease-out_both] [animation-delay:0.7s]">
        <a
          href="#projects"
          className="text-(--accent) border-2 border-(--accent) px-7 py-3 font-semibold rounded-md transition-[background,color] duration-200 hover:bg-(--accent) hover:text-(--body-bg)"
        >
          View My Work ↓
        </a>
        <a
          href="#contact"
          className="bg-(--accent) text-(--body-bg) border-2 border-(--accent) px-7 py-3 font-semibold rounded-md transition-opacity duration-200 hover:opacity-85"
        >
          Get in Touch
        </a>
      </div>

      <div className="flex flex-row gap-6 mt-8 opacity-0 animate-[fade-in_0.8s_ease-out_both] [animation-delay:0.9s]">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-(--muted) transition-colors duration-200 hover:text-(--accent)"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </section>
  );
}
