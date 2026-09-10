import { useEffect, useState } from "react";
import { PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// =========================================================
// MEDIA ASSETS
// =========================================================

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
    .filter(([path]) => path.includes(`../assets/${year}/${type}/`))
    .map(([, src]) => src);
};

const years = [2025, 2026].sort((a, b) => b - a);

// TODO: real winner videos will replace these placeholder cards once
// files are added to src/assets/<year>/video/
const placeholderVideoCount = 3;

// =========================================================
// COMPONENT
// =========================================================

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeYear, setActiveYear] = useState(years[0]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);

  const photos = getYearMedia(activeYear, "foto");
  const videos = getYearMedia(activeYear, "video");
  const hasRealVideos = videos.length > 0;

  // =======================================================
  // LIGHTBOX
  // =======================================================

  const openLightbox = (images, index) => {
    setActiveImages(images);
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    setActiveImages([]);
  };

  const showPrev = () => {
    setActiveIndex((i) => (i === 0 ? activeImages.length - 1 : i - 1));
  };

  const showNext = () => {
    setActiveIndex((i) => (i === activeImages.length - 1 ? 0 : i + 1));
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
            <span className="section-label">{t.gallery.label}</span>
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

            <div className="media-tab-content" key={activeYear}>
              {photos.length > 0 && (
                <div className="media-content-section">
                  <h2 className="media-section-title">
                    {language === "AZ" ? "Fotolar" : "Photos"}
                  </h2>

                  <div className="gallery-grid">
                    {photos.map((src, i) => (
                      <button
                        className="gallery-item"
                        key={src}
                        onClick={() => openLightbox(photos, i)}
                        aria-label={`Open image ${i + 1}`}
                      >
                        <img src={src} alt={`AIAZ ${activeYear} ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="media-content-section">
                <h2 className="media-section-title">
                  {language === "AZ" ? "Videolar" : "Videos"}
                </h2>

                <div className="videos-grid">
                  {hasRealVideos
                    ? videos.map((src, i) => {
                        const fileName = src.split("/").pop().split("?")[0];

                        return (
                          <a
                            className="video-card"
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={src}
                          >
                            <PlayCircle size={24} />

                            <div className="video-card-text">
                              <span className="video-category">
                                AIAZ {activeYear}
                              </span>
                              <h3>{fileName || `Video ${i + 1}`}</h3>
                            </div>
                          </a>
                        );
                      })
                    : Array.from({ length: placeholderVideoCount }).map(
                        (_, i) => (
                          <div className="video-card is-placeholder" key={i}>
                            <PlayCircle size={24} />

                            <div className="video-card-text">
                              <span className="video-category">
                                {language === "AZ" ? "Tezliklə" : "Coming soon"}
                              </span>
                              <h3>
                                {language === "AZ"
                                  ? "Qalib videosu"
                                  : "Winner video"}
                              </h3>
                            </div>
                          </div>
                        )
                      )}
                </div>
              </div>

              {photos.length === 0 && !hasRealVideos && (
                <p className="media-empty">
                  {language === "AZ"
                    ? "Bu il üçün media hazırlanır."
                    : "Media for this year is being prepared."}
                </p>
              )}
            </div>
          </div>
        </section>
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
            src={activeImages[activeIndex]}
            alt={`Gallery ${activeIndex + 1}`}
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

export default Gallery;