import MagneticButton from "./MagneticButton";
import HeroRobotVisual from "./HeroRobotVisual";

function FestivalHero() {
  return (
    <section className="festival-hero">
      {/* Decorative sprockets */}
      <div
        className="sprocket-row hero-sprockets"
        aria-hidden="true"
        style={{
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="festival-hero-container">

        {/* =================================================
            LEFT — TEXT
        ================================================= */}

        <div className="festival-hero-content">

          <h1 className="hero-title">
            Beynəlxalq
            <br />
            Qısa Film
            <br />
            Festivalı
          </h1>

          <p>
            Qafqazda süni intellekt və kinonun
            kəsişməsinə həsr olunmuş ilk beynəlxalq
            film festivalı.
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

            <MagneticButton
              href="#festival-rules"
              className="festival-btn secondary"
            >
              Qaydalar
            </MagneticButton>

          </div>
        </div>

        {/* =================================================
            RIGHT — ROBOT
            (siçan izləməsi artıq komponentin özündədir)
        ================================================= */}

        <div
          className="festival-hero-visual"
          style={{
            pointerEvents: "none",
          }}
        >
          <HeroRobotVisual />
        </div>

      </div>
    </section>
  );
}

export default FestivalHero;