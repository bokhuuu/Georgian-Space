import { useLocation } from "react-router-dom";
// navigation
import CultureNavigation from "../../routing/culture-route-box/CultureRoute";
import { cultureRouteLinksList } from "../../routing/culture-route-box/culture-route-links-list";
// pages
import ArtPage from "./ArtPage";
import PoliphonyPage from "./PoliphonyPage";
import LiteraturePage from "./LiteraturePage";

const CulturePage = () => {
  const location = useLocation();
  return (
    <section>
      <CultureNavigation cultureRouteLinksList={cultureRouteLinksList} />
      {location.pathname === "/culture" && <div>culturePage</div>}
      {location.pathname === "/culture/art" && <ArtPage />}
      {location.pathname === "/culture/poliphony" && <PoliphonyPage />}
      {location.pathname === "/culture/literature" && <LiteraturePage />}
    </section>
  );
};

export default CulturePage;
