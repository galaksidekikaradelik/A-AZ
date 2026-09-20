import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Winners from "../components/Winners";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const photoFiles = import.meta.glob("../assets/*/foto/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function MediaYear() {
  const { year } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  const [activeIndex, setActiveIndex] = useState(null);

  const images = Object.entries(photoFiles)
    .filter(([path]) => path.includes(`../assets/${year}/foto/`))
    .map(([, src]) => src);

  const hasWinners = year === "2025";

  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const showNext = () => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <Link to="/media" className="media-back">
              <ArrowLeft size={18} />
              <span>{t.gallery.title}</span>
            </Link>

            <span className="section-label">AIAZ</span>
            <h1>{year}</h1>
          </div>
        </section>

        <section className="gallery-page">
          <div className="section-container">
            <h2 className="media-section-title">
              {language === "AZ" ? "Fotolar" : "Photos"}
            </h2>

            {images.length > 0 ? (
              <div className="gallery-grid">
                {images.map((src, i) => (
                  <button
                    className="gallery-item"
                    key={src}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img src={src} alt={`AIAZ ${year} ${i + 1}`} />
                  </button>
                ))}
              </div>
            ) : (
              <p>
                {language === "AZ"
                  ? "Bu il üçün foto yoxdur."
                  : "There are no photos for this year."}
              </p>
            )}
          </div>
        </section>

        {hasWinners && (
          <section className="videos-section">
            <div className="section-container">
              <Winners />
            </div>
          </section>
        )}
      </main>

      {activeIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={images[activeIndex]}
            alt={`AIAZ ${year} ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}

export default MediaYear;