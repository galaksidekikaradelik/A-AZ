import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function Jury() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <span className="section-label">{t.jury.label}</span>
            <h1>{t.jury.title}</h1>
          </div>
        </section>

        <section className="team-section">
          <div className="section-container">
            <div className="team-grid">
              {t.jury.members.map((member, i) => (
                <div className="team-card" key={i}>
                  <div className="team-card-photo" />
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Jury;