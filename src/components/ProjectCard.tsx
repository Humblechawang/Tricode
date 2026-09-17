import { Github } from "lucide-react";
import type { Person, Project } from "../types";

type Props = {
  project: Project;
  contributors: Person[];
};

export default function ProjectCard({ project, contributors }: Props) {
  return (
    <article className="border-t border-border pt-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[22px] font-semibold tracking-tight text-text">{project.title}</h3>
        {project.status === "building" && (
          <span className="shrink-0 rounded-full border border-dashed border-accent/50 px-2.5 py-1 text-xs text-accent">
            Building
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <p className="mt-4 text-xs text-text-muted">
        {contributors.map((c) => c.name).join(" · ")}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          <Github size={14} /> View source
        </a>
      )}
    </article>
  );
}
