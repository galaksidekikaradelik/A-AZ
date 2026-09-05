import { useReveal } from "../hooks/useReveal";
import MagneticButton from "./MagneticButton";

function FestivalCTA() {
  const [ref, visible] = useReveal();

  return (
    <section className="festival-cta">
      <div className="sprocket-row cta-sprockets" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div
        ref={ref}
        className={`festival-cta-container reveal ${visible ? "is-visible" : ""}`}
      >
        <h2>Hekayəni dünyaya göstər.</h2>

        <p>
          Filmini AIAZ Beynəlxalq Qısa Filmlər Festivalına
          təqdim et və gələcəyin kinosunun bir hissəsi ol.
        </p>

        <MagneticButton
          href="https://filmfreeway.com/aiazff"
          target="_blank"
          rel="noopener noreferrer"
          className="festival-cta-button"
        >
          Müraciət et
        </MagneticButton>
      </div>
    </section>
  );
}

export default FestivalCTA;