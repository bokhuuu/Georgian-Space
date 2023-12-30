import { useLocation } from "react-router-dom";
import CultureNav from "../components/nav/CultureNav";
// pages
import Art from "../pages/culture/Art";
import Poliphony from "../pages/culture/Poliphony";
import Literature from "../pages/culture/Literature";
import Culture from "../pages/culture/Culture";

const CultureLayout = () => {
  const location = useLocation();

  return (
    <nav>
      <CultureNav />
      {location.pathname === "/culture" && <Culture />}
      {location.pathname === "/culture/art" && <Art />}
      {location.pathname === "/culture/poliphony" && <Poliphony />}
      {location.pathname === "/culture/literature" && <Literature />}
    </nav>
  );
};

export default CultureLayout;
