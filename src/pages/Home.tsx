import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import TriCodeScene from "../components/TriCodeScene";
import { teamMembers } from "../data/portfolioData";

export default function Home() {
  return (
    <PageTransition>
      <section className="viewport-page relative min-h-[100dvh] overflow-visible">
        <div className="absolute inset-0">
            <TriCodeScene />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-transparent md:w-[58%]" />

        <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-content flex-col justify-center px-6 pt-16">
          <h1 className="max-w-xl font-display text-[48px] font-semibold leading-[1.04] tracking-tight text-text sm:text-6xl">
            Three builders.
            <br />
            One studio.
          </h1>
          <p className="mt-4 max-w-md text-base leading-6 text-text-muted">
            Humble, Devyash, and Ritika — computer science students in Delhi
            working across product, engineering, and data.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/team"
              className="pointer-events-auto inline-flex h-10 items-center border-b border-text text-sm font-medium text-text"
            >
              Meet the team
            </Link>
            <Link
              to="/work"
              className="pointer-events-auto inline-flex h-10 items-center border-b border-border text-sm font-medium text-text hover:border-text"
            >
              See the work
            </Link>
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {teamMembers.map((person) => (
              <Link
                key={person.id}
                to={`/team/${person.id}`}
                className="pointer-events-auto group rounded-[14px] border border-transparent px-2.5 py-2 transition-all duration-200 hover:border-text hover:bg-text hover:text-bg focus:border-text focus:bg-text focus:text-bg active:border-text active:bg-text active:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/30"
              >
                <p className="text-sm font-semibold tracking-tight text-text transition-colors duration-200 group-hover:text-bg group-focus:text-bg group-active:text-bg">
                  {person.name.split(" ")[0]}
                </p>
                <p className="mt-0.5 text-xs leading-4 text-text-muted transition-colors duration-200 group-hover:text-bg group-focus:text-bg group-active:text-bg">
                  {person.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
