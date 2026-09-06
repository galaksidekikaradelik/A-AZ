import { useEffect, useState } from "react";
import { PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// TODO: replace with the real gallery/media assets later
const images = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  return new URL(`../assets/${num}.jpg`, import.meta.url).href;
});

// TODO: real video links/titles will replace these placeholders
const videos = [
  {
    category: { AZ: "Keçən ilin qalibi", EN: "Last year's winner" },
    title: { AZ: "Qısa film adı", EN: "Short film title" },
    url: "#",
  },
  {
    category: { AZ: "Xüsusi mükafat", EN: "Special award" },
    title: { AZ: "Qısa film adı", EN: "Short film title" },
    url: "#",
  },
  {
    category: { AZ: "Festival highlight", EN: "Festival highlight" },
    title: { AZ: "AIAZ 2025 xülasə videosu", EN: "AIAZ 2025 recap video" },
    url: "#",
  },
];

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const showNext = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

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
            <div className="gallery-grid">
              {images.map((src, i) => (
                <button
                  className="gallery-item"
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Open image ${i + 1}`}
                >
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="videos-section">
          <div className="section-container">
            <h2>{t.gallery.videosTitle}</h2>

            <div className="videos-grid">
              {videos.map((video, i) => (
                <a
                  className="video-card"
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                >
                  <PlayCircle size={22} />

                  <div className="video-card-text">
                    <span className="video-category">
                      {video.category[language]}
                    </span>
                    <h3>{video.title[language]}</h3>
                  </div>
                </a>
              ))}
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
            src={images[activeIndex]}
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