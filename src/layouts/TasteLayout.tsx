import { useLocation } from "react-router-dom";
// pages
import Art from "../pages/taste/Art";
import Poliphony from "../pages/taste/Poliphony";
import Literature from "../pages/taste/Literature";
import Taste from "../pages/taste/Taste";
import TasteNav from "../components/navigation/TasteNav";

const TasteLayout = () => {
  const location = useLocation();

  return (
    <nav>
      <TasteNav />
      {location.pathname === "/taste" && <Taste />}
      {location.pathname === "/taste/art" && <Art />}
      {location.pathname === "/taste/poliphony" && <Poliphony />}
      {location.pathname === "/taste/literature" && <Literature />}
    </nav>
  );
};

export default TasteLayout;
