import winners from "../data/winners.json";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import "./Winners.css";

function Winners() {
  const { language } = useLanguage();
  const t = translations[language];
  const isAz = language === "AZ";

  return (
    <section id="winners" className="winners-section">
      <div className="section-container">
        <span className="winners-label">{t.winners.label}</span>
        <h2 className="winners-title">{t.winners.title}</h2>

        <div className="winners-grid">
          {winners.map((w) => (
            <div key={w.id} className="winner-card">
              <img
                src={new URL(`../assets/2025/foto/winners/${w.poster}`, import.meta.url).href}
                alt={w.title}
                className="winner-poster"
              />
              <h3 className="winner-film-title">{w.title}</h3>
              <p className="winner-director">
                {isAz ? w.director : w.directorEn}
              </p>
              <p className="winner-award">
                {isAz ? w.award : w.awardEn}
              </p>
              {w.video && (
                <a
                  href={w.video}
                  target="_blank"
                  rel="noreferrer"
                  className="winner-video-link"
                >
                  {t.winners.watch}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Winners;