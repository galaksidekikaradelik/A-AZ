import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

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

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img src="/src/assets/logo.webp" alt="" />
        </Link>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {language === "AZ" ? "Ana səhifə" : "Home"}
          </Link>

          <Link to="/festival" onClick={() => setMenuOpen(false)}>
            Festival
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {language === "AZ" ? "Haqqımızda" : "About"}
          </Link>

          <Link to="/news" onClick={() => setMenuOpen(false)}>
            {language === "AZ" ? "Xəbərlər" : "News"}
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            {language === "AZ" ? "Qalereya" : "Gallery"}
          </Link>
        </div>

        <div className="navbar-actions">

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