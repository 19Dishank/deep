import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setResumeOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">

        {/* LEFT */}
        <div className="navbar-brand">Deep Patel</div>

        {/* RIGHT */}
        <div className="navbar-right">

          {/* DESKTOP NAV */}
          <div className="navbar-actions desktop-only">
            <button className="nav-link" onClick={() => scrollTo("skills")}>
              Skills
            </button>
            <button className="nav-link" onClick={() => scrollTo("projects")}>
              Projects
            </button>
            <button className="nav-link" onClick={() => scrollTo("contact")}>
              Contact
            </button>

            <div className="resume-wrapper">
              <button
                className="resume-btn"
                onClick={() => setResumeOpen(!resumeOpen)}
              >
                Resume
                <MdKeyboardArrowDown
                  className={`arrow ${resumeOpen ? "rotate" : ""}`}
                />
              </button>

              <div className={`resume-dropdown ${resumeOpen ? "open" : ""}`}>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* MOBILE ICON */}
          <button
            className="mobile-toggle mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-link" onClick={() => scrollTo("skills")}>
          Skills
        </button>
        <button className="mobile-link" onClick={() => scrollTo("projects")}>
          Projects
        </button>
        <button className="mobile-link" onClick={() => scrollTo("contact")}>
          Contact
        </button>

        <div className="mobile-resume">
          <button
            className="mobile-link"
            onClick={() => setResumeOpen(!resumeOpen)}
          >
            Resume
            <MdKeyboardArrowDown
              className={`arrow ${resumeOpen ? "rotate" : ""}`}
            />
          </button>

          <div className={`mobile-submenu ${resumeOpen ? "open" : ""}`}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
