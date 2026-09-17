import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import TriCodeScene from "../components/TriCodeScene";
import { people, siteName } from "../data/portfolioData";

type Props = {
  theme: "light" | "dark";
};

export default function Home({ theme }: Props) {
  return (
    <PageTransition>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <TriCodeScene dark={theme === "dark"} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-transparent md:w-[58%]" />

        <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-content flex-col justify-center px-6 pt-16">
          <p className="text-[13px] font-medium text-accent">{siteName}</p>
          <h1 className="mt-4 max-w-xl font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl">
            Three builders.
            <br />
            One studio.
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-7 text-text-muted">
            Humble, Devyash, and Ritika — computer science students in Delhi
            working across product, engineering, and data.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/people"
              className="pointer-events-auto inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast"
            >
              Meet the team
            </Link>
            <Link
              to="/work"
              className="pointer-events-auto inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium text-text"
            >
              See the work
            </Link>
          </div>

          <div className="mt-12 flex max-w-xl flex-col gap-4 sm:flex-row sm:gap-10">
            {people.map((person) => (
              <Link
                key={person.id}
                to={`/people/${person.id}`}
                className="pointer-events-auto group"
              >
                <p className="text-[15px] font-medium tracking-tight text-text group-hover:text-accent">
                  {person.name.split(" ")[0]}
                </p>
                <p className="mt-0.5 text-[13px] text-text-muted">{person.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
