import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages
import Home from "../../pages/Home";
import Discovery from "../../pages/Discovery";
import Explore from "../../pages/Explore";
// import Art from "../../pages/taste/Art";
// import Literature from "../../pages/taste/Literature";
// import Poliphony from "../../pages/taste/Poliphony";
import Leisure from "../../pages/Leisure";
import Wellness from "../../pages/Wellness";
import TasteNav from "../naviagtion/TasteNav";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Home />} />
        <Route path="discovery" element={<Discovery />} />
        <Route path="explore" element={<Explore />} />

        <Route path="/taste" element={<TasteNav />}>
          {/* <Route path="art" element={<Art />} />
          <Route path="literature" element={<Literature />} />
          <Route path="poliphony" element={<Poliphony />} /> */}
        </Route>

        <Route path="leisure" element={<Leisure />} />
        <Route path="wellness" element={<Wellness />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
