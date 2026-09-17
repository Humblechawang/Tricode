import { people } from "../data/portfolioData";
import PageTransition from "../components/PageTransition";
import PersonCard from "../components/PersonCard";

export default function People() {
  return (
    <PageTransition>
      <section className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-content">
          <p className="text-sm text-text-muted">People</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            The three of us.
          </h1>
          <p className="mt-4 max-w-lg text-[17px] leading-7 text-text-muted">
            Product, systems, and data. Open a profile for the full picture —
            or start here.
          </p>

          <div className="mt-16 grid items-start gap-x-10 gap-y-16 md:grid-cols-3">
            {people.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
