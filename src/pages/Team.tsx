import { teamMembers } from "../data/portfolioData";
import PageTransition from "../components/PageTransition";
import PersonCard from "../components/PersonCard";

export default function Team() {
  return (
    <PageTransition>
      <section className="viewport-page overflow-x-hidden px-6 pb-8 pt-24 md:pt-20">
        <div className="mx-auto flex w-full max-w-content flex-1 flex-col">
          <p className="meta-label">Team</p>
          <h1 className="mt-1 max-w-2xl font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            The three of us.
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-6 text-text-muted">
            Product, systems, and data. Open a profile for the full picture or start here.
          </p>

          <div className="mt-8 grid min-h-0 flex-1 items-start gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <PersonCard key={member.id} person={member} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
