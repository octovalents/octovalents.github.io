import type { Project } from '../data/projects';
import { GitHubIcon } from '../icons/SocialIcons';

function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={size} height={size}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border-2 border-(--card-border) bg-(--card-bg) hover:border-(--accent) p-6 transition-colors duration-200">
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={`${project.title} preview`}
          className="w-full h-40 object-cover rounded-md mb-4"
          loading="lazy"
        />
      )}

      <h3 className="text-(--accent) font-bold text-lg">
        {project.title}
      </h3>

      <p className="text-(--muted) text-sm mt-2 leading-relaxed flex-1">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-(--tag-bg) text-(--tag-text) text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 pt-4 border-t border-(--card-border)">
        {project.links.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--muted) hover:text-(--accent) transition-colors duration-200 flex items-center gap-1.5 text-sm font-medium"
          >
            {label === 'GitHub' ? <GitHubIcon size={16} /> : <ExternalLinkIcon size={16} />}
            {label}
          </a>
        ))}
      </div>
    </article>
  );
}
