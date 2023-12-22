import { useLocation } from "react-router-dom";
//components + links
import MainNavigation from "../nav/MainNavigation";
import { cultureNavLinks } from "../nav/nav-links.ts/culture-nav-links";
// pages
import CulturePage from "../pages/CulturePage";
import ArtPage from "../pages/culture/ArtPage";
import PoliphonyPage from "../pages/culture/PoliphonyPage";
import LiteraturePage from "../pages/culture/LiteraturePage";

const CultureLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/culture" && (
        <>
          <CulturePage />
          <MainNavigation MainNavLinks={cultureNavLinks} />
        </>
      )}
      <main>
        {location.pathname === "/culture/art" && <ArtPage />}
        {location.pathname === "/culture/poliphony" && <PoliphonyPage />}
        {location.pathname === "/culture/literature" && <LiteraturePage />}
      </main>
    </>
  );
};

export default CultureLayout;
