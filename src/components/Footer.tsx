import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteName } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-content flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="font-display text-sm font-semibold text-text">
            {siteName}
          </Link>
          <p className="mt-1 text-xs text-text-muted">
            Delhi. {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="mailto:chawanghumble04@gmail.com"
            aria-label="Email"
            className="text-text-muted transition-colors hover:text-text"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/SidFlames"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-text"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/devyash-singh-865719313"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-text"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
