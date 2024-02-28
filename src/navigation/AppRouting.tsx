import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages
// import Culture from "../pages/Culture";
import Overview from "../pages/Journey";
import Wine from "../pages/wine/Wine";
import Food from "../pages/food/Food";
import Locations from "../pages/locations/Locations";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Overview />} />
        {/* <Route path="culture" element={<Culture />} /> */}
        <Route path="wine" element={<Wine />} />
        <Route path="food" element={<Food />} />
        <Route path="locations" element={<Locations />}></Route>

        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
