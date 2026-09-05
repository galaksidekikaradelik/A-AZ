import { useReveal } from "../hooks/useReveal";


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

  return (
    <section className="festival-awards">
      <div
        ref={ref}
        className={`festival-awards-container reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="festival-awards-header">

          <h2>Gələcəyin mükafatları.</h2>

          <p>
            AIAZ unikal ikili qiymətləndirmə sistemi ilə
            insan münsiflər heyətini və süni intellekti
            eyni festivalda bir araya gətirir.
          </p>
        </div>

        <div className="awards-competition">
          <span className="mono-tag awards-competition-tag">YERLİ MÜSABİQƏ</span>

          <div className="awards-row">
            <article className="award-card award-card--human">
              <AwardMark variant="human" />
              <span className="mono-tag award-jury">İnsan jüri tərəfindən</span>
              <h3>Qızıl Çip</h3>
              <p>Ən yaxşı AI ilə hazırlanmış Azərbaycan qısametrajlı bədii filmə.</p>
              <div className="award-prize">
                <span>Mükafat</span>
                <strong>0.00100 BTC</strong>
              </div>
            </article>

            <article className="award-card award-card--ai">
              <AwardMark variant="ai" />
              <span className="mono-tag award-jury">AIAZ süni intellekti tərəfindən</span>
              <h3>Platin Neyron</h3>
              <p>Ənənəvi üsulla çəkilmiş Azərbaycan qısametrajlı filminə.</p>
              <div className="award-prize">
                <span>Qiymətləndirmə</span>
                <strong>AI JURY</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="awards-competition">
          <span className="mono-tag awards-competition-tag">BEYNƏLXALQ MÜSABİQƏ</span>

          <div className="awards-row">
            <article className="award-card award-card--human">
              <AwardMark variant="human" />
              <span className="mono-tag award-jury">İnsan jüri tərəfindən</span>
              <h3>Qızıl Prompt</h3>
              <p>Ən yaxşı AI ilə hazırlanmış beynəlxalq qısametrajlı filmə.</p>
              <div className="award-prize">
                <span>Mükafat</span>
                <strong>0.00100 BTC</strong>
              </div>
            </article>

            <article className="award-card award-card--ai">
              <AwardMark variant="ai" />
              <span className="mono-tag award-jury">AIAZ süni intellekti tərəfindən</span>
              <h3>Quantum Frame</h3>
              <p>Ənənəvi beynəlxalq qısametrajlı filmə.</p>
              <div className="award-prize">
                <span>Qiymətləndirmə</span>
                <strong>AI JURY</strong>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FestivalAwards;