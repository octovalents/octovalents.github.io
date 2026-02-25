import { LinkedInIcon, GitHubIcon, KaggleIcon } from '../icons/SocialIcons';

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/benidictus-galih/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://github.com/octovalents', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.kaggle.com/user060798', label: 'Kaggle', Icon: KaggleIcon },
] as const;

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-[5vw] text-center"
    >
      <h1 className="text-hero-name font-bold uppercase tracking-[2px] hero-reveal">
        Benidictus Galih
      </h1>

      <p className="text-hero-title uppercase tracking-[4px] mt-2 hero-reveal [animation-delay:0.4s]">
        Software Engineer
      </p>

      <p className="text-hero-summary max-w-2xl mt-6 leading-relaxed hero-reveal [animation-delay:0.8s]">
        I build reliable end-to-end products for small to medium-sized
        enterprises, specializing in backend systems, AI integrations, and
        real-time messaging.
      </p>

      <div className="flex flex-row gap-4 mt-10 max-sm:flex-col max-sm:w-full max-sm:px-4">
        <a
          href="#projects"
          className="hero-btn-outline rounded-md hero-reveal [animation-delay:1.2s]"
        >
          View My Work ↓
        </a>
        <a
          href="#contact"
          className="hero-btn-solid rounded-md hero-reveal [animation-delay:1.4s]"
        >
          Get in Touch
        </a>
      </div>

      <div className="flex flex-row gap-6 mt-8">
        {SOCIAL_LINKS.map(({ href, label, Icon }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hero-social hero-reveal"
            style={{ animationDelay: `${1.8 + i * 0.15}s` }}
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
}
