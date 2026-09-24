import { useLanguage } from "../context/LanguageContext";
import { newsItems } from "../data/newsData";

function NewsSection() {
  const { language, t } = useLanguage();

  // Əsas səhifədə yalnız ilk 3 xəbər göstərilir
  const news = newsItems.slice(0, 3);

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
              href={`/news/${item.id}`}
              className="news-card"
              key={item.id}
            >
              <div className="news-card-image">
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