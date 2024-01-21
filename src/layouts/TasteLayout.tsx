import { useLocation } from "react-router-dom";
import TasteNavigation from "../navigation/TasteNavigation";
// pages
import Taste from "../pages/taste/Taste";
import Art from "../pages/taste/Art";
import Poliphony from "../pages/taste/Poliphony";
import Literature from "../pages/taste/Literature";

const TasteLayout = () => {
  const location = useLocation();

  return (
    <nav>
      <TasteNavigation />
      {location.pathname === "/taste" && <Taste />}
      {location.pathname === "/taste/art" && <Art />}
      {location.pathname === "/taste/poliphony" && <Poliphony />}
      {location.pathname === "/taste/literature" && <Literature />}
    </nav>
  );
};

export default TasteLayout;
