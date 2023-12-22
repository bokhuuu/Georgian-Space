import { useLocation } from "react-router-dom";
// components and links
import CultureNavigation from "../../routing/navs/CultureNav";
import { cultureNavLinks } from "../../routing/nav-links.ts/culture-nav-links";
// pages
import ArtPage from "./ArtPage";
import PoliphonyPage from "./PoliphonyPage";
import LiteraturePage from "./LiteraturePage";

const CulturePage = () => {
  const location = useLocation();
  return (
    <>
      <CultureNavigation CultureNavLinks={cultureNavLinks} />
      {location.pathname === "/culture" && <div>culturePage</div>}
      {location.pathname === "/culture/art" && <ArtPage />}
      {location.pathname === "/culture/poliphony" && <PoliphonyPage />}
      {location.pathname === "/culture/literature" && <LiteraturePage />}
    </>
  );
};

export default CulturePage;
