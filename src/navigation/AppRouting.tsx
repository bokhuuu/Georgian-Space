import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Journey from "../pages/Journey";
import Wine from "../pages/wine/Wine";
import Food from "../pages/food/Food";
import Locations from "../pages/locations/Locations";

const AppRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" index element={<Journey />} />
        <Route path="wine" element={<Wine />} />
        <Route path="food" element={<Food />} />
        <Route path="locations" element={<Locations />} />

        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouting;
