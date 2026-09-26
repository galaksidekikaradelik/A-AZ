import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import logoLight from "../assets/aiazlogomain.png";
import logoDark from "../assets/aiazlogoag.png";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [festivalOpen, setFestivalOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

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

  const closeMenu = () => {
    setMenuOpen(false);
    setFestivalOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "active" : undefined;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="AIAZ"
          />
        </Link>

        {/* NAVIGATION */}
        <div
          className={`navbar-links ${
            menuOpen ? "active" : ""
          }`}
        >
          {/* HOME */}
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={closeMenu}
          >
            {t.nav.home}
          </NavLink>

          {/* FESTIVAL DROPDOWN */}
          <div
            className={`navbar-dropdown ${
              festivalOpen ? "open" : ""
            }`}
          >
            <button
              type="button"
              className="navbar-dropdown-trigger"
              onClick={() =>
                setFestivalOpen((current) => !current)
              }
              aria-expanded={festivalOpen}
            >
              <span>{t.nav.festival}</span>
              <ChevronDown size={15} />
            </button>

            <div className="navbar-dropdown-menu">
              {/* FESTIVAL ABOUT */}
              <NavLink
                to="/festival"
                className={navLinkClass}
                onClick={closeMenu}
              >
                {t.nav.aboutFestival}
              </NavLink>

              {/* JURY */}
              <NavLink
                to="/jury"
                className={navLinkClass}
                onClick={closeMenu}
              >
                {t.nav.jury}
              </NavLink>

              {/* PROGRAM */}
              <NavLink
                to="/program"
                className={navLinkClass}
                onClick={closeMenu}
              >
                {t.nav.program}
              </NavLink>
            </div>
          </div>

          {/* NEWS */}
          <NavLink
            to="/news"
            className={navLinkClass}
            onClick={closeMenu}
          >
            {t.nav.news}
          </NavLink>

          {/* MEDIA */}
          <NavLink
            to="/media"
            className={navLinkClass}
            onClick={closeMenu}
          >
            {t.nav.gallery}
          </NavLink>

          {/* ABOUT — BU AYRICA QALIR */}
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={closeMenu}
          >
            {t.nav.about}
          </NavLink>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={closeMenu}
          >
            {t.nav.contact}
          </NavLink>
        </div>

        {/* ACTIONS */}
        <div className="navbar-actions">

          {/* FILMFREEWAY */}
          <a
            href="https://filmfreeway.com/festivals/79513"
            target="_blank"
            rel="noopener noreferrer"
            className="filmfreeway-link"
            aria-label={t.nav.submitFilm}
          >
            <img
              src="https://public-assets.filmfreeway.com/submission_buttons/v2/sm_submission_btn@2x-purple-gradient.png"
              alt={t.nav.submitFilm}
            />
          </a>

          {/* THEME */}
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label={t.nav.changeTheme}
          >
            <span className="theme-toggle-circle">
              {theme === "dark" ? (
                <Moon size={14} />
              ) : (
                <Sun size={14} />
              )}
            </span>
          </button>

          {/* LANGUAGE */}
          <div className="language-switcher">
            <button
              type="button"
              className="language-current"
              onClick={() =>
                setLanguageOpen((current) => !current)
              }
              aria-label={t.nav.changeLanguage}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            {languageOpen && (
              <div className="language-dropdown">
                <button
                  type="button"
                  className={
                    language === "az" ? "active" : ""
                  }
                  onClick={() => changeLanguage("az")}
                >
                  AZ
                </button>

                <button
                  type="button"
                  className={
                    language === "en" ? "active" : ""
                  }
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
              </div>
            )}
          </div>

          {/* MOBILE MENU */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={t.nav.openMenu}
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
