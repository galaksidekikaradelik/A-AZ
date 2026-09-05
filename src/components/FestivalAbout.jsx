import { useReveal } from "../hooks/useReveal";

function FestivalAbout() {
  const [ref, visible] = useReveal();

  return (
    <section className="festival-about">
      <div
        ref={ref}
        className={`festival-about-container reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="festival-about-heading">
          <h2>
            İnsan yaradıcılığı və maşın düşüncəsi.
          </h2>
        </div>

        <div className="festival-about-content">
          <p>
            <strong>AIAZ Beynəlxalq Qısa Filmlər Festivalı</strong>{" "}
            Qafqazda süni intellekt və kinonun kəsişməsinə həsr
            olunmuş ilk festivaldır. 2025-ci ildə yaradılmış və
            Bakıda keçirilən bu festival, texnologiya ilə
            yaradıcılığı bir araya gətirən unikal bir platformadır.
          </p>

          <p>
            AIAZ həm <em>Artificial Intelligence Azerbaijan</em>{" "}
            (Azərbaycan Süni İntellekti), həm də festivalın süni
            intellekt əsaslı jüri sisteminin adıdır. Bu, insan
            yaradıcılığı ilə maşın düşüncəsinin simbiyozunu ifadə edir.
          </p>

        </div>
      </div>
    </section>
  );
}

export default FestivalAbout;