import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function AboutUs() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <span className="section-label">{t.about.label}</span>
            <h1>{t.about.title}</h1>
          </div>
        </section>

        <section className="about-page">
          <div className="section-container about-page-content">
            {t.about.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <h2>{t.about.directionsIntro}</h2>

            <ul className="about-directions">
              {t.about.directions.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong> — {item.description}
                </li>
              ))}
            </ul>

            <p className="about-quote">{t.about.quote}</p>

            <h2>{t.about.eventsIntro}</h2>

            <ul className="about-events">
              {t.about.events.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p>{t.about.eventsNote}</p>

            <p>{t.about.speech}</p>

            <p className="about-closing">{t.about.closing}</p>
          </div>
        </section>

        <section className="team-section">
          <div className="section-container">
            <h2>{t.about.teamTitle}</h2>

            <div className="team-grid">
              {t.about.team.map((member, i) => (
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

export default AboutUs;