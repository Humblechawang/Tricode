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
      <section className="viewport-page px-5 sm:px-6">
        <div className="mx-auto flex min-h-[calc(100dvh-72px)] w-full max-w-content items-center py-20 md:py-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="mx-auto block w-full max-w-[460px] lg:mx-0">
              <div className="aspect-[4/5] max-h-[420px] w-full overflow-hidden rounded-[14px] border border-border bg-bg">
                <img
                  src="/images/group-photo.jpg"
                  alt="TriCode team collaborating around a laptop"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <p className="mt-3 px-1 text-xs text-text-muted">
                TriCode studio · Delhi
              </p>
            </div>

            <div className="max-w-2xl">
              <div>
                <p className="meta-label">About</p>
                <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
                  How we build.
                </h1>
              </div>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-text-muted">
                <p>
                  TriCode is an independent design and engineering collective. We turn complex technical problems into clean, high-utility digital products—grounded in research, refined in code, and built to ship.
                </p>
                <p>
                  Whether building internal products, conducting open data research, or documenting our journey, we operate with a single rule: research before polish, design before scale, and ship before perfection.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto min-h-[100dvh] w-full max-w-content border-t border-border py-16 md:py-20">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="lg:col-span-4">
              <p className="meta-label">Process</p>
            </div>
            <ol className="contents">
                {process.map((item) => (
                  <li key={item.step} className="border-t border-border py-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-medium tracking-[0.18em] text-text-muted">{item.step}</span>
                      <h2 className="text-lg font-semibold tracking-tight text-text">{item.title}</h2>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-text-muted">{item.detail}</p>
                  </li>
                ))}
              </ol>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
