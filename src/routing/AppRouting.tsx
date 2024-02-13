import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages
// import TasteNavigation from "../navigation/TasteNavigation";
import Nature from "../pages/Nature";
import Culture from "../pages/Culture";
// import Rave from "../pages/Cuisine";
import Overview from "../pages/Journey";
import Wine from "../pages/wine/Wine";
import Cuisine from "../pages/Cuisine";
// import Art from "../../pages/taste/Art";
// import Literature from "../../pages/taste/Literature";
// import Poliphony from "../../pages/taste/Poliphony";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Overview />} />
        <Route path="nature" element={<Nature />} />
        <Route path="culture" element={<Culture />} />
        <Route path="wine" element={<Wine />} />

        {/* <Route path="/taste" element={<TasteNavigation />}>
          {/* <Route path="art" element={<Art />} />
          <Route path="literature" element={<Literature />} />
          <Route path="poliphony" element={<Poliphony />} /> */}
        {/* </Route> */}

        <Route path="cuisine" element={<Cuisine />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
