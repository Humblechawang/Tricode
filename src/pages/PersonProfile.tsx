import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { teamMembers } from "../data/portfolioData";
import PageTransition from "../components/PageTransition";
import PortraitFrame from "../components/PortraitFrame";
import ProfileLinks from "../components/ProfileLinks";
import type { Person } from "../types";

function Skills({ person }: { person: Person }) {
  return (
    <div className="mt-10">
      <p className="text-xs font-medium text-text-muted">Focus</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {person.skills.map((skill) => (
          <li key={skill} className="border-b border-border px-1 py-1.5 text-sm text-text">
            {skill}
          </li>
        ))}
      </ul>
      {person.learning && person.learning.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-medium text-text-muted">Currently studying</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {person.learning.map((item) => (
              <li key={item} className="text-sm text-accent">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function HumbleProfile({ person }: { person: Person }) {
  return (
    <section className="min-h-[100dvh] px-6 pb-12 pt-24">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="float-slow mx-auto w-full max-w-md lg:mx-0">
          <PortraitFrame person={person} />
        </div>
        <div className="max-w-xl">
          <p className="meta-label">{person.role}</p>
          <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-text md:text-6xl">
            {person.name}
          </h1>
          <p className="mt-6 text-[17px] leading-7 text-text-muted">{person.longBio}</p>
          <Skills person={person} />
          <div className="mt-10">
            <ProfileLinks person={person} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DevyashProfile({ person }: { person: Person }) {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-24">
      <div className="relative mx-auto grid max-w-content items-center gap-10 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 max-w-xl lg:order-1">
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
            SYSTEMS · AI · BACKEND
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-text md:text-[4.25rem]">
            {person.name}
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-7 text-text-muted">
            {person.longBio}
          </p>
          <Skills person={person} />
          <div className="mt-10">
            <ProfileLinks person={person} />
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:translate-x-4 lg:rotate-1">
          <PortraitFrame person={person} aspectClass="aspect-[5/6]" />
        </div>
      </div>
    </section>
  );
}

function RitikaProfile({ person }: { person: Person }) {
  return (
    <section className="min-h-[100dvh] px-6 pb-12 pt-24">
      <div className="mx-auto flex max-w-content flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative mx-auto w-full max-w-[380px]">
          <PortraitFrame person={person} aspectClass="aspect-square" className="relative" />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <p className="meta-label">{person.role}</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-text md:text-6xl">
            {person.name}
          </h1>
          <p className="mt-6 text-[17px] leading-7 text-text-muted">{person.longBio}</p>
          <Skills person={person} />
          <div className="mt-10 flex justify-center lg:justify-start">
            <ProfileLinks person={person} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PersonProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = teamMembers.find((entry) => entry.id === id);

  if (!person) {
    return <Navigate to="/team" replace />;
  }

  return (
    <PageTransition>
      <div className="relative">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-6 top-24 z-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={16} /> Back
        </button>
        {person.id === "humble" && <HumbleProfile person={person} />}
        {person.id === "devyash" && <DevyashProfile person={person} />}
        {person.id === "ritika" && <RitikaProfile person={person} />}
        <div className="px-6 pb-16 text-center">
          <Link to="/team" className="text-sm text-text-muted hover:text-text">
            View everyone
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
