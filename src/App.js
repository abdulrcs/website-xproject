import { Home, About, BmcCompetition, EssayCompetition, PhotoCompetition, UiuxCompetition, BootcampUiux, WebinarBmc, TechSymphony } from "../src/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-screen">
      <Router>
        <Routes>
          {/* Default */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* Championship */}
          <Route path="/BMC-Competition" element={<BmcCompetition />} />
          <Route path="/Essay-Competition" element={<EssayCompetition />} />
          <Route path="/Photo-Competition" element={<PhotoCompetition />} />
          <Route path="/UIUX-Competition" element={<UiuxCompetition />} />
          {/* Tech Genius */}
          <Route path="/Bootcamp-UIUX" element={<BootcampUiux />} />
          <Route path="/Webinar-BMC" element={<WebinarBmc />} />
          {/* Techno Symphony */}
          <Route path="/Techno-Symphony" element={<TechSymphony />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
