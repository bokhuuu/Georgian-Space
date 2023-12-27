// routing
import { Routes, Route, Navigate } from "react-router-dom";
// pages
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/HistoryPage";
import GeographyPage from "../pages/GeographyPage";
import CulturePage from "../pages/culture/CulturePage";
import ArtPage from "../pages/culture/ArtPage";
import LiteraturePage from "../pages/culture/LiteraturePage";
import PoliphonyPage from "../pages/culture/PoliphonyPage";
import CuisinePage from "../pages/CuisinePage";
import WinePage from "../pages/WinePage";
import LandmarksPage from "../pages/LandmarksPage";
import EntertainmentPage from "../pages/EntertainmentPage";

const AppNavi = () => {
  return (
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
  );
};

export default AppNavi;
