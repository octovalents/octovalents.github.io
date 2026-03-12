import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-[5vw]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-(--accent) font-bold text-2xl uppercase tracking-[2px] text-center">
          Projects
        </h2>
        <p className="text-(--muted) text-center mt-3 max-w-xl mx-auto">
          Selected work covering backend systems, AI integrations, and real-time messaging.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
