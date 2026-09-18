import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteName } from "../data/portfolioData";

const links = [
  { label: "Team", to: "/team" },
  { label: "Work", to: "/work" },
  { label: "Post", to: "/post" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors ${
        solid
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-[17px] font-semibold tracking-tight text-text"
        >
          {siteName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/team"}
              className={({ isActive }) =>
                `relative text-[13px] tracking-tight transition-colors hover:text-text ${
                  isActive ? "nav-link-active font-medium text-text" : "text-text-muted"
                } after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-text after:transition-transform`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[14px] border border-border text-text md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-sm ${isActive ? "font-medium text-text" : "text-text-muted"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
