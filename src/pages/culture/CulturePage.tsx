import { useLocation } from "react-router-dom";
// navigation
import CultureNavi from "../../navigation/culture-navi/CultureNavi";
import { cultureNaviLinkList } from "../../navigation/culture-navi/culture-navi-link-list";
// pages
import ArtPage from "./ArtPage";
import PoliphonyPage from "./PoliphonyPage";
import LiteraturePage from "./LiteraturePage";

const CulturePage = () => {
  const location = useLocation();

  return (
    <nav>
      <CultureNavi cultureNaviLinkList={cultureNaviLinkList} />
      {location.pathname === "/culture" && <div>culturePage</div>}
      {location.pathname === "/culture/art" && <ArtPage />}
      {location.pathname === "/culture/poliphony" && <PoliphonyPage />}
      {location.pathname === "/culture/literature" && <LiteraturePage />}
    </nav>
  );
};

export default CulturePage;
