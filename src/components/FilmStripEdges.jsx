// Mount this ONCE near the root of your app, alongside GrainOverlay —
// NOT inside FestivalHero or any single page. It's meant to be a
// site-wide identity element (Home, About, News, Festival — all of them).
//
//   import FilmStripEdges from "./FilmStripEdges";
//
//   function App() {
//     return (
//       <BrowserRouter>
//         <GrainOverlay />
//         <FilmStripEdges />
//         <Routes>...</Routes>
//       </BrowserRouter>
//     );
//   }

function FilmStripEdges() {
  return (
    <>
      <div className="film-strip film-strip--left" aria-hidden="true" />
      <div className="film-strip film-strip--right" aria-hidden="true" />
    </>
  );
}

export default FilmStripEdges;