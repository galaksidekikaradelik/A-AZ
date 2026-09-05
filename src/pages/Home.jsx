import Navbar from "../components/Navbar";
import FilmSection from "../components/FilmSection";
import NewsSection from "../components/NewsSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>AI FILM FESTIVAL</h1>
          </div>
        </section>

        <FilmSection />

        <NewsSection />

        <PartnersSection />

      </main>

      <Footer />
    </>
  );
}

export default Home;
