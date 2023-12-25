// routing
import { useLocation } from "react-router-dom";
// navigation
import CultureNav from "../../routing/culture-nav/CultureNav";
import { cultureNavLinksList } from "../../routing/culture-nav/culture-nav-links-list";
// pages
import ArtPage from "./ArtPage";
import PoliphonyPage from "./PoliphonyPage";
import LiteraturePage from "./LiteraturePage";

const CulturePage = () => {
  const location = useLocation();

  return (
    <nav>
      <CultureNav cultureNavLinksList={cultureNavLinksList} />
      {location.pathname === "/culture" && <div>culturePage</div>}
      {location.pathname === "/culture/art" && <ArtPage />}
      {location.pathname === "/culture/poliphony" && <PoliphonyPage />}
      {location.pathname === "/culture/literature" && <LiteraturePage />}
    </nav>
  );
};

export default CulturePage;
