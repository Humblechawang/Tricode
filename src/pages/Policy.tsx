import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const charterSections = [
  {
    number: "01",
    id: "studio-manifesto",
    eyebrow: "Studio Manifesto",
    title: "Building in the Open",
    copy:
      "TriCode is a self-directed venture studio. We aren't a service agency or a software consultancy—we are three builders creating high-utility tools, running experiments, and documenting every stage of our journey toward launching a venture-backed startup.",
  },
  {
    number: "02",
    id: "research-policy",
    eyebrow: "Content & Research Policy",
    title: "Knowledge Sharing & Logs",
    copy:
      "Our research archives, post write-ups, and maker logs reflect our real-time technical exploration. While we strive for accuracy in our engineering and data insights, all published research is shared 'as-is' for educational and community discussion.",
  },
  {
    number: "03",
    id: "intellectual-property",
    eyebrow: "Intellectual Property & Code",
    title: "Startup Assets & Codebases",
    copy:
      "Unless explicitly marked as open-source, all custom codebases, design systems, algorithms, and brand assets associated with TriCode and its spin-off startups are proprietary intellectual property. Open-source repositories hosted on our GitHub carry their respective public licenses.",
  },
  {
    number: "04",
    id: "collaboration",
    eyebrow: "Collaboration & Contact",
    title: "Inquiries & Co-building",
    copy:
      "We do not accept freelance client work or custom contract jobs. However, we are always open to conversations with fellow builders, technical advisors, researchers, and early-stage investors aligned with our build roadmap.",
  },
];

export default function Policy() {
  return (
      <PageTransition>
        <main className="px-6 pb-20 pt-24 md:pt-28">
          <div className="mx-auto w-full max-w-content">
            <header className="max-w-3xl border-b border-border pb-10">
              <p className="meta-label">
                TriCode / Studio Charter
              </p>
              <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-text md:text-5xl">
                An open manifesto for how we build.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
                This is the working charter behind TriCode: what we make, what we share, what we protect, and who we want to build alongside.
              </p>
            </header>

            <div className="mt-10 grid gap-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-20">
              <aside className="lg:sticky lg:top-24 lg:h-fit">
                <p className="meta-label">
                  On this page
                </p>
                <nav className="mt-4 grid gap-3" aria-label="Studio charter sections">
                  {charterSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-text"
                    >
                      <span className="meta-label group-hover:text-text">
                        {section.number}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
                <Link
                  to="/"
                  className="mt-8 inline-flex rounded-[14px] border border-border px-3 py-2 text-xs font-medium text-text transition-colors hover:border-text hover:bg-text hover:text-bg"
                >
                  Back home
                </Link>
              </aside>

              <div className="min-w-0 divide-y divide-border border-t border-border">
                {charterSections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 py-10 first:pt-8 md:py-14">
                    <div className="grid gap-5 md:grid-cols-[150px_minmax(0,1fr)] md:gap-10">
                      <p className="meta-label">
                        {section.number} / {section.eyebrow}
                      </p>
                      <div>
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-text md:text-3xl">
                          {section.title}
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted md:text-lg">
                          {section.copy}
                        </p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    );
}