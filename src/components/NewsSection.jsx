import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";


const news = [
  {
    id: 1,
    title: {
      AZ: "AIAZ Film Festival 2026 elan edildi",
      EN: "AIAZ Film Festival 2026 Announced",
    },
    date: "04.09.2026",
    image: news1,
    link: "/news/aiaz-film-festival-2026",
  },
  {
    id: 2,
    title: {
      AZ: "Süni intellekt və kino: yeni dövr başlayır",
      EN: "Artificial Intelligence and Cinema: A New Era Begins",
    },
    date: "28.08.2026",
    image: news2,
    link: "/news/ai-and-cinema",
  },
  {
    id: 3,
    title: {
      AZ: "AIAZ Film Festivalına müraciətlər başladı",
      EN: "Applications for AIAZ Film Festival Are Now Open",
    },
    date: "20.08.2026",
    image: news3,
    link: "/news/applications-open",
  },
  {
    id: 4,
    title: {
      AZ: "Festivalın proqramı və əsas istiqamətləri",
      EN: "Festival Program and Main Directions",
    },
    date: "15.08.2026",
    image: news4,
    link: "/news/festival-program",
  },
];

function NewsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="news" className="news-section">
      <div className="section-container">

        <div className="section-header">
          <h2>
            {t.news.title}
          </h2>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <a
              href={item.link}
              className="news-card"
              key={item.id}
            >
              <div className="news-card-image">
                <img
                  src={item.image}
                  alt={item.title[language]}
                />
              </div>

              <div className="news-card-content">
                <span className="news-date">
                  {item.date}
                </span>

                <h3>
                  {item.title[language]}
                </h3>

                <span className="news-read">
                  {t.news.read}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="news-more">
          <a
            href="/news"
            className="news-more-button"
          >
            {t.news.more}
          </a>
        </div>

      </div>
    </section>
  );
}

export default NewsSection;