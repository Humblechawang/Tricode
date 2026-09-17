import PageTransition from "../components/PageTransition";

const process = [
  {
    step: "01",
    title: "Discover",
    detail: "Talk to the people who have the problem before opening a design file.",
  },
  {
    step: "02",
    title: "Design",
    detail: "Prototype the flow in Figma. Test it. Then commit to code.",
  },
  {
    step: "03",
    title: "Build",
    detail: "Ship a working version — backend, interface, and the join between them.",
  },
  {
    step: "04",
    title: "Refine",
    detail: "Take the feedback. Change the work. Don’t defend the first draft.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <section className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-content">
          <p className="text-sm text-text-muted">About</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            How we work.
          </h1>
          <div className="mt-12 grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-[17px] leading-7 text-text-muted">
                We’re three CS students at Dyal Singh College, University of
                Delhi. Early in our careers, and clear about it. The process is
                the point: research before design, design before code, and a
                bias toward shipping.
              </p>
              <p className="mt-5 text-[17px] leading-7 text-text-muted">
                A hackathon weekend proved we can take an idea from a whiteboard
                to something someone can actually use. We’re looking for the
                next problem worth that kind of week.
              </p>
            </div>
            <ol>
              {process.map((item) => (
                <li key={item.step} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                  <p className="text-xs text-text-muted">{item.step}</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-text">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
