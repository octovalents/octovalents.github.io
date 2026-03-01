import { useState } from 'react';
import { LinkedInIcon, GitHubIcon, KaggleIcon } from '../icons/SocialIcons';

const EMAIL = 'benidictusgalih@gmail.com';

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/benidictusgalihmp/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://github.com/octovalents', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.kaggle.com/benidictusgalihmp', label: 'Kaggle', Icon: KaggleIcon },
] as const;

function CopyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={size} height={size}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
    </svg>
  );
}

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={size} height={size}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  return (
    <section id="contact" className="py-32 px-[5vw] border-t border-(--card-border)">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-(--accent) font-bold text-2xl uppercase tracking-[2px]">
          Get in Touch
        </h2>
        <p className="text-(--muted) mt-3 max-w-xl mx-auto">
          Interested in working together? Feel free to reach out.
        </p>

        <div
          role="button"
          tabIndex={0}
          onClick={handleCopy}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopy(); }}
          aria-label={copied ? 'Copied' : 'Copy email'}
          className="flex items-center justify-center gap-2.5 max-w-max mx-auto bg-gray-100 rounded-lg py-2.5 px-4 cursor-pointer transition-colors duration-200 select-none hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 mt-8"
        >
          <span className="text-(--fg) text-lg font-mono">
            {copied ? 'Copied!' : EMAIL}
          </span>
          <span className="text-(--muted) transition-colors duration-200">
            {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
          </span>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="inline-block bg-(--accent) text-(--body-bg) border-2 border-(--accent) px-7 py-3 font-semibold rounded-md transition-opacity duration-200 hover:opacity-85 mt-6"
        >
          Send an Email
        </a>

        <div className="flex justify-center gap-6 mt-8">
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
      </div>
    </section>
  );
}
