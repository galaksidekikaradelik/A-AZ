import MagneticButton from "./MagneticButton";

function FestivalHero() {
  function handleFrameMove(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }

  function handleFrameLeave(e) {
    const el = e.currentTarget;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  }

  return (
    <section className="festival-hero">
      <div className="sprocket-row hero-sprockets" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="festival-hero-container">
        <div className="festival-hero-content">
          <h1 className="hero-title">
            Beynəlxalq
            <br />
            Qısa Film
            <br />
            Festivalı
          </h1>

          <p>
            Qafqazda süni intellekt və kinonun kəsişməsinə həsr
            olunmuş ilk beynəlxalq film festivalı.
          </p>

          <div className="festival-buttons">
            <MagneticButton
              href="https://filmfreeway.com/aiazff"
              target="_blank"
              rel="noopener noreferrer"
              className="festival-btn primary"
            >
              Müraciət et
            </MagneticButton>

            <MagneticButton href="#festival-rules" className="festival-btn secondary">
              Qaydalar
            </MagneticButton>
          </div>
        </div>

        <div className="festival-hero-visual">
          <div
            className="split-frame"
            onMouseMove={handleFrameMove}
            onMouseLeave={handleFrameLeave}
          >
            <div className="split-half split-half--human">
              <span>İNSAN</span>
            </div>
            <div className="split-half split-half--ai">
              <span>MAŞIN</span>
            </div>
            <div className="split-frame-label mono-tag">AIAZ / 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FestivalHero;