import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

function FestivalRules() {
  const [ref, visible] = useReveal();
  const { t } = useLanguage();

  return (
    <section id="festival-rules" className="festival-rules">
      <div
        ref={ref}
        className={`festival-rules-container reveal ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="festival-rules-header">
          <h2>{t.festivalRules.title}</h2>

          <p>{t.festivalRules.description}</p>
        </div>

        <div className="rules-grid">
          <article className="rule-card">
            <span className="mono-tag rule-number">01 / 04</span>

            <h3>{t.festivalRules.rule1.title}</h3>

            <ul>
              {t.festivalRules.rule1.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rule-card">
            <span className="mono-tag rule-number">02 / 04</span>

            <h3>{t.festivalRules.rule2.title}</h3>

            <ul>
              {t.festivalRules.rule2.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rule-card">
            <span className="mono-tag rule-number">03 / 04</span>

            <h3>{t.festivalRules.rule3.title}</h3>

            <ul>
              {t.festivalRules.rule3.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rule-card">
            <span className="mono-tag rule-number">04 / 04</span>

            <h3>{t.festivalRules.rule4.title}</h3>

            <ul>
              {t.festivalRules.rule4.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FestivalRules;
