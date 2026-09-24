import { useEffect, useState } from "react";
import {
  PlayCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Winners from "../components/Winners";

import { useLanguage } from "../context/LanguageContext";

const mediaFiles = import.meta.glob(
  "../assets/*/{foto,video}/*.{jpg,jpeg,png,webp,mp4,webm,mov}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getYearMedia = (year, type) => {
  return Object.entries(mediaFiles)
    .filter(([path]) =>
      path.includes(`../assets/${year}/${type}/`)
    )
    .map(([, src]) => src);
};

const years = [2025, 2026].sort((a, b) => b - a);

function Gallery() {
  const { t } = useLanguage();

  const [activeYear, setActiveYear] = useState(years[0]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);

  const photos = getYearMedia(activeYear, "foto");
  const hasWinners = activeYear === 2025;

  const openLightbox = (images, index) => {
    setActiveImages(images);
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    setActiveImages([]);
  };

  const showPrev = () => {
    setActiveIndex((i) =>
      i === 0 ? activeImages.length - 1 : i - 1
    );
  };

  const showNext = () => {
    setActiveIndex((i) =>
      i === activeImages.length - 1 ? 0 : i + 1
    );
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
  }, [activeIndex, activeImages]);

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <h1>{t.gallery.title}</h1>
          </div>
        </section>

        <section className="gallery-page">
          <div className="section-container">
            <div className="media-tabs" role="tablist">
              {years.map((year) => (
                <button
                  key={year}
                  role="tab"
                  aria-selected={activeYear === year}
                  className={`media-tab ${
                    activeYear === year ? "is-active" : ""
                  }`}
                  onClick={() => setActiveYear(year)}
                >
                  AIAZ {year}
                </button>
              ))}
            </div>

            <div
              className="media-tab-content"
              key={activeYear}
            >
              {photos.length > 0 && (
                <div className="media-content-section">
                  <h2 className="media-section-title">
                    {t.gallery.photos}
                  </h2>

                  <div className="gallery-grid">
                    {photos.map((src, i) => (
                      <button
                        className="gallery-item"
                        key={src}
                        onClick={() =>
                          openLightbox(photos, i)
                        }
                        aria-label={`${t.gallery.openImage} ${
                          i + 1
                        }`}
                      >
                        <img
                          src={src}
                          alt={`AIAZ ${activeYear} ${i + 1}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hasWinners ? (
                <Winners />
              ) : (
                <div className="media-content-section">
                  <h2 className="media-section-title">
                    {t.gallery.videos}
                  </h2>

                  <div className="videos-grid">
                    <div className="video-card is-placeholder">
                      <PlayCircle size={24} />

                      <div className="video-card-text">
                        <span className="video-category">
                          {t.gallery.comingSoon}
                        </span>

                        <h3>{t.gallery.winnerVideo}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {photos.length === 0 && !hasWinners && (
                <p className="media-empty">
                  {t.gallery.mediaPreparing}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {activeIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label={t.gallery.close}
          >
            <X size={28} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label={t.gallery.previousImage}
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={activeImages[activeIndex]}
            alt={`${t.gallery.galleryImage} ${
              activeIndex + 1
            }`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label={t.gallery.nextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Gallery;