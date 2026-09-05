import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// TODO: real content will replace this placeholder list later
const news = [
  {
    id: 1,
    title: {
      AZ: "AIAZ Film Festival 2026 elan edildi",
      EN: "AIAZ Film Festival 2026 Announced",
    },
    excerpt: {
      AZ: "Bu xəbərin tam mətni sonra əlavə olunacaq.",
      EN: "Full article text will be added here later.",
    },
    date: "04.09.2026",
    image: news1,
  },
  {
    id: 2,
    title: {
      AZ: "Süni intellekt və kino: yeni dövr başlayır",
      EN: "Artificial Intelligence and Cinema: A New Era Begins",
    },
    excerpt: {
      AZ: "Bu xəbərin tam mətni sonra əlavə olunacaq.",
      EN: "Full article text will be added here later.",
    },
    date: "28.08.2026",
    image: news2,
  },
  {
    id: 3,
    title: {
      AZ: "AIAZ Film Festivalına müraciətlər başladı",
      EN: "Applications for AIAZ Film Festival Are Now Open",
    },
    excerpt: {
      AZ: "Bu xəbərin tam mətni sonra əlavə olunacaq.",
      EN: "Full article text will be added here later.",
    },
    date: "20.08.2026",
    image: news3,
  },
  {
    id: 4,
    title: {
      AZ: "Festivalın proqramı və əsas istiqamətləri",
      EN: "Festival Program and Main Directions",
    },
    excerpt: {
      AZ: "Bu xəbərin tam mətni sonra əlavə olunacaq.",
      EN: "Full article text will be added here later.",
    },
    date: "15.08.2026",
    image: news4,
  },
];

function News() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <span className="section-label">{t.news.label}</span>
            <h1>{t.news.title}</h1>
          </div>
        </section>

        <section className="news-page">
          <div className="section-container">
            <div className="news-page-grid">
              {news.map((item) => (
                <article className="news-page-card" key={item.id}>
                  <div className="news-page-card-image">
                    <img src={item.image} alt={item.title[language]} />
                  </div>

                  <div className="news-page-card-content">
                    <span className="news-date">{item.date}</span>
                    <h2>{item.title[language]}</h2>
                    <p>{item.excerpt[language]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default News;