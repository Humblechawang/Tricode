import { useMemo, useState } from "react";
import { people, projectCategories, projects } from "../data/portfolioData";
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
      <section className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm text-text-muted">Work</p>
              <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
                Selected work.
              </h1>
              <p className="mt-4 text-[17px] leading-7 text-text-muted">
                One shipped project so far. We add to this list when something
                is real.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`h-9 rounded-full px-4 text-sm ${
                    category === item
                      ? "bg-accent text-accent-contrast"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14">
            {visibleProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    contributors={people.filter((person) =>
                      project.contributorIds.includes(person.id)
                    )}
                  />
                ))}
              </div>
            ) : (
              <p className="border-t border-border py-16 text-text-muted">
                Nothing in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
