import ThemeSelector from "../themes/ThemeSelector.tsx";
import { Variants, motion } from "framer-motion";
import formIcon from "../assets/icons/formIcon.svg";
import themeIcon from "../assets/icons/themeIcon.svg";
import WeatherSidebarToggle from "../weather/WeatherSidebarToggle.tsx";

const CommandBarVariants: Variants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: 1,
      repeatType: "mirror",
    },
  },
};

const CommandBar = () => {
  const { toggleTheme } = ThemeSelector();

  return (
    <div className="container d-flex align-items-center justify-content-end gap-3 gap-md-4 gap-lg-5 ms-md-5">
      <WeatherSidebarToggle />

      <motion.button
        type="button"
        className="icon-btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        variants={CommandBarVariants}
        whileHover="hover"
        style={{
          backgroundImage: `url(${formIcon})`,
        }}
      ></motion.button>
      <motion.button
        className="icon-btn"
        variants={CommandBarVariants}
        whileHover="hover"
        onClick={toggleTheme}
        style={{
          backgroundImage: `url(${themeIcon})`,
        }}
      ></motion.button>
    </div>
  );
};

export default CommandBar;
