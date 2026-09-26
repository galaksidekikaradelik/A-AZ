import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Festival from "./pages/Festival";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import AboutUs from "./pages/Aboutus";
import Jury from "./pages/Jury";
import Gallery from "./pages/Gallery";
import MediaYear from "./pages/MediaYear";
import Contact from "./pages/Contact";
import Program from "./pages/Program";

import GrainOverlay from "./components/GrainOverlay";
import FilmStripEdges from "./components/FilmStripEdges";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <GrainOverlay />
      <FilmStripEdges />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/program" element={<Program />} />

        <Route path="/media" element={<Gallery />} />
        <Route path="/media/:year" element={<MediaYear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;