import { Github, Linkedin, Mail } from "lucide-react";
import type { Person } from "../types";

export default function ProfileLinks({ person }: { person: Person }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {person.links.email && (
        <a
          href={`mailto:${person.links.email}`}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast"
        >
          <Mail size={14} /> Email
        </a>
      )}
      {person.links.github && (
        <a
          href={person.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm text-text transition-colors hover:bg-surface-raised"
        >
          <Github size={14} /> GitHub
        </a>
      )}
      {person.links.linkedin && (
        <a
          href={person.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm text-text transition-colors hover:bg-surface-raised"
        >
          <Linkedin size={14} /> LinkedIn
        </a>
      )}
    </div>
  );
}
