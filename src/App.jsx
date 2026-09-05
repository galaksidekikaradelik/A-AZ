import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Festival from "./pages/Festival";
import GrainOverlay from "./components/GrainOverlay";

function App() {
  return (
    <BrowserRouter>
      <GrainOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<Festival />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;