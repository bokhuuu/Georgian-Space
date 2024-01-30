import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Explore from "../pages/Explore";
import TasteNavigation from "../navigation/TasteNavigation";
import Unwind from "../pages/Unwind";
// import Art from "../../pages/taste/Art";
// import Literature from "../../pages/taste/Literature";
// import Poliphony from "../../pages/taste/Poliphony";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="explore" element={<Explore />} />

        <Route path="/taste" element={<TasteNavigation />}>
          {/* <Route path="art" element={<Art />} />
          <Route path="literature" element={<Literature />} />
          <Route path="poliphony" element={<Poliphony />} /> */}
        </Route>

        <Route path="unwind" element={<Unwind />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
