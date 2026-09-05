import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// TODO: replace with the real gallery/media assets later
const images = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  return new URL(`../assets/${num}.jpg`, import.meta.url).href;
});

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

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
                <div className="gallery-item" key={i}>
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Gallery;