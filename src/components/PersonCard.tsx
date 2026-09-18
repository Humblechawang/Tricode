import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Person } from "../types";
import Portrait from "./Portrait";

type Props = {
  person: Person;
};

export default function PersonCard({ person }: Props) {
  return (
    <article>
      <Link
        to={`/team/${person.id}`}
        className="group relative block rounded-[14px] border border-border bg-bg p-3 transition-transform duration-200 hover:-translate-y-1 hover:border-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/30"
      >
        <span className="absolute right-5 top-5 z-10 flex h-8 w-8 translate-x-1 -translate-y-1 items-center justify-center rounded-[14px] border border-border bg-bg text-text opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:translate-y-0 group-focus:opacity-100">
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-bg">
          <Portrait
            person={person}
            className="h-full w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0 group-focus:grayscale-0"
          />
        </div>
        <div className="pt-4">
          <p className="meta-label">{person.role}</p>
          <h3 className="line-clamp-two mt-1 text-xl font-semibold tracking-tight text-text">
            {person.name}
          </h3>
          <p className="line-clamp-two mt-1 text-sm leading-5 text-text-muted">{person.shortBio}</p>
        </div>
      </Link>
    </article>
  );
}
