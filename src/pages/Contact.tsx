import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { teamMembers } from "../data/portfolioData";

const studioEmail = "studio@tricode.dev";

export default function Contact() {
  return (
    <PageTransition>
      <main className="viewport-page px-6 pb-8 pt-24 md:pt-20">
        <div className="mx-auto flex min-h-[calc(100dvh-96px)] min-w-0 w-full max-w-content flex-col justify-center">
          <header className="max-w-2xl">
            <p className="meta-label">Contact</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
              Get in touch.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-text-muted">
              Have a project, research inquiry, or idea? Reach out directly to the studio or contact any of us individually.
            </p>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:gap-8">
            <section className="border-t border-border py-5 md:py-6" aria-labelledby="studio-contact-heading">
              <h2 id="studio-contact-heading" className="meta-label">
                Studio contact
              </h2>
              <div className="mt-7 space-y-6">
                <div>
                  <p className="meta-label">General inquiries</p>
                  <a href={`mailto:${studioEmail}`} className="mt-2 inline-flex items-center gap-2 rounded-[14px] border border-transparent px-2 py-1 text-base font-medium text-text transition-colors hover:border-text hover:bg-text hover:text-bg focus-visible:outline-none">
                    {studioEmail}<ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
                <div>
                  <p className="meta-label">Location</p>
                  <p className="mt-2 text-base font-medium text-text">Delhi, India</p>
                </div>
                <div>
                  <p className="meta-label">Socials</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <SocialLink href="https://github.com/SidFlames" label="GitHub" icon={<Github size={14} />} />
                    <SocialLink href="https://linkedin.com/in/devyash-singh-865719313" label="LinkedIn" icon={<Linkedin size={14} />} />
                    <SocialLink href="https://x.com/tricode" label="X" icon={<span className="text-xs font-semibold">X</span>} />
                  </div>
                </div>
              </div>
            </section>

            <section className="min-w-0 border-t border-border py-5 md:py-6" aria-labelledby="direct-contact-heading">
              <h2 id="direct-contact-heading" className="meta-label">Direct contacts</h2>
              <div className="mt-3 divide-y divide-border">
                {teamMembers.map((person) => (
                  <div key={person.id} className="flex min-w-0 flex-wrap items-center gap-3 py-4 first:pt-3 last:pb-3 md:flex-nowrap">
                    <Link to={`/team/${person.id}`} aria-label={`View ${person.name}'s profile`} className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-border bg-bg text-sm font-semibold text-text transition-colors hover:border-text hover:bg-text hover:text-bg focus-visible:outline-none">
                      {person.initials}
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link to={`/team/${person.id}`} className="block truncate text-base font-semibold tracking-tight text-text hover:text-text-muted">{person.name}</Link>
                      <span className="meta-label mt-1 inline-flex max-w-full truncate">{person.role}</span>
                    </div>
                    {person.links.email && (
                      <a href={`mailto:${person.links.email}`} className="group flex w-full max-w-full shrink-0 items-center gap-1 text-left text-xs text-text-muted transition-colors hover:text-text focus-visible:outline-none sm:text-sm md:w-auto md:max-w-[48%] md:text-right">
                        <span className="truncate">{person.links.email}</span><ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border-b border-border px-1 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-text hover:text-text focus-visible:outline-none">
      {icon}{label}<ArrowUpRight size={12} aria-hidden="true" />
    </a>
  );
}
