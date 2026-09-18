import { Github, Linkedin, Mail } from "lucide-react";
import type { Person } from "../types";

export default function ProfileLinks({ person }: { person: Person }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {person.links.email && (
        <a
          href={`mailto:${person.links.email}`}
          className="inline-flex h-10 items-center gap-2 border-b border-text text-sm font-medium text-text"
        >
          <Mail size={14} /> Email
        </a>
      )}
      {person.links.github && (
        <a
          href={person.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 border-b border-border text-sm text-text transition-colors hover:border-text"
        >
          <Github size={14} /> GitHub
        </a>
      )}
      {person.links.linkedin && (
        <a
          href={person.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 border-b border-border text-sm text-text transition-colors hover:border-text"
        >
          <Linkedin size={14} /> LinkedIn
        </a>
      )}
    </div>
  );
}
