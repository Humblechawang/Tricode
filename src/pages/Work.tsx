import { useMemo, useState } from "react";
import { teamMembers, projectCategories, projects } from "../data/portfolioData";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";

type Category = (typeof projectCategories)[number];

export default function Work() {
  const [category, setCategory] = useState<Category>("All");

  const visibleProjects = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category]
  );

  return (
    <PageTransition>
      <section className="viewport-page px-6 pb-8 pt-24 md:pt-20">
        <div className="mx-auto flex w-full max-w-content flex-1 flex-col">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="meta-label">Work</p>
              <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                Selected work.
              </h1>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                One shipped project so far. We add to this list when something
                is real.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 border-b border-border pb-2">
              {projectCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                    className={`border-b px-1 pb-2 text-sm ${
                    category === item
                      ? "border-text text-text"
                      : "border-transparent text-text-muted hover:border-text hover:text-text"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 min-h-0 flex-1">
            {visibleProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    contributors={teamMembers.filter((person) =>
                      project.contributorIds.includes(person.id)
                    )}
                  />
                ))}
              </div>
            ) : (
              <p className="border-t border-border py-8 text-text-muted">
                Nothing in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
