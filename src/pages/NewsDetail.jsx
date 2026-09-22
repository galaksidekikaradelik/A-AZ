import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { newsItems } from "../data/newsData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function NewsDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  const item = newsItems.find((n) => String(n.id) === id);

  if (!item) {
    return (
      <>
        <Navbar />

        <main>
          <section className="page-header">
            <div className="section-container">
              <h1>{t.news.notFound}</h1>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <Link className="news-back-link" to="/news">
              <ArrowLeft size={16} />
              {t.news.back}
            </Link>

            <span className="section-label">{item.date}</span>
            <h1>{item.title[language]}</h1>
          </div>
        </section>

        <section className="news-detail">
          <div className="section-container news-detail-content">
            <div className="news-detail-image">
              <img src={item.image} alt={item.title[language]} />
            </div>

            {item.content[language].map((paragraph, i) => (
              <Fragment key={i}>
                <p>{paragraph}</p>

                {/* Mətnin ortasına əlavə şəkil (mənbədə olduğu kimi) */}
                {item.inlineImage && item.inlineImageAfter === i && (
                  <div className="news-detail-image news-detail-image-inline">
                    <img src={item.inlineImage} alt="" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NewsDetail;