import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import type { Person } from "../types";
import Portrait from "./Portrait";

type Props = {
  person: Person | null;
  onClose: () => void;
};

export default function PersonModal({ person, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!person) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [person, onClose]);

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          className="fixed inset-0 z-50 bg-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="person-modal-title"
            className="grid h-full min-h-0 overflow-y-auto md:grid-cols-[minmax(280px,0.92fr)_1.08fr]"
          >
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[42vh] md:min-h-full"
            >
              <Portrait person={person} className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent md:bg-gradient-to-r" />
            </motion.div>

            <div className="relative flex flex-col px-6 py-8 md:px-14 md:py-16">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close profile"
                className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-surface-raised md:right-8 md:top-8"
              >
                <X size={18} />
              </button>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="text-[11px] uppercase tracking-[0.32em] text-accent"
              >
                {person.role}
              </motion.p>
              <motion.h2
                id="person-modal-title"
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight text-text md:text-6xl"
              >
                {person.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-text-muted"
              >
                {person.longBio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="mt-10"
              >
                <h3 className="text-[11px] uppercase tracking-[0.24em] text-text">
                  Capabilities
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {person.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {person.learning && person.learning.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.46 }}
                  className="mt-8"
                >
                  <h3 className="text-[11px] uppercase tracking-[0.24em] text-text">
                    Currently learning
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {person.learning.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-dashed border-accent/50 px-3 py-1.5 text-sm text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.54 }}
                className="mt-auto flex flex-wrap gap-3 pt-10"
              >
                {person.links.email && (
                  <a
                    href={`mailto:${person.links.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast"
                  >
                    <Mail size={14} /> Email
                  </a>
                )}
                {person.links.github && (
                  <a
                    href={person.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text transition-colors hover:bg-surface-raised"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {person.links.linkedin && (
                  <a
                    href={person.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text transition-colors hover:bg-surface-raised"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
