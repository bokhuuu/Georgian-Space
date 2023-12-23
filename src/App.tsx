import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// components + links
import MainNavigation from "./components/navigation/navs/MainNav";
import { mainNavLinks } from "./components/navigation/nav-links.ts/main-nav-links";
// pages
import HomePage from "./components/pages/HomePage";
import HistoryPage from "./components/pages/HistoryPage";
import GeographyPage from "./components/pages/GeographyPage";
import CulturePage from "./components/pages/culture/CulturePage";
import ArtPage from "./components/pages/culture/ArtPage";
import LiteraturePage from "./components/pages/culture/LiteraturePage";
import PoliphonyPage from "./components/pages/culture/PoliphonyPage";
import CuisinePage from "./components/pages/CuisinePage";
import WinePage from "./components/pages/WinePage";
import LandmarksPage from "./components/pages/LandmarksPage";
import EntertainmentPage from "./components/pages/EntertainmentPage";

const App = () => {
  return (
    <header>
      <BrowserRouter>
        <MainNavigation MainNavLinks={mainNavLinks} />

        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="geography" element={<GeographyPage />} />

          <Route path="/culture" element={<CulturePage />}>
            <Route path="art" element={<ArtPage />} />
            <Route path="literature" element={<LiteraturePage />} />
            <Route path="poliphony" element={<PoliphonyPage />} />
          </Route>

          <Route path="cuisine" element={<CuisinePage />} />
          <Route path="wine" element={<WinePage />} />
          <Route path="landmarks" element={<LandmarksPage />} />
          <Route path="entertainment" element={<EntertainmentPage />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default App;
