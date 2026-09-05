import { useReveal } from "../hooks/useReveal";

function FestivalCategories() {
  const [ref, visible] = useReveal();

  return (
    <section className="festival-categories">
      <div
        ref={ref}
        className={`festival-categories-container reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="festival-categories-header">
          <h2>İki yanaşma. Bir festival.</h2>

          <p>
            AIAZ insan yaradıcılığı ilə süni intellekt
            arasında unikal qiymətləndirmə sistemi yaradır.
          </p>
        </div>

        <div className="festival-category-grid">
          <article className="festival-category-card festival-category-card--human">
            <span className="mono-tag category-tag">HUMAN JURY</span>

            <svg className="category-mark" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="15" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="17" cy="17" r="4" fill="currentColor" />
            </svg>

            <h3>İnsan Jürisi</h3>
            <span className="category-subtitle">AI ilə yaradılmış filmlər</span>

            <p>
              Süni intellektlə hazırlanmış filmlər kino
              tənqidçiləri, rejissorlar və sənət
              mütəxəssislərindən ibarət insan jüri
              tərəfindən qiymətləndirilir.
            </p>
          </article>

          <article className="festival-category-card festival-category-card--ai">
            <span className="mono-tag category-tag">AI JURY — AIAZ</span>

            <svg className="category-mark" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <rect x="3" y="3" width="12" height="12" stroke="currentColor" strokeWidth="1.4" />
              <rect x="19" y="19" width="12" height="12" stroke="currentColor" strokeWidth="1.4" />
              <path d="M15 9H19M9 15V19" stroke="currentColor" strokeWidth="1.4" />
            </svg>

            <h3>AIAZ Süni İntellekti</h3>
            <span className="category-subtitle">Ənənəvi filmlər</span>

            <p>
              Ənənəvi üsullarla çəkilmiş filmlər Azərbaycan
              kinosuna dərindən bələd olan xüsusi
              təlimlənmiş AIAZ süni intellekti tərəfindən
              dəyərləndirilir.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FestivalCategories;