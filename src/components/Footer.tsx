import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteName } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="shrink-0 border-t border-border px-6 py-5">
      <div className="mx-auto flex max-w-content flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="font-display text-[15px] font-semibold tracking-tight text-text">
            {siteName}
          </Link>
          <p className="meta-label mt-1">
            Delhi. {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <nav className="flex items-center gap-4 text-[11px] text-text-muted" aria-label="Footer">
            <Link to="/about" className="transition-colors hover:text-text">About</Link>
            <Link to="/contact" className="transition-colors hover:text-text">Contact</Link>
            <Link to="/policy" className="transition-colors hover:text-text">Policy</Link>
          </nav>

          <div className="flex items-center gap-4">
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
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-text"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/devyash-singh-865719313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-text"
          >
            <Linkedin size={16} />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
