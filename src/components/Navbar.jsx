import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

const navItems = [
  { id: "about", label: "ABOUT", number: "01" },
  { id: "skills", label: "SKILLS", number: "02" },
  { id: "projects", label: "PROJECTS", number: "03" },
  { id: "experience", label: "EXPERIENCE", number: "04" },
  { id: "certifications", label: "CERTIFICATIONS", number: "05" },
  { id: "contact", label: "CONTACT", number: "06" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.05, 0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  const activeItem =
    navItems.find((item) => item.id === activeSection) || navItems[0];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          className="navbar-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <span className="brand-icon">
            <Terminal size={16} />
          </span>

          <span className="brand-text">
            <strong>SAM</strong>
            <small>DEVOPS ENGINEER</small>
          </span>
        </button>

        <nav className={`navbar-links ${mobileOpen ? "mobile-open" : ""}`}>
          <div className="nav-mobile-header">
            <span>NAVIGATION_MATRIX</span>

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <X size={19} />
            </button>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="nav-number">{item.number}</span>

              <span className="nav-label">{item.label}</span>

              {activeSection === item.id && (
                <span className="nav-active-line" />
              )}
            </button>
          ))}

          <a
            className="nav-resume"
            href="/images/DevOpsSam.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            RESUME
            <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className="navbar-right">
          <div className="nav-current">
            <span>SECTION</span>
            <strong>{activeItem.number}</strong>
            <em>/</em>
            <strong>{String(navItems.length).padStart(2, "0")}</strong>
          </div>

          <div className="nav-online">
            <span />
            ONLINE
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen((previous) => !previous)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="navbar-bottom-line" />
    </header>
  );
}

export default Navbar;
