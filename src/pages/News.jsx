import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { newsItems } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";

function News() {
  const { language, t } = useLanguage();

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <h1>{t.news.title}</h1>
          </div>
        </section>

        <section className="news-page">
          <div className="section-container">
            <div className="news-page-grid">
              {newsItems.map((item) => (
                <Link
                  className="news-page-card"
                  to={`/news/${item.id}`}
                  key={item.id}
                >
                  <div className="news-page-card-image">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title[language]}
                      />
                    ) : (
                      <div className="news-page-card-image-placeholder">
                        <span>AIAZ</span>
                      </div>
                    )}
                  </div>

                  <div className="news-page-card-content">
                    <span className="news-date">
                      {item.date}
                    </span>

                    <h2>{item.title[language]}</h2>

                    <p>{item.excerpt[language]}</p>
                  </div>
                </Link>
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