import { useReveal } from "../hooks/useReveal";

function FestivalRules() {
  const [ref, visible] = useReveal();

  return (
    <section id="festival-rules" className="festival-rules">
      <div
        ref={ref}
        className={`festival-rules-container reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="festival-rules-header">
          <h2>Müsabiqənin qaydaları.</h2>

          <p>
            Festivalda iştirak etməzdən əvvəl film təqdimatı
            və iştirak şərtləri ilə tanış olun.
          </p>
        </div>

        <div className="rules-grid">
          <article className="rule-card">
            <span className="mono-tag rule-number">01 / 04</span>
            <h3>Film tələbləri</h3>
            <ul>
              <li>Təqdim olunan filmlər son iki ildə istehsal olunmalıdır.</li>
              <li>Filmlərin müddəti 1 dəqiqədən az, 30 dəqiqədən çox olmamalıdır.</li>
              <li>Filmlər ingilis dilində .srt formatında altyazı ilə təqdim edilməlidir.</li>
            </ul>
          </article>

          <article className="rule-card">
            <span className="mono-tag rule-number">02 / 04</span>
            <h3>Təqdimat materialları</h3>
            <ul>
              <li>Hər bir film üçün treyler və poster təqdim olunmalıdır.</li>
              <li>Rejissorun tam adı, qısa bioqrafiyası və fotoşəkli əlavə olunmalıdır.</li>
              <li>Təqdim olunan materiallar festivalın təbliği və təqdimatı üçün istifadə oluna bilər.</li>
            </ul>
          </article>

          <article className="rule-card">
            <span className="mono-tag rule-number">03 / 04</span>
            <h3>AI filmləri</h3>
            <ul>
              <li>İstehsal zamanı istifadə olunmuş süni intellekt alətləri təqdim edilməlidir.</li>
              <li>İstifadə olunan platformalar və modellərin ətraflı siyahısı əlavə olunmalıdır.</li>
              <li>AI və ənənəvi kateqoriyalar üzrə bir rejissor yalnız bir film təqdim edə bilər.</li>
            </ul>
          </article>

          <article className="rule-card rule-card--highlight">
            <span className="mono-tag rule-number">04 / 04</span>
            <h3>Razılıq</h3>
            <p>
              Festivalda iştirak üçün film təqdim edən şəxs
              yuxarıda qeyd olunan bütün şərtlərlə razılaşmış
              hesab olunur.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FestivalRules;