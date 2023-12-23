import { useLocation } from "react-router-dom";
// components and links
import CultureNavigation from "../../navigation/navs/CultureNav";
import { cultureNavLinks } from "../../navigation/nav-links.ts/culture-nav-links";
// pages
import ArtPage from "./ArtPage";
import PoliphonyPage from "./PoliphonyPage";
import LiteraturePage from "./LiteraturePage";

const CulturePage = () => {
  const location = useLocation();
  return (
    <section>
      <CultureNavigation CultureNavLinks={cultureNavLinks} />
      {location.pathname === "/culture" && <div>culturePage</div>}
      {location.pathname === "/culture/art" && <ArtPage />}
      {location.pathname === "/culture/poliphony" && <PoliphonyPage />}
      {location.pathname === "/culture/literature" && <LiteraturePage />}
    </section>
  );
};

export default CulturePage;
