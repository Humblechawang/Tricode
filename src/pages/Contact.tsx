import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { people } from "../data/portfolioData";

export default function Contact() {
  return (
    <PageTransition>
      <section className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-content">
          <p className="text-sm text-text-muted">Contact</p>
          <h1 className="mt-2 max-w-xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-lg text-[17px] leading-7 text-text-muted">
            A project, a team, or a problem that needs building. Write to any
            of us.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {people.map((person) => (
              <div key={person.id} className="border-t border-border pt-6">
                <Link to={`/people/${person.id}`} className="text-lg font-semibold tracking-tight text-text">
                  {person.name}
                </Link>
                <p className="mt-1 text-sm text-text-muted">{person.role}</p>
                <div className="mt-5 flex flex-col gap-2 text-sm">
                  {person.links.email && (
                    <a href={`mailto:${person.links.email}`} className="inline-flex items-center gap-2 text-text-muted hover:text-text">
                      <Mail size={14} /> {person.links.email}
                    </a>
                  )}
                  {person.links.github && (
                    <a
                      href={person.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-muted hover:text-text"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {person.links.linkedin && (
                    <a
                      href={person.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-muted hover:text-text"
                    >
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
