import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-section">
          <div className="contact-left">
            <h2>{t.contact.informationTitle}</h2>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>{t.contact.addressLabel}</span>

                <p>
                  Moskva 9, Yasamal, Bakı, AZ1012
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>{t.contact.emailLabel}</span>

                <p>info@aiazff.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>{t.contact.mediaLabel}</span>

                <p>+994 50 351 40 24</p>
              </div>
            </div>
            

            
          </div>

          <div className="contact-right">
            <h2>{t.contact.messageTitle}</h2>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>{t.contact.fullName} *</label>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <label>{t.contact.email} *</label>
                  <input type="email" />
                </div>
              </div>

              <div className="form-group">
                <label>{t.contact.subject}</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>{t.contact.message} *</label>

                <textarea rows="8"></textarea>
              </div>

              <button type="submit" className="contact-btn">
                {t.contact.sendMessage} →
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
