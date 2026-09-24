import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

function FestivalCategories() {
  const [ref, visible] = useReveal();
  const { t } = useLanguage();

  return (
    <section className="festival-categories">
      <div
        ref={ref}
        className={`festival-categories-container reveal ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="festival-categories-header">
          <h2>{t.festivalCategories.title}</h2>

          <p>{t.festivalCategories.description}</p>
        </div>

        <div className="festival-category-grid">
          <article className="festival-category-card festival-category-card--human">
            <span className="mono-tag category-tag">
              {t.festivalCategories.human.tag}
            </span>

            <svg
              className="category-mark"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <circle
                cx="17"
                cy="17"
                r="15"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle cx="17" cy="17" r="4" fill="currentColor" />
            </svg>

            <h3>{t.festivalCategories.human.title}</h3>

            <span className="category-subtitle">
              {t.festivalCategories.human.subtitle}
            </span>

            <p>{t.festivalCategories.human.description}</p>
          </article>

          <article className="festival-category-card festival-category-card--ai">
            <span className="mono-tag category-tag">
              {t.festivalCategories.ai.tag}
            </span>

            <svg
              className="category-mark"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <rect
                x="3"
                y="3"
                width="12"
                height="12"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect
                x="19"
                y="19"
                width="12"
                height="12"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M15 9H19M9 15V19"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>

            <h3>{t.festivalCategories.ai.title}</h3>

            <span className="category-subtitle">
              {t.festivalCategories.ai.subtitle}
            </span>

            <p>{t.festivalCategories.ai.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FestivalCategories;
