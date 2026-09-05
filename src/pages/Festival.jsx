import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FestivalHero from "../components/FestivalHero";
import FestivalAbout from "../components/FestivalAbout";
import FestivalCategories from "../components/FestivalCategories";
import FestivalRules from "../components/FestivalRules";
import FestivalAwards from "../components/FestivalAwards";
import FestivalCTA from "../components/FestivalCTA";

function Festival() {
  return (
    <>
      <Navbar />

      <main>
        <FestivalHero />
        <FestivalAbout />
        <FestivalCategories />
        <FestivalRules />
        <FestivalAwards />
        <FestivalCTA />
      </main>

      <Footer />
    </>
  );
}

export default Festival;