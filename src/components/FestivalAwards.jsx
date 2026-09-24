import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

function AwardMark({ variant }) {
  if (variant === "human") {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="13" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="15" r="3.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.4" />
      <rect x="17" y="17" width="10" height="10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function FestivalAwards() {
  const [ref, visible] = useReveal();
  const { t } = useLanguage();

  return (
    <section className="festival-awards">
      <div
        ref={ref}
        className={`festival-awards-container reveal ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="festival-awards-header">
          <h2>{t.festivalAwards.title}</h2>

          <p>{t.festivalAwards.description}</p>
        </div>

        <div className="awards-competition">
          <span className="mono-tag awards-competition-tag">
            {t.festivalAwards.localCompetition}
          </span>

          <div className="awards-row">
            <article className="award-card award-card--human">
              <AwardMark variant="human" />

              <span className="mono-tag award-jury">
                {t.festivalAwards.humanJury}
              </span>

              <h3>{t.festivalAwards.localHumanAward.title}</h3>

              <p>{t.festivalAwards.localHumanAward.description}</p>

            </article>

            <article className="award-card award-card--ai">
              <AwardMark variant="ai" />

              <span className="mono-tag award-jury">
                {t.festivalAwards.aiJury}
              </span>

              <h3>{t.festivalAwards.localAiAward.title}</h3>

              <p>{t.festivalAwards.localAiAward.description}</p>

            </article>
          </div>
        </div>

        <div className="awards-competition">
          <span className="mono-tag awards-competition-tag">
            {t.festivalAwards.internationalCompetition}
          </span>

          <div className="awards-row">
            <article className="award-card award-card--human">
              <AwardMark variant="human" />

              <span className="mono-tag award-jury">
                {t.festivalAwards.humanJury}
              </span>

              <h3>{t.festivalAwards.internationalHumanAward.title}</h3>

              <p>{t.festivalAwards.internationalHumanAward.description}</p>

            </article>

            <article className="award-card award-card--ai">
              <AwardMark variant="ai" />

              <span className="mono-tag award-jury">
                {t.festivalAwards.aiJury}
              </span>

              <h3>{t.festivalAwards.internationalAiAward.title}</h3>

              <p>{t.festivalAwards.internationalAiAward.description}</p>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FestivalAwards;
