import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Festival from "./pages/Festival";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import GrainOverlay from "./components/GrainOverlay";

function App() {
  return (
    <BrowserRouter>
      <GrainOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;