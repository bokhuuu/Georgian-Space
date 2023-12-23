import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routing
import MainNavigation from "./routing/main-route-box/MainRoute";
import { mainRouteLinksList } from "./routing/main-route-box/main-route-links-list";
// translation
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher";
import { languageList } from "./translation/languageList";
// pages
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import GeographyPage from "./pages/GeographyPage";
import CulturePage from "./pages/culture/CulturePage";
import ArtPage from "./pages/culture/ArtPage";
import LiteraturePage from "./pages/culture/LiteraturePage";
import PoliphonyPage from "./pages/culture/PoliphonyPage";
import CuisinePage from "./pages/CuisinePage";
import WinePage from "./pages/WinePage";
import LandmarksPage from "./pages/LandmarksPage";
import EntertainmentPage from "./pages/EntertainmentPage";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <BrowserRouter>
        <header style={{ background: "rgba(54, 63, 143, 0.37)" }}>
          {t("header")}
          <LanguageSwitcher languageList={languageList} />
        </header>
        <MainNavigation mainRouteLinksList={mainRouteLinksList} />

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
    </>
  );
};

export default App;
