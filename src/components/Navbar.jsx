import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import logoLight from "../assets/aiazlogomain.png";
import logoDark from "../assets/aiazlogoag.png";
import { Film } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setLanguageOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "active" : undefined;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="AIAZ"
          />
        </Link>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {language === "AZ" ? "Ana səhifə" : "Home"}
          </NavLink>

          <NavLink
            to="/festival"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Festival
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {language === "AZ" ? "Haqqımızda" : "About"}
          </NavLink>

          <NavLink
            to="/jury"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {language === "AZ" ? "Jüri" : "Jury"}
          </NavLink>

          <NavLink
            to="/news"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {language === "AZ" ? "Xəbərlər" : "News"}
          </NavLink>

          <NavLink
            to="/media"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Media
          </NavLink>
        </div>

        <div className="navbar-actions">
         <a
            href="https://filmfreeway.com/festivals/79513"
            target="_blank"
            rel="noopener noreferrer"
            className="filmfreeway-link"
            aria-label="Submit on FilmFreeway"
          >
            <img
              src="https://public-assets.filmfreeway.com/submission_buttons/v2/sm_submission_btn@2x-purple-gradient.png"
              alt="Submit on FilmFreeway"
            />
          </a>
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label="Change theme"
          >
            <span className="theme-toggle-circle">
              {theme === "dark" ? (
                <Moon size={14} />
              ) : (
                <Sun size={14} />
              )}
            </span>
          </button>

          <div className="language-switcher">
            <button
              className="language-current"
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>

            {languageOpen && (
              <div className="language-dropdown">
                <button
                  className={language === "AZ" ? "active" : ""}
                  onClick={() => changeLanguage("AZ")}
                >
                  AZ
                </button>

                <button
                  className={language === "EN" ? "active" : ""}
                  onClick={() => changeLanguage("EN")}
                >
                  EN
                </button>
              </div>
            )}
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;