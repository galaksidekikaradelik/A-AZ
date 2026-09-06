import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
import HeroFaceVisual from "./HeroFaceVisual";

function FestivalHero() {
  const heroRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let frame = null;

    const handlePointerMove = (e) => {
      const hero = heroRef.current;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        return;
      }

      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        /*
          Hero daxilində mouse koordinatları:

          sol  = -1
          orta =  0
          sağ  = +1

          yuxarı = -1
          orta   =  0
          aşağı  = +1
        */

        const x =
          ((e.clientX - rect.left) / rect.width) * 2 - 1;

        const y =
          ((e.clientY - rect.top) / rect.height) * 2 - 1;

        setMousePosition({
          x: Math.max(-1, Math.min(1, x)),
          y: Math.max(-1, Math.min(1, y)),
        });
      });
    };

    const handlePointerLeave = (e) => {
      const hero = heroRef.current;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const outside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;

      if (outside) {
        setMousePosition({
          x: 0,
          y: 0,
        });
      }
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener(
      "pointerout",
      handlePointerLeave,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerout",
        handlePointerLeave
      );

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="festival-hero"
    >
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
            RIGHT — HUMAN / AI FACE
        ================================================= */}

        <div
          className="festival-hero-visual"
          style={{
            pointerEvents: "none",
          }}
        >
          <HeroFaceVisual
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
          />
        </div>

      </div>
    </section>
  );
}

export default FestivalHero;