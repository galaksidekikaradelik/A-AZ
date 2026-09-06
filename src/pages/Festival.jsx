import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FestivalHero from "../components/FestivalHero";
import FestivalCategories from "../components/FestivalCategories";
import FestivalRules from "../components/FestivalRules";
import FestivalAwards from "../components/FestivalAwards";
import FestivalEffects from "../components/FestivalEffects";

function Festival() {
  return (
    <>
      <Navbar />

      <main className="festival-page">
        <div
          className="festival-cursor-glow"
          aria-hidden="true"
        />

        <div
          className="festival-scanlines"
          aria-hidden="true"
        />

        <FestivalEffects />
        <FestivalHero />

        <FestivalCategories />

        <FestivalRules />

        <FestivalAwards />

      </main>

      <Footer />
    </>
  );
}

export default Festival;