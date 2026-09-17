import { Link } from "react-router-dom";
import type { Person } from "../types";
import PortraitFrame from "./PortraitFrame";

type Props = {
  person: Person;
};

export default function PersonCard({ person }: Props) {
  return (
    <article>
      <Link to={`/people/${person.id}`} className="block">
        <PortraitFrame
          person={person}
          aspectClass={person.frame === "lens" ? "aspect-square" : "aspect-[4/5]"}
        />
      </Link>
      <div className="pt-5">
        <p className="text-sm text-text-muted">{person.role}</p>
        <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-text">
          {person.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{person.shortBio}</p>
        <Link
          to={`/people/${person.id}`}
          className="mt-4 inline-block text-sm font-medium text-accent"
        >
          Profile
        </Link>
      </div>
    </article>
  );
}
