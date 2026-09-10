import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function PartnersSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const partners = [
    "Partner 01",
    "Partner 02",
    "Partner 03",
    "Partner 04",
    "Partner 05",
    "Partner 06",
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="section-container">

        <div className="section-header">
          <h2>
            {t.partners.title}
          </h2>
        </div>

        <div className="partners-marquee">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-logo" key={index}>
                {partner}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PartnersSection;