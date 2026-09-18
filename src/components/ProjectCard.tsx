import { Github } from "lucide-react";
import type { Person, Project } from "../types";

type Props = {
  project: Project;
  contributors: Person[];
};

export default function ProjectCard({ project, contributors }: Props) {
  return (
    <article className="min-w-0 border-t border-border py-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="line-clamp-two text-xl font-semibold tracking-tight text-text">{project.title}</h3>
        {project.status === "building" && (
          <span className="meta-label shrink-0 border border-border px-2 py-1 text-text">
            Building
          </span>
        )}
      </div>

      <p className="line-clamp-two mt-2 text-sm leading-5 text-text-muted">
        {project.description}
      </p>

      <p className="mt-3 text-xs text-text-muted">
        {contributors.map((c) => c.name).join(" · ")}
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="border border-border px-2 py-1 text-xs text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          <Github size={14} /> View source
        </a>
      )}
    </article>
  );
}
