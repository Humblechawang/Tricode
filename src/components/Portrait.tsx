import { useState } from "react";
import type { Person } from "../types";

type Props = {
  person: Person;
  className?: string;
};

export default function Portrait({ person, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(person.photo) && !failed;

  return (
    <div
      className={`relative overflow-hidden bg-accent-soft ${className}`}
    >
      {showPhoto ? (
        <img
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: person.photoPosition ?? "center" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="portrait-grid absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 bg-bg/70 text-2xl font-semibold tracking-wide text-accent backdrop-blur-sm">
            {person.initials}
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-text-muted">
            Photo space
          </p>
        </div>
      )}
    </div>
  );
}
