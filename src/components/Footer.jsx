import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import {
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

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

            <div className="footer-socials">
                <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                >
                <FaFacebookF />
                </a>

                <a
                href="mailto:info@aiaz.az"
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
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                >
                <FaInstagram />
                </a>

                <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                >
                <FaYoutube />
                </a>
            </div>
            </div>
        <div className="footer-column">
          <h3>
            {t.footer.links}
          </h3>

          <a href="#home">
            {t.footer.home}
          </a>

          <a href="#news">
            {t.footer.news}
          </a>

          <a href="/festival">
            {t.footer.festival}
          </a>

          <a href="#gallery">
            {t.footer.gallery}
          </a>

          <a href="#film">
            {t.footer.film}
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AIAZ Film Festival. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;