import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Festival from "./pages/Festival";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";

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
        <Route path="/media" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;