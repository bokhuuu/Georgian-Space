import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages
import Home from "../pages/Home";
import History from "../pages/History";
import Geography from "../pages/Geography";
import CultureLayout from "../layouts/CultureLayout";
import Art from "../pages/culture/Art";
import Literature from "../pages/culture/Literature";
import Poliphony from "../pages/culture/Poliphony";
import Cuisine from "../pages/Cuisine";
import Wine from "../pages/Wine";
import Landmarks from "../pages/Landmarks";
import Nightlife from "../pages/Nightlife";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="geography" element={<Geography />} />

        <Route path="/culture" element={<CultureLayout />}>
          <Route path="art" element={<Art />} />
          <Route path="literature" element={<Literature />} />
          <Route path="poliphony" element={<Poliphony />} />
        </Route>

        <Route path="cuisine" element={<Cuisine />} />
        <Route path="wine" element={<Wine />} />
        <Route path="landmarks" element={<Landmarks />} />
        <Route path="nightlife" element={<Nightlife />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
