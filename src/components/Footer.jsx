import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import FilmFreewayIcon from "./FilmFreewayIcon";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>AIAZ</h3>

          <p>
            {t.footer.description}
          </p>
        </div>

        <div className="footer-column">
          <h3>{t.footer.contact}</h3>

          <p></p>

          <div className="footer-socials">

            <a
              href="https://www.facebook.com/aiazff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="mailto:aiazfilmfestival@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+994000000000"
              aria-label="Phone"
            >
              <FaPhone />
            </a>

            <a
              href="https://www.instagram.com/aiazfilmfestival/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@A%C4%B0AZFilmFestival"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://filmfreeway.com/aiazff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FilmFreeway"
            >
              <FilmFreewayIcon size={20} />
            </a>

          </div>
        </div>

        <div className="footer-column">
          <h3>{t.footer.links}</h3>

          <Link to="/">
            {t.footer.home}
          </Link>

          <Link to="/news">
            {t.footer.news}
          </Link>

          <Link to="/festival">
            {t.footer.festival}
          </Link>

          <Link to="/media">
            {t.footer.gallery}
          </Link>

          <a href="#film">
            {t.footer.film}
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        {t.footer.copyright}
      </div>
    </footer>
  );
}

export default Footer;