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
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="portrait-grid absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-[14px] border border-border bg-bg text-2xl font-semibold tracking-wide text-text">
            {person.initials}
          </div>
          <p className="meta-label mt-4">
            Photo space
          </p>
        </div>
      )}
    </div>
  );
}
