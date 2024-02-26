import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages
import Culture from "../pages/Culture";
import Overview from "../pages/Journey";
import Wine from "../pages/wine/Wine";
import Cuisine from "../pages/cuisine/Cuisine";
import Nature from "../pages/nature/Nature";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Overview />} />
        <Route path="culture" element={<Culture />} />
        <Route path="wine" element={<Wine />} />
        <Route path="cuisine" element={<Cuisine />} />
        <Route path="nature" element={<Nature />}></Route>

        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
